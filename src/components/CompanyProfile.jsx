import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CompanyProfile = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'identity',
      title: 'Identitas Lembaga',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card p-6 bg-gradient-to-br from-primary-50 to-primary-100">
              <h4 className="font-semibold text-primary-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                Nama Lembaga
              </h4>
              <p className="text-primary-700">Konsorsium Pendidikan Islam Internasional (KOPIN)</p>
            </div>
            <div className="card p-6 bg-gradient-to-br from-secondary-50 to-secondary-100">
              <h4 className="font-semibold text-secondary-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Bentuk
              </h4>
              <p className="text-secondary-700">Konsorsium lembaga pendidikan Islam berakreditasi A & berstandar global</p>
            </div>
            <div className="card p-6 bg-gradient-to-br from-primary-50 to-primary-100">
              <h4 className="font-semibold text-primary-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Wilayah Kerja
              </h4>
              <p className="text-primary-700">Nasional & Internasional</p>
            </div>
            <div className="card p-6 bg-gradient-to-br from-secondary-50 to-secondary-100">
              <h4 className="font-semibold text-secondary-800 mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Bidang
              </h4>
              <p className="text-secondary-700">Pendidikan, Riset, Pelatihan, Kolaborasi Global</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'background',
      title: 'Latar Belakang',
      content: (
        <div className="card p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-gray-700 leading-relaxed text-lg">
                Dalam menghadapi dinamika global, pendidikan Islam dituntut untuk mampu beradaptasi dengan standar internasional tanpa meninggalkan nilai-nilai Islami. KOPIN hadir sebagai langkah strategis untuk membangun ekosistem kolaboratif antar sekolah Islam/pesantren unggulan di Indonesia. Konsorsium ini menjadi forum bersama dalam pengembangan kurikulum, pertukaran pelajar dan guru, riset kolaboratif, hingga promosi pendidikan Islam Indonesia di kancah global.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'vision-mission',
      title: 'Visi & Misi',
      content: (
        <div className="space-y-8">
          <div className="card p-8 bg-gradient-to-br from-green-50 to-emerald-100">
            <h4 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Visi
            </h4>
            <p className="text-green-700 text-lg italic leading-relaxed">
              "Menjadi konsorsium pendidikan Islam terkemuka yang berperan sebagai pusat kolaborasi, inovasi, dan diplomasi pendidikan Islam di tingkat global."
            </p>
          </div>
          <div className="card p-8 bg-gradient-to-br from-purple-50 to-violet-100">
            <h4 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
              <svg className="w-8 h-8 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Misi
            </h4>
            <ul className="space-y-3 text-purple-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Meningkatkan mutu & daya saing lembaga pendidikan Islam.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Menyediakan platform kolaborasi akademik & riset.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Mendorong kurikulum internasional berlandaskan nilai Islam.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Memberdayakan guru & siswa melalui pelatihan.
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Memperluas jejaring pendidikan Islam Indonesia di dunia.
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'core-values',
      title: 'Nilai Utama (Core Values)',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Integrity', desc: 'Kejujuran & akuntabilitas', color: 'red', icon: '🤝' },
            { title: 'Excellence', desc: 'Mutu & kualitas global', color: 'blue', icon: '⭐' },
            { title: 'Collaboration', desc: 'Kerja sama lintas lembaga/negara', color: 'green', icon: '🤝' },
            { title: 'Innovation', desc: 'Kreativitas & riset', color: 'purple', icon: '💡' },
            { title: 'Islamic Character', desc: 'Nilai & akhlak Islami', color: 'yellow', icon: '🕌' }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`card p-6 bg-gradient-to-br from-${value.color}-50 to-${value.color}-100 text-center`}
            >
              <div className="text-4xl mb-3">{value.icon}</div>
              <h4 className={`font-bold text-${value.color}-800 mb-2`}>{value.title}</h4>
              <p className={`text-${value.color}-700 text-sm`}>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: 'benefits',
      title: 'Manfaat Bergabung dengan KOPIN',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Kurikulum Internasional', desc: 'Akses dan adopsi kurikulum berstandar global', icon: '📚' },
            { title: 'Reputasi Meningkat', desc: 'Penguatan kredibilitas lembaga di mata publik dan dunia akademik', icon: '🏆' },
            { title: 'Kolaborasi Global', desc: 'Peluang pertukaran pelajar, riset, dan kemitraan luar negeri', icon: '🌍' },
            { title: 'Pelatihan Guru', desc: 'Program pengembangan profesional guru dan staf dengan sertifikasi', icon: '👨‍🏫' },
            { title: 'Perluasan Layanan', desc: 'Membuka peluang ekspansi program internasional dan cabang baru', icon: '📈' },
            { title: 'Daya Saing Tinggi', desc: 'Kemampuan menarik siswa lokal maupun internasional serta akses ke pendanaan global', icon: '💪' }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card p-6 bg-gradient-to-br from-indigo-50 to-blue-100"
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h4 className="font-bold text-indigo-800 mb-2">{benefit.title}</h4>
                  <p className="text-indigo-700 text-sm">{benefit.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: 'services',
      title: 'Bidang Layanan',
      content: (
        <div className="space-y-6">
          {[
            { title: 'Academic Development', desc: 'Kurikulum internasional, akreditasi, penguatan mutu', icon: '🎓', color: 'blue' },
            { title: 'Training & Certification', desc: 'Pelatihan guru, sertifikasi profesional, pengembangan SDM', icon: '📜', color: 'green' },
            { title: 'Research & Publication', desc: 'Riset kolaboratif, publikasi jurnal internasional, prosiding', icon: '🔬', color: 'purple' },
            { title: 'Exchange Program', desc: 'Pertukaran guru, siswa, dan penelitian antar lembaga', icon: '🔄', color: 'orange' },
            { title: 'Education Expo & Promotion', desc: 'Promosi pendidikan Islam Indonesia di forum global', icon: '🌟', color: 'pink' }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className={`card p-6 bg-gradient-to-r from-${service.color}-50 to-${service.color}-100`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-4xl">{service.icon}</div>
                <div>
                  <h4 className={`font-bold text-${service.color}-800 mb-2`}>{service.title}</h4>
                  <p className={`text-${service.color}-700`}>{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Kontak Resmi',
      content: (
        <div className="card p-8 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="text-center mb-8">
            <h4 className="text-2xl font-bold text-gray-800 mb-2">Sekretariat KOPIN</h4>
            <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h5 className="font-semibold text-gray-800">Alamat</h5>
                  <p className="text-gray-600">Grand Galaxy City, Jl. Boulevard Raya Blok RGF No.16, Bekasi, Jawa Barat 17147</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h5 className="font-semibold text-gray-800">Email</h5>
                  <p className="text-gray-600">info@kopinindonesia.org</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h5 className="font-semibold text-gray-800">Telepon</h5>
                  <p className="text-gray-600">+62 821-1808-7397 (Urwah)</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
                <div>
                  <h5 className="font-semibold text-gray-800">Website</h5>
                  <p className="text-gray-600">https://kopinindonesia.org/</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-accent-900 mb-6"
            >
              <span className="text-gradient">Company Profile</span>
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl font-semibold text-primary-600 mb-4"
            >
              KOPIN
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-accent-600 max-w-3xl mx-auto leading-relaxed"
            >
              Konsorsium Pendidikan Islam Internasional
            </motion.p>
          </div>
        </div>
      </section>

      {/* Slide Navigation */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {slide.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Slides */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.h3 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-accent-900 mb-8 text-center"
                >
                  {slides[currentSlide].title}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {slides[currentSlide].content}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Navigation Controls */}
      <section className="pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center space-x-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-primary-600 hover:text-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === 0}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentSlide === slides.length - 1}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Decorative Elements */}
      <div className="animated-dot absolute top-32 left-10 w-16 h-16 bg-primary-200 rounded-full opacity-30 animate-pulse-slow dot-float"></div>
      <div className="animated-dot absolute bottom-32 right-10 w-12 h-12 bg-primary-300 rounded-full opacity-40 animate-bounce-slow animation-delay-400 dot-scale-pulse"></div>
      <div className="animated-dot absolute top-1/2 right-5 w-10 h-10 bg-primary-400 rounded-full opacity-35 animate-pulse-slow animation-delay-200 dot-rotate"></div>
    </div>
  );
};

export default CompanyProfile;
