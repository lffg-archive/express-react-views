import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Index } from './views/Index';

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  const stream = ReactDOMServer.renderToStaticNodeStream(
    <Index method={req.method} path={req.path} />
  );

  stream.pipe(res);
});

app.listen(port, () => console.log(`Server at http://localhost:${port}`));
