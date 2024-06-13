import { MainPage } from '../../pages/main-page';
import { useJSONDataStoreActions } from '../../entities/json-member';
import { useEffect } from 'react';
import styles from './App.module.scss';

function App() {
  const { fetchJSONData } = useJSONDataStoreActions();

  useEffect(() => {
    fetchJSONData();
  }, []);

  return (
    <main className={styles.main}>
      <MainPage />
    </main>
  );
}

export default App;
