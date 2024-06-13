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

  const Row = ({ index, style }: any) => {
    const id = String(jsonData[index]?.id);
    return (
      <div key={id} style={style} className="post">
        <JSONMemberRow id={id} />
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <List width={1200} height={580} itemCount={jsonData.length} itemSize={50}>
        {Row}
      </List>
    </div>
  );
};
