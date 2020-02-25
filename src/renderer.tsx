import { Request, Response } from 'express';
import React, { ReactNode, useContext } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Index } from './views/Index';

export const RendererContext = React.createContext<Request | null>(null);

interface RendererProviderProps {
  req: Request;
  children: ReactNode;
}

export function RendererProvider(props: RendererProviderProps) {
  return (
    <RendererContext.Provider value={props.req}>
      {props.children}
    </RendererContext.Provider>
  );
}

export function useReq() {
  const req = useContext(RendererContext);
  if (!req) {
    throw new Error('Invalid call of `useReq`. Outside of context provider.');
  }
  return req;
}

export function render(req: Request, component: ReactNode) {
  return ReactDOMServer.renderToStaticNodeStream(
    <RendererProvider req={req}>{component}</RendererProvider>
  );
}
