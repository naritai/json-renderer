import { JSONMemberRow } from '../json-member-row/JSONMemberRow';
import { useJsonData } from '../../model/json-member.store';
import './JSONMemberList.css';

export const JSONMemberList = () => {
  const jsonData = useJsonData();

  return (
    <div className="container">
      {jsonData.map((el) => (
        <JSONMemberRow key={String(el.id)} id={String(el.id)} />
      ))}
    </div>
  );
};
