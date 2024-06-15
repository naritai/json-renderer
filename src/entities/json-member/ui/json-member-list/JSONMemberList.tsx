import { JSONMemberRow } from '../json-member-row/JSONMemberRow';
import { FixedSizeList as List } from 'react-window';
import { JSONArray } from '../../model/json-member.types';
import styles from './JSONMemberList.module.scss';
import cn from 'classnames';

const Row = (jsonData: JSONArray) => {
	function InnerRow({ index, style }: { index: number; style: object }) {
		const id = String(jsonData[index]?.id);
		return (
			<div data-testid="json-data-row" key={id} style={style} className="post">
				<JSONMemberRow id={id} />
			</div>
		);
	}

	return InnerRow;
};

interface JSONMemberListProps {
  jsonData: JSONArray;
  isJsonDataLoading: boolean;
}

export function JSONMemberList({ jsonData, isJsonDataLoading }: JSONMemberListProps) {
	if (!jsonData.length || isJsonDataLoading) {
		return (
			<div
				className={cn(styles.container, {
					[styles.loading]: isJsonDataLoading,
				})}
			>
				{isJsonDataLoading ? 'Loading...' : 'No data found'}
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<List
				className={styles.list}
				width={1200}
				height={580}
				itemCount={jsonData.length}
				itemSize={50}
			>
				{Row(jsonData)}
			</List>
		</div>
	);
}
