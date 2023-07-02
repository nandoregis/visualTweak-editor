import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

export default () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}