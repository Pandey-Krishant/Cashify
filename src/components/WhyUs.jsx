const features = [
  {
    title: 'Best Prices',
    desc: 'Objective AI-based pricing',
    img: 'https://s3ng.cashify.in/estore/99953fd419e2416ba7dc25e0164372c3.png',
  },
  {
    title: 'Instant Payment',
    desc: 'Instant Money Transfer in your preferred mode at time of pick up or store drop off',
    img: 'https://s3ng.cashify.in/estore/acef68f939a84a8884640ae56f70867f.png',
  },
  {
    title: 'Simple & Convenient',
    desc: 'Check price, schedule pickup & get paid',
    img: 'https://s3ng.cashify.in/estore/7989ad6b9431414481a1e9dcda098d45.png',
  },
  {
    title: 'Free Doorstep Pickup',
    desc: 'No fees for pickup across 1500 cities across India',
    img: 'https://s3ng.cashify.in/estore/3c0a0e2e0f4945c09e941a10bcf66e83.png',
  },
  {
    title: 'Factory Grade Data Wipe',
    desc: '100% Safe and Data Security Guaranteed',
    img: 'https://s3ng.cashify.in/estore/09bf461127cd48acb409f207e1664438.png',
  },
  {
    title: 'Valid Purchase Invoice',
    desc: 'Genuine Bill of Sale',
    img: 'https://s3ng.cashify.in/estore/4413e4f7e0e448f88a73bd4e6047e93d.png',
  },
];

const WhyUs = () => (
  <section className="w-full bg-[#eaf5f4] py-6">
    <div className="max-w-screen-xl mx-auto sm:px-4">
      <div className="pt-4 px-4 sm:px-0 sm:my-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Why Us</h2>
      </div>
      <div className="px-4 sm:px-0 mt-1">
        <ul className="flex flex-wrap p-0 mb-5 w-full">
          {features.map(f => (
            <li key={f.title} className="flex flex-col sm:flex-row w-1/2 sm:w-1/3 py-2 pr-5 pl-2 sm:p-4">
              <div className="flex items-center justify-center w-12 h-12 min-w-12 sm:w-16 sm:h-16 sm:min-w-16 flex-shrink-0">
                <img src={f.img} alt={f.title} className="w-full h-full object-contain" style={{ aspectRatio: '1/1' }} />
              </div>
              <div className="flex flex-col w-full ml-0 sm:ml-2 mt-2 sm:mt-0">
                <h3 className="text-sm sm:text-base font-bold text-gray-900">{f.title}</h3>
                <span className="text-xs sm:text-sm text-gray-500">{f.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default WhyUs;
