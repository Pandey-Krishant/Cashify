import {
  Smartphone, Laptop, Tv, Tablet, Gamepad2, Watch, Speaker,
  ShoppingBag, Wrench, MapPin, RefreshCw, Recycle
} from 'lucide-react';

const BLUE = '#1B4FD8';

const services = [
  { icon: <Smartphone size={26} />, label: 'Sell Phone', bg: '#EEF2FF', color: '#1B4FD8', href: '#sell' },
  { icon: <ShoppingBag size={26} />, label: 'Buy Gadgets', bg: '#FFF7ED', color: '#EA580C', href: '#buy' },
  { icon: <Smartphone size={26} />, label: 'Buy Phone', bg: '#EEF2FF', color: '#1B4FD8', href: '#buy' },
  { icon: <Laptop size={26} />, label: 'Buy Laptops', bg: '#F0FDF4', color: '#16A34A', href: '#buy' },
  { icon: <Wrench size={26} />, label: 'Repair Phone', bg: '#FEF2F2', color: '#DC2626', href: '#repair' },
  { icon: <Laptop size={26} />, label: 'Repair Laptop', bg: '#FFFBEB', color: '#D97706', href: '#repair' },
  { icon: <RefreshCw size={26} />, label: 'Find New Phone', bg: '#EEF2FF', color: '#1B4FD8', href: '#' },
  { icon: <MapPin size={26} />, label: 'Nearby Stores', bg: '#FDF4FF', color: '#9333EA', href: '#stores' },
  { icon: <Watch size={26} />, label: 'Buy Smartwatches', bg: '#EEF2FF', color: '#1B4FD8', href: '#buy' },
  { icon: <Recycle size={26} />, label: 'Recycle', bg: '#F0FDF4', color: '#16A34A', href: '#' },
  { icon: <Speaker size={26} />, label: 'Smart Speakers', bg: '#FFF7ED', color: '#EA580C', href: '#sell' },
  { icon: <Gamepad2 size={26} />, label: 'Gaming Consoles', bg: '#FEF2F2', color: '#DC2626', href: '#sell' },
];

const Services = () => {
  return (
    <section className="py-12 px-4 bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Our Services</h2>
            <p className="text-gray-500 text-sm mt-1">Everything for your gadgets — all in one place</p>
          </div>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-12 gap-3">
          {services.map(({ icon, label, bg, color, href }) => (
            <a
              key={label}
              href={href}
              className="flex flex-col items-center gap-2.5 p-3 rounded-2xl hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 border border-gray-100 hover:border-blue-100 group"
            >
              <div
                className="w-13 h-13 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                style={{ background: bg, color }}
              >
                {icon}
              </div>
              <span className="text-[11px] font-semibold text-gray-700 text-center leading-tight">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
