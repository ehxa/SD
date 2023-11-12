import './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import SearchPage  from './Pages/SearchPage.jsx';
import RegisterPage from './Pages/RegisterPage';
import LoginPage from './Pages/LoginPage.jsx';

function App() {
    return (
        <>
            <div className='App'>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home/>}></Route>
                        <Route path='/home' element={<Home/>} />
                        <Route path='/search' element={<SearchPage/>} />
                        <Route path='/register' element={<RegisterPage/>} />
                        <Route path='/login' element={<LoginPage/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
