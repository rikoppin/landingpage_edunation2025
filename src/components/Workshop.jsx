import React, { useState } from 'react';

const Workshop = () => {
  const [activeJurus, setActiveJurus] = useState(0);

  const jurusData = [
    {
      id: 1,
      title: "Kenali Potensi",
      icon: "🔍",
      description: "Mengidentifikasi dan mengembangkan potensi unik setiap siswa",
      details: "Teknik observasi dan assessment untuk mengenali bakat, minat, dan kekuatan siswa. Membangun profil pembelajaran individual yang efektif.",
      color: "from-primary-500 to-primary-600"
    },
    {
      id: 2,
      title: "Kelola Emosi",
      icon: "💚",
      description: "Mengelola emosi diri dan membantu siswa mengatur emosi mereka",
      details: "Strategi self-regulation dan teknik mindfulness untuk guru dan siswa. Menciptakan lingkungan yang mendukung kesehatan emosional.",
      color: "from-secondary-500 to-secondary-600"
    },
    {
      id: 3,
      title: "Tumbuhkan Resiliensi",
      icon: "🌱",
      description: "Membangun ketahanan mental dan kemampuan bangkit dari kesulitan",
      details: "Mengajarkan growth mindset dan strategi coping yang sehat. Membantu siswa menghadapi tantangan dengan percaya diri.",
      color: "from-primary-600 to-primary-700"
    },
    {
      id: 4,
      title: "Jaga Konsistensi",
      icon: "⚖️",
      description: "Mempertahankan standar dan ekspektasi yang konsisten",
      details: "Membangun rutina dan struktur yang mendukung pembelajaran. Menerapkan aturan dan konsekuensi yang adil dan konsisten.",
      color: "from-secondary-600 to-secondary-700"
    },
    {
      id: 5,
      title: "Jalin Koneksi",
      icon: "🤝",
      description: "Membangun hubungan yang bermakna dengan setiap siswa",
      details: "Teknik komunikasi empati dan active listening. Menciptakan trust dan rapport yang kuat dengan siswa dan orang tua.",
      color: "from-primary-500 to-secondary-500"
    },
    {
      id: 6,
      title: "Bangun Kolaborasi",
      icon: "👥",
      description: "Mendorong kerja sama dan pembelajaran kolaboratif",
      details: "Strategi group work yang efektif dan inclusive. Membangun komunitas kelas yang saling mendukung dan menghargai.",
      color: "from-secondary-500 to-primary-500"
    },
    {
      id: 7,
      title: "Menata Situasi",
      icon: "🎯",
      description: "Mengelola dinamika kelas dan situasi pembelajaran",
      details: "Classroom management yang proaktif dan responsif. Menciptakan lingkungan belajar yang optimal untuk semua siswa.",
      color: "from-primary-700 to-secondary-700"
    }
  ];

  const JurusCard = ({ jurus, index, isActive, onClick }) => (
    <div 
      className={`card p-6 cursor-pointer transition-all duration-300 ${
        isActive ? 'ring-2 ring-primary-500 shadow-xl scale-105' : 'hover:shadow-lg hover:scale-102'
      }`}
      onClick={onClick}
    >
      <div className="text-center">
        <div className={`w-16 h-16 bg-gradient-to-br ${jurus.color} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
          {jurus.icon}
        </div>
        <h3 className="font-bold text-accent-800 mb-2">{jurus.title}</h3>
        <p className="text-accent-600 text-sm leading-relaxed">{jurus.description}</p>
        {isActive && (
          <div className="mt-4 p-4 bg-primary-50 rounded-lg animate-fade-in">
            <p className="text-accent-700 text-sm leading-relaxed">{jurus.details}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <section id="workshop" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Workshop Praktis
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-accent-900 mb-6 font-display">
            <span className="text-gradient">7 Jurus Guru BK</span>
            <br />
            Hebat
          </h2>
          <p className="text-xl text-accent-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Praktik langsung 7 jurus kunci yang dapat diterapkan di kelas sehari-hari untuk menciptakan lingkungan pembelajaran yang sehat dan mendukung
          </p>
          
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-accent-800 mb-4">🎯 Format Workshop</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-accent-700">Sesi Interaktif</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-secondary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-accent-700">Diskusi Kelompok</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-accent-700">Studi Kasus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive 7 Jurus */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-accent-800 mb-4">
              Klik untuk mempelajari setiap jurus secara detail
            </h3>
            <p className="text-accent-600 text-center">Setiap jurus dilengkapi dengan teknik praktis yang dapat langsung diterapkan</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {jurusData.map((jurus, index) => (
              <JurusCard
                key={jurus.id}
                jurus={jurus}
                index={index}
                isActive={activeJurus === index}
                onClick={() => setActiveJurus(activeJurus === index ? -1 : index)}
              />
            ))}
          </div>
        </div>

        {/* Workshop Benefits */}
        <div className="card p-8 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-display">
              ✨ Manfaat Workshop
            </h3>
            <p className="text-white/90 text-lg">
              Transformasi nyata yang akan Anda rasakan setelah mengikuti workshop
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Keterampilan Praktis</h4>
              <p className="text-white/90 text-sm">Teknik yang dapat langsung diterapkan di kelas Anda besok</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Networking</h4>
              <p className="text-white/90 text-sm">Bertemu dan bertukar pengalaman dengan sesama pendidik</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Materi Lengkap</h4>
              <p className="text-white/90 text-sm">Handbook dan toolkit yang dapat digunakan sebagai referensi</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Sertifikat</h4>
              <p className="text-white/90 text-sm">Sertifikat keikutsertaan yang dapat digunakan untuk portofolio</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Konsultasi</h4>
              <p className="text-white/90 text-sm">Sesi tanya jawab langsung dengan para ahli</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Dampak Positif</h4>
              <p className="text-white/90 text-sm">Menciptakan perubahan nyata dalam kehidupan siswa Anda</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-secondary-50">
            <h3 className="text-2xl font-bold text-accent-800 mb-4">
              Siap Menjadi Guru BK Hebat? 🚀
            </h3>
            <p className="text-accent-600 mb-6 max-w-2xl mx-auto">
              Bergabunglah dengan ratusan guru lainnya yang telah merasakan transformasi melalui 7 Jurus Guru BK Hebat
            </p>
            <button className="btn-primary text-lg px-8 py-4">
              Daftar Workshop Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;
