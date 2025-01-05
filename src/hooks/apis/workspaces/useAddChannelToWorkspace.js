import { addChannelToWorkspaceRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation } from "@tanstack/react-query";

export const useAddChannelToWorkspace = () => {

    
    const { auth } = useAuth();

    const { mutateAsync: addChannelToWorkspaceMutation, isPending, isSuccess, error} = useMutation({
        mutationFn: ({workspaceId, channelName}) => addChannelToWorkspaceRequest({workspaceId, channelName, token:auth?.token}),

        onSuccess: (data)=>{
            console.log('Channel added to workspace',data);
        },
        onError: (error)=> {
            console.error('error adding channel to workspace',error);
            
        }
    });

    return {
        addChannelToWorkspaceMutation,
        isPending,
        isSuccess,
        error
        
    };
};