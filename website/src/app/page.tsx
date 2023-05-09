'use client';
import Home from 'rmwc/docs/views/home/index';
import 'rmwc/docs/styles/index';
import 'rmwc/styles';
import 'material-components-web/dist/material-components-web.min.css';
import 'rmwc/docs/views/home/home.global.css';
import './globals.css';
import { RMWCProvider } from '../../../src/provider';

export default function Page() {
  return (
    <RMWCProvider>
      <Home />
    </RMWCProvider>
  );
}
