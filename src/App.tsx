import styles from './App.module.css';
import './global.css'

import { NavigationBar } from './components/NavigationBar'
import { UIBerryProperties } from './components/Berries/UIBerryProperties';
import { UISeriesProperties } from './components/Series/UISeriesProperties';

function App() {
  

  return (
    <>
   <NavigationBar />
   <div className={styles.container}>
      <UISeriesProperties />
      <UIBerryProperties />
      
   </div>
   </>
  )
}

export default App;
