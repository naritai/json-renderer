import { HTMLInputTypeAttribute } from 'react';
import { isValidISODateString } from 'iso-datestring-validator';
import { isValidEmail } from '@shared/utils/isValidEmail';
import { JSONValue } from '../model/json-member.types';

export type FieldValue = string | number;

export type FormFieldConfig = {
  value: FieldValue;
  type: HTMLInputTypeAttribute;
  tag: TagType;
  name: string;
};

export const resolveFieldType = (value: unknown): HTMLInputTypeAttribute | null => {
	if (typeof value === 'string') {
		if (isValidISODateString(value)) {
			return 'datetime-local';
		}
		if (isValidEmail(value)) {
			return 'email';
		}
		return 'text';
	}

	if (typeof value === 'number') {
		return 'number';
	}

	if (typeof value === 'boolean') {
		return 'radio';
	}

	return null;
};

export enum TagType {
  INPUT = 'INPUT',
  TEXTAREA = 'TEXTAREA',
  RADIO = 'RADIO',
}

export const getFormFieldConfig = ([key, value]: [
  string,
  JSONValue,
]): FormFieldConfig => {
	const resolvedType = resolveFieldType(value);
	if (!resolvedType) {
		return {} as FormFieldConfig;
	}

	let resolvedTag;

	if (resolvedType === 'radio') {
		resolvedTag = TagType.RADIO;
	} else if (resolvedType === 'text' && String(value).length > 80) {
		resolvedTag = TagType.TEXTAREA;
	} else {
		resolvedTag = TagType.INPUT;
	}

	return {
		value: String(value),
		type: resolvedType,
		tag: resolvedTag,
		name: key,
	};
};
