import React from 'react';
import {Avatar, AvatarGroup, AvatarCount, } from '@rmwc/avatar';
import { TextField } from '@rmwc/textfield';
import { Chip } from '@rmwc/chip';
import { Badge, BadgeAnchor } from '@rmwc/badge';
import { IconButton } from '@rmwc/icon-button';
import { Button } from '@rmwc/button';
import { CircularProgress } from '@rmwc/circular-progress';
import { DocWrapper} from '@site/src/components'

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  Avatar,
  AvatarGroup, 
  AvatarCount,
  Badge,
  BadgeAnchor,
  Chip,
  TextField,
  Button,
  IconButton,
  CircularProgress,
  DocWrapper,
  ...React,
};

export default ReactLiveScope;
