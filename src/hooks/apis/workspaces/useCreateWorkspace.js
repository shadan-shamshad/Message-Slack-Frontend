import { useAuth } from "@/hooks/context/useAuth";
import { createWorkspaceRequest } from "@/apis/workspaces";
import { useMutation } from "@tanstack/react-query";


export const useCreateWorkspace = () => {

    const { auth } = useAuth();

    const {isPending, isSuccess, error, mutateAsync: createWorkspaceMutation} = useMutation({
        mutationFn: (data) => createWorkspaceRequest({...data, token: auth?.token}),

        onSuccess: (data)=>{
            console.log('Successfully created workspace',data);
            // toast({
            //     title: 'Successfully signed up',
            //     message:'You will be redirected to the login page in a few seconds',
            //     type:'success'
            // });
        },
        onError: (error)=> {
            console.error('Failed to create workspace',error);
            // toast({
            //     title: 'Failed to sign up',
            //     message: error.message,
            //     type:'error',
            //     variant:'destructive'
            // });
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        createWorkspaceMutation
    };
};