import { createContext, useState }  from 'react';

const WorkspacePreferencesModalContext = createContext();

export const WorkspacePreferencesModalContextProvider = ({Children}) => {

    const [openPreferences, setOpenPreferences] = useState(false);
   const [initialValue, setInitialValue]  = useState('Edit Workspace');
    const[workspace, setWorkspace] = useState(null);
return(
    <WorkspacePreferencesModalContext.Provider value={{openPreferences, setOpenPreferences, initialValue, setInitialValue, workspace, setWorkspace }}>
            {Children}
    </WorkspacePreferencesModalContext.Provider>
   );
};

export default WorkspacePreferencesModalContext;