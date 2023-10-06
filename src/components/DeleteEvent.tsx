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
          className=" bg-red-900 text-white py-2 px-4 rounded px-32 text-2xl"
          onClick={handleOpen}
        >
          Delete
        </button>
      </div>
      <div>
      <Dialog open={open} handler={handleOpen} size={"xs"}>
        <DialogHeader>Delete Event</DialogHeader>
        <DialogBody >
          Are you sure you want to delete this event?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="blue"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="red" onClick={handelDelete}>
            <span>Delete</span>
          </Button>
        </DialogFooter>
      </Dialog>
        
      </div>
    </div>
  );
}


