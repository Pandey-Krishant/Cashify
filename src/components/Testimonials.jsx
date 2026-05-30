import { Star, Quote } from 'lucide-react';

const BLUE = '#1B4FD8';

const testimonials = [
  {
    name: 'Tarun Singh Verma', city: 'New Delhi', rating: 5,
    text: 'Sold off my phone very easily and got the payment on the spot. Best experience so far. The agent was very professional and the whole process took less than 10 minutes.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
  },
  {
    name: 'Karan Sharma', city: 'Delhi NCR', rating: 5,
    text: 'Well trained staff. Overall a positive experience in selling my phone at Cashify. Got a great price and the pickup was on time. Highly recommend!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
  },
  {
    name: 'Priya Mehta', city: 'Mumbai', rating: 5,
    text: 'No complaints, sold my phone very easily here. Definitely worth a try. The price offered was better than any other platform I checked.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
  },
  {
    name: 'Vinit Kumar', city: 'New Delhi', rating: 5,
    text: 'Payment was very instant and the whole process was quick. Will recommend it to all my friends and family. Great service overall.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
  },
  {
    name: 'Satheesh Kumaram', city: 'Bengaluru', rating: 5,
    text: 'It was a wonderful experience with Cashify. I got a reasonable price for my product and their response was very quick! Good to see such a service available.',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=80&q=80',
  },
  {
    name: 'Kiran Kumar Balusu', city: 'Hyderabad', rating: 5,
    text: 'Good service! Customer support was polite & technician was experienced too. Will recommend to others for sure. Bought a refurbished phone and it works perfectly.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80',
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: '1.82 Cr+', label: 'Happy Users', icon: '😊' },
            { value: '₹13,683 Cr', label: 'Cash Given', icon: '💰' },
            { value: '202 Lac', label: 'Gadgets Encashed', icon: '📱' },
            { value: '4.8★', label: 'Average Rating', icon: '⭐' },
          ].map(({ value, label, icon }) => (
            <div
              key={label}
              className="text-center rounded-2xl p-5 border"
              style={{ background: '#EEF2FF', borderColor: '#C7D2FE' }}
            >
              <div className="text-2xl mb-1">{icon}</div>
              <div className="text-2xl font-extrabold mb-0.5" style={{ color: BLUE }}>{value}</div>
              <div className="text-xs text-gray-500 font-medium">{label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-1">What Our Customers Say</h2>
          <p className="text-gray-500 text-sm">Trusted by millions across India</p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative"
            >
              <Quote size={20} className="absolute top-4 right-4 text-blue-100" />
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2"
                  style={{ borderColor: BLUE }}
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${t.name}&background=1B4FD8&color=fff&size=80`;
                  }}
                />
                <div>
                  <div className="font-bold text-gray-800 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.city}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>

        {/* Brand logos */}
        <div>
          <p className="text-center text-gray-400 text-xs font-semibold uppercase tracking-wider mb-5">
            Trusted by Major Brands since 2015
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {[
              { name: 'Apple', img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
              { name: 'Samsung', img: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
              { name: 'OnePlus', img: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/OnePlus_logo.svg' },
              { name: 'Xiaomi', img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Xiaomi_logo.svg' },
              { name: 'Realme', img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Realme_logo.svg' },
              { name: 'Motorola', img: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Motorola_logo.svg' },
            ].map(({ name, img }) => (
              <div key={name} className="bg-gray-50 rounded-xl px-5 py-3 border border-gray-100 flex items-center justify-center h-12 w-28">
                <img
                  src={img}
                  alt={name}
                  className="h-6 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<span class="text-xs font-bold text-gray-500">${name}</span>`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
