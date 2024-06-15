import { create } from 'zustand';
import { JSONDataState, JSONObject, NormalizedJSONData } from './json-member.types';
import { useShallow } from 'zustand/react/shallow';
import { normalizeJSONData } from '../utils/normalize-json-data';

const RAND_SORT_KEY = `sortkey${Math.random() * 1}`.slice(0, 15);

const defaultJSONDataState = {
	jsonData: [],
	normalizedJsonData: {} as NormalizedJSONData,
	editableJSONMemberId: null,
	isJsonDataLoading: false,
};

const useJSONdataStoreRaw = create<JSONDataState>()((set, get) => ({
	...defaultJSONDataState,
	actions: {
		hydrate: (fresh: Partial<JSONDataState>) => set(fresh),
		fetchJSONData: async () => {
			try {
				set({ isJsonDataLoading: true });
				const data = await fetch('http://localhost:5173/fakejson');
				const parsed = await data.json();

				const sortable = parsed.map((i: JSONObject, idx: number) => {
					const updatedCounter = idx + 1;
					return { ...i, [RAND_SORT_KEY]: updatedCounter };
				});

				set({
					jsonData: sortable,
					normalizedJsonData: normalizeJSONData(parsed),
					isJsonDataLoading: false,
				});
			} catch (err) {
				console.error(err);
			}
		},
		updateJsonMember: (updatedJsonMember: JSONObject) => {
			const { normalizedJsonData } = get();
			const { id } = updatedJsonMember;
			const updatedJsonMap = {
				...normalizedJsonData,
				[String(id)]: updatedJsonMember,
			};
			set({ normalizedJsonData: updatedJsonMap, editableJSONMemberId: null });
		},
	},
}));

useJSONdataStoreRaw.subscribe((newState) => {
	if (import.meta.env.DEV && import.meta.env.MODE !== 'test') {
		console.log('CHANGED_STATED in DEV mode: ', newState);
	}
});

export const useNormalizedJSONData = () =>
	useJSONdataStoreRaw(
		useShallow(state => ({
			normalizedJsonData: state.normalizedJsonData,
		}))
	);

export const useJsonData = () =>
	useJSONdataStoreRaw(
		useShallow(state => ({
			jsonData: state.jsonData,
			isJsonDataLoading: state.isJsonDataLoading,
		}))
	);

export const useEditableJsonId = () =>
	useJSONdataStoreRaw(state => state.editableJSONMemberId);

export const useJSONDataStoreActions = () =>
	useJSONdataStoreRaw(state => state.actions);
