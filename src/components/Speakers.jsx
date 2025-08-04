import React from 'react';

const Speakers = () => {
  const speakers = [
    {
      id: 1,
      name: "Prof. Maila Dinia Husni Rahiem, M.A., Ph.D.",
      title: "Pakar Pendidikan Emosional dan Sosial",
      topic: "Transformasi Pendidikan Emosional dan Sosial di Sekolah",
      focus: "Kolaborasi semua guru dalam membangun ruang kelas yang aman dan empatik",
      image: "👩‍🏫",
      expertise: ["Pendidikan Emosional", "Psikologi Pendidikan", "Manajemen Kelas"],
      achievements: ["Professor Pendidikan", "Peneliti Internasional", "Penulis Buku Pendidikan"]
    },
    {
      id: 2,
      name: "Prof. Taufik Kasturi, M.Si., Ph.D.",
      title: "Ahli Kesehatan Mental Remaja",
      topic: "Kesehatan Mental Remaja dan Guru sebagai Penolong Pertama",
      focus: "Strategi deteksi dini masalah psikososial dan membangun hubungan empatik antara guru dan siswa",
      image: "👨‍🏫",
      expertise: ["Kesehatan Mental", "Psikologi Remaja", "Konseling Pendidikan"],
      achievements: ["Professor Psikologi", "Konsultan Kesehatan Mental", "Praktisi Terapi"]
    }
  ];

  const SpeakerCard = ({ speaker, index }) => (
    <div className={`card p-8 animate-slide-up ${index === 1 ? 'animation-delay-200' : ''}`}>
      <div className="text-center mb-6">
        <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
          {speaker.image}
        </div>
        <h3 className="text-xl font-bold text-accent-800 mb-2">{speaker.name}</h3>
        <p className="text-primary-600 font-semibold">{speaker.title}</p>
      </div>

      <div className="space-y-6">
        {/* Topic */}
        <div className="bg-primary-50 p-4 rounded-lg">
          <h4 className="font-semibold text-primary-700 mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" />
            </svg>
            Topik Pembahasan
          </h4>
          <p className="text-accent-700 leading-relaxed">{speaker.topic}</p>
        </div>

        {/* Focus */}
        <div className="bg-secondary-50 p-4 rounded-lg">
          <h4 className="font-semibold text-secondary-700 mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Fokus Utama
          </h4>
          <p className="text-accent-700 leading-relaxed">{speaker.focus}</p>
        </div>

        {/* Expertise */}
        <div>
          <h4 className="font-semibold text-accent-800 mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Keahlian
          </h4>
          <div className="flex flex-wrap gap-2">
            {speaker.expertise.map((skill, idx) => (
              <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h4 className="font-semibold text-accent-800 mb-3 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            Pencapaian
          </h4>
          <ul className="space-y-2">
            {speaker.achievements.map((achievement, idx) => (
              <li key={idx} className="flex items-center text-accent-700">
                <svg className="w-4 h-4 text-secondary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {achievement}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
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

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
          ))}
        </div>

        {/* What You'll Learn */}
        <div className="card p-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-display">
              🎯 Apa yang Akan Anda Pelajari?
            </h3>
            <p className="text-white/90 text-lg">
              Materi komprehensif yang akan mengubah cara Anda memahami pendidikan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Pendidikan Emosional</h4>
              <p className="text-white/90 text-sm">Membangun kecerdasan emosional siswa melalui pendekatan yang tepat</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Deteksi Dini</h4>
              <p className="text-white/90 text-sm">Mengenali tanda-tanda masalah psikososial pada siswa sejak dini</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Kolaborasi Tim</h4>
              <p className="text-white/90 text-sm">Membangun kerja sama yang efektif antar guru dan tenaga pendidik</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Strategi Praktis</h4>
              <p className="text-white/90 text-sm">Teknik-teknik yang dapat langsung diterapkan di kelas</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Empati & Koneksi</h4>
              <p className="text-white/90 text-sm">Membangun hubungan empatik yang kuat dengan siswa</p>
            </div>

            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Lingkungan Aman</h4>
              <p className="text-white/90 text-sm">Menciptakan ruang kelas yang aman dan mendukung kesehatan mental</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
