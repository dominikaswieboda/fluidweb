
import { Wrench, Clock, MapPin, Phone, Mail, CheckCircle, Zap, DollarSign, Code2 } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { motion } from 'motion/react';

export const AutoRepairSite = () => {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-orange-600 py-4 px-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wrench className="w-6 h-6" />
            <span className="text-xl">AutoMaster Warsztat</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#uslugi" className="hover:text-orange-200 transition-colors">Usługi</a>
            <a href="#cennik" className="hover:text-orange-200 transition-colors">Cennik</a>
            <a href="#kontakt" className="hover:text-orange-200 transition-colors">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1619642737579-a7474bee1044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvJTIwcmVwYWlyJTIwZ2FyYWdlfGVufDF8fHx8MTc2Mjk5ODM5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Warsztat"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl mb-4">Profesjonalny Serwis Auto</h1>
          <p className="text-xl md:text-2xl mb-8">Kompleksowa obsługa i naprawa wszystkich marek</p>
          <a href="#kontakt" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full transition-colors">
            Umów Wizytę
          </a>
        </div>
      </section>

      {/* Usługi */}
      <section id="uslugi" className="py-20 px-6 bg-zinc-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-center mb-12">Nasze Usługi</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Przeglądy okresowe',
              'Wymiana olejów i filtrów',
              'Naprawa silników',
              'Diagnostyka komputerowa',
              'Naprawy zawieszenia',
              'Wymiana klocków hamulcowych',
              'Serwis klimatyzacji',
              'Geometria kół',
            ].map((service) => (
              <div key={service} className="flex items-center gap-3 bg-zinc-900 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-mnie" className="py-32 px-6 bg-zinc-950">
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
              Specjalizuję się w tworzeniu prostych, skutecznych stron dla małych i średnich firm.
              Bez CMS, bez komplikacji - tylko czysta, szybka strona WWW.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-purple-500/50 transition-colors"
            >
              <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-2xl mb-4">Szybka Realizacja</h3>
              <p className="text-gray-400">
                Twoja strona gotowa w 5-7 dni. Bez długiego czekania, bez zbędnych spotkań.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-purple-500/50 transition-colors"
            >
              <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-2xl mb-4">Przystępna Cena</h3>
              <p className="text-gray-400">
                Od 500 do 700 zł za gotową stronę. Jedna płatność, bez ukrytych kosztów i abonamentów.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-purple-500/50 transition-colors"
            >
              <div className="w-14 h-14 bg-purple-600/20 rounded-xl flex items-center justify-center mb-6">
                <Code2 className="w-7 h-7 text-purple-500" />
              </div>
              <h3 className="text-2xl mb-4">Nowoczesny Design</h3>
              <p className="text-gray-400">
                Responsywne, szybkie i estetyczne strony dostosowane do Twojej branży.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cennik */}
      <section id="cennik" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12">Cennik Przykładowych Usług</h2>
          <div className="bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
            <div className="divide-y divide-zinc-700">
              <div className="flex justify-between p-6 hover:bg-zinc-700/50">
                <span>Wymiana oleju z filtrem</span>
                <span className="text-orange-500">od 150 zł</span>
              </div>
              <div className="flex justify-between p-6 hover:bg-zinc-700/50">
                <span>Diagnostyka komputerowa</span>
                <span className="text-orange-500">od 80 zł</span>
              </div>
              <div className="flex justify-between p-6 hover:bg-zinc-700/50">
                <span>Wymiana klocków hamulcowych</span>
                <span className="text-orange-500">od 200 zł</span>
              </div>
              <div className="flex justify-between p-6 hover:bg-zinc-700/50">
                <span>Przegląd okresowy</span>
                <span className="text-orange-500">od 120 zł</span>
              </div>
              <div className="flex justify-between p-6 hover:bg-zinc-700/50">
                <span>Geometria kół</span>
                <span className="text-orange-500">od 100 zł</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-20 px-6 bg-zinc-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-center mb-12">Kontakt</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900 p-8 rounded-lg">
              <h3 className="text-2xl mb-6">Dane Kontaktowe</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                  <div>
                    <p>ul. Przemysłowa 42</p>
                    <p>02-222 Warszawa</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <p>+48 222 333 444</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <p>kontakt@automaster.pl</p>
                </div>
              </div>
            </div>
            <div className="bg-zinc-900 p-8 rounded-lg">
              <h3 className="text-2xl mb-6">Godziny Otwarcia</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <div>
                    <p>Pn - Pt: 8:00 - 18:00</p>
                    <p>Sobota: 9:00 - 14:00</p>
                    <p>Niedziela: Nieczynne</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-600 py-6 text-center">
        <p>© 2024 AutoMaster Warsztat. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};
