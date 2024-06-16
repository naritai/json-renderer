import styles from './ErrorPage.module.scss';

interface ErrorPageProps {
  message: string;
}

export function ErrorPage({ message }: ErrorPageProps) {
	return (
		<div className={styles.errorPage}>
			<div>{import.meta.env.DEV ? message : null}</div>
			<div>Some error happened. Try reload the page</div>
		</div>
	);
}
