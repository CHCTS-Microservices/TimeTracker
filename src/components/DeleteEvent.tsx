"use client";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import {  useState } from "react";

interface DeleteEventProps{
  deleteEvent: () => void;

}

export default function DeleteEvent( {deleteEvent} : DeleteEventProps) {
  const [open, setOpen] = useState(false);

  // Modal/dialog box visibile or not 
  const handleOpen = () => setOpen(!open);
  
  // when comfirm button is clicked do the following logic, call parent funtio delete event then close the modal
  function handelDelete(){
    deleteEvent();
    handleOpen;
  }

  return (
    <div>
      <div>
        <button
          className=" bg-red-900 text-white py-2 px-4 rounded px-32"
          onClick={handleOpen}
        >
          Delete
        </button>
      </div>
      <div>
        <Dialog
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
          //   className="flex h-screen justify-center items-center w"
          // //   className="fixed inset-0 items-center justify-center h-60 w-80"
          className="fixed inset-0 items-center justify-center h-60 w-80 "
        >
          <DialogHeader className="text-black">Delete Event</DialogHeader>
          <DialogBody className="text-black" divider>
            Are you sure you want to delete this event?
          </DialogBody>
          <DialogFooter>
            <Button onClick={handleOpen} className="mr-1 bg-slate-600 p-4">
              <span>Cancel</span>
            </Button>
            <Button
              variant="gradient"
              className="bg-red-700 p-4"
              onClick={handelDelete}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
}
