import { render, screen } from '@testing-library/react';
import { JSONRenderer } from './JSONRenderer/JSONRenderer';
import { server } from '../../../../mocks/server';
import { successWithData, successWithNoData } from 'mocks/handlers';
import userEvent from '@testing-library/user-event';
import { testJsonData } from '@/shared/test/fake-data';

describe('JSONRenderer', () => {
	test('Empty data response should render no rows', async () => {
		server.use(successWithNoData);

		render(<JSONRenderer />);

		expect(await screen.findByText(/No data/i)).toBeTruthy();
		expect(screen.queryAllByTestId('json-data-row')).toEqual([]);
	});

	test('Rich data response should render rows', async () => {
		server.use(successWithData(testJsonData));

		render(<JSONRenderer />);

		expect(screen.queryByText(/No data/i)).toBeNull();
		expect(await screen.findAllByTestId('json-data-row')).toHaveLength(
			testJsonData.length
		);
	});

	test('Rendered values are disabled by default', async () => {
		server.use(successWithData(testJsonData));

		render(<JSONRenderer />);

		const rows = await screen.findAllByTestId('form-field');
		rows.forEach(el => expect(el).toBeDisabled());
	});

	test('Rendered values not include id property', async () => {
		server.use(successWithData(testJsonData));

		render(<JSONRenderer />);

		expect(await screen.findAllByTestId('json-data-row')).toHaveLength(
			testJsonData.length
		);
		expect(screen.queryByText(testJsonData[0].id)).toBeNull();
	});

	test('When we click edit button, edit form is rendered', async () => {
		server.use(successWithData(testJsonData));
		const user = userEvent.setup();

		render(<JSONRenderer />);

		const editBtns = await screen.findAllByRole('button', { name: 'edit' });
		user.click(editBtns[0]);

		const editForm = (await screen.findByTestId('edit-json-form')) as HTMLFormElement;
		expect(editForm).toBeInTheDocument();
	});

	// TODO:
	// check editing process
	// check editing process with discarding changes
});
