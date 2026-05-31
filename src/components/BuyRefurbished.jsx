import { Star, Shield, RefreshCw, Tag, ChevronRight } from 'lucide-react';

const BLUE = '#1B4FD8';

const phones = [
  {
    name: 'Apple iPhone 14',
    condition: 'Superb',
    rating: 4.8, reviews: 2341,
    originalPrice: 79900, salePrice: 32599, discount: 59,
    badge: 'Smart Upgrade Days',
    img: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&q=85',
  },
  {
    name: 'Samsung Galaxy S24',
    condition: 'Superb',
    rating: 4.8, reviews: 892,
    originalPrice: 125999, salePrice: 57399, discount: 54,
    badge: 'Flash Sale',
    img: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=85',
  },
  {
    name: 'OnePlus Nord 2 5G',
    condition: 'Good',
    rating: 4.0, reviews: 1203,
    originalPrice: 72999, salePrice: 14599, discount: 80,
    badge: 'Best Value',
    img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400&q=85',
  },
  {
    name: 'Apple iPhone 13',
    condition: 'Superb',
    rating: 4.9, reviews: 3102,
    originalPrice: 74900, salePrice: 27999, discount: 63,
    badge: 'Best Seller',
    img: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400&q=85',
  },
  {
    name: 'Xiaomi 13 Pro',
    condition: 'Good',
    rating: 4.5, reviews: 678,
    originalPrice: 79999, salePrice: 38999, discount: 51,
    badge: 'Limited Stock',
    img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&q=85',
  },
  {
    name: 'Google Pixel 7',
    condition: 'Superb',
    rating: 4.7, reviews: 445,
    originalPrice: 71999, salePrice: 29999, discount: 58,
    badge: 'Hot Deal',
    img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=85',
  },
];

const laptops = [
  {
    name: 'Apple MacBook Air M4 15"',
    condition: 'Superb',
    rating: 5.0, reviews: 234,
    originalPrice: 136999, salePrice: 94999, discount: 32,
    badge: 'Limited Stock',
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=85',
  },
  {
    name: 'Apple MacBook Air M3 15"',
    condition: 'Superb',
    rating: 4.9, reviews: 567,
    originalPrice: 118999, salePrice: 84999, discount: 29,
    badge: 'Smart Upgrade Days',
    img: 'https://images.unsplash.com/photo-1611186871525-9c4f9b855c3e?w=500&q=85',
  },
  {
    name: 'Apple MacBook Pro M1 Pro 16"',
    condition: 'Superb',
    rating: 4.9, reviews: 891,
    originalPrice: 111999, salePrice: 79999, discount: 29,
    badge: 'Smart Upgrade Days',
    img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=85',
  },
  {
    name: 'Dell XPS 15 (2023)',
    condition: 'Good',
    rating: 4.6, reviews: 312,
    originalPrice: 145000, salePrice: 72999, discount: 50,
    badge: 'Hot Deal',
    img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=85',
  },
];

const ProductCard = ({ product, size = 'sm' }) => (
  <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group hover:-translate-y-1 flex flex-col">
    {/* Image */}
    <div className="relative overflow-hidden bg-gray-50" style={{ height: size === 'lg' ? '200px' : '160px' }}>
      <img
        src={product.img}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
        onError={(e) => {
          e.target.src = 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&q=80';
        }}
      />
      {/* Badges */}
      {product.badge && (
        <span
          className="absolute top-2.5 left-2.5 text-white text-[10px] font-bold px-2 py-1 rounded-full"
          style={{ background: BLUE }}
        >
          {product.badge}
        </span>
      )}
      <span className="absolute top-2.5 right-2.5 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">
        -{product.discount}%
      </span>
    </div>

    {/* Info */}
    <div className="p-3 flex flex-col flex-1">
      <div className="flex items-center gap-1 mb-1.5 flex-wrap">
        <span
          className="text-[10px] font-bold px-2 py-0.5 rounded-full"
          style={{ background: '#EEF2FF', color: BLUE }}
        >
          ✓ Cashify Assured
        </span>
        <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
          {product.condition}
        </span>
      </div>
      <h3 className="font-bold text-gray-800 text-xs mt-1 mb-1 line-clamp-2 flex-1">{product.name}</h3>
      <div className="flex items-center gap-1 mb-2">
        <Star size={11} className="text-yellow-400 fill-yellow-400" />
        <span className="text-xs font-semibold text-gray-700">{product.rating}</span>
        <span className="text-[10px] text-gray-400">({product.reviews.toLocaleString()})</span>
      </div>
      <div className="flex items-end gap-1.5 mb-2.5">
        <span className="text-base font-extrabold text-gray-900">₹{product.salePrice.toLocaleString()}</span>
        <span className="text-xs text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
      </div>
      <button
        style={{ background: BLUE }}
        className="w-full text-white font-bold py-2 rounded-xl hover:opacity-90 transition text-xs"
      >
        Buy Now
      </button>
    </div>
  </div>
);

const BuyRefurbished = () => {
  return (
    <section className="py-12 px-4 bg-white" id="buy">
      <div className="max-w-7xl mx-auto">

        {/* Trust strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {[
            { icon: '🔍', title: '32-Point Quality Check', desc: 'Every device tested thoroughly', bg: '#F0FDF4', border: '#BBF7D0' },
            { icon: '🛡️', title: '6-Month Warranty', desc: 'On all refurbished devices', bg: '#EEF2FF', border: '#C7D2FE' },
            { icon: '💸', title: 'Up to 70% OFF', desc: 'vs brand new price', bg: '#FFF7ED', border: '#FED7AA' },
            { icon: '🔄', title: '15-Day Replacement', desc: 'No questions asked', bg: '#FDF4FF', border: '#E9D5FF' },
          ].map(({ icon, title, desc, bg, border }) => (
            <div key={title} className="flex items-start gap-3 rounded-2xl p-4 border" style={{ background: bg, borderColor: border }}>
              <span className="text-2xl">{icon}</span>
              <div>
                <div className="font-bold text-gray-800 text-sm">{title}</div>
                <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Phones section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">Buy Refurbished Phones</h2>
              <p className="text-gray-500 text-xs mt-0.5">Certified quality • Best prices</p>
            </div>
            <a href="#" className="flex items-center gap-1 text-sm font-semibold hover:underline" style={{ color: BLUE }}>
              View All <ChevronRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {phones.map(p => <ProductCard key={p.name} product={p} />)}
          </div>
        </div>

        {/* Laptops section */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="text-xl font-extrabold text-gray-900">Refurbished Laptops</h2>
              <p className="text-gray-500 text-xs mt-0.5">Premium laptops at half the price</p>
            </div>
            <a href="#" className="flex items-center gap-1 text-sm font-semibold hover:underline" style={{ color: BLUE }}>
              View All <ChevronRight size={14} />
            </a>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {laptops.map(p => <ProductCard key={p.name} product={p} size="lg" />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyRefurbished;
