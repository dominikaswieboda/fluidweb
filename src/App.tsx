import { motion } from 'motion/react';
import { Mail, Phone, Code2, Zap, DollarSign } from 'lucide-react';
import { FluidBackground } from './components/FluidBackground';
import { Logo } from './components/Logo';
import { PortfolioCard } from './components/PortfolioCard';
import { FeatureCard } from './components/FeatureCard';

const portfolioItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1629881544138-c45fc917eb81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXJiZXJzaG9wJTIwY2hhaXJ8ZW58MXx8fHwxNzYyOTQ2OTQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Barber Premium',
    category: 'Barber',
    description: 'Stylowa strona z klasycznym designem i ofertą',
    component: 'barber',
  },
  
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1728376334750-27b1e9280aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHRhYmxlfGVufDF8fHx8MTc2Mjk1OTQwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Restauracja La Bellaciao',
    category: 'Restauracja',
    description: 'Elegancka strona restauracji z pełnym menu i możliwością rezerwacji',
    component: 'restaurant',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1619642737579-a7474bee1044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmVwYWlyJTIwZ2FyYWdlfGVufDF8fHx8MTc2Mjk5ODM5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'AutoMaster Warsztat',
    category: 'Warsztat',
    description: 'Profesjonalna wizytówka warsztatu samochodowego z pełną ofertą usług',
    component: 'autorepair',
  },
  
];

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <a href="#o-mnie" className="text-gray-400 hover:text-white transition-colors">
              O nas
            </a>
            <a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">
              Portfolio
            </a>
            <a href="#kontakt" className="text-gray-400 hover:text-white transition-colors">
              Kontakt
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FluidBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-500 bg-clip-text text-transparent">
              Strona dla Twojego biznesu.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Nowoczesna, szybka i dopasowana do Twoich potrzeb.
            Realizacja w krótkim czasie — bez komplikacji i zbędnych formalności.
            </p>
            <motion.a
              href="#portfolio"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Zobacz Realizacje
            </motion.a>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-purple-500 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-mnie" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl mb-6">Dlaczego FluidWeb?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tworzę lekkie, przejrzyste i skuteczne strony internetowe dla firm.
            <br/>Tylko czysta, wydajna strona, która działa.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Zap}
              title="Szybka Realizacja"
              description="Projekty wykonane sprawnie i terminowo, zazwyczaj w kilka dni — zawsze z jasną komunikacją na każdym etapie."
              delay={0.1}
            />
            <FeatureCard
              icon={DollarSign}
              title="Przystępna Cena"
              description="Kompletny projekt od 700 zł. Jednorazowa opłata, bez abonamentów i ukrytych kosztów. Jeśli chcesz więcej to wszystko wycenimy indywidualnie."
              delay={0.2}
            />
            <FeatureCard
              icon={Code2}
              title="Nowoczesny Design"
              description="Responsywne, estetyczne i szybkie strony dostosowane do Twojej branży. Wsparcie na każdym etapie projektu."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <FluidBackground />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl mb-6">Przykładowe Realizacje</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            Zobacz, jak może wyglądać Twoja przyszła strona.
            <br/>Kliknij wybrany projekt, aby otworzyć wersję demo.
            </p>
            <p className="text-sm text-purple-400">
              ✨ Każdy projekt powstaje z myślą o specyfice branży i potrzebach klienta.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard
                key={item.id}
                image={item.image}
                title={item.title}
                category={item.category}
                description={item.description}
                index={index}
                component={item.component}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl mb-6">Skontaktuj się</h2>
            <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto">
              Gotowy na nową stronę? 
              <br/>
              Zadzwoń lub napisz, a porozmawiamy o Twoim projekcie.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <motion.a
                href="tel:+48123456789"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all flex flex-col items-center gap-4 group"
              >
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                  <Phone className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-2">Telefon</div>
                  <div className="text-xl">+48 882 657 076</div>
                </div>
              </motion.a>

              <motion.a
                href="mailto:dominika_swieboda@outlook.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all flex flex-col items-center gap-4 group"
              >
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center group-hover:bg-purple-600/30 transition-colors">
                  <Mail className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-2">Email</div>
                  <div className="text-xl">kontakt@fluidweb.pl</div>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo />
          <div className="text-gray-500 text-sm">
            © 2025 FluidWeb. Wszystkie prawa zastrzeżone.
          </div>
        </div>
      </footer>
    </div>
  );
}
