import React, { useMemo } from 'react';

export const Test = ({ children }: { children: React.ReactNode }) => {
  const colors = useMemo(() => {
    return '';
  }, []);

  return <div>test</div>;
};
