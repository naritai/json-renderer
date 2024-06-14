import { JSONMemberRow } from '../json-member-row/JSONMemberRow';
import { useJsonData } from '../../model/json-member.store';
import styles from './JSONMemberList.module.scss';
import { FixedSizeList as List } from 'react-window';
import cn from 'classnames';
import { JSONArray } from '../../model/json-member.types';

const Row = (jsonData: JSONArray) => {
	function InnerRow({ index, style }: { index: number; style: object }) {
		const id = String(jsonData[index]?.id);
		return (
			<div key={id} style={style} className="post">
				<JSONMemberRow id={id} />
			</div>
		);
	}

	return InnerRow;
};

export function JSONMemberList() {
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
			<List width={1200} height={580} itemCount={jsonData.length} itemSize={50}>
				{Row(jsonData)}
			</List>
		</div>
	);
}
