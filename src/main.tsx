import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/ui/App.tsx';
import './app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

async function initApp(): Promise<ServiceWorkerRegistration | undefined> {
	if (import.meta.env.DEV) {
		const { worker } = await import('./mocks/browser');
		return worker.start();
	}
	return undefined;
}

initApp().then(() => {
	ReactDOM.createRoot(document.getElementById('root')!).render(
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	);
});
