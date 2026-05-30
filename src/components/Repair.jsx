import { Wrench, Clock, Shield, Star, ChevronRight } from 'lucide-react';

const BLUE = '#1B4FD8';

const repairServices = [
  { emoji: '📱', title: 'Screen Replacement', price: '₹799', time: '30 mins', popular: true },
  { emoji: '🔋', title: 'Battery Replacement', price: '₹499', time: '20 mins', popular: false },
  { emoji: '📷', title: 'Camera Repair', price: '₹699', time: '45 mins', popular: false },
  { emoji: '🔊', title: 'Speaker Repair', price: '₹399', time: '30 mins', popular: false },
  { emoji: '💧', title: 'Water Damage', price: '₹999', time: '60 mins', popular: false },
  { emoji: '🔌', title: 'Charging Port Fix', price: '₹449', time: '25 mins', popular: false },
];

const Repair = () => {
  return (
    <section className="py-12 px-4 bg-gray-50" id="repair">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 text-white text-xs font-semibold px-4 py-2 rounded-full mb-4"
            style={{ background: BLUE }}
          >
            <Wrench size={13} />
            Professional Repair Services
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Get Your Device Repaired</h2>
          <p className="text-gray-500 text-sm">Expert technicians • Genuine parts • 3-month warranty</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left */}
          <div>
            <div className="rounded-2xl overflow-hidden mb-5 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=700&q=85"
                alt="Phone repair"
                className="w-full h-52 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {repairServices.map(({ emoji, title, price, time, popular }) => (
                <div
                  key={title}
                  className="relative bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition border border-gray-100 cursor-pointer group"
                  style={{ '--hover-border': BLUE }}
                >
                  {popular && (
                    <span
                      className="absolute -top-2 -right-2 text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: BLUE }}
                    >
                      Popular
                    </span>
                  )}
                  <div className="text-2xl mb-2">{emoji}</div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">{title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-sm" style={{ color: BLUE }}>From {price}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock size={10} /> {time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — booking form */}
          <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
            <h3 className="text-lg font-extrabold text-gray-900 mb-6">Book a Repair</h3>
            <div className="space-y-3 mb-5">
              {[
                { label: 'Device Type', options: ['Mobile Phone', 'Laptop', 'Tablet'] },
                { label: 'Brand', options: ['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Realme'] },
                { label: 'Issue', options: ['Screen Broken', 'Battery Draining', 'Camera Not Working', 'Speaker Issue', 'Water Damage'] },
              ].map(({ label, options }) => (
                <select
                  key={label}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none bg-gray-50 transition"
                  style={{ '--focus-border': BLUE }}
                  onFocus={e => e.target.style.borderColor = BLUE}
                  onBlur={e => e.target.style.borderColor = '#E5E7EB'}
                >
                  <option>Select {label}</option>
                  {options.map(o => <option key={o}>{o}</option>)}
                </select>
              ))}
              <input
                type="text"
                placeholder="Enter your Pincode"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none bg-gray-50"
                onFocus={e => e.target.style.borderColor = BLUE}
                onBlur={e => e.target.style.borderColor = '#E5E7EB'}
              />
            </div>

            <button
              style={{ background: BLUE }}
              className="w-full text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2 text-sm"
            >
              Book Repair Now <ChevronRight size={16} />
            </button>

            <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-gray-100">
              {[
                { icon: '🛡️', label: '3-Month Warranty' },
                { icon: '⚙️', label: 'Genuine Parts' },
                { icon: '⚡', label: 'Same Day Repair' },
              ].map(({ icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1 text-center">
                  <span className="text-xl">{icon}</span>
                  <span className="text-xs text-gray-600 font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repair;
