import { JSONValue } from '../model/json-member.types';

export const isFieldRestricted = ([key, value]: [string, JSONValue]) => {
  return key === 'id' || (typeof value === 'object' && value !== null) ? false : true;
};
