import styles from './App.module.css';
import './global.css'

import { NavigationBar } from './components/NavigationBar'
import { UIBerryProperties } from './components/Berries/UIBerryProperties';

function App() {
  

  return (
    <>
   <NavigationBar />
   <div className={styles.container}>
      <h1>Testing</h1>
      <UIBerryProperties />
   </div>
   </>
  )
}

export default App;
