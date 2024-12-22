import './App.css';

import { Route, Routes } from 'react-router-dom';

import { SiginCard } from '@/components/organisms/Auth/SigninCard';
import { SignupCard } from '@/components/organisms/Auth/SignupCard';
import { Auth } from '@/pages/Auth/Auth';
import { Notfound } from '@/pages/Notfound/Notfound';




function App() {

  return (
    <Routes>
      <Route path='/auth/signup' element={< Auth><SignupCard/></Auth>}/>
      <Route path='/auth/signin' element={< Auth><SiginCard/></Auth>}/>

      <Route path='/*' element={<Notfound/>}/>

    </Routes>
  );
}

export default App;
