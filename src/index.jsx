import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './jsx/App';

import { TopbarProvider } from "./jsx/ContextElements/TopBarContext";
import { DropdownProvider } from './jsx/ContextElements/DropdownContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopbarProvider>
      <DropdownProvider>
        <App />
      </DropdownProvider>
    </TopbarProvider>
  </React.StrictMode>
);