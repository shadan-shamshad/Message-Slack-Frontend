import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useWorkspacePreferencesModal } from "@/hooks/context/useWorkspacePreferencesModal";
import { TrashIcon } from "lucide-react";


export const WorkspacePreferencesModal = ()=> {

   const { initialValue , openPreferences, setOpenPreferences} = useWorkspacePreferencesModal();

   function handleClose(){
    setOpenPreferences(false);
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
                    </div>
                    <Button className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                        <TrashIcon className="size-5"/>
                        <p>
                            DeleteWorkspace
                        </p>
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}
