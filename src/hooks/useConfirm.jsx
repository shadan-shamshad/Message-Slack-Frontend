
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

export const useConfirm = ({
    title,
    message
}) => {
    const [promise, setPromise]=useState(null);

    async function confirmation(){
        console.log('Confirmation triggered')
        return new Promise((resolve) => {
            setPromise({resolve});
        })
    }

    const handleClose = () =>{
        setPromise(null);
    };

    const handleConfirm = () =>{
        promise?.resolve(true);
        handleClose();
    };

    const ConfirmDialog = () => {
        return (
            <Dialog open={promise !== null} onOpenChange={handleClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            {title}
                        </DialogTitle>
                        <DialogDescription>
                            {message}
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        <Button 
                        onClick={handleClose}
                        variant='secondary'
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleClose}
                       
                        >
                            Confirm
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        )
    }

    return{ConfirmDialog, confirmation};

   
}