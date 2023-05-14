'use client';

import React from 'react';
import { Highlight } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

interface Props {
  children: any;
  className?: string;
}

export const CodeBlock: React.FC<Props> = ({ children, className }) => {
  const tags = className?.replace(/language-/, '').split('-');
  const language = tags?.[0] ?? '';
  const live = tags?.[1] ?? false;

  if (live) {
    return (
      <div style={{ marginTop: '40px' }}>
        <LiveProvider code={children}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      </div>
    );
  }

  return (
    <Highlight code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
