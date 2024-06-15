import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

test('App is rendered successfully', async () => {
	render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);

	const heading = await screen.findByRole('heading', { level: 1 });
	expect(heading).toHaveTextContent(/JSON Renderer/i);
});
