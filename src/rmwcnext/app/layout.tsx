'use client';
import React from 'react';
import './styles';
// import './styles.css';
import { BrowserRouter } from 'react-router-dom';

function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <body>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          {children}
        </BrowserRouter>
      </body>
    </html>
  );
}

export default RootLayout;
