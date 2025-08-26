import React, { useState } from 'react';
import eventData from '../data.json';

// Import images
import asnanPurbaImg from '../assets/asnan-purba.png';
import yudilChatimImg from '../assets/yudil-chatim.png';
import ibLogoImg from '../assets/ib-logo.png';
import muhammadZuhdiImg from '../assets/muhammad-zuhdi.png';
import farizaMdShamImg from '../assets/fariza-md-sham.png';
// Day 2 images
import supangatImg from '../assets/supangat.png';
import putraAsgaElevriImg from '../assets/putra-asga-elevri.png';
import mailaDiniaHusniRahiemImg from '../assets/maila-dinia-husni-rahiem.png';
import taufikKasturiImg from '../assets/taufik-kasturi.png';
// Day 3 images
import muhammadAbduhTuasikalImg from '../assets/muhammad-abduh-tuasikal.png';
import abdullahRoyImg from '../assets/abdullah-roy.png';
import ammiNurBaitsImg from '../assets/ammi-nur-baits.png';

const Speakers = () => {
  const [selectedDay, setSelectedDay] = useState('day1');
  const { speakers: speakersData, eventSchedule } = eventData;

  const getModeratorImage = (moderatorName) => {
    if (moderatorName.includes('Asnan Purba')) {
      return asnanPurbaImg;
    }
    if (moderatorName.includes('Supangat')) {
      return supangatImg;
    }
    return null;
  };

  const ModeratorCard = ({ moderator }) => {
    const moderatorImage = getModeratorImage(moderator.name);
    
    return (
      <div className="card p-6 bg-gradient-to-br from-secondary-50 to-primary-50 border-2 border-secondary-200">
        <div className="text-center mb-4">
          {moderatorImage ? (
            <div className="w-32 h-32 mx-auto mb-4">
              <img 
                src={moderatorImage} 
                alt={moderator.name}
                className="w-full h-full object-cover rounded-full border-4 border-secondary-300 shadow-lg"
              />
            </div>
          ) : (
            <div className="w-32 h-32 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
          )}
          <div className="inline-flex items-center px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-xs font-medium mb-2">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
            MODERATOR
          </div>
          <h3 className="text-lg font-bold text-accent-800 mb-1">{moderator.name}</h3>
        </div>
        <p className="text-accent-600 text-sm leading-relaxed">{moderator.bio}</p>
      </div>
    );
  };

  const getSpeakerImage = (speakerName) => {
    // Day 1 speakers
    if (speakerName.includes('YUDIL CHATIM')) {
      return yudilChatimImg;
    }
    if (speakerName.includes('INTERNATIONAL BACCALAUREATE')) {
      return ibLogoImg;
    }
    if (speakerName.includes('MUHAMMAD ZUHDI')) {
      return muhammadZuhdiImg;
    }
    if (speakerName.includes('FARIZA MD SHAM')) {
      return farizaMdShamImg;
    }
    // Day 2 speakers
    if (speakerName.includes('PUTRA ASGA ELEVRI')) {
      return putraAsgaElevriImg;
    }
    if (speakerName.includes('MAILA DINIA HUSNI RAHIEM')) {
      return mailaDiniaHusniRahiemImg;
    }
    if (speakerName.includes('TAUFIK KASTURI')) {
      return taufikKasturiImg;
    }
    // Day 3 speakers
    if (speakerName.includes('MUHAMMAD ABDUH TUASIKAL')) {
      return muhammadAbduhTuasikalImg;
    }
    if (speakerName.includes('ABDULLAH ROY')) {
      return abdullahRoyImg;
    }
    if (speakerName.includes('AMMI NUR BAITS')) {
      return ammiNurBaitsImg;
    }
    return null;
  };

  const SpeakerCard = ({ speaker, index }) => {
    const speakerImage = getSpeakerImage(speaker.name);
    
    return (
      <div className={`card p-6 animate-slide-up ${index % 2 === 1 ? 'animation-delay-200' : ''}`}>
        <div className="text-center mb-4">
          {speakerImage ? (
            <div className="w-28 h-28 mx-auto mb-4">
              <img 
                src={speakerImage} 
                alt={speaker.name}
                className="w-full h-full object-cover rounded-full border-4 border-primary-300 shadow-lg"
              />
            </div>
          ) : (
            <div className="w-28 h-28 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-14 h-14 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          )}
          <h3 className="text-lg font-bold text-accent-800 mb-1">{speaker.name}</h3>
          {speaker.session && (
            <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium mb-2">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              SESI: {speaker.session}
            </div>
          )}
        </div>
        <div className="bg-primary-50 p-4 rounded-lg">
          <p className="text-accent-700 text-sm leading-relaxed">{speaker.bio}</p>
        </div>
      </div>
    );
  };

  const DayButton = ({ day, dayNumber, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
        isActive
          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
          : 'bg-white text-accent-700 hover:bg-primary-50 border border-primary-200'
      }`}
    >
      Day {dayNumber}
    </button>
  );

  return (
    <section id="speakers" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Pembicara Utama
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-accent-900 mb-6 font-display">
            <span className="text-gradient">Tokoh-Tokoh Pendidikan</span>
            <br />
            Terkemuka
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed">
            Belajar langsung dari para ahli yang telah berpengalaman puluhan tahun dalam bidang pendidikan dan kesehatan mental
          </p>
        </div>

        {/* Day Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <DayButton
            day="day1"
            dayNumber="1"
            isActive={selectedDay === 'day1'}
            onClick={() => setSelectedDay('day1')}
          />
          <DayButton
            day="day2"
            dayNumber="2"
            isActive={selectedDay === 'day2'}
            onClick={() => setSelectedDay('day2')}
          />
          <DayButton
            day="day3"
            dayNumber="3"
            isActive={selectedDay === 'day3'}
            onClick={() => setSelectedDay('day3')}
          />
        </div>

        {/* Event Title for Selected Day */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Day {selectedDay.slice(-1)} Event
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-accent-800 mb-4">
            {eventSchedule[selectedDay].title}
          </h3>
          <p className="text-accent-600">
            <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {eventSchedule[selectedDay].location}
          </p>
        </div>

        {/* Moderator Section */}
        {speakersData[selectedDay].moderator && (
          <div className="mb-8">
            <ModeratorCard moderator={speakersData[selectedDay].moderator} />
          </div>
        )}

        {/* Speakers Grid */}
        {speakersData[selectedDay].speakers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
            {speakersData[selectedDay].speakers.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 mb-16">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-accent-800 mb-2">Speakers Coming Soon</h3>
            <p className="text-accent-600">Pembicara untuk hari ini akan diumumkan segera</p>
          </div>
        )}

        {/* Key Features */}
        <div id="key-features" className="card p-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-display">
              🎯 Key Features
            </h3>
            <p className="text-white/90 text-lg">
              Fitur unggulan yang akan Anda dapatkan di setiap hari acara
            </p>
          </div>

          {/* Day 1 Features */}
          {selectedDay === 'day1' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Global Dialogue</h4>
                <p className="text-white/90 text-sm">Bringing together world-class scholars, education leaders, and policymakers.</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Future-Oriented Insights</h4>
                <p className="text-white/90 text-sm">Exploring transformative trends shaping education towards 2045.</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Islamic Perspective</h4>
                <p className="text-white/90 text-sm">Integrating values of Islamic character and global citizenship in education.</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Interactive Experience</h4>
                <p className="text-white/90 text-sm">Live Q&A, networking rooms, and international certificate for participants.</p>
              </div>
            </div>
          )}

          {/* Day 2 Features */}
          {selectedDay === 'day2' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Dialog Inspiratif</h4>
                <p className="text-white/90 text-sm">Wawasan dari para profesor terkemuka di bidang pendidikan dan psikologi.</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Pembelajaran Emosional & Sosial</h4>
                <p className="text-white/90 text-sm">Strategi untuk membangun ruang kelas yang aman dan berempati.</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Kesadaran Kesehatan Mental</h4>
                <p className="text-white/90 text-sm">Alat-alat praktis untuk guru sebagai penanggap pertama.</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Lokakarya Praktis</h4>
                <p className="text-white/90 text-sm">Fasilitasi langsung 7 Jurus Guru BK Hebat untuk dampak nyata di kelas.</p>
              </div>
            </div>
          )}

          {/* Day 3 Features */}
          {selectedDay === 'day3' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Ilmu Langsung dari Ahlinya</h4>
                <p className="text-white/90 text-sm">Mendapatkan wawasan pendidikan Islam dari tiga asatidz dengan spesialisasi berbeda.</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Panduan Praktis Mendidik Anak</h4>
                <p className="text-white/90 text-sm">Memperoleh tips dan solusi nyata untuk diterapkan dalam keluarga.</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Membangun Jaringan Komunitas</h4>
                <p className="text-white/90 text-sm">Berkesempatan bertemu dan berinteraksi dengan sesama orang tua serta pendidik.</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Motivasi Menjadi Teladan</h4>
                <p className="text-white/90 text-sm">Mendapat dorongan untuk memperbaiki diri demi menjadi contoh terbaik bagi anak.</p>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Memahami Fondasi Pendidikan</h4>
                <p className="text-white/90 text-sm">Mempelajari konsep pendidikan Islam secara komprehensif dan terstruktur.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
