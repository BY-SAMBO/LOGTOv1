'use client';

import { useEffect, useState } from 'react';

export default function BootcampDashboard() {
  const [, setCurrentTime] = useState(new Date());
  const [selectedTimezone, setSelectedTimezone] = useState('Asia/Tokyo');

  const timezones = [
    { value: 'Asia/Tokyo', label: 'Tokyo' },
    { value: 'America/New_York', label: 'New York' },
    { value: 'Europe/London', label: 'London' },
    { value: 'America/Los_Angeles', label: 'Los Angeles' },
    { value: 'Europe/Berlin', label: 'Berlin' },
    { value: 'Asia/Shanghai', label: 'Shanghai' },
    { value: 'Australia/Sydney', label: 'Sydney' },
    { value: 'America/Chicago', label: 'Chicago' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeInTimezone = () => {
    return new Date().toLocaleString('en-US', {
      timeZone: selectedTimezone,
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const getAnalogClockRotation = () => {
    const timeInZone = new Date().toLocaleString('en-US', { timeZone: selectedTimezone });
    const date = new Date(timeInZone);
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return {
      hours: (hours * 30) + (minutes * 0.5),
      minutes: minutes * 6,
      seconds: seconds * 6
    };
  };

  const clockRotation = getAnalogClockRotation();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="heading-1">Bootcamp Innovation Center</h1>
        <p className="text-secondary">Advanced Learning Environment</p>
      </header>

      <main className="dashboard-grid">
        {/* Chat Widget */}
        <div className="window-widget chat-widget">
          <div className="window-titlebar">
            <div className="window-controls">
              <div className="window-control"></div>
              <div className="window-control"></div>
              <div className="window-control"></div>
            </div>
            <div className="window-title">Communication Hub</div>
          </div>
          <div className="window-content">
            <div className="widget-content flex flex-col items-center justify-center">
              <div className="chat-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <h3 className="heading-4 text-center">Connect & Collaborate</h3>
              <p className="text-secondary text-center">Access real-time communication platform</p>
              <a 
                href="https://chat.industriasgalgo.com/oauth/oidc/login"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch Chat
              </a>
            </div>
          </div>
        </div>

        {/* Analog Clock Widget */}
        <div className="window-widget clock-widget">
          <div className="window-titlebar">
            <div className="window-controls">
              <div className="window-control"></div>
              <div className="window-control"></div>
              <div className="window-control"></div>
            </div>
            <div className="window-title">World Clock</div>
          </div>
          <div className="window-content">
            <div className="widget-content">
              <div className="clock-display">
                <div className="analog-clock">
                  <div className="clock-face">
                    {/* Hour markers */}
                    {[...Array(12)].map((_, i) => (
                      <div 
                        key={i} 
                        className="hour-marker" 
                        style={{
                          transform: `rotate(${i * 30}deg)`
                        }}
                      />
                    ))}
                    
                    {/* Clock hands */}
                    <div 
                      className="clock-hand hour-hand"
                      style={{
                        transform: `rotate(${clockRotation.hours}deg)`
                      }}
                    />
                    <div 
                      className="clock-hand minute-hand"
                      style={{
                        transform: `rotate(${clockRotation.minutes}deg)`
                      }}
                    />
                    <div 
                      className="clock-hand second-hand"
                      style={{
                        transform: `rotate(${clockRotation.seconds}deg)`
                      }}
                    />
                    <div className="clock-center" />
                  </div>
                </div>
                
                <div className="digital-time">
                  <div className="time-display">{getTimeInTimezone()}</div>
                  <select 
                    value={selectedTimezone}
                    onChange={(e) => setSelectedTimezone(e.target.value)}
                    className="timezone-selector"
                  >
                    {timezones.map((tz) => (
                      <option key={tz.value} value={tz.value}>
                        {tz.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Phone Widget */}
        <div className="window-widget emergency-widget">
          <div className="window-titlebar">
            <div className="window-controls">
              <div className="window-control"></div>
              <div className="window-control"></div>
              <div className="window-control"></div>
            </div>
            <div className="window-title">Emergency Support</div>
          </div>
          <div className="window-content">
            <div className="widget-content flex flex-col items-center justify-center">
              <div className="emergency-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className="heading-4 text-center">24/7 Support</h3>
              <p className="text-secondary text-center">Immediate assistance available</p>
              <a 
                href="https://wa.me/573152658100?text=Hola,%20necesito%20ayuda!"
                className="btn btn-primary emergency-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="dashboard-footer">
        <p className="text-caption">Innovation Center &copy; 2024 - Empowering Tomorrow&apos;s Leaders</p>
      </footer>
    </div>
  );
}
