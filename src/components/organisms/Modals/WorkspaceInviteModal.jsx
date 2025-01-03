import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useResetJoinCode } from "@/hooks/apis/workspaces/useResetJoinCode";
import { useToast } from "@/hooks/use-toast";
import { CopyIcon, RefreshCcwIcon } from "lucide-react";

export const WorkspaceInviteModal = ({openInviteModal, setOpenInviteModal, workspaceName, joinCode, workspaceId}) => {

    const {toast} = useToast();

  async function handleCopy(){

       const inviteLink = `${window.location.origin}/join/${joinCode}`;
       await navigator.clipboard.writeText(inviteLink);
       toast({
            title:'Link copied to clipboard',
            type:'success'
        });
    };

        const { resetJoinCodeMutation } = useResetJoinCode(workspaceId);
    async function handleResetCode(){
       try{
        await resetJoinCodeMutation();
        toast({
            title:'Join code reset successfully',
            type:'success'
        });
       }catch(error){
        console,log('error in resetting join code', error);
       }
    }

    return(
        <Dialog open={openInviteModal} onOpenChange={setOpenInviteModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Invite People To {workspaceName}
                    </DialogTitle>
                    <DialogDescription>
                        Use the code shown below to invite people to your workspace.
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col items-center justify-center py-10 gap-y">
                    <p className="font-bold text-4xl uppercase">
                        {joinCode}
                    </p>
                    <Button size='sm' variant='ghost' onClick={handleCopy} >
                        Copy Link
                        <CopyIcon className='size-4 ml-2'/>
                    </Button>
                </div>

                <div className="flex items-center justify-center w-full">

                    <Button variant='outline' onClick=           {handleResetCode} >
                        Reset Join Code
                        <RefreshCcwIcon className='size-4 ml-2'/>
                    </Button>
                </div>

            </DialogContent>
        </Dialog>
    )
};
