import { getFormFieldConfig } from '../../utils/get-form-field-config';
import { getFormFieldComponent } from '../../utils/get-form-field-component';
import { HorizontalLine, Button } from '../../../../shared/ui';
import { JSONValue } from '../../model/json-member.types';
import { isFieldRestricted } from '../../utils/is-field-restricted';
import styles from './JSONMemberRow.module.scss';
import {
	useJSONDataStoreActions,
	useNormalizedJSONData,
} from '../../model/json-member.store';
import { memo } from 'react';

type JSONMemberRowProps = {
  id: string;
  editable?: boolean;
};

export const JSONMemberRow = memo(({ id, editable = false }: JSONMemberRowProps) => {
	const { normalizedJsonData } = useNormalizedJSONData();
	const { hydrate } = useJSONDataStoreActions();
	const jsonMember = normalizedJsonData[id];

	const handleEditJSONMember = () => {
		hydrate({ editableJSONMemberId: String(id) });
	};

	return (
		<div className={styles.row} key={String(jsonMember.id)}>
			<div className={styles.rowFlex}>
				<Button text="edit" onClick={handleEditJSONMember} />

				{Object.entries(jsonMember)
					.filter(isFieldRestricted)
					.map((item: [string, JSONValue], idx) => {
						const { tag, ...props } = getFormFieldConfig(item);
						const FormField = getFormFieldComponent(tag);

						return (
							<FormField
								{...props}
								key={String(id) + idx}
								id={String(id) + Math.random() * 1}
								disabled={!editable}
							/>
						);
					})}
			</div>
			<HorizontalLine />
		</div>
	);
});
