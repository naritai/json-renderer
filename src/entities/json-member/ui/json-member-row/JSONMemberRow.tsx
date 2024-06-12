import { TagType, getFormFieldConfig } from '../../utils/get-form-field-config';
import { HorizontalLine, Button } from '../../../../shared/ui';
import { JSONValue } from '../../model/json-member.types';
import { isFieldRestricted } from '../../utils/is-field-restricted';
import { getFormFieldComponent } from '../../utils/get-form-field-component';
import './JSONMemberRow.css';
import {
  useJSONDataStoreActions,
  useNormalizedJSONData,
} from '../../model/json-member.store';
import { memo } from 'react';

type JSONMemberRowProps = {
  id: string;
  editable?: boolean;
};

export const JSONMemberRow = memo(
  ({ id, editable = false }: JSONMemberRowProps) => {
    const { normalizedJsonData } = useNormalizedJSONData();
    const { hydrate } = useJSONDataStoreActions();

    console.log('render ROW!!!');

    const handleEditJSONMember = () => {
      hydrate({ editableJSONMemberId: String(id) });
    };

    const jsonMember = normalizedJsonData[id];

    console.log('jsonMember', jsonMember);

    return (
      <div className="row" key={String(jsonMember.id)}>
        <div className="row_flex">
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
                  id={String(id)}
                  disabled={!editable}
                />
              );
            })}
        </div>
        <HorizontalLine />
      </div>
    );
  }
);
