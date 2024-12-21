import './App.css';

import { Route, Routes } from 'react-router-dom';

import { SiginCard } from '@/components/organisms/Auth/SigninCard';
import { SignupCard } from '@/components/organisms/Auth/SignupCard';
import { Auth } from '@/pages/Auth/Auth';



function App() {

  return (
    <Routes>
      <Route path='/auth/signup' element={< Auth><SignupCard/></Auth>}/>
      <Route path='/auth/signin' element={< Auth><SiginCard/></Auth>}/>
    </Routes>
  );
}

export default App;
