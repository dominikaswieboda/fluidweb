import * as React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Button } from '../ui/button';
import { Scissors, Sparkles, Crown, Package, Instagram, Facebook, Youtube, Phone, MapPin, Mail, Clock } from 'lucide-react';


interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: '1',
    name: 'Strzyżenie męskie',
    description: 'Klasyczne lub nowoczesne strzyżenie dopasowane do Twoich potrzeb',
    price: '80 zł',
    icon: <Scissors className="w-6 h-6" />,
  },
  {
    id: '2',
    name: 'Strzyżenie + stylizacja',
    description: 'Kompletna usługa ze stylizacją włosów profesjonalnymi produktami',
    price: '100 zł',
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    id: '3',
    name: 'Modelowanie brody',
    description: 'Precyzyjne przycinanie, konturowanie i pielęgnacja zarostu',
    price: '60 zł',
    icon: <Crown className="w-6 h-6" />,
  },
  {
    id: '4',
    name: 'Pakiet Premium',
    description: 'Strzyżenie + broda + stylizacja + masaż głowy',
    price: '150 zł',
    icon: <Package className="w-6 h-6" />,
  },
];

const galleryImages = [
  {
    id: '1',
    url: 'https://images.unsplash.com/photo-1736670648315-c5e8b3385562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwaGFpcmN1dCUyMHN0eWxlfGVufDF8fHx8MTc2MzExNTMxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Męskie strzyżenie - widok z boku',
  },
  {
    id: '2',
    url: 'https://images.unsplash.com/photo-1599447068894-089fabc9876c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFyZCUyMGdyb29taW5nfGVufDF8fHx8MTc2MzA3NTc4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Pielęgnacja brody',
  },
  {
    id: '3',
    url: 'https://images.unsplash.com/photo-1761148438883-e34e0289a214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaGFpcmN1dCUyMGNsb3NlfGVufDF8fHx8MTc2MzE1MDAyOHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Strzyżenie w barbershop',
  },
  {
    id: '4',
    url: 'https://images.unsplash.com/photo-1759675905700-a1b5efedc05c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW5zJTIwZmFkZSUyMGhhaXJjdXR8ZW58MXx8fHwxNzYzMTUwMDI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Fade męski',
  },
  {
    id: '5',
    url: 'https://images.unsplash.com/photo-1590159763121-7c9fd312190d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzdHlsaW5nJTIwaGFpcnxlbnwxfHx8fDE3NjMxNTAwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Stylizacja włosów',
  },
  {
    id: '6',
    url: 'https://images.unsplash.com/photo-1656921350129-61ad3ff901f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjB0b29scyUyMHNjaXNzb3JzfGVufDF8fHx8MTc2MzExNTMxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'Narzędzia barberskie',
  },
];


interface Barber {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  instagram?: string;
}

const team: Barber[] = [
  {
    id: '1',
    name: 'Michał Kowalski',
    role: 'Master Barber',
    bio: 'Ponad 12 lat doświadczenia w branży. Specjalizuje się w klasycznych strzyżeniach i pielęgnacji brody.',
    image: 'https://images.unsplash.com/photo-1747832512459-5566e6d0ee5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYXJiZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxMTEwNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    instagram: '@michal_barber',
  },
  {
    id: '2',
    name: 'Adam Nowak',
    role: 'Senior Barber',
    bio: '8 lat praktyki, ekspert w nowoczesnych stylizacjach fade i undercut. Pasjonat włoskiej szkoły barberingu.',
    image: 'https://images.unsplash.com/photo-1547648946-2b1fd7eab923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjMwOTM4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    instagram: '@adam_cuts',
  },
  {
    id: '3',
    name: 'Kacper Wiśniewski',
    role: 'Barber',
    bio: '5 lat doświadczenia, specjalizuje się w kreatywnych stylizacjach i koloryzacji męskiej.',
    image: 'https://images.unsplash.com/photo-1590159763121-7c9fd312190d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBzdHlsaW5nJTIwaGFpcnxlbnwxfHx8fDE3NjMxNTAwMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    instagram: '@kacper_style',
  },
];
const socialLinks = [
  {
    id: '1',
    name: 'Instagram',
    icon: Instagram,
    url: 'https://instagram.com',
    handle: '@barbershop',
  },
  {
    id: '2',
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com',
    handle: 'Barbershop',
  },
  {
    id: '3',
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com',
    handle: 'Barbershop Channel',
  },
  {
    id: '4',
    name: 'Telefon',
    icon: Phone,
    url: 'tel:+48123456789',
    handle: '+48 123 456 789',
  },
];
const openingHours = [
  { day: 'Poniedziałek', hours: '9:00 - 20:00' },
  { day: 'Wtorek', hours: '9:00 - 20:00' },
  { day: 'Środa', hours: '9:00 - 20:00' },
  { day: 'Czwartek', hours: '9:00 - 20:00' },
  { day: 'Piątek', hours: '9:00 - 21:00' },
  { day: 'Sobota', hours: '10:00 - 18:00' },
  { day: 'Niedziela', hours: 'Nieczynne' },
];

