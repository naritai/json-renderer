import { useJSONDataStoreActions } from '@entities/json-member';
import { useEffect } from 'react';
import { ErrorBoundary } from '../providers/error-boundary';
import { ErrorPage } from '@/pages';
import { AppRouter } from '../providers/router-provider/ui/AppRouter';

export function App() {
	const { fetchJSONData } = useJSONDataStoreActions();

	useEffect(() => {
		fetchJSONData();
	}, [fetchJSONData]);

	return (
		<ErrorBoundary fallback={ErrorPage}>
			<AppRouter />
		</ErrorBoundary>
	);
}

export default App;
