const googleReviews = [
  { name: 'Kalpit Jariwala', date: '19/04/2026', text: 'Finally I sold old phone through Cashify and process kaafi easy tha. Pickup on time hua and payment bhi jaldi aa gaya, overall achha experience raha.', stars: 4.5 },
  { name: 'Lakshya Pandey', date: '22/03/2026', text: 'Sold my OnePlus 13 phone at a great deal yahan, kahin aur itna achha price nahi mil raha tha. Mast experience raha, process bhi kaafi smooth tha. Best website to sell old phone really.', stars: 4.5 },
  { name: 'Lokesh Singh', date: '04/04/2026', text: 'Cashify old phone sell krne ke liye best place hai. I thought bargain karna pad jayega but aisa kuch nahi tha, I am satisfied with the price…Thanks', stars: 5 },
  { name: 'Mahesh Kumar', date: '06/04/2026', text: 'I wanted to sell old phone kafi time se and sabse best mujhe Cashify hi laga. Very good service, professional and price bhi achai mil gaya.', stars: 4.5 },
];

const StarFull = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 41 39" fill="none" className="w-4 h-4 mr-0.5">
    <path d="M20.026.28a.503.503 0 0 1 .903 0l5.938 12.032a.503.503 0 0 0 .379.276l13.277 1.929c.413.06.578.567.28.858l-9.609 9.366a.503.503 0 0 0-.144.445l2.268 13.224a.503.503 0 0 1-.73.53l-11.876-6.243a.504.504 0 0 0-.469 0L8.367 38.941a.503.503 0 0 1-.73-.53l2.268-13.225a.503.503 0 0 0-.144-.445L.153 15.375a.503.503 0 0 1 .279-.858l13.277-1.93a.503.503 0 0 0 .38-.275L20.025.28z" fill="#F4B146"/>
  </svg>
);

const GoogleReviews = () => (
  <div className="w-full bg-black py-4 sm:py-7">
    <div className="flex flex-col justify-center px-4">
      <h2 className="text-xl sm:text-2xl font-bold text-white py-4">What People have to say about Cashify Store</h2>
      <div className="flex flex-col sm:flex-row flex-1 w-full px-2 gap-4">
        {/* Google Rating Card */}
        <div className="flex sm:w-1/4 justify-center sm:mb-0 mb-4 sm:h-64 sm:mr-4">
          <div className="flex flex-col h-full bg-[#1a1a1a] rounded-lg border border-gray-700 shadow-md p-5 w-full sm:w-72 pb-3">
            <img
              src="https://s3ng.cashify.in/builder/cf528fba875a4b6aa0d98e80a1eb25d4.webp"
              alt="Google"
              className="w-48"
            />
            <div className="flex items-center mb-4 mt-4 gap-2">
              <span className="text-3xl font-bold text-white">4.5</span>
              <div className="flex">
                {[1,2,3,4].map(i => <StarFull key={i} />)}
                <StarFull />
              </div>
            </div>
            <button className="flex items-center justify-center rounded-md bg-[#42c8b7] px-4 py-3 text-white text-sm font-medium hover:bg-[#2e8c80] transition">
              Find Nearby Cashify Stores
            </button>
          </div>
        </div>

        {/* Review Cards */}
        <div className="flex flex-row w-full sm:w-3/4 overflow-x-auto scrollbar-hide gap-4">
          {googleReviews.map((r, i) => (
            <div key={i} className="flex flex-col min-w-72 h-64 p-5 w-72 sm:w-80 rounded-lg bg-white mb-10 shadow-md flex-shrink-0">
              <div className="flex gap-0.5 mb-2">
                {[1,2,3,4].map(j => <StarFull key={j} />)}
                <StarFull />
              </div>
              <div className="flex-1 overflow-hidden mt-2 mb-4">
                <p className="text-sm text-gray-700 line-clamp-4">{r.text}</p>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">{r.name}</div>
                <div className="text-xs text-gray-500">{r.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default GoogleReviews;
