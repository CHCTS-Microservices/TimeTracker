import React, { useState } from 'react';
import  * as Struct from '@/app/utils/types';

// function SidePanel(event : Struct.Event) {
  

// import React, { useState } from 'react';

interface SidePanelProps {
    events: Struct.Event[];
  }


function SidePanel( {events} : SidePanelProps) {
    const sortedEvents = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="side-panel">
      <h3>Events</h3>
      <ul>
        {/* 遍历排序后的事件并显示 */}
        {sortedEvents.map(event => (
          <li key={event.id}>
            <strong>{event.title}</strong><br />
            Date: <span>{event.date.toString()}</span><br />
            Notes: <span>{event.notes}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidePanel;
