const navItems = [
  { label: 'Home', href: '/', img: 'https://s3ng.cashify.in/builder/605ad46c84774f5f89cf61220ce57b85.webp', active: false },
  { label: 'Buy', href: '/buy-refurbished-gadgets', img: 'https://s3ng.cashify.in/builder/bf5fcc7a7b844daaa3ca0b5041acac69.webp', active: false },
  { label: 'Sell', href: '/sell-old-mobile-phone', img: 'https://s3ng.cashify.in/builder/85930f291b654008b4262fbf936d3523.webp', active: true },
  { label: 'Repair', href: '/repair', img: 'https://s3ng.cashify.in/builder/bab4aa63de5b4d969586cf04ed00571e.webp', active: false },
  { label: 'Profile', href: '/user/profile', img: 'https://s3ng.cashify.in/builder/1203bcd4e62f47b5b022f9e7d67c8ad9.webp', active: false },
];

const BottomNav = () => (
  <div className="sm:hidden fixed bottom-0 left-0 right-0 z-20 bg-white shadow-[0px_-2px_4px_rgba(15,15,15,0.08)]">
    <div className="px-6 py-3 flex flex-row justify-between" style={{ paddingBottom: '12px' }}>
      {navItems.map(item => (
        <a key={item.label} href={item.href} className="flex flex-col items-center justify-center flex-1">
          <img src={item.img} alt={item.label} className="h-7 w-7" />
          <span className={`text-xs mt-1 ${item.active ? 'text-[#42c8b7] font-semibold' : 'text-gray-500'}`}>
            {item.label}
          </span>
        </a>
      ))}
    </div>
  </div>
);

export default BottomNav;
