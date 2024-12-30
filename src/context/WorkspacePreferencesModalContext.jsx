import { createContext, useState }  from 'react';

const WorkspacePreferencesModalContext = createContext();

export const WorkspacePreferencesModalContextProvider = ({Children}) => {

    const [openPreferences, setOpenPreferences] = useState(false);
   const [initialValue, setInitialValue]  = useState('Edit Workspace');

return(
    <WorkspacePreferencesModalContext.Provider value={{openPreferences, setOpenPreferences, initialValue, setInitialValue}}>
            {Children}
    </WorkspacePreferencesModalContext.Provider>
   );
};

export default WorkspacePreferencesModalContext;