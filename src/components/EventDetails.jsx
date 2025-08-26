import React from 'react';
import eventData from '../data.json';

const EventDetails = () => {
  const { eventSchedule } = eventData;
  
  const eventInfo = [
    {
      icon: "📅",
      title: "Tanggal",
      value: "7-9 September 2025",
      subtitle: "3 Hari Berturut-turut",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: "⏰",
      title: "Waktu",
      value: "08.00 - 15.00 WIB",
      subtitle: "7 Jam Penuh",
      color: "from-secondary-500 to-secondary-600"
    },
    {
      icon: "📍",
      title: "Lokasi",
      value: "to be announced",
      subtitle: "Akan Diumumkan Segera",
      color: "from-primary-600 to-secondary-500"
    },
    {
      icon: "💰",
      title: "Biaya",
      value: "GRATIS",
      subtitle: "Tanpa Dipungut Biaya",
      color: "from-secondary-600 to-primary-500"
    }
  ];

  const organizers = [
    {
      name: "STIT Al Wafi",
      role: "Penyelenggara Utama",
      description: "Sekolah Tinggi Ilmu Tarbiyah yang berkomitmen pada pendidikan berkualitas",
      logo: "🏫"
    },
    {
      name: "EduNation 2025",
      role: "Co-Organizer",
      description: "Platform pendidikan nasional untuk transformasi guru Indonesia",
      logo: "🎓"
    }
  ];

  const partners = [
    {
      name: "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi",
      role: "Mitra Pendukung",
      logo: "🏛️"
    },
    {
      name: "Konsorsium Pendidikan Islam Internasional (KOPIN)",
      role: "Mitra Strategis",
      logo: "🌍"
    },
    {
      name: "Islamic Education Management (IEM)",
      role: "Mitra Akademik",
      logo: "📚"
    }
  ];

  const schedule = [
    {
      time: "08.00 - 08.30",
      activity: "Registrasi & Welcome Coffee",
      type: "registration"
    },
    {
      time: "08.30 - 09.00",
      activity: "Pembukaan & Sambutan",
      type: "opening"
    },
    {
      time: "09.00 - 10.30",
      activity: "Sesi 1: Prof. Maila Dinia Husni Rahiem",
      type: "session"
    },
    {
      time: "10.30 - 10.45",
      activity: "Coffee Break",
      type: "break"
    },
    {
      time: "10.45 - 12.15",
      activity: "Sesi 2: Prof. Taufik Kasturi",
      type: "session"
    },
    {
      time: "12.15 - 13.15",
      activity: "Ishoma (Istirahat, Sholat, Makan)",
      type: "break"
    },
    {
      time: "13.15 - 14.45",
      activity: "Workshop: 7 Jurus Guru BK Hebat",
      type: "workshop"
    },
    {
      time: "14.45 - 15.00",
      activity: "Penutupan & Foto Bersama",
      type: "closing"
    }
  ];

  const getScheduleIcon = (type) => {
    switch (type) {
      case 'registration': return '📝';
      case 'opening': return '🎤';
      case 'session': return '👨‍🏫';
      case 'workshop': return '🛠️';
      case 'break': return '☕';
      case 'closing': return '📸';
      default: return '📋';
    }
  };

  const getScheduleColor = (type) => {
    switch (type) {
      case 'registration': return 'border-l-secondary-500 bg-secondary-50';
      case 'opening': return 'border-l-primary-500 bg-primary-50';
      case 'session': return 'border-l-primary-600 bg-primary-100';
      case 'workshop': return 'border-l-secondary-600 bg-secondary-100';
      case 'break': return 'border-l-accent-400 bg-accent-50';
      case 'closing': return 'border-l-primary-500 bg-primary-50';
      default: return 'border-l-accent-300 bg-accent-50';
    }
  };

  return (
    <section id="details" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Detail Acara
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-accent-900 mb-6 font-display">
            <span className="text-gradient">Informasi Lengkap</span>
            <br />
            Acara
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed">
            Semua yang perlu Anda ketahui tentang seminar dan workshop transformasi guru
          </p>
        </div>

        {/* Event Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {eventInfo.map((info, index) => (
            <div key={index} className="card p-6 text-center animate-slide-up" style={{animationDelay: `${index * 100}ms`}}>
              <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                {info.icon}
              </div>
              <h3 className="font-semibold text-accent-800 mb-2">{info.title}</h3>
              <p className="text-lg font-bold text-primary-600 mb-1">{info.value}</p>
              <p className="text-sm text-accent-600">{info.subtitle}</p>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-accent-800 mb-4 font-display">
              📋 Jadwal Acara
            </h3>
            <p className="text-accent-600 text-lg">
              Rundown lengkap kegiatan dari pagi hingga sore
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card p-8">
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div key={index} className={`flex items-center p-4 rounded-lg border-l-4 ${getScheduleColor(item.type)} transition-all duration-300 hover:shadow-md`}>
                    <div className="text-2xl mr-4">
                      {getScheduleIcon(item.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h4 className="font-semibold text-accent-800">{item.activity}</h4>
                        </div>
                        <div className="text-sm font-medium text-primary-600 mt-1 sm:mt-0">
                          {item.time}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Organizers */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-accent-800 mb-4 font-display">
              🏫 Penyelenggara
            </h3>
            <p className="text-accent-600 text-lg">
              Institusi terpercaya yang menghadirkan acara berkualitas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {organizers.map((org, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  {org.logo}
                </div>
                <h4 className="text-xl font-bold text-accent-800 mb-2">{org.name}</h4>
                <p className="text-primary-600 font-semibold mb-3">{org.role}</p>
                <p className="text-accent-600 leading-relaxed">{org.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-accent-800 mb-4 font-display">
              🤝 Mitra Pendukung
            </h3>
            <p className="text-accent-600 text-lg">
              Dukungan dari institusi terkemuka dalam bidang pendidikan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {partner.logo}
                </div>
                <h4 className="font-bold text-accent-800 mb-2 text-sm leading-tight">{partner.name}</h4>
                <p className="text-primary-600 font-medium text-sm">{partner.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements & What to Bring */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-accent-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Persyaratan Peserta
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-accent-700">Guru, Konselor, atau Tenaga Pendidik</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-accent-700">Mahasiswa Pendidikan atau Psikologi</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-accent-700">Praktisi Pendidikan dan Kesehatan Mental</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-accent-700">Orang tua yang peduli pendidikan anak</span>
              </li>
            </ul>
          </div>

          <div className="card p-8">
            <h3 className="text-2xl font-bold text-accent-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              Yang Perlu Dibawa
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-accent-700">Alat tulis dan buku catatan</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-accent-700">Kartu identitas (KTP/SIM)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-accent-700">Laptop/tablet (opsional)</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-secondary-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-accent-700">Semangat belajar dan berbagi! 🚀</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card p-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-display">
              🎯 Siap Bergabung?
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
              Jangan lewatkan kesempatan emas ini untuk bertransformasi menjadi guru yang lebih baik!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-primary-600 hover:bg-primary-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                Daftar Sekarang
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-lg w-full sm:w-auto">
                Download Brosur
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
