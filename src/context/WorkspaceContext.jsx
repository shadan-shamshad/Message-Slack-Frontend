import { createContext, useState } from "react";

const WorkspaceContext = createContext();

export const WorkspaceContextProvider = ({Children}) => {

    const [currentWorkspace, setCurrentWorkspace] = useState(null);

return(
    <WorkspaceContext.Provider value={{currentWorkspace, setCurrentWorkspace}}>
            {Children}
    </WorkspaceContext.Provider>
   );
};

export default WorkspaceContext;