const steps = [
  {
    num: 1,
    title: 'Check Price',
    desc: "Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.",
    img: 'https://s3ng.cashify.in/estore/0cbe53723c3f453b9129991ca35df5f0.png',
  },
  {
    num: 2,
    title: 'Schedule Pickup',
    desc: 'Book a free pickup from your home or work at a time slot that best suits your convenience.',
    img: 'https://s3ng.cashify.in/estore/11c121e3650747689b22301209b725a4.png',
  },
  {
    num: 3,
    title: 'Get Paid',
    desc: "Did we mention you get paid as soon as our executive picks up your device? It's instant payment all the way!",
    img: 'https://s3ng.cashify.in/estore/b9d74e87eedd4de3b47531e13a033fb2.png',
  },
];

const HowItWorks = () => (
  <section className="max-w-screen-xl mx-auto px-4 py-8">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">How Cashify Works</h2>
    <ul className="flex flex-col sm:flex-row gap-6 p-0 m-0">
      {steps.map(step => (
        <li key={step.num} className="flex sm:flex-col items-center sm:items-start sm:flex-1 gap-4">
          {/* Image */}
          <div className="flex items-center justify-center w-24 h-24 sm:w-36 sm:h-36 flex-shrink-0">
            <img src={step.img} alt={step.title} className="w-16 sm:w-24 object-contain" />
          </div>
          {/* Text */}
          <div className="flex-1">
            <div className="flex items-center gap-2 sm:gap-7 mb-2 sm:mb-5">
              <span className="flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-[#42c8b7] text-white text-xs sm:text-sm font-bold flex-shrink-0">
                {step.num}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900">{step.title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{step.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default HowItWorks;
