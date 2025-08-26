import React, { useState, useEffect } from 'react';
import eventData from '../data.json';

const Countdown = () => {
  const { eventSchedule } = eventData;

  const EventCard = ({ day, title, location, dayNumber }) => (
    <div className="card bg-white p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-white font-bold text-xl">{dayNumber}</span>
      </div>
      <h3 className="font-bold text-accent-800 mb-3 text-lg">Day {dayNumber}</h3>
      <p className="text-primary-600 font-medium mb-3 text-sm leading-relaxed">
        {title}
      </p>
      <div className="flex items-center justify-center text-accent-600 text-sm">
        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {location}
      </div>
    </div>
  );

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
            📅 Tema Acara
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Bergabunglah dengan kami dalam rangkaian acara edukatif selama 3 hari penuh
          </p>
          <div className="mt-4 inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            7-9 September 2025 at JICC
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <EventCard 
            day="day1"
            title={eventSchedule.day1.title}
            location={eventSchedule.day1.location}
            dayNumber="1"
          />
          <EventCard 
            day="day2"
            title={eventSchedule.day2.title}
            location={eventSchedule.day2.location}
            dayNumber="2"
          />
          <EventCard 
            day="day3"
            title={eventSchedule.day3.title}
            location={eventSchedule.day3.location}
            dayNumber="3"
          />
        </div>

        <div className="text-center">
          <div className="mb-6">
            <p className="text-white/90 text-lg mb-4">
              Jangan lewatkan kesempatan emas ini untuk mengembangkan diri!
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
              Info Lengkap
            </button>
          </div>

          <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
            <p className="text-white/90 text-sm">
              💡 <strong>Info:</strong> Lokasi akan diumumkan segera. Pantau terus update terbaru!
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
