describe('Shallow render test', () => {
	test('some test', () => {
		const btn = document.createElement('button');
		btn.disabled = true;
		expect(btn).toBeDisabled();
	});
});
