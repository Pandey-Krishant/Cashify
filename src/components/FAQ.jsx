import { useState } from 'react';

const faqs = [
  { q: 'How do I know the price of my old phone?', a: "Just visit the website or app, enter your phone details (brand, model, condition), get an instant price. Accept the offer and schedule a free pickup. You'll get paid once the phone is checked." },
  { q: 'What should I do if my sell old phone is not turning on?', a: "Even if your phone is off or not working, you can still sell it. Just mention the condition, and Cashify will give you a fair price." },
  { q: 'Can I cancel my sale if I change my mind?', a: "Yes, you can cancel the sale before the pickup or inspection is done. Just tell the executive of your decision or reach out to the Cashify support team." },
  { q: "Can I sell my phone if it's locked to a specific network?", a: "Yes, you can still sell a network-locked phone. Just let us know its condition." },
  { q: 'Is there a fee for selling my phone?', a: "No, when you sell old phone on Cashify, it is free. There are no hidden fees or charges." },
  { q: 'Can I sell my old phone if it does not power on?', a: "Yes, Cashify accepts non-working phones as well. However, you need to select the right condition when answering questions on the website. You might get a lower price but we still offer a fair price for damaged phones." },
  { q: 'What documents do I need to sell my phone on Cashify?', a: "When selecting your device's conditions, you will be asked about the bill and original documents. Even if you don't have it, you still can sell mobile phones online on Cashify." },
];

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 stroke-2 transition-transform duration-200">
    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd"/>
  </svg>
);

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? faqs : faqs.slice(0, 3);

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">FAQs</h2>
      <div className="rounded-xl">
        {visible.map((faq, i) => (
          <div key={i}>
            <div className="relative flex flex-row justify-between flex-wrap items-center overflow-hidden">
              <button
                className="flex-1 flex justify-between items-center text-left py-3 sm:py-4 pr-10"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm sm:text-base font-bold text-gray-900">{faq.q}</span>
              </button>
              <button
                className={`absolute right-4 top-3 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <ChevronDown />
              </button>
              {open === i && (
                <div className="w-full px-0 pb-3 text-sm text-gray-500 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
            <div className="border-b border-gray-200 w-full my-1" />
          </div>
        ))}
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-2 text-center w-full text-sm font-bold text-[#42c8b7] hover:underline"
        >
          {showAll ? 'Load Less FAQs' : 'Load More FAQs'}
        </button>
      </div>
    </section>
  );
};

export default FAQ;
