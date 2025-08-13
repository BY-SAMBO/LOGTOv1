'use client';

import { useEffect, useState } from 'react';
import SignOut from './sign-out';

interface DashboardContentProps {
  userName: string;
}

export default function DashboardContent({ userName }: DashboardContentProps) {
  const [, setCurrentTime] = useState(new Date());
  const [selectedTimezone, setSelectedTimezone] = useState('America/Bogota');

  const timezones = [
    { value: 'America/Bogota', label: 'Bogotá' },
    { value: 'America/New_York', label: 'Nueva York' },
    { value: 'Europe/Madrid', label: 'Madrid' },
    { value: 'America/Mexico_City', label: 'Ciudad de México' },
    { value: 'America/Argentina/Buenos_Aires', label: 'Buenos Aires' },
    { value: 'Europe/London', label: 'Londres' },
    { value: 'Asia/Tokyo', label: 'Tokio' },
    { value: 'Australia/Sydney', label: 'Sídney' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeInTimezone = () => {
    return new Date().toLocaleString('es-ES', {
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
    <div className="dashboard-container animate-fade-in-up">
      <header className="dashboard-header">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="heading-1 text-accent animate-soft-pulse">Xtrategia</h1>
            <p className="text-secondary">Plataforma Avanzada de Innovación</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-secondary">Bienvenido,</p>
              <p className="text-lg font-medium text-accent">{userName}</p>
            </div>
            <SignOut />
          </div>
        </div>
      </header>

      <main className="dashboard-grid">
        {/* Chat Widget */}
        <div className="window-widget chat-widget hover-lift transition-smooth">
          <div className="window-titlebar">
            <div className="window-controls">
              <div className="window-control animate-pulse-glow"></div>
              <div className="window-control animate-pulse-glow"></div>
              <div className="window-control animate-pulse-glow"></div>
            </div>
            <div className="window-title">Centro de Comunicación</div>
          </div>
          <div className="window-content">
            <div className="widget-content flex flex-col items-center justify-center">
              <div className="chat-icon text-accent animate-gentle-glow">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </div>
              <h3 className="heading-4 text-center">Comunicación</h3>
              <p className="text-secondary text-center">Accede al chat en tiempo real</p>
              <a 
                href="https://chat.industriasgalgo.com/oauth/oidc/login"
                className="btn btn-primary energy-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat
              </a>
            </div>
          </div>
        </div>

        {/* Analog Clock Widget */}
        <div className="window-widget clock-widget hover-lift transition-smooth">
          <div className="window-titlebar">
            <div className="window-controls">
              <div className="window-control animate-pulse-glow"></div>
              <div className="window-control animate-pulse-glow"></div>
              <div className="window-control animate-pulse-glow"></div>
            </div>
            <div className="window-title">Reloj Mundial</div>
          </div>
          <div className="window-content">
            <div className="widget-content">
              <div className="clock-display">
                <div className="analog-clock animate-gentle-glow">
                  <div className="clock-face">
                    {/* Hour markers */}
                    {[...Array(12)].map((_, i) => (
                      <div 
                        key={i} 
                        className="hour-marker" 
                        style={{
                          transform: `rotate(${i * 30}deg)`,
                          background: i % 3 === 0 ? 'var(--color-accent)' : 'var(--color-white)'
                        }}
                      />
                    ))}
                    
                    {/* Clock hands */}
                    <div 
                      className="clock-hand hour-hand"
                      style={{
                        transform: `rotate(${clockRotation.hours}deg)`,
                        background: 'var(--color-accent)'
                      }}
                    />
                    <div 
                      className="clock-hand minute-hand"
                      style={{
                        transform: `rotate(${clockRotation.minutes}deg)`,
                        background: 'var(--color-accent-secondary)'
                      }}
                    />
                    <div 
                      className="clock-hand second-hand"
                      style={{
                        transform: `rotate(${clockRotation.seconds}deg)`,
                        background: 'var(--color-accent)'
                      }}
                    />
                    <div className="clock-center" style={{background: 'var(--color-accent)'}} />
                  </div>
                </div>
                
                <div className="digital-time">
                  <div className="time-display text-accent">{getTimeInTimezone()}</div>
                  <select 
                    value={selectedTimezone}
                    onChange={(e) => setSelectedTimezone(e.target.value)}
                    className="timezone-selector border-accent"
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
        <div className="window-widget emergency-widget hover-lift transition-smooth">
          <div className="window-titlebar">
            <div className="window-controls">
              <div className="window-control animate-pulse-glow"></div>
              <div className="window-control animate-pulse-glow"></div>
              <div className="window-control animate-pulse-glow"></div>
            </div>
            <div className="window-title">Soporte de Emergencia</div>
          </div>
          <div className="window-content">
            <div className="widget-content flex flex-col items-center justify-center">
              <div className="emergency-icon text-accent animate-gentle-glow">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className="heading-4 text-center">Soporte 24/7</h3>
              <p className="text-secondary text-center">Asistencia inmediata disponible</p>
              <a 
                href="https://wa.me/573152658100?text=Hola,%20necesito%20ayuda!"
                className="btn btn-primary emergency-btn energy-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contactar Soporte
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="dashboard-footer">
        <p className="text-caption">Xtrategia &copy; 2024</p>
        <p className="text-caption mt-2 font-medium">Industrias Galgo</p>
      </footer>
    </div>
  );
}