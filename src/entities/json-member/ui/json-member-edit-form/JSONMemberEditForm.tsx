import { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react';
import { Button } from '@shared/ui';
import { JSONObject, JSONValue } from '../../model/json-member.types';
import { getFormFieldComponent } from '../../utils/get-form-field-component';
import { getFormFieldConfig } from '../../utils/get-form-field-config';
import { isFieldRestricted } from '../../utils/is-field-restricted';
import { useNormalizedJSONData } from '../../model/json-member.store';
import styles from './JSONMemberEditForm.module.scss';

interface JSONMemberEditFormProps {
  jsonMemberId: string;
  initialValues?: JSONObject;
  dialog?: boolean;
  onClose?: () => void;
  onSubmit: (data: JSONObject) => void;
}

enum FORM_STATES {
  INITIAL = 'INITIAL',
  FILLING = 'FILLING',
  SENDING = 'SENDING',
}

export function JSONMemberEditForm({
	jsonMemberId,
	initialValues: initial = {},
	dialog = false,
	onClose,
	onSubmit,
}: JSONMemberEditFormProps) {
	const { normalizedJsonData: data } = useNormalizedJSONData();
	const [formData, setFormData] = useState<JSONObject>(data[jsonMemberId] ?? initial);
	const [formState, setFormState] = useState<FORM_STATES>(FORM_STATES.INITIAL);

	const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		setFormState(FORM_STATES.SENDING);
		event.preventDefault();
		onSubmit && onSubmit(formData);
		handleReset();
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormState(FORM_STATES.FILLING);
		const { value, name, type } = e.target;
		setFormData({ ...formData, [name]: convertTypeToRaw(type, value) });
	};

	const handleReset = () => {
		setFormState(FORM_STATES.INITIAL);
		onClose && onClose();
	};

	const disabled = formState === FORM_STATES.INITIAL || formState === FORM_STATES.SENDING;

	return (
		<div className={styles.formWrapper}>
			<form
				onSubmit={handleSubmit}
				className={styles.jsonEditForm}
				data-testid="edit-json-form"
				{...(dialog && { method: 'dialog' })}
			>
				{Object.entries(formData)
					.filter(isFieldRestricted)
					.map((item: [string, JSONValue], idx) => {
						const { tag, ...props } = getFormFieldConfig(item);
						const FormField = getFormFieldComponent(tag);
						return (
							<FormField
								{...props}
								className={styles.widemost}
								onChange={handleChange}
								key={String(jsonMemberId) + idx}
								id={String(jsonMemberId)}
							/>
						);
					})}

				<menu className={styles.actions}>
					<Button disabled={disabled} text="Save" type="submit" />
					<Button onClick={handleReset} text="Cancel" type="reset" />
				</menu>
			</form>
		</div>
	);
}

const convertTypeToRaw = (type: HTMLInputTypeAttribute, value: string) => {
	if (type === 'radio') {
		return value === 'true';
	}
	if (type === 'number') {
		return parseFloat(value);
	}
	if (type === 'text') {
		return String(value);
	}

	return value;
};
