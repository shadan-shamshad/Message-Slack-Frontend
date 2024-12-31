import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useDeleteWorkspace } from "@/hooks/apis/workspaces/useDeleteWorkspace";
import { useWorkspacePreferencesModal } from "@/hooks/context/useWorkspacePreferencesModal";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";
import { TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const WorkspacePreferencesModal = ()=> {

    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const { toast } = useToast();
    const [workspaceId, setWorkspaceId]= useState();
   
    const { initialValue , openPreferences, setOpenPreferences, workspace} = useWorkspacePreferencesModal();
    const { deleteWorkspaceMutation } = useDeleteWorkspace(workspaceId);

   function handleClose(){
    setOpenPreferences(false);
   }

   useEffect(() => {
    setWorkspaceId(workspace?._id);
   }, [workspace]);
   async function handleDelete(){
    try{
       await deleteWorkspaceMutation();
       navigate('/home');
       queryClient.invalidateQueries('fetchWorkspaces');
       setOpenPreferences(false);
       toast({
        title: 'Workspace deleted successfully',
        type: 'Success'
       });
    }catch(error){
        console.log('Error in deleting workspace', error);
        toast({
            title: 'Error in deleting workspace',
            type: 'error'
           });
    }
   }

    return(
        <Dialog open={openPreferences} onOpenChange={handleClose}>
            <DialogContent className="p-0 bg-gray-50 overflow-hidden">
                <DialogHeader className="p-4 border-b bg-white">
                    <DialogTitle>
                        {initialValue}
                    </DialogTitle>
                </DialogHeader>
                <div className="px-4 pb-4 flex flex-col gap-y-2">
                    <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center justify-center">
                            <p className="font-semibold text-sm">
                                Workspace Name
                            </p>
                            <p className="font-semibold text-sm hover:underline">
                                Edit
                            </p>
                        </div>
                        <p className="text-sm">
                            {initialValue}
                        </p>
                    </div>
                    <Button 
                    className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50"
                    onClick={handleDelete}
                    >
                        <TrashIcon className="size-5"/>
                        <p className="text-sm font-semibold ">
                            DeleteWorkspace
                        </p>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
