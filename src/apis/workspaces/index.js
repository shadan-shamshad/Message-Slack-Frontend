import axios from '@/config/axiosConfig';
import { useAuth } from '@/hooks/context/useAuth';

export const createWorkspaceRequest = async ({name, description, token}) =>{
    const { auth } = useAuth();
    try{
        const response = await axios.post('/workspaces',
        {
            name,
            description
        },
        {
            headers: {
                'x-access-token': token
            }
        });
        console.log('Response in create workspace request', response);
        return response?.data;
    }catch(error){
        console.error('Error in create workspace request',error);
        throw error.response.data;
    }
};

export const fetchWorkspacesRequest = async ({email, password}) =>{
    try{
        const response = await axios.get('/workspaces',
           
            {
                headers: {
                    'x-access-token': token
                }
            });
            console.log('Response in fetch workspace request', response);
            return response?.data?.data;
    }catch(error){
        console.error('Error in fetching workspace request', error);
        throw error.response.data;
    }
};