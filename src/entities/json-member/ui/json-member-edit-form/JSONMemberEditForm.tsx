import { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react';
import { Button } from '@shared/ui';
import { JSONObject, JSONValue } from '../../model/json-member.types';
import { getFormFieldComponent } from '../../utils/get-form-field-component';
import { getFormFieldConfig } from '../../utils/get-form-field-config';
import { isFieldRestricted } from '../../utils/is-field-restricted';
import styles from './JSONMemberEditForm.module.scss';
import {
	useJSONDataStoreActions,
	useNormalizedJSONData,
} from '../../model/json-member.store';

interface JSONMemberEditFormProps {
  jsonMemberId: string;
  onClose?: () => void;
  dialog?: boolean;
}

export function JSONMemberEditForm({
	jsonMemberId,
	dialog = false,
	onClose,
}: JSONMemberEditFormProps) {
	const { updateJsonMember } = useJSONDataStoreActions();
	const { normalizedJsonData } = useNormalizedJSONData();
	const [formData, setFormData] = useState<JSONObject>(normalizedJsonData[jsonMemberId]);

	const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		updateJsonMember(formData);
		handleReset();
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { value, name, type } = e.target;
		setFormData({ ...formData, [name]: convertTypeToRaw(type, value) });
	};

	const handleReset = () => {
		onClose && onClose();
	};

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
					<Button text="Save" type="submit" />
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
