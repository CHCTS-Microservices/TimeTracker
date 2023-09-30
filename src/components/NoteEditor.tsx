'use client'
import React, { useState, useEffect } from 'react';
import {Event} from '@/app/utils/types'


// Interface to define the expected props for the SidePanel component
interface NoteEditorProps {
    saveNote: (newNote : String) => void;
    event: Event;
  }


export default function NoteEditor({event, saveNote} : NoteEditorProps) {
    const [note, setNote] = useState(event.notes); // Temp note

    // to handel save -> will save the changes to the origianl event.
    const handleSave = () => {

        saveNote(note);
        
    };

    // to handle cancel -> revert back to original notes in event
    const handleCancel = () => {

        setNote(event.notes);
    };

    // Need to use Effect on event so it refreshes the notes
    useEffect(() => {
        
      setNote(event.notes);
    }, [event]);

  


    return (
        // <div style={{ display: 'flex', flexDirection: 'column', gap: '10px',height: '300px' }}>
        <div className='flex flex-col gap-3 h-72'>
            {/* Note Textarea */}
            <textarea
                className="bg-white text-black p-4 rounded-lg flex-grow"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            >

            </textarea>

            {/* Save and Cancel Buttons */}
            <div className='flex justify-end gap-8'>
                <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded bottom-4 right-4" onClick={handleSave}>
                    Save
                </button>
                <button className="mt-auto bg-red-500 text-white py-2 px-4 rounded bottom-4 right-4" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
}