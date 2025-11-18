# 📚 Dokumentacja Projektu - One Page Portfolio Website

## 🎯 Co to za projekt?

To jest **portfolio website** dla freelancera/web developera, który oferuje tworzenie stron internetowych dla małych biznesów. Projekt zawiera:

- **Stronę główną** z prezentacją usług i portfolio
- **6 przykładowych stron demo** dla różnych branż:
  - Salon fryzjerski (HairSalonSite)
  - Warsztat samochodowy (AutoRepairSite)
  - Piekarnia (BakerySite)
  - Salon pielęgnacji zwierząt (GroomerSite)
  - Barbershop (BarberSite)
  - Restauracja (RestaurantSite)

## 🛠️ Stack technologiczny

### Główne technologie:
- **React 18** - framework UI
- **TypeScript** - typowanie
- **Vite** - narzędzie do budowania i dev server
- **React Router** - routing (nawigacja między stronami)
- **Motion (Framer Motion)** - animacje
- **Tailwind CSS** - stylowanie
- **Radix UI** - komponenty UI (accordion, dialog, tabs, etc.)
- **Lucide React** - ikony

### Struktura zależności:
- Wszystkie zależności są w `package.json`
- Projekt używa wielu komponentów Radix UI (gotowe, dostępne komponenty)

## 📁 Struktura projektu

```
One Page Portfolio Website/
├── index.html              # Główny plik HTML
├── package.json            # Zależności i skrypty
├── vite.config.ts          # Konfiguracja Vite
├── src/
│   ├── main.tsx            # Punkt wejścia aplikacji (routing)
│   ├── App.tsx             # Główny komponent strony głównej
│   ├── index.css           # Globalne style
│   ├── components/
│   │   ├── PortfolioCard.tsx      # Karta portfolio (na stronie głównej)
│   │   ├── PortfolioPage.tsx      # Strona wyświetlająca demo (routing)
│   │   ├── FluidBackground.tsx    # Animowane tło
│   │   ├── Logo.tsx               # Logo
│   │   ├── demo-sites/            # 6 przykładowych stron demo
│   │   │   ├── HairSalonSite.tsx
│   │   │   ├── AutoRepairSite.tsx
│   │   │   ├── BakerySite.tsx
│   │   │   ├── GroomerSite.tsx
│   │   │   ├── BarberSite.tsx
│   │   │   └── RestaurantSite.tsx
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx  # Komponent obrazu z fallbackiem
│   │   └── ui/                      # Komponenty UI (shadcn/ui style)
│   │       └── [wiele komponentów UI]
│   └── styles/
│       └── globals.css
```

## 🚀 Jak uruchomić projekt

### 1. Instalacja zależności
```bash
npm install
```

### 2. Uruchomienie serwera deweloperskiego
```bash
npm run dev
```

Projekt uruchomi się na `http://localhost:3000` (automatycznie otworzy przeglądarkę)

### 3. Build produkcyjny
```bash
npm run build
```

Pliki produkcyjne znajdą się w folderze `build/`

## 🔄 Jak działa aplikacja?

### Routing:
1. **Strona główna** (`/`) - `App.tsx`
   - Hero section z animowanym tłem
   - Sekcja "O mnie"
   - Portfolio z kartami projektów
   - Sekcja kontaktowa

2. **Strony demo** (`/portfolio/:id`) - `PortfolioPage.tsx`
   - Dynamicznie renderuje odpowiedni komponent demo na podstawie `id` w URL
   - Przykłady: `/portfolio/hairsalon`, `/portfolio/autorepair`, etc.

### Główne komponenty:

**App.tsx:**
- Zawiera wszystkie sekcje strony głównej
- Definiuje `portfolioItems` - tablicę z danymi projektów
- Każdy item ma: `id`, `image`, `title`, `category`, `description`, `component`

**PortfolioCard.tsx:**
- Wyświetla kartę projektu na stronie głównej
- Po kliknięciu przekierowuje do `/portfolio/{component}`

**PortfolioPage.tsx:**
- Pobiera `id` z URL (`useParams`)
- Renderuje odpowiedni komponent demo na podstawie `id`
- Ma przycisk "X" do powrotu na stronę główną

