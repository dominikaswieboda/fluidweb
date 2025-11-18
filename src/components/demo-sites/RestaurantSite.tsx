

import { UtensilsCrossed, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export const RestaurantSite = () => {
  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };
  const signatureDishes = [
    {
      name: "Pizza Margherita Classica",
      description: "San Marzano tomatoes, buffalo mozzarella, fresh basil, extra virgin olive oil",
      price: "€18",
      image: "https://images.unsplash.com/photo-1724232822245-f430d53466e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRoZW50aWMlMjBpdGFsaWFuJTIwcGl6emF8ZW58MXx8fHwxNzYzMjA3Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Tagliatelle al Tartufo",
      description: "Fresh egg pasta with black truffle, Parmigiano Reggiano, butter",
      price: "€28",
      image: "https://images.unsplash.com/photo-1676300184847-4ee4030409c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBhc3RhJTIwZGlzaHxlbnwxfHx8fDE3NjMxMDM4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Antipasto della Casa",
      description: "Selection of Italian cured meats, aged cheeses, marinated vegetables",
      price: "€22",
      image: "https://images.unsplash.com/photo-1610657400673-7fc8941f403f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwYW50aXBhc3RpJTIwcGxhdHRlcnxlbnwxfHx8fDE3NjMxNTQzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Risotto ai Funghi Porcini",
      description: "Carnaroli rice, porcini mushrooms, aged Parmigiano, white wine",
      price: "€24",
      image: "https://images.unsplash.com/photo-1581073746562-e7fd2422f0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcmlzb3R0b3xlbnwxfHx8fDE3NjMxNzcwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];
  
  const lunchMenu = [
    {
      day: "Monday - Friday",
      menu: "Pasta del Giorno + Insalata + Caffè",
      price: "€15"
    },
    {
      day: "Weekend Special",
      menu: "Risotto + Secondo + Dolce + Vino",
      price: "€32"
    }
  ];
  const schedule = [
    { day: "Monday", hours: "Closed", closed: true },
    { day: "Tuesday - Friday", hours: "12:00 - 15:00  •  18:00 - 23:00", closed: false },
    { day: "Saturday", hours: "12:00 - 23:30", closed: false },
    { day: "Sunday", hours: "12:00 - 22:00", closed: false }
  ];
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1745818016691-14c4020a73ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaXRhbGlhbiUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMxMjc1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Restaurant Interior"
    },
    {
      src: "https://images.unsplash.com/photo-1673720111782-9d14bcbd97db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcmVzdGF1cmFudCUyMGRpbmluZ3xlbnwxfHx8fDE3NjMxNTA4MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Dining Experience"
    },
    {
      src: "https://images.unsplash.com/photo-1724232822245-f430d53466e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRoZW50aWMlMjBpdGFsaWFuJTIwcGl6emF8ZW58MXx8fHwxNzYzMjA3Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Pizza Preparation"
    },
    {
      src: "https://images.unsplash.com/photo-1673720111802-8992b0203130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwY3Vpc2luZSUyMGZpbmUlMjBkaW5pbmd8ZW58MXx8fHwxNzYzMjA3Njc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Fine Italian Dishes"
    },
    {
      src: "https://images.unsplash.com/photo-1676300184847-4ee4030409c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHBhc3RhJTIwZGlzaHxlbnwxfHx8fDE3NjMxMDM4NjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Fresh Pasta"
    },
    {
      src: "https://images.unsplash.com/photo-1609064582414-2bcadbb462b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwd2luZSUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzYzMjA3Njc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Wine Selection"
    },
    {
      src: "https://images.unsplash.com/photo-1610657400673-7fc8941f403f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwYW50aXBhc3RpJTIwcGxhdHRlcnxlbnwxfHx8fDE3NjMxNTQzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Antipasti Selection"
    },
    {
      src: "https://images.unsplash.com/photo-1581073746562-e7fd2422f0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcmlzb3R0b3xlbnwxfHx8fDE3NjMxNzcwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Risotto Dish"
    }
  ];
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2C2C2C]/95 backdrop-blur-sm border-b border-[#C9A86A]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-[#FAF7F2] tracking-wider">La Bellaciao</div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#menu" className="text-[#FAF7F2]/80 hover:text-[#C9A86A] transition-colors duration-200">Menu</a>
              <a href="#about" className="text-[#FAF7F2]/80 hover:text-[#C9A86A] transition-colors duration-200">About</a>
              <a href="#hours" className="text-[#FAF7F2]/80 hover:text-[#C9A86A] transition-colors duration-200">Hours</a>
              <a href="#location" className="text-[#FAF7F2]/80 hover:text-[#C9A86A] transition-colors duration-200">Location</a>
              <a href="#gallery" className="text-[#FAF7F2]/80 hover:text-[#C9A86A] transition-colors duration-200">Gallery</a>
            </div>
            <button className="bg-[#8B2635] hover:bg-[#6D1E2A] text-[#FAF7F2] px-6 py-2 rounded-sm transition-colors duration-200 uppercase tracking-wider">
              Reserve
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Hero Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1745818016691-14c4020a73ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaXRhbGlhbiUyMHJlc3RhdXJhbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjMxMjc1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="La Bellaciao Restaurant Interior"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-[#FAF7F2] mb-6 tracking-wide">La Bellaciao</h1>
            <p className="text-[#C9A86A] mb-12 max-w-2xl mx-auto tracking-wide">
              Authentic Italian Cuisine in the Heart of Tradition
            </p>
            <button 
              onClick={scrollToMenu}
              className="bg-[#8B2635] hover:bg-[#6D1E2A] text-[#FAF7F2] px-12 py-4 rounded-sm transition-all duration-300 tracking-wider uppercase"
            >
              View Menu
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#C9A86A] rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-[#C9A86A] rounded-full"></div>
            </div>
          </div>
        </section>
        
        <div id="about">

          <section className="py-24 bg-[#2C2C2C]">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-[#FAF7F2] mb-4">About Us</h2>
                <div className="w-24 h-1 bg-[#8B2635] mx-auto mb-8"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-[#FAF7F2]/90 leading-relaxed">
                  <p>
                    At La Bellaciao, we bring the authentic flavors of Italy to your table. Our culinary journey began with a simple passion: to recreate the traditional recipes passed down through generations of Italian families.
                  </p>
                  <p>
                    Every dish is prepared with carefully selected ingredients, imported directly from Italy's finest regions. From the sun-ripened tomatoes of Campania to the aromatic truffles of Piedmont, we ensure that each ingredient tells its own story.
                  </p>
                  <p>
                    Our chefs honor time-tested techniques while embracing the art of Italian cooking, creating an experience that transports you to the heart of Italy with every bite.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="border-l-4 border-[#C9A86A] pl-6">
                    <h4 className="text-[#C9A86A] mb-3">Our Philosophy</h4>
                    <p className="text-[#FAF7F2]/80 leading-relaxed">
                      Quality over quantity, tradition over trends, passion over profit. These are the principles that guide us every day.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#C9A86A] pl-6">
                    <h4 className="text-[#C9A86A] mb-3">Our Ingredients</h4>
                    <p className="text-[#FAF7F2]/80 leading-relaxed">
                      We work exclusively with certified Italian suppliers, ensuring authenticity and exceptional quality in every dish.
                    </p>
                  </div>

                  <div className="border-l-4 border-[#C9A86A] pl-6">
                    <h4 className="text-[#C9A86A] mb-3">Our Commitment</h4>
                    <p className="text-[#FAF7F2]/80 leading-relaxed">
                      Creating memorable dining experiences where food, atmosphere, and service come together in perfect harmony.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section> 
        </div>
        
        <section id="menu" className="py-24 bg-[#FAF7F2]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-[#2C2C2C] mb-4">Our Menu</h2>
              <div className="w-24 h-1 bg-[#8B2635] mx-auto mb-6"></div>
              <p className="text-[#2C2C2C] max-w-2xl mx-auto">
                Discover our selection of authentic Italian dishes, crafted with passion and the finest ingredients
              </p>
            </div>

            {/* Signature Dishes Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {signatureDishes.map((dish, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-sm overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-[#2C2C2C]">{dish.name}</h3>
                      <span className="text-[#8B2635] ml-4 whitespace-nowrap">{dish.price}</span>
                    </div>
                    <p className="text-[#2C2C2C] leading-relaxed">{dish.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Lunch Menu Section */}
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-[#2C2C2C] mb-4">Lunch Menu</h3>
                <div className="w-16 h-1 bg-[#C9A86A] mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {lunchMenu.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white p-8 rounded-sm border-2 border-[#C9A86A]/20 hover:border-[#C9A86A] transition-colors duration-300"
                  >
                    <div className="text-[#8B2635] mb-3 uppercase tracking-wider">{item.day}</div>
                    <div className="text-[#2C2C2C] mb-4">{item.menu}</div>
                    <div className="text-[#C9A86A]">{item.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        <div id="hours">
          <section className="py-24 bg-[#FAF7F2]">
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-[#2C2C2C] mb-4">Opening Hours</h2>
                <div className="w-24 h-1 bg-[#8B2635] mx-auto mb-6"></div>
                <p className="text-[#2C2C2C]">
                  We look forward to welcoming you
                </p>
              </div>

              <div className="bg-white rounded-sm shadow-lg overflow-hidden">
                <div className="divide-y divide-[#C9A86A]/20">
                  {schedule.map((item, index) => (
                    <div 
                      key={index}
                      className="grid grid-cols-2 gap-8 p-6 hover:bg-[#FAF7F2] transition-colors duration-200"
                    >
                      <div className="text-[#2C2C2C] tracking-wide">
                        {item.day}
                      </div>
                      <div className={`text-right tracking-wide ${item.closed ? 'text-[#8B2635]' : 'text-[#2C2C2C]'}`}>
                        {item.hours}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-3 bg-[#8B2635]/10 px-8 py-4 rounded-sm">
                  <svg 
                    className="w-5 h-5 text-[#8B2635]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  <p className="text-[#2C2C2C]">
                    Reservations recommended for weekend dining
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <div id="location">
          <section className="py-24 bg-[#2C2C2C]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-[#FAF7F2] mb-4">Visit Us</h2>
                <div className="w-24 h-1 bg-[#8B2635] mx-auto mb-6"></div>
                <p className="text-[#FAF7F2]/70">
                  Find us in the heart of the city
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="bg-[#8B2635] p-3 rounded-sm mt-1 group-hover:bg-[#6D1E2A] transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-[#FAF7F2]" />
                    </div>
                    <div>
                      <h4 className="text-[#C9A86A] mb-2">Address</h4>
                      <p className="text-[#FAF7F2]/90 leading-relaxed">
                        Via Roma 123<br />
                        00100 Rome, Italy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-[#8B2635] p-3 rounded-sm mt-1 group-hover:bg-[#6D1E2A] transition-colors duration-300">
                      <Phone className="w-6 h-6 text-[#FAF7F2]" />
                    </div>
                    <div>
                      <h4 className="text-[#C9A86A] mb-2">Phone</h4>
                      <p className="text-[#FAF7F2]/90">
                        +39 06 1234 5678
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="bg-[#8B2635] p-3 rounded-sm mt-1 group-hover:bg-[#6D1E2A] transition-colors duration-300">
                      <Mail className="w-6 h-6 text-[#FAF7F2]" />
                    </div>
                    <div>
                      <h4 className="text-[#C9A86A] mb-2">Email</h4>
                      <p className="text-[#FAF7F2]/90">
                        info@labellaciao.it
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-[#FAF7F2]/20">
                    <h4 className="text-[#C9A86A] mb-4">How to Reach Us</h4>
                    <ul className="space-y-3 text-[#FAF7F2]/80">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C9A86A] mt-1">•</span>
                        <span>Metro: Line A - Termini Station (10 min walk)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C9A86A] mt-1">•</span>
                        <span>Bus: Lines 64, 70, 170 - Stop Via Nazionale</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C9A86A] mt-1">•</span>
                        <span>Parking: Public parking available nearby</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-[#FAF7F2]/10 rounded-sm overflow-hidden border-2 border-[#C9A86A]/20 hover:border-[#C9A86A] transition-colors duration-300">
                  <div className="aspect-[4/3] relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B2635]/20 to-[#C9A86A]/20"></div>
                    <div className="relative z-10 text-center p-8">
                      <MapPin className="w-16 h-16 text-[#C9A86A] mx-auto mb-4" />
                      <p className="text-[#FAF7F2] mb-2">Interactive Map</p>
                      <p className="text-[#FAF7F2]/60">
                        Click to view full map
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <div id="gallery">
          <section className="py-24 bg-[#FAF7F2]">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-[#2C2C2C] mb-4">Gallery</h2>
                <div className="w-24 h-1 bg-[#8B2635] mx-auto mb-6"></div>
                <p className="text-[#2C2C2C]">
                  A glimpse into our culinary artistry and ambiance
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index}
                    className="aspect-square overflow-hidden rounded-sm group cursor-pointer"
                  >
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div> 
      </main> 

      {/* Footer */}
      <footer className="bg-[#2C2C2C] border-t border-[#C9A86A]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* About Column */}
            <div>
              <h3 className="text-[#C9A86A] mb-4">La Bellaciao</h3>
              <p className="text-[#FAF7F2]/70 leading-relaxed">
                Authentic Italian cuisine crafted with passion, tradition, and the finest ingredients from Italy.
              </p>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-[#C9A86A] mb-4">Contact</h4>
              <div className="space-y-3 text-[#FAF7F2]/70">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#C9A86A]" />
                  <span>Via Roma 123, 00100 Rome</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C9A86A]" />
                  <span>+39 06 1234 5678</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C9A86A]" />
                  <span>info@labellaciao.it</span>
                </div>
              </div>
            </div>

            {/* Hours Column */}
            <div>
              <h4 className="text-[#C9A86A] mb-4">Opening Hours</h4>
              <div className="space-y-2 text-[#FAF7F2]/70">
                <div>Monday: <span className="text-[#8B2635]">Closed</span></div>
                <div>Tue-Fri: 12:00 - 23:00</div>
                <div>Saturday: 12:00 - 23:30</div>
                <div>Sunday: 12:00 - 22:00</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#FAF7F2]/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#FAF7F2]/50">
                © 2025 La Bellaciao. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-[#FAF7F2]/50 hover:text-[#C9A86A] transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-[#FAF7F2]/50 hover:text-[#C9A86A] transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
