import { Component, Suspense, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ({ message }: { message: string }) => ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  message?: string | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false, message: null };
		this.handlePromiseRejection = this.handlePromiseRejection.bind(this);
	}

	componentDidMount(): void {
		window.addEventListener('unhandledrejection', this.handlePromiseRejection);
	}

	componentWillUnmount(): void {
		window.removeEventListener('unhandledrejection', this.handlePromiseRejection);
	}

	handlePromiseRejection(event: PromiseRejectionEvent): void {
		this.setState({ hasError: true, message: event?.reason });
	}

	static getDerivedStateFromError(): ErrorBoundaryState {
		return { hasError: true };
	}

	// componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
	//   send error info to error logger (backend)
	//   console.log(error, errorInfo);
	// }

	render(): ReactNode {
		const { hasError, message } = this.state;
		const { children, fallback } = this.props;

		const Component = fallback;

		if (hasError) {
			return (
				<Suspense fallback="">
					<Component message={String(message)} />
				</Suspense>
			);
		}

		return children;
	}
}
