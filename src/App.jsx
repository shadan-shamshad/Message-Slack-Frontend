import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Toaster } from '@/components/ui/toaster';
import { AppRoutes } from '@/Routes';

import { AppContextProvider } from './context/AppContextProvider';


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
      <AppRoutes/>
      <Toaster />
      </AppContextProvider>
    </QueryClientProvider>
   
  );
}

export default App;
