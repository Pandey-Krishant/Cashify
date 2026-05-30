const AppDownload = () => (
  <div className="max-w-screen-xl mx-auto px-4 py-5">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-stretch bg-[#42c8b7] rounded-xl sm:pl-12 pt-6 sm:pt-5 sm:pr-16 w-full overflow-hidden">
      {/* Left */}
      <div className="flex flex-col justify-center px-5 sm:px-0 pb-6 sm:pb-0">
        <span className="text-2xl sm:text-4xl font-bold text-white mb-3">Download the App</span>
        <span className="text-sm sm:text-base text-white/90 sm:mb-3 max-w-xl">
          Sell your old phone | Buy top-quality refurbished phones | Get your phone repaired
        </span>
        <div className="flex flex-row mt-7 sm:mt-12 gap-3">
          <a
            rel="nofollow"
            href="https://play.google.com/store/apps/details?id=com.reglobe.cashify"
            className="flex-shrink-0"
          >
            <img
              src="https://s3ng.cashify.in/estore/79522c7ab33f430287c166f0477e289a.png"
              alt="Get it on Google Play"
              className="w-28 h-14 object-contain"
            />
          </a>
          <a
            rel="nofollow"
            href="https://itunes.apple.com/in/app/cashify/id1133551195?mt=8"
            className="flex-shrink-0"
          >
            <img
              src="https://s3ng.cashify.in/estore/6dc452d5d57445f09cd56ac6629aa09c.png"
              alt="Download on the App Store"
              className="w-28 h-14 object-contain"
            />
          </a>
        </div>
      </div>

      {/* Right — App mockup image */}
      <div className="h-52 px-3 sm:px-0 sm:h-full w-full sm:max-w-lg flex items-end justify-center sm:justify-end">
        <img
          src="https://s3ng.cashify.in/cashify/web/images/landing/pngs/download-app.png"
          alt="Cashify App"
          className="w-full h-full object-contain object-bottom"
          style={{ maxHeight: '210px' }}
        />
      </div>
    </div>
  </div>
);

export default AppDownload;
