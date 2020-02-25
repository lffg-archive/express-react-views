import { Request, Response } from 'express';
import React, { ReactNode, useContext } from 'react';
import ReactDOMServer from 'react-dom/server';

interface ExpressContext {
  req: Request;
  res: Response;
}

export const RendererContext = React.createContext<ExpressContext | null>(null);

interface RendererProviderProps {
  expressContext: ExpressContext;
  children: ReactNode;
}

export function RendererProvider(props: RendererProviderProps) {
  return (
    <RendererContext.Provider value={props.expressContext}>
      {props.children}
    </RendererContext.Provider>
  );
}

export function useExpressContext() {
  const expressContext = useContext(RendererContext);
  if (!expressContext) {
    throw new Error('Invalid call of `useReq`. Outside of context provider.');
  }
  return expressContext;
}

export function render(ctx: ExpressContext, component: ReactNode) {
  return ReactDOMServer.renderToStaticNodeStream(
    <RendererProvider expressContext={ctx}>{component}</RendererProvider>
  );
}
