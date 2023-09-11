import { Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import SiteFooter from './components/Common/SiteFooter';
import SiteNav from './components/Common/SiteNav';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';

function App() {
  return (
    <div>
      <SiteNav/>
      <Routes>
          <Route path='*' element={<HomePage />} />
          <Route path='/' exact={true} element={<HomePage />} />
          <Route path='/login' exact={true} element={<LoginPage />} />
          <Route path='/register' exact={true} element={<RegisterPage />} />
        </Routes>
      <SiteFooter/>
    </div>
  );
}

export default App;
