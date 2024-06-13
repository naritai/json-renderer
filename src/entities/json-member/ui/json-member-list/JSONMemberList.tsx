import { JSONMemberRow } from '../json-member-row/JSONMemberRow';
import { useJsonData } from '../../model/json-member.store';
import styles from './JSONMemberList.module.scss';
import cn from 'classnames';

export const JSONMemberList = () => {
  const { jsonData, isJsonDataLoading } = useJsonData();

  if (isJsonDataLoading) {
    return (
      <div
        className={cn(styles.container, {
          [styles.loading]: isJsonDataLoading,
        })}
      >
        Loading...
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {jsonData.map((el) => (
        <JSONMemberRow key={String(el.id)} id={String(el.id)} />
      ))}
    </div>
  );
};
