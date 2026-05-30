import { MapPin, Clock, Phone, ChevronRight } from 'lucide-react';

const stores = [
  {
    city: 'GURGAON',
    name: 'Cashify Store — Airia Mall Sec 68',
    address: 'Ground Floor, Reach, AIRIA MALL, Badshahpur Sohna Rd Hwy, Sector 68, Gurugram, Haryana',
    timing: '11:00 AM - 10:00 PM',
    phone: '7290068900',
  },
  {
    city: 'GURGAON',
    name: 'Cashify Store — Sushant Lok',
    address: 'GF 133, Sushant Vyapar Kendra, Sushant Lok, Gurgaon',
    timing: '10:00 AM - 09:00 PM',
    phone: '7290068900',
  },
  {
    city: 'DELHI',
    name: 'Cashify Store — Saket',
    address: '55, 2nd Floor, Lane-2, Westend Marg, Saidullajab, Near Saket Metro Station, New Delhi',
    timing: '10:00 AM - 09:00 PM',
    phone: '7290068900',
  },
  {
    city: 'BENGALURU',
    name: 'Cashify Store — Koramangala',
    address: '80 Feet Road, Koramangala 4th Block, Bengaluru, Karnataka',
    timing: '10:00 AM - 09:00 PM',
    phone: '7290068900',
  },
  {
    city: 'MUMBAI',
    name: 'Cashify Store — Andheri',
    address: 'Shop 12, Infinity Mall, New Link Road, Andheri West, Mumbai',
    timing: '11:00 AM - 10:00 PM',
    phone: '7290068900',
  },
  {
    city: 'HYDERABAD',
    name: 'Cashify Store — Banjara Hills',
    address: 'Road No. 12, Banjara Hills, Hyderabad, Telangana',
    timing: '10:00 AM - 09:00 PM',
    phone: '7290068900',
  },
];

const Stores = () => {
  return (
    <section className="py-14 px-4 bg-white" id="stores">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">Our Exclusive Stores</h2>
          <p className="text-gray-500">200+ Experience Centres across India • 4.5+ Star Ratings</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {stores.map((store) => (
            <div key={store.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-5 group">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-bold bg-orange-100 text-[#f97316] px-3 py-1 rounded-full">{store.city}</span>
                <MapPin size={16} className="text-[#f97316] mt-1" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 group-hover:text-[#f97316] transition">{store.name}</h3>
              <p className="text-xs text-gray-500 mb-3 leading-relaxed">{store.address}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <Clock size={12} className="text-green-500" />
                  {store.timing}
                </span>
              </div>
              <div className="flex gap-2 mt-4">
                <button className="flex-1 border border-[#f97316] text-[#f97316] text-xs font-bold py-2 rounded-xl hover:bg-orange-50 transition">
                  Get Directions
                </button>
                <button className="flex-1 bg-[#f97316] text-white text-xs font-bold py-2 rounded-xl hover:bg-orange-600 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="border-2 border-[#f97316] text-[#f97316] font-bold px-8 py-3 rounded-full hover:bg-orange-50 transition flex items-center gap-2 mx-auto">
            View All 200+ Stores <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stores;
