import styles from './ErrorPage.module.scss';

interface ErrorPageProps {
  message: string;
}

export function ErrorPage({ message }: ErrorPageProps) {
	return (
		<div className={styles.errorPage}>
			{import.meta.env.DEV ? message : null}
			Some error happened. Try reload the page
		</div>
	);
}
