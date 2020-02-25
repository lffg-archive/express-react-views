import React from 'react';
import { useExpressContext } from '../renderer';

export function Index() {
  const { req, res } = useExpressContext();

  res.setHeader('X-Set-By-React', 'true');

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
