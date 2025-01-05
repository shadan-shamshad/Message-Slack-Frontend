import { resetJoinCodeRequest } from "@/apis/workspaces";
import { useAuth } from "@/hooks/context/useAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useResetJoinCode = (workspaceId) => {
    const { auth } = useAuth();
    const queryClient = useQueryClient();
    const {mutateAsync: resetJoinCodeMutation ,isPending,isSuccess, error } = useMutation({
        mutationFn: () => resetJoinCodeRequest({workspaceId, token: auth?.token }),
        onSuccess: () => {
            console.log('Join code reset successfully');
            queryClient.invalidateQueries(`fetchWorkspaceById-${workspaceId}`)
        },
        onError: (error)=> {
            console.log('Error in resetting join code', error);
        }
    });
    
       
    return { resetJoinCodeMutation,
        isPending,
        isSuccess,
        error       
    };
};