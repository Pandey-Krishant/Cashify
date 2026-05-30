import { Smartphone, Laptop, Tv, Tablet, Gamepad2, Watch, Speaker, Camera, Headphones, ChevronRight } from 'lucide-react';

const BLUE = '#1B4FD8';

const sellCategories = [
  { icon: <Smartphone size={28} />, label: 'Phone', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=120&q=80' },
  { icon: <Laptop size={28} />, label: 'Laptop', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=120&q=80' },
  { icon: <Tv size={28} />, label: 'TV', img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f4834c?w=120&q=80' },
  { icon: <Tablet size={28} />, label: 'Tablet', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=120&q=80' },
  { icon: <Gamepad2 size={28} />, label: 'Gaming Console', img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=120&q=80' },
  { icon: <Watch size={28} />, label: 'Smartwatch', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=120&q=80' },
  { icon: <Speaker size={28} />, label: 'Smart Speaker', img: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=120&q=80' },
  { icon: <Camera size={28} />, label: 'DSLR Camera', img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=120&q=80' },
  { icon: <Headphones size={28} />, label: 'Earbuds', img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=120&q=80' },
];

const steps = [
  { step: '01', title: 'Select Device', desc: 'Choose device type, brand & model', icon: '📱' },
  { step: '02', title: 'Get Instant Quote', desc: 'Answer a few condition questions', icon: '💰' },
  { step: '03', title: 'Schedule Pickup', desc: 'Book free doorstep pickup', icon: '🚚' },
  { step: '04', title: 'Get Paid Instantly', desc: 'Cash or bank transfer on spot', icon: '✅' },
];

const SellDevice = () => {
  return (
    <section className="py-12 px-4 bg-gray-50" id="sell">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Sell Your Old Device</h2>
            <p className="text-gray-500 text-sm mt-1">Get the best price — free pickup, instant payment</p>
          </div>
          <button
            style={{ background: BLUE }}
            className="hidden sm:flex items-center gap-2 text-white font-bold px-5 py-2.5 rounded-full text-sm hover:opacity-90 transition"
          >
            Sell Now <ChevronRight size={15} />
          </button>
        </div>

        {/* Banner */}
        <div className="relative rounded-2xl overflow-hidden mb-8 shadow-md">
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1400&q=85"
            alt="Sell your old devices"
            className="w-full h-52 object-cover"
          />
          <div className="absolute inset-0 flex items-center px-8"
            style={{ background: 'linear-gradient(90deg, rgba(27,79,216,0.92) 0%, rgba(27,79,216,0.5) 60%, transparent 100%)' }}>
            <div>
              <h3 className="text-white text-3xl font-extrabold mb-2">Get Instant Cash</h3>
              <p className="text-blue-100 text-sm mb-4">Free pickup • Instant payment • 100% data wipeout</p>
              <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-bold px-6 py-2.5 rounded-full text-sm transition">
                Check Your Price →
              </button>
            </div>
          </div>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-3 mb-10">
          {sellCategories.map(({ icon, label, img }) => (
            <button
              key={label}
              className="flex flex-col items-center gap-2 p-3 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 border border-gray-100 hover:border-blue-200 group"
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 relative">
                <img
                  src={img}
                  alt={label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => { e.target.style.display='none'; }}
                />
              </div>
              <span className="text-[11px] font-semibold text-gray-700 text-center leading-tight">{label}</span>
            </button>
          ))}
        </div>

        {/* How it works */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-lg font-extrabold text-gray-900 mb-8 text-center">How It Works</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ step, title, desc, icon }, i) => (
              <div key={step} className="relative flex flex-col items-center text-center">
                <div
                  className="w-14 h-14 rounded-full text-white font-extrabold text-lg flex items-center justify-center mb-4 shadow-lg text-2xl"
                  style={{ background: `linear-gradient(135deg, ${BLUE}, #0F2E8A)` }}
                >
                  {icon}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-blue-100" />
                )}
                <div className="text-xs font-bold mb-1" style={{ color: BLUE }}>Step {step}</div>
                <h4 className="font-bold text-gray-800 mb-1 text-sm">{title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellDevice;
