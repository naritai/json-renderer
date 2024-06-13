import {
  JSONMemberList,
  useEditableJsonId,
  JSONMemberEditForm,
  useJSONDataStoreActions,
} from '@entities/json-member';
import styles from './JSONRenderer.module.scss';
import { Dialog } from '@/shared/ui';

export const JSONRenderer = () => {
  const editableJsonId = useEditableJsonId();
  const { hydrate } = useJSONDataStoreActions();

  const handleCloseDialog = () => {
    hydrate({ editableJSONMemberId: null });
  };

  return (
    <div className={styles.jsonRendererWrapper}>
      {editableJsonId && (
        <Dialog isOpen={!!editableJsonId} onClose={handleCloseDialog}>
          <JSONMemberEditForm
            jsonMemberId={editableJsonId}
            onClose={handleCloseDialog}
            dialog={true}
          />
        </Dialog>
      )}

      <JSONMemberList />
    </div>
  );
};
