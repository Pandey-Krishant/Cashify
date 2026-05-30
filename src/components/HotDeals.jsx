const deals = [
  {
    alt: 'Exchange Offers',
    href: '/offer/category/mobile-exchange-offers',
    img: 'https://s3ng.cashify.in/estore/60a36c0f312c4cb88bb7612ad7e583e8.webp',
  },
  {
    alt: 'Refurbished Offers',
    href: '/offer/category/refurbished-device-offers',
    img: 'https://s3ng.cashify.in/estore/8123d1f070bb49b6bc8bbae2dccbd4be.webp',
  },
];

const HotDeals = () => (
  <div className="w-full" style={{ backgroundColor: '#f3f4f7' }}>
    <div className="max-w-screen-xl mx-auto p-2 sm:p-5">
      <div className="p-1 sm:p-2.5">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Hot Deals</h2>
        <div className="flex gap-2.5 overflow-x-auto scrollbar-hide">
          {deals.map(deal => (
            <a key={deal.alt} href={deal.href} className="flex-shrink-0">
              <div className="overflow-hidden rounded-xl max-h-24 sm:max-h-64 min-w-48 bg-white shadow-md">
                <img
                  src={deal.img}
                  alt={deal.alt}
                  className="w-full object-contain"
                  style={{ aspectRatio: '2/1' }}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default HotDeals;
