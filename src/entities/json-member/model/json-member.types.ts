export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONObject
  | JSONArray;

export interface JSONObject {
  [x: string]: JSONValue;
}

export interface JSONArray extends Array<JSONObject> {}
export type NormalizedJSONData = Record<string, JSONObject>;

export interface JSONDataState {
  jsonData: JSONArray;
  normalizedJsonData: NormalizedJSONData;
  editableJSONMemberId: string | null;
  isJsonDataLoading: boolean;
  actions: {
    hydrate: (fresh: Partial<JSONDataState>) => void;
    fetchJSONData: () => Promise<void>;
    updateJsonMember: (updatedJsonMember: JSONObject) => void;
  };
}
