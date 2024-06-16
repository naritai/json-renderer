import { render, screen, waitFor } from '@testing-library/react';
import { JSONMemberEditForm } from './JSONMemberEditForm';
import { testJsonData } from '@/shared/test/fake-data';
import { JSONObject } from '../../model/json-member.types';
import userEvent from '@testing-library/user-event';

export const handleSubmit = (_: JSONObject) => null;

describe('JSONMemberEditForm', () => {
	test('Submit button is disabled when form is not touched yet', async () => {
		render(
			<JSONMemberEditForm
				onSubmit={() => null}
				jsonMemberId=""
				initialValues={testJsonData[0]}
			/>
		);

		const submit = await screen.findByRole('button', { name: /save/i });

		expect(submit).toBeInTheDocument();
		expect(submit).toBeDisabled();
	});

	test('Form submits correct data after changes', async () => {
		const mock = vi.fn().mockImplementation(handleSubmit);
		const user = userEvent.setup();

		const newEmail = 'test@mail.com';
		const updated = { ...testJsonData[0], email: newEmail };

		render(
			<JSONMemberEditForm
				onSubmit={mock}
				jsonMemberId=""
				initialValues={testJsonData[0]}
			/>
		);

		const email = await screen.findByDisplayValue(testJsonData[0].email);
		const submit = await screen.findByRole('button', { name: /save/i });

		await user.clear(email);
		await user.type(email, newEmail);
		await user.click(submit);

		expect(submit).toBeDisabled();
		await waitFor(() => expect(mock).toHaveBeenCalledOnce());
		await waitFor(() => expect(mock).toHaveBeenCalledWith(updated));
	});
});