export const BarberSite = () => {
  return (
    <div className="min-h-screen bg-black">
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1547648946-2b1fd7eab923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXIlMjBjdXR0aW5nJTIwaGFpcnxlbnwxfHx8fDE3NjMwOTM4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Profesjonalny barber w pracy"
            className="h-full w-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="max-w-4xl text-center">
            <h1 className="mb-6 text-white tracking-tight">
              Precyzja, styl i mistrzowskie rzemiosło
            </h1>
            <p className="mb-8 text-neutral-300 max-w-2xl mx-auto tracking-wide">
              Profesjonalna obsługa na najwyższym poziomie. Tworzymy nie tylko fryzury,
              ale doświadczenie, które podkreśla Twój indywidualny charakter.
            </p>
            <Button
              size="lg"
              className="bg-[#8b7355] hover:bg-[#7a6348] text-white px-8 py-6 transition-colors duration-300"
            >
              Umów wizytę
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>
      <section id="about" className="bg-[#0a0a0a] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-white mb-6 tracking-tight">O nas</h2>
              <div className="space-y-4 text-neutral-300 leading-relaxed">
                <p>
                  Jesteśmy zespołem doświadczonych barberów, którzy łączą tradycyjne
                  rzemiosło z nowoczesnymi trendami. Naszą misją jest dostarczanie
                  usług najwyższej jakości w atmosferze profesjonalizmu i komfortu.
                </p>
                <p>
                  Każdy klient otrzymuje indywidualne podejście i pełną uwagę.
                  Używamy wyłącznie profesjonalnych produktów i narzędzi, które
                  gwarantują precyzję i trwałość efektów.
                </p>
                <p>
                  Nasz salon to miejsce, gdzie styl spotyka się z ekspertyzą.
                  Zapraszamy do doświadczenia prawdziwej sztuki fryzjerstwa męskiego.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-lg border border-neutral-800">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1723101917533-4fc9149c3684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwaW50ZXJpb3IlMjBkYXJrfGVufDF8fHx8MTc2MzEyOTgwMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Wnętrze barbershop"
                  className="h-full w-full object-cover"
                />
                {/* Subtle border effect */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-white mb-4 tracking-tight">Usługi i cennik</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Oferujemy pełen zakres profesjonalnych usług barberskich z użyciem
              najwyższej jakości produktów i narzędzi
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-[#111111] border border-neutral-800 rounded-lg p-8 hover:border-[#8b7355]/50 transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="text-[#8b7355]">{service.icon}</div>
                    <div>
                      <h3 className="text-white mb-1">{service.name}</h3>
                      <p className="text-neutral-400 text-sm">{service.description}</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <span className="text-[#8b7355] tracking-wide">{service.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-neutral-500 text-sm">
              Wszystkie ceny zawierają profesjonalną konsultację i indywidualne podejście
            </p>
          </div>
        </div>
      </section>
      <section id="gallery" className="bg-[#0a0a0a] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-white mb-4 tracking-tight">Portfolio</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Odkryj jakość naszej pracy i precyzję wykonania
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg border border-neutral-800"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Border effect */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="team" className="bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-white mb-4 tracking-tight">Nasz zespół</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Poznaj naszych doświadczonych barberów, którzy zadbają o Twój wygląd
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((barber) => (
              <div
                key={barber.id}
                className="bg-[#111111] border border-neutral-800 rounded-lg overflow-hidden hover:border-[#8b7355]/50 transition-colors duration-300"
              >
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <ImageWithFallback
                    src={barber.image}
                    alt={barber.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-white mb-1">{barber.name}</h3>
                  <p className="text-[#8b7355] text-sm mb-3 tracking-wide">{barber.role}</p>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {barber.bio}
                  </p>
                  {barber.instagram && (
                    <a
                      href={`https://instagram.com/${barber.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-neutral-500 hover:text-[#8b7355] transition-colors text-sm"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>{barber.instagram}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#0a0a0a] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4 tracking-tight">Bądź na bieżąco</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Śledź nasze social media, aby zobaczyć najnowsze realizacje i oferty
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#111111] border border-neutral-800 rounded-lg p-6 flex flex-col items-center justify-center gap-3 hover:border-[#8b7355] hover:bg-[#8b7355]/5 transition-all duration-300 group"
                >
                  <Icon className="w-8 h-8 text-neutral-400 group-hover:text-[#8b7355] transition-colors" />
                  <div className="text-center">
                    <p className="text-white text-sm mb-1">{social.name}</p>
                    <p className="text-neutral-500 text-xs">{social.handle}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <section id="location" className="bg-black py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-white mb-4 tracking-tight">Lokalizacja i kontakt</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Odwiedź nas lub umów się telefonicznie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <div className="bg-[#111111] border border-neutral-800 rounded-lg overflow-hidden aspect-[4/3]">
              <div className="w-full h-full relative bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#8b7355] mx-auto mb-4" />
                  <p className="text-neutral-400 text-sm">Mapa lokalizacji</p>
                  <p className="text-neutral-500 text-xs mt-2">
                    ul. Przykładowa 123, 00-001 Warszawa
                  </p>
                </div>
                {/* In a real implementation, you would embed Google Maps here */}
                <iframe
                  title="Barbershop Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.1234567890!2d21.0122287!3d52.2296756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDEzJzQ2LjgiTiAyMcKwMDAnNDQuMCJF!5e0!3m2!1spl!2spl!4v1234567890123!5m2!1spl!2spl"
                  className="absolute inset-0 w-full h-full opacity-50"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Contact Info & Hours */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-[#111111] border border-neutral-800 rounded-lg p-8">
                <h3 className="text-white mb-6 tracking-tight">Dane kontaktowe</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#8b7355] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-neutral-300">ul. Przykładowa 123</p>
                      <p className="text-neutral-300">00-001 Warszawa</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-[#8b7355] flex-shrink-0" />
                    <a
                      href="tel:+48123456789"
                      className="text-neutral-300 hover:text-[#8b7355] transition-colors"
                    >
                      +48 123 456 789
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-[#8b7355] flex-shrink-0" />
                    <a
                      href="mailto:kontakt@barbershop.pl"
                      className="text-neutral-300 hover:text-[#8b7355] transition-colors"
                    >
                      kontakt@barbershop.pl
                    </a>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="bg-[#111111] border border-neutral-800 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-5 h-5 text-[#8b7355]" />
                  <h3 className="text-white tracking-tight">Godziny otwarcia</h3>
                </div>
                <div className="space-y-3">
                  {openingHours.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center pb-3 border-b border-neutral-800 last:border-b-0 last:pb-0"
                    >
                      <span className="text-neutral-400">{item.day}</span>
                      <span
                        className={
                          item.hours === 'Nieczynne'
                            ? 'text-neutral-600'
                            : 'text-neutral-300'
                        }
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#0a0a0a] border-t border-neutral-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            {/* Logo/Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#8b7355] rounded-full flex items-center justify-center">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <span className="text-white tracking-wide">Barbershop</span>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-neutral-500 text-sm">
                © {new Date().getFullYear()} Barbershop. Wszelkie prawa zastrzeżone.
              </p>
              <p className="text-neutral-600 text-xs mt-2">
                Stworzono z pasją do rzemiosła barberskiego
              </p>
            </div>

            {/* Quick Links */}
            <div className="flex gap-6 text-sm">
              <a
                href="#about"
                className="text-neutral-400 hover:text-[#8b7355] transition-colors"
              >
                O nas
              </a>
              <a
                href="#services"
                className="text-neutral-400 hover:text-[#8b7355] transition-colors"
              >
                Usługi
              </a>
              <a
                href="#gallery"
                className="text-neutral-400 hover:text-[#8b7355] transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#location"
                className="text-neutral-400 hover:text-[#8b7355] transition-colors"
              >
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
