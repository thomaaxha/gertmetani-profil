import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Timer, Mail, Phone, MapPin, Menu, X , Monitor , AtSign} from 'lucide-react';
import CountdownTimer from './components/CountdownTimer';
import SocialLink from './components/SocialLink';
import PolicyCard from './components/PolicyCard';
import PolicyPage from './pages/PolicyPage';
import Gallery from './components/Gallery';
import InterviewsPage from './pages/InterviewsPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  document.title = "Gert Metani";
  
  const policies = [
    {
      title: "Një Teatër Në Çdo Bashki",
      description: "Përvoja ime me teatrin, nga shfaqjet për të rritur në 2012 deri te teatri i kukullave në 2022 falë birit tim, më bëri të kuptoj rëndësinë e artit në edukim, ndaj nisma ime “Një teatër në çdo bashki të Shqipërisë” synon ta bëjë teatrin të aksesueshëm për të gjithë, si një domosdoshmëri për zhvillimin e shoqërisë dhe mbështetjen e artistëve të rinj."
    },
    {
      title: "Qendrat Multifunksionale Rinore",
      description: "Me dëshirën për të kontribuar në vendlindjen tonë, fillimisht themeluam Klubin e Librit Kavajë për të promovuar kulturën dhe leximin, dhe tani synojmë të krijojmë “Një Qendër Rinore Multifunksionale Në Çdo Bashki” – një hapësirë edukative dhe rekreative që ofron kurse dhe aktivitete për të rinjtë, duke i larguar nga pasiviteti dhe duke u dhënë mundësi për zhvillim intelektual e profesional."
    },
    {
      title: "Akademitë Shumësporteshe Në Çdo Qytet",
      description: "Sporti ka qenë dhe mbetet pjesë e pandashme e jetës sime, si atlet dhe trajner, ndaj nisma ime e tretë synon krijimin e klubeve dhe akademive sportive në qarkun e Tiranës, për të ofruar mundësi të larmishme stërvitjeje dhe për të nxitur një stil jetese të shëndetshëm, duke lobuar për mbështetjen institucionale që mungon."
    },
    {
      title: "Jo Më Shtëpi Fëmijësh",
      description: "“JO MË SHTËPI FËMIJËSH” – KOHA PËR NJË REFORMË TË VËRTETË!"
    },
    {
      title: "Parlamenti Shqiptarisë",
      description: "Parlamenti Shqiptarisë."
    },
    {
      title: "Një Universitet në Kavajë",
      description: "Duke besuar se arsimi sjell zhvillim, nisma ime për krijimin e një universiteti publik në Kavajë synon të rivitalizojë sektorët kryesorë të ekonomisë dhe të ndalë eksodin e të rinjve, duke e kthyer qytetin në një qendër të dijes dhe mundësive për brezat e ardhshëm."
    },
    {
      title: "Muze Virtualë të Heronjve Kombëtarë në Shkollat e Shqipërisë",
      description: "Nisma për krijimin e muzeve virtuale të heronjve kombëtarë në shkollat e Shqipërisë synon të ruajë identitetin kombëtar dhe të edukojë brezat e rinj përmes teknologjisë AR/VR, duke e bërë historinë më tërheqëse dhe duke forcuar ndjenjën e patriotizmit në një epokë globalizimi."
    },
    {
      title: "Urdhri i Profesionistëve të Fitnesit",
      description: "Duke parë rëndësinë e fitnesit për shëndetin publik dhe mungesën e rregullimit profesional, po loboj për krijimin e Urdhrit të Profesionistëve të Fitnesit, një nismë e domosdoshme për të siguruar standarde dhe mbështetje për instruktorët e këtij sektori vital."
    },
    {
      title: "Pension Solidariteti",
      description: "Duke parë rëndësinë e fitnesit për shëndetin publik dhe mungesën e rregullimit profesional, po loboj për krijimin e Urdhrit të Profesionistëve të Fitnesit, një nismë e domosdoshme për të siguruar standarde dhe mbështetje për instruktorët e këtij sektori vital."
    }
  ];

  const closeMenu = () => setIsMenuOpen(false);

  const HomePage = () => (
    <>
      {/* Hero Section */}
      <section className="bg-red-800 pt-16 md:pt-20 text-white">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Gert Metani</h1>
              <h2 className="text-2xl md:text-3xl mb-6">Kandidat për deputet në zgjedhjet parlamentare të Republikës së Shqipërisë, 11 Maj 2025</h2>
              <p className="text-lg md:text-xl mb-8">"ASNJË I LËNË PAS"</p>
              <div className="flex justify-center md:justify-start">
                <CountdownTimer targetDate="2025-05-11" />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-4">SHTËPITË E MIA VIRTUALE:</h3>
                <div className="flex justify-center md:justify-start space-x-6">
                  <SocialLink href="https://www.facebook.com/@gert.metani/" icon={<Facebook size={24} />} label="Facebook" />
                  <SocialLink href="https://www.instagram.com/gert.metani/" icon={<Instagram size={24} />} label="Instagram" />
                  <SocialLink href="https://www.linkedin.com/in/gert-m-807b56181" icon={<Linkedin size={24} />} label="LinkedIn" />
                  <SocialLink href="https://youtube.com/@gertmetani?si=kxv8a9gUM-Zy0bv8" icon={<Youtube size={24} />} label="YouTube" />
                  <a href="https://www.tiktok.com/@gert.metani?_t=ZM-8uPqcLOq2oX&_r=1" target="_blank" rel="noopener noreferrer">
                    <img src="img/icons/tiktok-icon.png" alt="Tik tok" width={24} height={24} style={{ cursor: "pointer" }} className="text-green-200 hover:text-white transition-colors"/>
                  </a>
                  <SocialLink href="https://x.com/metanigert?s=11" icon={<X size={24} />} label="X" />
                  <SocialLink href="https://www.threads.net/@gert.metani?igshid=NTc4MTIwNjQ2YQ==" icon={<AtSign size={24} />} label="Thread" />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 md:mt-0">
              <img
                src="img/gallery/gm-printed-poster.jpeg"
                alt="Gert Metani"
                className="rounded-lg shadow-2xl w-full max-w-sm md:max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-green-800">Jetëshkrim</h2>
          <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed px-4">
          Gert Metani është një jurist i përkushtuar, pedagog i sporteve dhe ekspert i sigurisë publike, i cili ka ndërtuar karrierën e tij mbi parimet e drejtësisë sociale, edukimit dhe mbrojtjes së interesit publik. Si themelues i Klubit të Librit Kavajë (KiLK), ai ka promovuar kulturën dhe dijen si shtylla thelbësore të një shoqërie të zhvilluar.<br />
          Me një vizion socialdemokrat, ai beson në barazinë e mundësive, fuqizimin e komuniteteve dhe ndërtimin e një shteti që garanton mirëqenie për të gjithë qytetarët. Si pedagog i sporteve, ai njeh rëndësinë e disiplinës, punës në ekip dhe edukimit fizik për një shoqëri të shëndetshme dhe aktive. Përvoja e tij si ekspert i sigurisë publike e ka pajisur me njohuritë dhe aftësitë e nevojshme për të ndërtuar politika të forta në mbrojtje të qytetarëve.<br />
          Si baba i një djali dhe vullnetar aktiv në komunitet, ai e kupton nga afër sfidat me të cilat përballen familjet tona dhe është i përkushtuar për të sjellë ndryshime pozitive për të gjithë banorët.<br />
          Një atdhetar i palëkundur, ai e vendos interesin e kombit mbi gjithçka, duke udhëhequr me moton: “Salus Populi, Suprema Lex Esto” – Shëndeti dhe mirëqenia e popullit të jenë ligji më i lartë. Kandidimi i tij për deputet është një angazhim për një qeverisje të drejtë, të ndershme dhe gjithëpërfshirëse, që garanton siguri, arsim cilësor dhe zhvillim të qëndrueshëm për të gjithë shqiptarët.
          </p>
        </div>
      </section>

      {/* Policy Section */}
      <section id="policies" className="py-12 md:py-20 bg-gradient-to-r from-green-50 to-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-green-800">Nismat e mia politike</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {policies.map((policy, index) => (
              <PolicyCard key={index} {...policy} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-green-800">Galeria e fotove</h2>
          <Gallery />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-gradient-to-r from-green-50 to-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-green-800">Qëndrojmë në kontakt</h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-green-800 flex-shrink-0" />
                <span className="break-all">gertimetani@gmail.com </span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-green-800 flex-shrink-0" />
                <span>+355694115298</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-green-800 flex-shrink-0" />
                <span>Tiranë, Shqipëri</span>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">Orari i takimeve të fushatës</h3>
              <p>Çdo ditë</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6 md:py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 Gert Metani Campaign. All rights reserved.</p>
         
          <p className="mt-2 text-sm flex justify-center items-center gap-1">
          Built by: 
          <a href="https://www.linkedin.com/in/thoma-axha-a0813b67/" target="_blank" rel="noopener noreferrer">
            <Monitor className="w-4 h-4 text-blue-500 hover:text-blue-700" />
          </a>
          </p>
        </div>
      </footer>
    </>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-green-800 text-white py-4 fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Gert Metani</Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <a href="/#about" className="hover:text-green-200">Jetëshkrim</a>
              <a href="/#policies" className="hover:text-green-200">Nismat</a>
              <Link to="/interviews" className="hover:text-green-200" onClick={closeMenu} role="menuitem">Intervista</Link>
              <a href="/#gallery" className="hover:text-green-200">Galeria</a>
              <a href="/#contact" className="hover:text-green-200">Kontakt</a>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-green-800 border-t border-green-700 p-4">
              <div className="flex flex-col space-y-4">
                <a href="/#about" className="hover:text-green-200" onClick={closeMenu}>Jetëshkrim</a>
                <a href="/#policies" className="hover:text-green-200" onClick={closeMenu}>Nismat</a>
                <Link to="/interviews" className="hover:text-green-200" onClick={closeMenu} role="menuitem">Intervista</Link>
                <a href="/#gallery" className="hover:text-green-200" onClick={closeMenu}>Galeria</a>
                <a href="/#contact" className="hover:text-green-200" onClick={closeMenu}>Kontakt</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policies/:slug" element={<PolicyPage />} />
        <Route path="/interviews" element={<InterviewsPage />} />
      </Routes>
    </div>
  );
}

export default App;