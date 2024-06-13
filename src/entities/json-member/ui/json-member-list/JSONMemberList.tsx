import { JSONMemberRow } from '../json-member-row/JSONMemberRow';
import { useJsonData } from '../../model/json-member.store';
import styles from './JSONMemberList.module.scss';
import { FixedSizeList as List } from 'react-window';
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

  const Row = ({ index, key, style }: any) => {
    const { id } = jsonData[index];
    return (
      <div>
        <div key={key} style={style} className="post">
          <JSONMemberRow key={String(id)} id={String(id)} />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {/* {jsonData.map((el) => (
        <JSONMemberRow key={String(el.id)} id={String(el.id)} />
      ))} */}
      <List width={1200} height={580} itemCount={jsonData.length} itemSize={50}>
        {Row}
      </List>
    </div>
  );
};
