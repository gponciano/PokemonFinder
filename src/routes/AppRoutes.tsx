import { Routes, Route } from 'react-router'

import { App } from '../App';
import { About } from '../components/About/About';

export function AppRoutes(){
    return (
        <Routes>
            <Route path='/' index element={<App/>}></Route>
            <Route path='/about' element={<About/>}></Route>
        </Routes>
    )
}