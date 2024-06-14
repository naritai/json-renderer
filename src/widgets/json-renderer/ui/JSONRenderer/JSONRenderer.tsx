import {
	JSONMemberList,
	useEditableJsonId,
	JSONMemberEditForm,
	useJSONDataStoreActions,
} from '@entities/json-member';
import styles from './JSONRenderer.module.scss';
import { Dialog } from '@/shared/ui';

export function JSONRenderer() {
	const editableJsonId = useEditableJsonId();
	const { hydrate } = useJSONDataStoreActions();

	const handleCloseDialog = () => {
		hydrate({ editableJSONMemberId: null });
	};

	return (
		<div className={styles.jsonRendererWrapper}>
			<h1>JSON Renderer (3000 items)</h1>
			<JSONMemberList />

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
