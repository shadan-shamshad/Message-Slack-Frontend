import combineContext from '@/utils/combineContext';

import { AuthContextProvider } from './AuthContext';
import { CreateWorkspaceContextProvider } from './CreateWorkspaceContext';
// import { CreateChannelContextProvider } from './CreateChannelContext';

// import { WorkspaceContextProvider } from './WorkspaceContext';
 import { WorkspacePreferencesModalContextProvider } from './WorkspacePreferencesModalContext';

export const AppContextProvider = combineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider,
    // WorkspaceContextProvider,
   
     WorkspacePreferencesModalContextProvider,
    // CreateChannelContextProvider
); 