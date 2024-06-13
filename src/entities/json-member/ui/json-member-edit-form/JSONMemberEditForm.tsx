import { HTMLInputTypeAttribute, useState } from 'react';
import { Button } from '../../../../shared/ui';
import { JSONObject, JSONValue } from '../../model/json-member.types';
import { getFormFieldComponent } from '../../utils/get-form-field-component';
import { getFormFieldConfig } from '../../utils/get-form-field-config';
import { isFieldRestricted } from '../../utils/is-field-restricted';
import './JSONMemberEditForm.css';
import {
  useJSONDataStoreActions,
  useNormalizedJSONData,
} from '../../model/json-member.store';

interface JSONMemberEditFormProps {
  id: string;
}

export const JSONMemberEditForm = ({ id }: JSONMemberEditFormProps) => {
  const { updateJsonMember } = useJSONDataStoreActions();
  const { normalizedJsonData } = useNormalizedJSONData();
  const [data, setData] = useState<JSONObject>(normalizedJsonData[id]);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateJsonMember(data);
  };

  const convertTypeToRaw = (type: HTMLInputTypeAttribute, value: string) => {
    if (type === 'radio') {
      return value === 'true' ? true : false;
    }
    if (type === 'number') {
      return parseFloat(value);
    }
    if (type === 'text') {
      return String(value);
    }

    return value;
  };

  const handleChange = (e: any) => {
    const { value, name, type } = e.target;
    setData({ ...data, [name]: convertTypeToRaw(type, value) });
  };

  return (
    <div className="form_wrapper">
      <form className="json_edit_form" method="dialog" onSubmit={handleSubmit}>
        {Object.entries(data)
          .filter(isFieldRestricted)
          .map((item: [string, JSONValue], idx) => {
            const { tag, ...props } = getFormFieldConfig(item);
            const FormField = getFormFieldComponent(tag);
            return (
              <FormField
                {...props}
                className="widemost"
                onChange={handleChange}
                key={String(id) + idx}
                id={String(id)}
              />
            );
          })}

        <menu>
          <Button text="Reset" type="reset" />
          <Button text="Save" type="submit" />
        </menu>
      </form>
    </div>
  );
};
