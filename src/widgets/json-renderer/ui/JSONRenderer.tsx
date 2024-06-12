import { useRef } from 'react';
import {
  JSONMemberList,
  useEditableJsonId,
} from '../../../entities/json-member';
import { JSONMemberEditForm } from '../../../entities/json-member/ui/json-member-edit-form/JSONMemberEditForm';

export const JSONRenderer = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const editableJsonId = useEditableJsonId();

  // edit click
  // somehow dialog OPEN with form that know what exact element we're editing
  // on submit --> update the state + reset form + clean state(editable id)
  // on cancel --> just reset form + clean state(editable id)
  // we should block all the rest actions on the page when dialog open

  return (
    <div className="json_renderer_wrapper">
      {editableJsonId && (
        <dialog ref={dialogRef} open={!!editableJsonId}>
          <JSONMemberEditForm id={editableJsonId} />
        </dialog>
      )}

      <JSONMemberList />
    </div>
  );
};
