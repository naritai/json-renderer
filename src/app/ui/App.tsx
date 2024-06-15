import { ErrorBoundary } from '../providers/error-boundary';
import { ErrorPage } from '@/pages';
import { AppRouter } from '../providers/router-provider/ui/AppRouter';

export function App() {
	return (
		<ErrorBoundary fallback={ErrorPage}>
			<AppRouter />
		</ErrorBoundary>
	);
}

export default App;
