import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

const DraggableWindow = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-07-27T11:00:00');
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSetReminder = () => {
    const event = {
      title: 'Stoop Sale Reminder',
      description: 'Don\'t forget about the stoop sale!',
      startDate: '20240727T110000',
      endDate: '20240727T120000',
    };

    const googleCalendarUrl = generateGoogleCalendarUrl(event);
    window.open(googleCalendarUrl, '_blank');
    
    alert('Reminder set for 27th July 2024, 11:00 AM');
  };

  const generateGoogleCalendarUrl = (event) => {
    const { title, description, startDate, endDate } = event;
    const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
    const text = `&text=${encodeURIComponent(title)}`;
    const details = `&details=${encodeURIComponent(description)}`;
    const dates = `&dates=${startDate}/${endDate}`;
    return `${baseUrl}${text}${details}${dates}`;
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
            <h5>Countdown: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</h5>
            <button aria-label="Help" onClick={handleSetReminder}>set reminder</button>
            <br></br>
            <br></br>
            <button aria-label="Help" style={{ border: 'none', cursor: 'pointer' }}>
              <a 
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fstoop-sale-orcin.vercel.app&text=This%20stoop%20sale%20looks%20so%20good!" 
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }} // Ensuring link inherits button styling
              >
                SHARE US!
              </a>
            </button>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default DraggableWindow;