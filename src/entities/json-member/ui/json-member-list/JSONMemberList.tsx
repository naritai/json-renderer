import { JSONMemberRow } from '../json-member-row/JSONMemberRow';
import { useJsonData } from '../../model/json-member.store';
import styles from './JSONMemberList.module.scss';

export const JSONMemberList = () => {
  const jsonData = useJsonData();

  return (
    <div className={styles.container}>
      {jsonData.map((el) => (
        <JSONMemberRow key={String(el.id)} id={String(el.id)} />
      ))}
    </div>
  );
};
