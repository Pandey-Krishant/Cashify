const articles = [
  {
    title: '512GB Phones: The Sweet Spot For Resale Value In 2026',
    img: 'https://s3bg.cashify.in/gpro/uploads/2026/03/13152024/512GB-Phones-The-Sweet-Spot-for-Resale-Value-in-2025.webp',
    href: '/512gb-phones-the-sweet-spot-for-resale-value',
  },
  {
    title: 'Why iPhones Hold 15% More Resale Value Than Android In India',
    img: 'https://s3bg.cashify.in/gpro/uploads/2026/03/13151735/Why-iPhones-Hold-15-More-Resale-Value-Than-Android-in-India.webp',
    href: '/why-iphones-hold-more-resale-value-than-android-in-india',
  },
  {
    title: "Verify Your Phone's 'Clean' Status Before Selling- Avoid Surprises",
    img: 'https://s3bg.cashify.in/gpro/uploads/2026/03/13151556/Verify-Your-Phones-%E2%80%98Clean-Status-Before-Selling-Avoid-Surprises.webp',
    href: '/verify-your-phones-clean-status-before-selling-avoid-surprises',
  },
  {
    title: "3 Steps to Ensure Your Digital SIM Doesn't Go With Sold Phones",
    img: 'https://s3bg.cashify.in/gpro/uploads/2026/03/13151322/3-Steps-to-Ensure-Your-Digital-SIM-Doesnt-Go-With-Sold-Phones.webp',
    href: '/steps-to-ensure-your-digital-sim-doesnt-go-with-sold-phones',
  },
  {
    title: 'Does Phones With Dedicated Neural Engines Could Make You More Money?',
    img: 'https://s3bg.cashify.in/gpro/uploads/2026/03/13151132/Phones-With-Dedicated-Neural-Engines-Could-Make-You-More-Money_.webp',
    href: '/does-phones-with-dedicated-neural-engines-could-make-you-more-money',
  },
];

const Articles = () => (
  <section className="max-w-screen-xl mx-auto px-4 py-6">
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-lg sm:text-xl font-bold text-gray-900">Be Smart. Sell Smart</h2>
      <a href="/articles/" className="text-xs sm:text-sm text-[#42c8b7] hover:underline">See all</a>
    </div>
    <div className="flex overflow-x-auto scrollbar-hide gap-4">
      {articles.map((a, i) => (
        <a key={i} href={a.href} className="flex-shrink-0 pt-4">
          <div className="w-72 h-36 sm:w-80 sm:h-40 relative flex flex-row justify-start items-end rounded-lg mr-3 overflow-hidden">
            <img
              src={a.img}
              alt={a.title}
              className="absolute w-full h-full object-cover rounded-lg"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 rounded-lg" />
            <h3 className="relative z-10 text-white text-xs font-semibold px-4 mb-2 line-clamp-1">{a.title}</h3>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Articles;
