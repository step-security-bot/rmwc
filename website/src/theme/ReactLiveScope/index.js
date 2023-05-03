import React from 'react';
import { Button } from '@rmwc/button';
import { CircularProgress } from '@rmwc/circular-progress';
// Add react-live imports you need here
const ReactLiveScope = {
  React,
  Button,
  CircularProgress,
  ...React,
};
export default ReactLiveScope;