## ✏️ Jak rozwijać projekt?

### 1. Dodawanie nowych projektów portfolio

W pliku `src/App.tsx`, dodaj nowy obiekt do tablicy `portfolioItems`:

```typescript
{
  id: 7,
  image: 'https://...',
  title: 'Nazwa projektu',
  category: 'Kategoria',
  description: 'Opis projektu',
  component: 'nazwa-komponentu', // musi pasować do case w PortfolioPage
}
```

### 2. Tworzenie nowej strony demo

1. **Utwórz nowy komponent** w `src/components/demo-sites/`:
   ```typescript
   // np. NewSite.tsx
   export const NewSite = () => {
     return (
       <div className="min-h-screen bg-white">
         {/* Twoja strona */}
       </div>
     );
   };
   ```

2. **Zaimportuj w PortfolioPage.tsx**:
   ```typescript
   import { NewSite } from './demo-sites/NewSite';
   ```

3. **Dodaj case w switch**:
   ```typescript
   case 'nazwa-komponentu':
     return <NewSite />;
   ```

### 3. Modyfikowanie strony głównej

Edytuj `src/App.tsx`:
- Zmień teksty w sekcjach
- Dodaj/usuń sekcje
- Zmień kolory (używając klas Tailwind)
- Dodaj nowe sekcje

### 4. Stylowanie

Projekt używa **Tailwind CSS**:
- Wszystkie style są inline w komponentach
- Kolory główne: `purple-600`, `purple-500`, `zinc-900`, `zinc-800`
- Tło: `bg-black`
- Tekst: `text-white`, `text-gray-400`

### 5. Animacje

Używane jest **Motion (Framer Motion)**:
```typescript
import { motion } from 'motion/react';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* zawartość */}
</motion.div>
```

### 6. Zmiana danych kontaktowych

W `src/App.tsx`, sekcja kontaktowa (linie ~240-270):
- Zmień numer telefonu: `href="tel:+48123456789"`
- Zmień email: `href="mailto:kontakt@fluidweb.pl"`

## 🎨 Dostosowywanie wyglądu

### Kolory:
- Główny kolor: `purple-600` / `purple-500` / `purple-400`
- Tło: `bg-black`
- Karty: `bg-zinc-900` z `border-zinc-800`
- Tekst: `text-white`, `text-gray-400`

### Zmiana kolorów:
Zamień wszystkie wystąpienia `purple-*` na inny kolor w Tailwind, np.:
- `blue-600`, `blue-500` dla niebieskiego
- `green-600`, `green-500` dla zielonego
- itd.

## 📝 Ważne pliki do edycji

1. **`src/App.tsx`** - główna strona, portfolio items, teksty
2. **`src/components/PortfolioPage.tsx`** - routing do demo stron
3. **`src/components/demo-sites/*.tsx`** - przykładowe strony demo
4. **`src/components/Logo.tsx`** - logo (możesz zmienić na własne)

## 🔧 Rozwiązywanie problemów

### Błędy instalacji:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Port zajęty:
W `vite.config.ts` zmień port w sekcji `server.port`

### Problemy z routingiem:
Upewnij się, że wszystkie komponenty demo są zaimportowane w `PortfolioPage.tsx`

## 📦 Deploy

Po zbudowaniu (`npm run build`), folder `build/` zawiera statyczne pliki gotowe do wdrożenia na:
- Netlify
- Vercel
- GitHub Pages
- Dowolny hosting statyczny

## 💡 Przydatne komendy

```bash
npm run dev      # Uruchom dev server
npm run build    # Zbuduj produkcyjną wersję
```

## 🎯 Następne kroki rozwoju

1. **Dodaj więcej projektów** do portfolio
2. **Stwórz nowe strony demo** dla innych branż
3. **Dodaj formularz kontaktowy** (można użyć React Hook Form, który jest już w zależnościach)
4. **Dodaj SEO** (meta tagi, Open Graph)
5. **Dodaj analytics** (Google Analytics, etc.)
6. **Optymalizuj obrazy** (użyj WebP, lazy loading)
7. **Dodaj dark/light mode** (next-themes jest już w zależnościach)

---

**Powodzenia w rozwoju projektu! 🚀**

