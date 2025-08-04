import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 gradient-bg min-h-screen flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Seminar & Workshop Nasional
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-900 mb-6 animate-slide-up">
            <span className="text-gradient">Sentuh Hati,</span>
            <br />
            <span className="text-gradient">Bangun Generasi</span>
          </h1>

          {/* Subtitle */}
          <div className="mb-8 animate-slide-up animation-delay-200">
            <p className="text-xl sm:text-2xl font-semibold text-primary-600 mb-2">
              Road to EduNation 2025
            </p>
            <p className="text-lg sm:text-xl text-accent-700 max-w-3xl mx-auto">
              Transformasi Guru Menuju Sekolah Sehat Mental
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-accent-600 max-w-4xl mx-auto mb-12 leading-relaxed animate-slide-up animation-delay-400">
             Seminar Nasional dan Workshop Fasilitasi Praktis Menghadirkan Tokoh-Tokoh Pendidikan Terkemuka untuk membangun ruang kelas yang aman dan empatik bagi kesehatan mental siswa dan&nbsp;guru.
          </p>

          {/* Key Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up animation-delay-600">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-accent-800 mb-2">Tanggal</h3>
              <p className="text-primary-600 font-medium">11 Agustus 2025</p>
              <p className="text-sm text-accent-600">(Tentatif)</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-accent-800 mb-2">Waktu</h3>
              <p className="text-secondary-600 font-medium">08.00 - 15.00 WIB</p>
              <p className="text-sm text-accent-600">7 Jam Penuh</p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-accent-800 mb-2">Lokasi</h3>
              <p className="text-primary-600 font-medium">Andalucia Hall</p>
              <p className="text-sm text-accent-600">Menara 165</p>
            </div>
          </div>

          {/* Free Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-secondary-500 to-secondary-600 text-white rounded-full text-lg font-bold mb-8 shadow-lg animate-bounce-slow">
            GRATIS - Tanpa Dipungut Biaya
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Daftar Sekarang
            </button>
            <button className="btn-outline text-lg px-8 py-4 w-full sm:w-auto">
              <svg className="w-5 h-5 mr-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
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
