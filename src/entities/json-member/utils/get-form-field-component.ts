import { InputField, RadioGroup, Textarea } from '@shared/ui';
import { TagType } from './get-form-field-config';

export const getFormFieldComponent = (tag: TagType) => {
  switch (tag) {
    case TagType.INPUT:
      return InputField;
    case TagType.RADIO:
      return RadioGroup;
    case TagType.TEXTAREA:
      return Textarea;
    default:
      return () => null;
  }
};
