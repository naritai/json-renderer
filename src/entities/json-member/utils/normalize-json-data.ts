import { JSONArray, NormalizedJSONData } from '../model/json-member.types';

export const normalizeJSONData = (rawJSON: JSONArray): NormalizedJSONData => {
  const normalized: NormalizedJSONData = {};

  rawJSON.forEach((jsonMember) => {
    const { id } = jsonMember;
    normalized[String(id)] = jsonMember;
  });

  return normalized;
};
