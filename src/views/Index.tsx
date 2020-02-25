import React from 'react';
import { useReq } from '../renderer';

export function Index() {
  const req = useReq();

  return (
    <div>
      <h1>Hello, world!</h1>
      <pre>
        Method: {req.method} {'\n'}
        Path: {req.path}
      </pre>
      <hr />
      <p>This page was rendered at {new Date().toUTCString()}</p>
    </div>
  );
}
