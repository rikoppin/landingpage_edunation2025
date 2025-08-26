import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-07T08:00:00+07:00'); // WIB timezone

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section id="home" className="pt-20 pb-16 gradient-bg min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-900 mb-6 animate-slide-up">
            <span className="text-gradient">Road to Edunation Fest</span>
            <br />
            <span className="text-gradient">2025</span>
          </h1>

          {/* Subtitle */}
          <div className="mb-8 animate-slide-up animation-delay-200">
            <p className="text-xl sm:text-2xl font-semibold text-primary-600 mb-2">
              7-9 November 2025 at JICC
            </p>
        
          </div>

          {/* Countdown Timer */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-3xl px-10 py-6 shadow-xl">
              <div className="flex items-center justify-center space-x-6">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                  <div className="text-sm opacity-90 mt-1">Hari</div>
                </div>
                <div className="text-3xl opacity-70">:</div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-sm opacity-90 mt-1">Jam</div>
                </div>
                <div className="text-3xl opacity-70">:</div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-sm opacity-90 mt-1">Menit</div>
                </div>
                <div className="text-3xl opacity-70">:</div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-sm opacity-90 mt-1">Detik</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              Daftar Sekarang
            </button>
            <button className="btn-outline text-lg px-8 py-4 w-full sm:w-auto">
              Info Lengkap
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements - Enhanced with more dots */}
      <div className="animated-dot absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-50 animate-pulse-slow dot-float"></div>
      <div className="animated-dot absolute bottom-20 right-10 w-16 h-16 bg-primary-300 rounded-full opacity-50 animate-pulse-slow animation-delay-400 dot-scale-pulse"></div>
      <div className="animated-dot absolute top-1/2 left-5 w-12 h-12 bg-primary-400 rounded-full opacity-40 animate-bounce-slow animation-delay-200 dot-rotate"></div>
      
      {/* Additional animated dots */}
      <div className="animated-dot absolute top-32 right-20 w-8 h-8 bg-primary-300 rounded-full opacity-30 dot-float animation-delay-600"></div>
      <div className="animated-dot absolute top-1/3 right-5 w-14 h-14 bg-primary-200 rounded-full opacity-45 dot-scale-pulse animation-delay-800"></div>
      <div className="animated-dot absolute bottom-32 left-20 w-10 h-10 bg-primary-400 rounded-full opacity-35 dot-rotate animation-delay-400"></div>
      <div className="animated-dot absolute top-1/4 left-1/4 w-6 h-6 bg-primary-300 rounded-full opacity-25 dot-float animation-delay-1000"></div>
      <div className="animated-dot absolute bottom-1/4 right-1/4 w-18 h-18 bg-primary-200 rounded-full opacity-40 dot-scale-pulse animation-delay-200"></div>
      <div className="animated-dot absolute top-3/4 left-1/3 w-8 h-8 bg-primary-400 rounded-full opacity-30 dot-rotate animation-delay-600"></div>
      <div className="animated-dot absolute top-16 left-1/2 w-12 h-12 bg-primary-300 rounded-full opacity-35 dot-float animation-delay-800"></div>
      <div className="animated-dot absolute bottom-16 left-2/3 w-10 h-10 bg-primary-200 rounded-full opacity-40 dot-scale-pulse animation-delay-1200"></div>
      <div className="animated-dot absolute top-2/3 right-1/3 w-14 h-14 bg-primary-400 rounded-full opacity-30 dot-rotate animation-delay-400"></div>
      <div className="animated-dot absolute bottom-1/3 left-16 w-6 h-6 bg-primary-300 rounded-full opacity-25 dot-float animation-delay-1000"></div>
      <div className="animated-dot absolute top-1/2 right-16 w-16 h-16 bg-primary-200 rounded-full opacity-45 dot-scale-pulse animation-delay-600"></div>
      <div className="animated-dot absolute bottom-2/3 right-8 w-8 h-8 bg-primary-400 rounded-full opacity-35 dot-rotate animation-delay-800"></div>
    </section>
  );
};

export default Hero;
