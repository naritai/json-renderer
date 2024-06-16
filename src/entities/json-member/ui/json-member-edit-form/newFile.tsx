import { render, screen } from '@testing-library/react';
import { JSONMemberEditForm } from './JSONMemberEditForm';
import { testJsonData } from '@/shared/test/fake-data';
import userEvent from '@testing-library/user-event';
import { handleSubmit } from './JSONMemberEditForm.test';

describe('JSONMemberEditForm', () => {
	test('Submit button is disabled when form is submitting or not touched yet', async () => {
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

	test('Form is able to be submitted when values are edited', async () => {
		const mock = vi.fn().mockImplementation(handleSubmit);
		const user = userEvent.setup();

		render(
			<JSONMemberEditForm
				onSubmit={mock}
				jsonMemberId=""
				initialValues={testJsonData[0]}
			/>
		);

		const email = await screen.findByDisplayValue(testJsonData[0].email);
		const submit = await screen.findByRole('button', { name: /save/i });

		user.type(email, 'test@mail.com', {});

		expect(email).toBeInTheDocument();
		expect(submit).toBeInTheDocument();
		expect(submit).toBeDisabled();
	});
});
