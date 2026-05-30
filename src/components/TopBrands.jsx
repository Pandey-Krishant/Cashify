const brands = [
  { name: 'Apple', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/2e7cdc22-5a5f.jpg', href: '/sell-old-mobile-phone/sell-apple' },
  { name: 'Xiaomi', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg', href: '/sell-old-mobile-phone/sell-xiaomi' },
  { name: 'Samsung', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg', href: '/sell-old-mobile-phone/sell-samsung' },
  { name: 'Vivo', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/20922c34-8afc.jpg', href: '/sell-old-mobile-phone/sell-vivo' },
  { name: 'OnePlus', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/dfb6c340-010f.jpg', href: '/sell-old-mobile-phone/sell-oneplus' },
  { name: 'OPPO', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/ac5c9a7b-76b5.jpg', href: '/sell-old-mobile-phone/sell-oppo' },
  { name: 'Realme', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/0124cc45-3a6c.jpg', href: '/sell-old-mobile-phone/sell-realme' },
  { name: 'Motorola', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/1dcd7fda-0141.jpg', href: '/sell-old-mobile-phone/sell-motorola' },
  { name: 'Lenovo', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/4834825a-7f10.jpg', href: '/sell-old-mobile-phone/sell-lenovo' },
  { name: 'Nokia', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/fef4e5ae-6507.jpg', href: '/sell-old-mobile-phone/sell-nokia' },
  { name: 'Honor', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/cfeaabff-69bf.jpg', href: '/sell-old-mobile-phone/sell-honor' },
  { name: 'Asus', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/bf25222a-a2a7.jpg', href: '/sell-old-mobile-phone/sell-asus' },
  { name: 'Google', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/dacc50a2-77a9.jpg', href: '/sell-old-mobile-phone/sell-google' },
  { name: 'POCO', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/3e072dc2-6d7b.jpg', href: '/sell-old-mobile-phone/sell-poco' },
  { name: 'LG', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/bdbdc48e-dd24.jpg', href: '/sell-old-mobile-phone/sell-lg' },
  { name: 'Infinix', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/738cb1f1-7ddf.jpg', href: '/sell-old-mobile-phone/sell-infinix' },
  { name: 'Tecno', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/55424ad4-0400.jpg', href: '/sell-old-mobile-phone/sell-tecno' },
  { name: 'iQOO', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/e1b13cbc-ef06.jpg', href: '/sell-old-mobile-phone/sell-iqoo' },
  { name: 'Nothing', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/06bc74db-4d38.jpg', href: '/sell-old-mobile-phone/sell-nothing' },
];

const TopBrands = () => (
  <div className="max-w-screen-xl mx-auto px-4 py-5">
    <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Top Selling Brands</h2>
    <div className="flex overflow-x-auto scrollbar-hide gap-1 ml-1">
      {brands.map(brand => (
        <div key={brand.name} className="mr-1 ml-1 sm:mr-4 py-4 flex-shrink-0 w-28 sm:w-40 max-h-52 sm:max-h-56 rounded-md h-48">
          <a href={brand.href} title={`Sell Old ${brand.name}`} className="w-full h-full">
            <div className="flex flex-col items-center justify-start cursor-pointer w-full h-full bg-white p-1 sm:p-4 rounded-md shadow-md hover:shadow-lg transition">
              <div className="flex items-center justify-center rounded-md mb-1 h-20 w-full overflow-hidden">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="w-full h-auto object-contain"
                  style={{ aspectRatio: '1/1' }}
                />
              </div>
              <span className="text-xs text-center text-gray-700 font-medium">{brand.name}</span>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default TopBrands;
