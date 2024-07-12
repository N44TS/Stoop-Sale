import React from 'react';
import Draggable from 'react-draggable';

const DraggableWindow = () => {
  const handleSetReminder = () => {
    const event = {
      title: 'Stoop Sale Reminder',
      description: 'Don\'t forget about the stoop sale!',
      startDate: '20240727T110000',
      endDate: '20240727T120000',
    };

    const icsContent = generateICS(event);
    downloadICS('stoop_sale_reminder.ics', icsContent);
    
    // Keep the original alert
    alert('Reminder set for 27th July 2024, 11:00 AM');
  };

  const generateICS = (event) => {
    const { title, description, startDate, endDate } = event;
    return `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description}
DTSTART:${startDate}
DTEND:${endDate}
END:VEVENT
END:VCALENDAR`;
  };

  const downloadICS = (filename, content) => {
    const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Draggable>
      <div className='walletconnect'>
        <div className="window" style={{ "width": "260px" }}>
          <div className="title-bar">
            <div className="title-bar-text">DON'T FORGET!</div>
            <div className="title-bar-controls">
              <button aria-label="Help"></button>
            </div>
          </div>
          <div className="window-body">
            <h5>(Tip: You can move me anywhere!)</h5>
            <button aria-label="Help" onClick={handleSetReminder}>set reminder</button>
            <br></br>
            <br></br>
            <button aria-label="Help">
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fyourwebsite.com&text=This%20stoop%20sale%20looks%20so%20good!" target="_blank" style={{ border: 'none', borderRadius: '5px', cursor: 'pointer' }}>SHARE US!</a>
            </button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default DraggableWindow;