const phones = [
  { name: 'Apple iPhone 13', ram: '4 GB', storage: '128 GB', price: '₹24,360', img: 'https://s3ng.cashify.in/cashify/product/img/xhdpi/d0869220-31de.jpg', href: '/sell-old-mobile-phone/used-apple-iphone-13-4-gb-128-gb' },
  { name: 'Apple iPhone 11', ram: '4 GB', storage: '64 GB', price: '₹13,220', img: 'https://s3ng.cashify.in/cashify/product/img/xhdpi/a0ce4c12-be63.jpg', href: '/sell-old-mobile-phone/used-apple-iphone-11-4-gb-64-gb' },
  { name: 'Apple iPhone 14', ram: '6 GB', storage: '128 GB', price: '₹26,450', img: 'https://s3ng.cashify.in/cashify/product/img/xhdpi/75a0fd88-59b4.jpg', href: '/sell-old-mobile-phone/used-apple-iphone-14-6-gb-128-gb' },
  { name: 'Apple iPhone 12', ram: '4 GB', storage: '128 GB', price: '₹17,790', img: 'https://s3ng.cashify.in/cashify/product/img/xhdpi/df7315fe-657c.jpg', href: '/sell-old-mobile-phone/used-apple-iphone-12-4-gb-128-gb' },
  { name: 'Apple iPhone 12', ram: '4 GB', storage: '64 GB', price: '₹17,090', img: 'https://s3ng.cashify.in/cashify/product/img/xhdpi/e440e03d-bf9b.jpg', href: '/sell-old-mobile-phone/used-apple-iphone-12-4-gb-64-gb' },
  { name: 'Apple iPhone 11', ram: '4 GB', storage: '128 GB', price: '₹13,950', img: 'https://s3ng.cashify.in/cashify/product/img/xhdpi/81edef7f-b753.jpg', href: '/sell-old-mobile-phone/used-apple-iphone-11-4-gb-128-gb' },
  { name: 'Apple iPhone 15', ram: '6 GB', storage: '128 GB', price: '₹37,660', img: 'https://s3ng.cashify.in/cashify/product/img/xhdpi/fd5051d8-d5a1.jpg', href: '/sell-old-mobile-phone/used-apple-iphone-15-6-gb-128-gb' },
  { name: 'Apple iPhone 14 Pro', ram: '6 GB', storage: '128 GB', price: '₹41,480', img: 'https://s3ng.cashify.in/cashify/product/img/xhdpi/3e683ab8-839f.jpg', href: '/sell-old-mobile-phone/used-apple-iphone-14-pro-6-gb-128-gb' },
  { name: 'Apple iPhone 13 Pro', ram: '6 GB', storage: '128 GB', price: '₹33,430', img: 'https://s3ng.cashify.in/cashify/product/img/xhdpi/683aff24-d9f0.jpg', href: '/sell-old-mobile-phone/used-apple-iphone-13-pro-6-gb-128-gb' },
  { name: 'OnePlus Nord CE 2 Lite 5G', ram: '6 GB', storage: '128 GB', price: '₹7,840', img: 'https://s3ng.cashify.in/cashify/product/img/xhdpi/264af7ce-5d01.jpg', href: '/sell-old-mobile-phone/used-oneplus-nord-ce-2-lite-5g-6-gb-128-gb' },
];

const TopPhones = () => (
  <div className="max-w-screen-xl mx-auto px-4 py-5">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-5">Top Selling Mobile Phones</h2>
    <div className="flex flex-col">
      {/* Header */}
      <div className="hidden sm:grid sm:grid-cols-2 px-3 py-4 sm:py-4 sm:px-6 bg-[#f7f7f7]">
        <div className="text-sm font-bold text-gray-900">Top Selling Mobile Phones</div>
        <div className="text-sm font-bold text-gray-900">Price</div>
      </div>
      {/* Rows */}
      <div className="border border-[#f2f2f2]">
        {phones.map((phone, i) => (
          <div key={i} className="flex flex-col">
            <div className="flex flex-row sm:grid sm:grid-cols-2 px-3 py-4 sm:px-6 sm:py-4 items-center">
              {/* Left */}
              <div className="flex flex-row items-center sm:col-span-1">
                <div className="bg-[#f7f7f7] rounded-md w-20 h-20 flex-shrink-0 overflow-hidden">
                  <img src={phone.img} alt={phone.name} className="w-20 h-20 object-contain" />
                </div>
                <div className="hidden sm:flex flex-col ml-4">
                  <span className="text-sm text-gray-800">{phone.name}</span>
                  <span className="text-sm text-gray-500">({phone.ram}/{phone.storage})</span>
                </div>
              </div>
              {/* Right */}
              <div className="flex flex-row justify-between items-center sm:col-span-1 ml-2 sm:ml-0 flex-1 sm:flex-none">
                <div className="flex flex-col">
                  <span className="text-xs sm:hidden text-gray-800 mb-1 w-32">{phone.name} ({phone.ram}/{phone.storage})</span>
                  <span className="text-xs text-gray-500">Get Upto</span>
                  <span className="text-base sm:text-lg font-bold text-[#fe6461]">{phone.price}</span>
                </div>
                <a href={phone.href}>
                  <button className="flex items-center justify-center rounded-md bg-[#42c8b7] px-4 py-3 text-white text-sm font-medium whitespace-nowrap hover:bg-[#2e8c80] transition">
                    Sell Now
                  </button>
                </a>
              </div>
            </div>
            <div className="border-b border-[#f2f2f2] w-full" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TopPhones;
