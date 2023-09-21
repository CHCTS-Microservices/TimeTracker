'use client'
import React, { useState } from 'react';

export default function NoteEditor() {
    const [note, setNote] = useState('Note'); // Initial note text

    const handleSave = () => {
        // Handle the Save operation here
        alert('Note saved!'); //alert the user that the note has been saved
    };

    const handleCancel = () => {
        // Handle the Cancel operation here
        alert('Note canceled!'); //alert the user that the note has been canceled
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px',height: '300px' }}>
            {/* Note Textarea */}
            <textarea
                className="bg-white text-black p-4 rounded-lg"
                style={{ flexGrow: 1 }}
                value={note}
                onChange={(e) => setNote(e.target.value)}
            ></textarea>

            {/* Save and Cancel Buttons */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button className="bg-green-500 text-white p-2 rounded" onClick={handleSave}>
                    Save
                </button>
                <button className="bg-red-500 text-white p-2 rounded ml-2" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
}
