import { render, screen } from '@testing-library/react';
import { JSONRenderer } from './JSONRenderer/JSONRenderer';
import { server } from '../../../../mocks/server';
import { successWithData, successWithNoData } from 'mocks/handlers';

const testData = [
	{
		id: 'b8157ac7-e636-4cae-81de-79ce1e8a742e',
		isActive: false,
		picture: 'http://placehold.it/32x32',
		age: 23,
		company: 'AMTAP',
		email: 'dorthyfox@amtap.com',
		address: '629 Coffey Street, Innsbrook, South Dakota, 7111',
		about: `Aliquip commodo occaecat ut veniam cillum. Proident excepteur ipsum veniam
      reprehenderitelit excepteur fugiat nisi deserunt sint incididunt quis. 
      Cupidatat enim elit sunt ea voluptate tempor consectetur id et ullamco 
      eiusmod commodo. Nulla non consectetur nostrud ullamco proident deserunt 
      enim irure anim sit id.`,
		registered: '2015-11-01T12:21:47',
	},
	{
		id: 'f7a6a84e-f01d-4e54-a75b-1a0143bf6218',
		isActive: true,
		picture: 'http://placehold.it/32x32',
		age: 40,
		company: 'COGNICODE',
		email: 'dorthyfox@cognicode.com',
		address: '490 Dunne Court, Hebron, Kentucky, 6203',
		about: `Ad qui reprehenderit ullamco aliquip aliqua Lorem fugiat exercitation veniam 
      ad laborum proident. Voluptate id qui aute ut ea. Magna magna laboris 
      quis deserunt sint nulla occaecat sint. Consectetur consectetur incididunt 
      eiusmod enim proident proident reprehenderit aliquip. 
      Magna deserunt proident minim duis ex non ea. Culpa veniam duis in deserunt duis. 
      Amet pariatur mollit cillum duis.`,
		registered: '2020-06-14T01:03:10',
	},
];

describe('JSONRenderer', () => {
	test('Empty data response should render no rows', async () => {
		server.use(successWithNoData);

		render(<JSONRenderer />);

		expect(await screen.findByText(/No data/i)).toBeTruthy();
		expect(screen.queryAllByTestId('json-data-row')).toEqual([]);
	});

	test('Rich data response should render rows', async () => {
		server.use(successWithData(testData));

		render(<JSONRenderer />);

		expect(screen.queryByText(/No data/i)).toBeNull();
		expect(await screen.findAllByTestId('json-data-row')).toHaveLength(testData.length);
	});

	test('Rendered values are disabled by default', async () => {
		server.use(successWithData(testData));

		render(<JSONRenderer />);

		const rows = await screen.findAllByTestId('form-field');
		rows.forEach(el => expect(el).toBeDisabled());
	});

	test('Rendered values not include id property', async () => {
		server.use(successWithData(testData));

		render(<JSONRenderer />);

		expect(await screen.findAllByTestId('json-data-row')).toHaveLength(testData.length);
		expect(screen.queryByText(testData[0].id)).toBeNull();
	});

	// TODO:
	// test('When edit form is submitted -> data successfully updated', async () => {
	//   server.use(successWithData(testData));

	//   render(<JSONRenderer />);

	//   // get edit buttons
	//   // userEvent click
	//   // get the form and edit values (use toHaveFormValues matcher)
	//   // save the form
	//   // assert that all the values from row 1 match
	// });

	// test('When edit form is cancelled -> changed data will not update', async () => {
	//   server.use(successWithData(testData));

	//   render(<JSONRenderer />);

	//   // get edit buttons
	//   // userEvent click
	//   // get the form and edit values (use toHaveFormValues matcher)
	//   // cancel the form via cancel button
	//   // assert that all the values still same
	// });
});
