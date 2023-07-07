import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Resize from './pages/resize';

export default () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/resize' element={<Resize/>}></Route>
                <Route path='*' element={
                    <h2>Não tem essa página</h2>
                }></Route>
            </Routes>
        </BrowserRouter>
    );
}