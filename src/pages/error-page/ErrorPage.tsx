import styles from './ErrorPage.module.scss';

export const ErrorPage = () => {
  return (
    <div className={styles.errorPage}>
      Some error happened. Try reload the page
    </div>
  );
};
