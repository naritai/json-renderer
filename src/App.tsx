import { MainPage } from './pages/main-page';
import './App.css';
import { useJSONDataStoreActions } from './entities/json-member';
import { useEffect } from 'react';

function App() {
  const { fetchJSONData } = useJSONDataStoreActions();

  // fetch data asap
  useEffect(() => {
    fetchJSONData();
  }, []);

  return (
    <main>
      <MainPage />
    </main>
  );
}

export default App;
