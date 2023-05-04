import React from 'react';
import { Button } from '@rmwc/button';
import { CircularProgress } from '@rmwc/circular-progress';
import { DocWrapper} from '@site/src/components'

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  Button,
  CircularProgress,
  DocWrapper,
  ...React,
};

export default ReactLiveScope;
