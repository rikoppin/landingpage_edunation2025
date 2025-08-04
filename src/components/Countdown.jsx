import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-08-11T08:00:00+07:00'); // WIB timezone

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsExpired(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const CountdownCard = ({ value, label, color }) => (
    <div className={`card p-6 text-center ${color} transform hover:scale-105 transition-all duration-300`}>
      <div className="text-4xl sm:text-5xl font-bold text-white mb-2 font-display">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-white/90 text-sm sm:text-base font-medium uppercase tracking-wide">
        {label}
      </div>
    </div>
  );

  if (isExpired) {
    return (
      <section className="py-16 bg-gradient-to-r from-accent-800 to-accent-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Pendaftaran Telah Ditutup
            </h2>
            <p className="text-white/90 text-lg">
              Acara telah dimulai. Terima kasih atas antusiasme Anda!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 via-primary-700 to-secondary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
            ⏰ Hitung Mundur Pendaftaran
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Jangan sampai terlewat! Pendaftaran akan ditutup saat acara dimulai
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Berakhir: 11 Agustus 2025, 08:00 WIB
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
          <CountdownCard 
            value={timeLeft.days} 
            label="Hari" 
            color="bg-gradient-to-br from-primary-500 to-primary-600"
          />
          <CountdownCard 
            value={timeLeft.hours} 
            label="Jam" 
            color="bg-gradient-to-br from-secondary-500 to-secondary-600"
          />
          <CountdownCard 
            value={timeLeft.minutes} 
            label="Menit" 
            color="bg-gradient-to-br from-primary-500 to-primary-600"
          />
          <CountdownCard 
            value={timeLeft.seconds} 
            label="Detik" 
            color="bg-gradient-to-br from-secondary-500 to-secondary-600"
          />
        </div>

        <div className="text-center">
          <div className="mb-6">
            <p className="text-white/90 text-lg mb-4">
              Segera daftarkan diri Anda sebelum terlambat!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg w-full sm:w-auto">
              <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Daftar Sekarang
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg w-full sm:w-auto">
              <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
              Bagikan Acara
            </button>
          </div>

          <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <p className="text-white/90 text-sm">
              💡 <strong>Tips:</strong> Bookmark halaman ini dan pantau terus countdown-nya!
            </p>
          </div>
        </div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-20 left-5 w-4 h-4 bg-white rounded-full animate-ping opacity-75"></div>
      <div className="absolute bottom-20 right-5 w-3 h-3 bg-white rounded-full animate-ping opacity-75 animation-delay-400"></div>
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-white rounded-full animate-ping opacity-75 animation-delay-200"></div>
    </section>
  );
};

export default Countdown;
