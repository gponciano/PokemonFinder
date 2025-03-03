import styles from './App.module.css';
import './global.css'

import { NavigationBar } from './components/NavigationBar'
import { UIBerryProperties } from './components/Berries/UIBerryProperties';
import { UISeriesProperties } from './components/Series/UISeriesProperties';
import { UIMovesProperties } from './components/Moves/UIMovesProperties';

function App() {
  

  return (
    <>
   <NavigationBar />
   <div className={styles.container}>
      <UIMovesProperties />
      <UISeriesProperties />
      <UIBerryProperties />
      
   </div>
   </>
  )
}

export default App;
