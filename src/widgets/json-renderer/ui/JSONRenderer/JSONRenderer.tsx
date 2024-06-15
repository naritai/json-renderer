import {
	JSONMemberList,
	useEditableJsonId,
	JSONMemberEditForm,
	useJSONDataStoreActions,
	useJsonData,
} from '@entities/json-member';
import styles from './JSONRenderer.module.scss';
import { Dialog } from '@/shared/ui';
import { useEffect } from 'react';

export function JSONRenderer() {
	const editableJsonId = useEditableJsonId();
	const { jsonData, isJsonDataLoading } = useJsonData();
	const { hydrate, fetchJSONData } = useJSONDataStoreActions();

	useEffect(() => {
		fetchJSONData();
	}, [fetchJSONData]);

	const handleCloseDialog = () => {
		hydrate({ editableJSONMemberId: null });
	};

	return (
		<div className={styles.jsonRendererWrapper}>
			<h1>JSON Renderer (3000 items)</h1>
			<JSONMemberList jsonData={jsonData} isJsonDataLoading={isJsonDataLoading} />

			{editableJsonId && (
				<Dialog isOpen={!!editableJsonId} onClose={handleCloseDialog}>
					<JSONMemberEditForm
						jsonMemberId={editableJsonId}
						onClose={handleCloseDialog}
						dialog
					/>
				</Dialog>
			)}
		</div>
	);
}
