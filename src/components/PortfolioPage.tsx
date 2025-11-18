import { useParams, Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { AutoRepairSite } from './demo-sites/AutoRepairSite';
import { BarberSite } from './demo-sites/BarberSite';
import { RestaurantSite } from './demo-sites/RestaurantSite';

export const PortfolioPage = () => {
  const { id } = useParams<{ id: string }>();

  const renderDemoSite = () => {
    switch (id) {
    
      case 'barber':
        return <BarberSite />;
      case 'restaurant':
        return <RestaurantSite />;
      case 'autorepair':
        return <AutoRepairSite />;
      default:
        return (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl mb-4">Nie znaleziono strony</h1>
              <Link to="/" className="text-purple-500 hover:text-purple-400">
                Wróć do strony głównej
              </Link>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Link
        to="/"
        className="fixed top-4 right-4 z-[101] bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors"
        aria-label="Zamknij"
      >
        <X className="w-6 h-6" />
      </Link>
      <div className="relative">
        {renderDemoSite()}
      </div>
    </div>
  );
};

