import React from 'react';

interface Props {
  method: string;
  path: string;
}

export function Index(props: Props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <hr />
      <p>This page was rendered at {new Date().toUTCString()}</p>
    </div>
  );
}
