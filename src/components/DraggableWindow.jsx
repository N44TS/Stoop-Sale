import React from 'react';
import Draggable from 'react-draggable';

const DraggableWindow = () => {
    const handleSetReminder = () => {
        alert('Reminder set for 27th July 2024, 11:00 AM');
        // Here you can add functionality to integrate with a calendar API
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