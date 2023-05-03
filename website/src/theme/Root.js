import React from 'react';
import { RMWCProvider} from '../../../src/provider';
import 'rmwc/styles';
require('rmwc/docs/styles/docs.css')
require('material-components-web/dist/material-components-web.min.css')

// Default implementation, that you can customize
export default function Root({children}) {
  return <RMWCProvider>{children}</RMWCProvider>;
}