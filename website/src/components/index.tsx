import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const DocWrapper: React.FC<Props> = ({ children }) => (
  <div style={{ display: 'flex', gap: 10 }}>{children}</div>
);
