// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as RMWC from '@rmwc/types';
import { ChipProps, ChipHTMLProps, ChipOnInteractionEventT, ChipApi } from './';
import { useFoundation } from '@rmwc/base';
import {
  MDCChipFoundation,
  MDCChipAdapter,
  MDCChipActionType,
  MDCChipActionFocusBehavior,
  MDCChipAction,
  MDCChipAnimation
} from '@material/chips';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { ActionApi } from '../action';
import { useChipContext } from '../chip-context';

export const useChipFoundation = (props: ChipProps & ChipHTMLProps) => {
  const trailingAction = useRef<MDCChipAction | null>(null);
  const setTrailingAction = (api: MDCChipAction | null) => {
    trailingAction.current = api;
  };

  const primaryAction = useRef<MDCChipAction | null>(null);
  const setPrimaryAction = (api: MDCChipAction | null) => {
    primaryAction.current = api;
  };

  const actions = new Map<MDCChipActionType, MDCChipAction | null>();
  const actionsRef =
    useRef<Map<MDCChipActionType, MDCChipAction | null>>(actions);

  const chipContextApi = useChipContext();

  const foundationWithElements = useFoundation({
    props,
    elements: {
      rootEl: true,
      trailingIconEl: true,
      trailingActionEl: true,
      primaryActionEl: true
    },
    foundation: ({
      rootEl,
      emit,
      getProps,
      trailingActionEl,
      primaryActionEl
    }) => {
      const rootHTML = rootEl.ref as HTMLElement;

      return new MDCChipFoundation({
        addClass: (className) => {
          rootEl.addClass(className);
        },
        emitEvent: (eventName, eventDetail) => {
          emit(eventName, eventDetail, true);
        },
        getActions: () => {
          const actions: MDCChipActionType[] = [];
          for (const key of actions) {
            actions.push(key);
          }
          return actions;
        },
        getAttribute: (attrName) => rootEl.ref?.getAttribute(attrName),
        getElementID: () => {
          return rootEl.ref?.id;
        },
        getOffsetWidth: () => rootHTML.offsetWidth,
        hasClass: (className) => rootEl.hasClass(className),
        isActionSelectable: (actionType: MDCChipActionType) => {
          const action = actionsRef.current.get(actionType);
          if (action) {
            return action.isSelectable();
          }
          return false;
        },
        isActionSelected: (actionType: MDCChipActionType) => {
          const action = actionsRef.current.get(actionType);
          if (action) {
            return action.isSelected();
          }
          return false;
        },
        isActionFocusable: (actionType: MDCChipActionType) => {
          const action = actionsRef.current.get(actionType);
          if (action) {
            return action.isFocusable();
          }
          return false;
        },
        isActionDisabled: (actionType: MDCChipActionType) => {
          const action = actionsRef.current.get(actionType);
          if (action) {
            return action.isDisabled();
          }
          return false;
        },
        isRTL: () => {
          return rootEl.ref
            ? window
                .getComputedStyle(rootEl.ref)
                .getPropertyValue('direction') === 'rtl'
            : false;
        },
        removeClass: (className) => rootEl.removeClass(className),
        setActionDisabled: (
          actionType: MDCChipActionType,
          isDisabled: boolean
        ) => {
          const action = actionsRef.current.get(actionType);
          if (action) {
            action.setDisabled(isDisabled);
          }
        },
        setActionFocus: (
          actionType: MDCChipActionType,
          behavior: MDCChipActionFocusBehavior
        ) => {
          const action = actionsRef.current.get(actionType);
          if (action) {
            action.setFocus(behavior);
          }
        },
        setActionSelected: (
          actionType: MDCChipActionType,
          isSelected: boolean
        ) => {
          const action = actionsRef.current.get(actionType);
          if (action) {
            action.setSelected(isSelected);
          }
        },
        setStyleProperty: (propertyName, value) => {
          rootEl.setStyle(propertyName, value);
        }
      } as MDCChipAdapter);
    }
  });

  const { rootEl, foundation, trailingActionEl } = foundationWithElements;

  const { onClick, onKeyDown, onInteraction } = props;

  const setAction = (action: ActionApi) => {
    switch (action.actionType) {
      case MDCChipActionType.TRAILING:
        return trailingAction.current;
      case MDCChipActionType.PRIMARY:
        return primaryAction.current;
      default:
        return null;
    }
  };

  const registerAction = (action: ActionApi) => {
    actionsRef.current.set(action.actionType, setAction(action));
  };

  const unregisterAction = (action: ActionApi) => {
    // actionsRef.current.splice(actionsRef.current.indexOf(action), 1);
    actionsRef.current.delete(action.actionType);
  };

  const chipApi = useMemo<ChipApi>(() => {
    return {
      getIndex: () =>
        rootEl.ref?.parentElement
          ? Array.from(rootEl.ref.parentElement.children).indexOf(rootEl.ref)
          : -1,
      getActions: () => foundation.getActions(),
      getElementID: () => foundation.getElementID(),
      isActionFocusable: (action: MDCChipActionType) =>
        foundation.isActionFocusable(action),
      isActionSelectable: (action: MDCChipActionType) =>
        foundation.isActionFocusable(action),
      isActionSelected: (action: MDCChipActionType) =>
        foundation.isActionSelectable(action),
      destroy: () => {},
      remove: () => {
        const parent = rootEl.ref?.parentNode;
        if (parent !== null || parent !== undefined) {
          rootEl.ref && parent?.removeChild(rootEl.ref);
        }
      },
      setActionFocus: (
        action: MDCChipActionType,
        focus: MDCChipActionFocusBehavior
      ) => foundation.setActionFocus(action, focus),
      setActionSelected: (action: MDCChipActionType, isSelected: boolean) =>
        foundation.setActionSelected(action, isSelected),
      startAnimation: (animation: MDCChipAnimation) =>
        foundation.startAnimation(animation)
    };
  }, [rootEl.ref, foundation]);

  useEffect(() => {
    chipContextApi.registerChip(chipApi);

    return () => {
      chipContextApi.unregisterChip(chipApi);
    };
  }, [chipContextApi, chipApi]);

  const handleInteraction = useCallback(
    (
      evt: React.MouseEvent &
        React.KeyboardEvent &
        MouseEvent &
        KeyboardEvent &
        ChipOnInteractionEventT
    ) => {
      evt.type === 'click' && onClick?.(evt as any);
      evt.type === 'keydown' && onKeyDown?.(evt as any);
      onInteraction?.(evt);
      return foundation.handleActionInteraction(evt as any);
    },
    [foundation, onClick, onKeyDown, onInteraction]
  );

  rootEl.setProp('onClick', handleInteraction, true);
  rootEl.setProp('onKeyDown', handleInteraction, true);

  const remove = (evt: any) => {
    props.onRemove?.(evt);
    const parent = rootEl.ref?.parentNode;
    if (parent !== null || parent !== undefined) {
      rootEl.ref && parent?.removeChild(rootEl.ref);
    }
  };

  trailingActionEl.setProp('onClick', remove, true);

  return {
    setTrailingAction,
    ...foundationWithElements,
    registerAction,
    unregisterAction,
    setPrimaryAction
  };
};
