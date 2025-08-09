import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Pembicara', href: '#speakers' },
    { name: 'Workshop', href: '#workshop' },
    { name: 'Detail Acara', href: '#details' },
    { name: 'Kontak', href: '#contact' }
  ];

  const hashtags = [
    '#AlWafi',
    '#EduNation2025',
    '#GuruBKHebat',
    '#SeminarPendidikan',
    '#KesehatanMental',
    '#SekolahSehatMental'
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-accent-900 via-accent-800 to-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <p className="text-white/80 text-sm">Transformasi Pendidikan Indonesia</p>
            </div>
            
            {/* Event Info */}
            <div>
            </div>

            {/* Hashtags */}
            <div>
              <h4 className="font-semibold mb-3 text-sm">Hashtags:</h4>
              <div className="flex flex-wrap gap-2">
                {hashtags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary-500/20 text-primary-200 rounded text-xs font-medium hover:bg-primary-500/30 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              Menu Cepat
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-white hover:text-primary-300 transition-colors text-sm flex items-center group"
                  >
                    <svg className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hubungi Kami
            </h4>
            
            <div className="space-y-4 mb-6">
              <div className="text-sm">
                <p className="text-white/60 mb-1">Email:</p>
                <a href="mailto:info@kopinindonesia.org" className="text-white/90 hover:text-primary-300 transition-colors">
                  info@kopinindonesia.org
                </a>
              </div>
              
              <div className="text-sm">
                <p className="text-white/60 mb-1">Telepon:</p>
                <a href="tel:+6282118087397" className="text-white/90 hover:text-primary-300 transition-colors">
                  +62 821-1808-7397 (Urwah)
                </a>
              </div>
              
              <div className="text-sm">
                <p className="text-white/60 mb-1">Alamat:</p>
                <p className="text-white/90 text-xs leading-relaxed">
                  Grand Galaxy City, Jl. Boulevard Raya Blok RGF No.16, 
                  RT.007/RW.018, Jaka Setia, Kec. Bekasi Sel., 
                  Kota Bekasi, Jawa Barat 17147
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Organizers & Partners */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4">Penyelenggara & Mitra</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
              {/* Organizers */}
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">SA</span>
                </div>
                <p className="text-xs text-white/80">STIT Al Wafi</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <p className="text-xs text-white/80">EduNation 2025</p>
              </div>

              {/* Partners */}
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm">🏛️</span>
                </div>
                <p className="text-xs text-white/80">Kemendikbudristek</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm">🌍</span>
                </div>
                <p className="text-xs text-white/80">KOPIN</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-sm">📚</span>
                </div>
                <p className="text-xs text-white/80">IEM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-white/80 text-sm">
                © {currentYear} EduNation 2025. All rights reserved.
              </p>
              <p className="text-white/60 text-xs mt-1">
                Dibuat dengan ❤️ untuk kemajuan pendidikan Indonesia
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-xs text-white/60">
              <button className="hover:text-white/80 transition-colors">
                Kebijakan Privasi
              </button>
              <button className="hover:text-white/80 transition-colors">
                Syarat & Ketentuan
              </button>
              <button className="hover:text-white/80 transition-colors">
                Bantuan
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40"
        title="Kembali ke atas"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
