const quoteImg = 'https://s3ng.cashify.in/estore/0d41ccd7403f41269cb1ced6bb5c9e97.png';

const stories = [
  { name: 'Ratikant Gokhale', city: 'Gurgaon', img: 'https://s3bg.cashify.in/gpro/uploads/2026/02/27151322/Ratikant-Gokhale.webp', text: "I loved that Cashify picked up my phone from my home and paid me instantly. It was super convenient since I'm always busy." },
  { name: 'Harpreet Singh', city: 'Haldwani', img: 'https://s3bg.cashify.in/gpro/uploads/2026/02/27150745/Harpreet-Singh.webp', text: "I tried selling my phone locally, but didn't have any luck as everyone was trying to exploit the price. Cashify helped me sell it in just minutes without any stress." },
  { name: 'Bagesh Kumar', city: 'Agra', img: 'https://s3bg.cashify.in/gpro/uploads/2026/02/27144530/Bagesh-Kumar.webp', text: "My phone was in good condition, and I was surprised that Cashify offered me more than I expected. Really happy with the deal." },
  { name: 'Shubham Ghunawat', city: 'Delhi', img: 'https://s3bg.cashify.in/gpro/uploads/2025/07/04141540/Shubham-Ghunawat.webp', text: "I was nervous about selling my phone online as the condition was really good, but Cashify made it simple with no hassles and great customer support." },
  { name: 'Shafi Anwar', city: 'Patna', img: 'https://s3bg.cashify.in/gpro/uploads/2025/07/04141256/Shafi-Anwar-1.webp', text: "I sold my old phone on Cashify recently. I loved how the whole process was super quick and easy. I got a fair price, and the payment came through fast!" },
  { name: 'Priyank Rawat', city: 'Noida', img: 'https://s3bg.cashify.in/gpro/uploads/2025/03/26141324/Priyank-Rawat.webp', text: "I trust Cashify to sell any phone online. They are super professional, fast, give good price and don't cause delays in payment." },
  { name: 'Ram Balram', city: 'Udaipur', img: 'https://s3bg.cashify.in/gpro/uploads/2025/03/26140912/Ram-Balram.webp', text: "Great experience! The staff was professional, and the process was smooth. Got a fair price for my old phone." },
  { name: 'Satish Ram', city: 'Jaipur', img: 'https://s3bg.cashify.in/gpro/uploads/2025/03/26140636/Satish-R.webp', text: "I liked the Cashify service. I was able to sell my used phone from Redmi finally. There was no issue with the payment as well. Thanks" },
  { name: 'Yogesh Sharma', city: 'Goa', img: 'https://s3bg.cashify.in/gpro/uploads/2025/03/26135337/yogesh-sharma.webp', text: "Cashify is good! Their staff is polite and responsive. I got a reasonable quote when I went to sell my old mobile." },
  { name: 'Vineed N.k', city: 'Delhi', img: 'https://s3bg.cashify.in/gpro/uploads/2025/03/26132408/Vineed-N.k.webp', text: "I didn't think I could sell my old phone but got a good price at Cashify! Didn't even had to bargain. Thanks to the team!" },
];

const StarRating = ({ count = 5 }) => (
  <div className="flex gap-0.5 mb-2">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 41 39" fill="none" className="w-4 h-4">
        <path d="M20.026.28a.503.503 0 0 1 .903 0l5.938 12.032a.503.503 0 0 0 .379.276l13.277 1.929c.413.06.578.567.28.858l-9.609 9.366a.503.503 0 0 0-.144.445l2.268 13.224a.503.503 0 0 1-.73.53l-11.876-6.243a.504.504 0 0 0-.469 0L8.367 38.941a.503.503 0 0 1-.73-.53l2.268-13.225a.503.503 0 0 0-.144-.445L.153 15.375a.503.503 0 0 1 .279-.858l13.277-1.93a.503.503 0 0 0 .38-.275L20.025.28z" fill="#F4B146"/>
      </svg>
    ))}
  </div>
);

const CustomerStories = () => (
  <div className="w-full bg-[#0f0f0f] py-4 sm:py-7">
    <div className="flex justify-center px-4">
      <h2 className="text-xl sm:text-2xl font-bold text-white w-full py-7 text-center max-w-screen-xl">Customer Stories</h2>
    </div>
    <div className="flex justify-center">
      <div className="w-full max-w-screen-xl">
        <div className="flex overflow-x-auto scrollbar-hide gap-4 px-4">
          {stories.map((s, i) => (
            <div key={i} className={`flex-shrink-0 flex flex-col p-5 w-72 sm:w-80 h-96 border rounded-lg bg-white mb-10 shadow-md ${i === stories.length - 1 ? 'mr-4' : ''}`}>
              <img src={quoteImg} alt="quote" className="h-11 w-11" />
              <div className="flex-1 overflow-hidden mt-4 mb-4">
                <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">{s.text}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover rounded-full" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{s.name}</div>
                  <div className="text-xs text-gray-500">{s.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default CustomerStories;
