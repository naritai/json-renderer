import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/ui/App.tsx';
import './app/styles/index.scss';

async function initApp() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');
    return worker.start();
  }
}

initApp().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
