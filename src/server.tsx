import express from 'express';
import React from 'react';
import { render } from './renderer';
import { Index } from './views/Index';

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  render({ req, res }, <Index />).pipe(res);
});

app.listen(port, () => console.log(`Server at http://localhost:${port}`));
