import './App.css';

import { Route, Routes } from 'react-router-dom';

import { SigninCard } from '@/components/organisms/Auth/SigninCard';
import { Auth } from '@/pages/Auth/Auth';
import { Notfound } from '@/pages/Notfound/Notfound';
import { SignupContainer } from '@/components/organisms/Auth/SignupContainer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path='/auth/signup' element={< Auth><SignupContainer/></Auth>}/>
      <Route path='/auth/signin' element={< Auth><SigninCard/></Auth>}/>

      <Route path='/*' element={<Notfound/>}/>

    </Routes>
    <Toaster />
    </QueryClientProvider>
  );
}

export default App;
