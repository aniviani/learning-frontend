import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';

const rootElement = document.getElementById('root')!;

const reactRoot = createRoot(rootElement);

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
