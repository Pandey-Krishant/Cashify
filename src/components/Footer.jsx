import { useState } from 'react';

const CashifyLogoFooter = () => (
  <svg viewBox="0 0 130 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-44 sm:w-60 h-14 sm:h-16 mb-5 sm:mb-6 sm:-ml-5">
    <g clipPath="url(#footer-clip)">
      <path d="M45.6928 10.8814L43.579 13.454C43.0673 12.8374 42.4342 12.3326 41.7191 11.971C41.0024 11.6107 40.2182 11.4041 39.4169 11.3648C38.1291 11.4018 36.9064 11.9394 36.0086 12.8634C35.1108 13.7874 34.6086 15.025 34.6086 16.3134C34.6086 17.6017 35.1108 18.8393 36.0086 19.7633C36.9064 20.6873 38.1291 21.225 39.4169 21.262C40.9939 21.1881 42.483 20.514 43.579 19.3776L45.7092 21.6963C44.0132 23.462 41.692 24.4916 39.2448 24.5638C37.6367 24.6137 36.05 24.1858 34.685 23.3342C33.32 22.4825 32.2382 21.2454 31.5761 19.7791C31.1356 18.8042 30.8933 17.7515 30.8633 16.6821V16.3544C30.8668 15.2825 31.0812 14.2219 31.4942 13.2328C31.9046 12.2435 32.5092 11.3464 33.2721 10.5946C34.0342 9.8407 34.9358 9.24239 35.9266 8.83308C36.9163 8.42478 37.9776 8.21864 39.0482 8.2268C39.1629 8.2268 39.2776 8.2268 39.3923 8.23499C41.759 8.25294 44.0231 9.20391 45.6928 10.8814Z" fill="#42C8B7"/>
      <path d="M50.8466 21.3045L49.5931 24.4179H45.8652L52.813 8.35938H56.5408L63.3657 24.4179H59.5068L58.2532 21.3045H50.8466ZM54.5663 12.1446L52.0346 18.3877H57.0816L54.5663 12.1446Z" fill="#42C8B7"/>
      <path d="M76.1801 9.34938L75.115 12.4873C73.5155 11.7139 71.754 11.3346 69.9779 11.3813C68.7736 11.5124 68.0034 12.0285 68.0935 12.897C68.4049 15.8383 76.7127 13.2903 77.3026 19.0418C77.6385 22.1716 75.1068 24.1461 71.5838 24.523C69.0174 24.785 66.4392 24.1542 64.2837 22.7369L65.4062 19.6399C67.1148 20.8843 69.1931 21.5165 71.3052 21.4342C72.78 21.2785 73.6075 20.6313 73.5092 19.6481C73.1896 16.6412 64.8982 19.304 64.2919 13.6344C63.9806 10.7422 66.2665 8.64477 69.9534 8.25151C72.0908 8.02859 74.2479 8.40892 76.1801 9.34938Z" fill="#42C8B7"/>
      <path d="M90.3539 24.4179V18.0928H83.1112V24.4179H79.498V8.35938H83.1112V15.0531H90.3539V8.35938H93.9671V24.4179H90.3539Z" fill="#42C8B7"/>
      <path d="M99.6199 8.375H96.1133V24.4007H99.6199V8.375Z" fill="#42C8B7"/>
      <path d="M101.727 24.3921H105.233V18.4521H111.485V14.9291H105.233V11.9058H112.337V8.38281H101.727V24.3921Z" fill="#42C8B7"/>
      <path d="M125.806 8.375L121.75 14.6263L117.637 8.375H113.418L120.005 18.346V24.4007H123.512V18.3378L130.001 8.375H125.806Z" fill="#42C8B7"/>
      <path d="M16.3534 32.7745C7.34102 32.7745 0 25.4253 0 16.3883C0 7.3513 7.33283 0.00208389 16.3534 0.00208389C18.5137 -0.00662432 20.6537 0.419695 22.6457 1.25563C24.6388 2.09076 26.4462 3.31332 27.9631 4.8524C28.6841 6.59753 27.9549 8.34267 24.4646 8.33447C23.4063 7.26072 22.1447 6.40849 20.7535 5.82753C19.3623 5.24657 17.8693 4.9485 16.3616 4.95072C10.0693 4.95072 4.94864 10.0796 4.94864 16.3883C4.94864 22.697 10.0693 27.8259 16.3616 27.8259C17.8693 27.8281 19.3623 27.53 20.7535 26.9491C22.1447 26.3681 23.4063 25.5159 24.4646 24.4421C27.9607 24.4281 28.6877 26.1756 27.9631 27.9242C26.4482 29.4648 24.641 30.6874 22.6474 31.5203C20.6538 32.3531 18.514 32.7796 16.3534 32.7745Z" fill="#42C8B7"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M21.3678 15.1596L19.8603 16.6753L17.2877 19.2561C16.6486 19.8952 16.239 19.9525 15.5999 19.3053C14.5922 18.2893 13.7646 17.4618 12.0769 15.7659C11.6099 14.6352 11.7316 14.0275 12.0769 13.5128C12.355 13.2352 12.7251 13.0691 13.1174 13.0457H13.2157C13.8056 13.1686 14.3054 13.5128 15.3295 14.5369L16.4192 15.6348L20.8845 11.1449L21.4989 10.5141C20.0638 9.25218 18.2123 8.56621 16.3014 8.58841C14.3905 8.61062 12.5555 9.33942 11.1501 10.6343C9.74463 11.9292 8.8683 13.6986 8.69 15.6013C8.51171 17.504 9.04407 19.4053 10.1845 20.9388C11.3249 22.4722 12.9926 23.5293 14.8661 23.9061C16.7396 24.2829 18.6862 23.9529 20.3308 22.9795C21.9754 22.0062 23.2015 20.4586 23.7727 18.6349C24.3439 16.8112 24.2198 14.8407 23.4243 13.1031C22.7361 13.7995 22.0479 14.4795 21.3678 15.1596Z" fill="#42C86B"/>
    </g>
    <defs>
      <clipPath id="footer-clip"><rect width="130" height="32.7727" fill="white"/></clipPath>
    </defs>
  </svg>
);

const socialLinks = [
  { alt: 'Twitter', href: 'https://twitter.com/cashify_', img: 'https://s3ng.cashify.in/estore/f6367396a5014ac3be7977b3e9904241.webp' },
  { alt: 'Facebook', href: 'https://www.facebook.com/CashifyNow/', img: 'https://s3ng.cashify.in/estore/4653162d05e64ed0838897c03553779e.webp' },
  { alt: 'Instagram', href: 'https://www.instagram.com/cashify/', img: 'https://s3ng.cashify.in/estore/37db2679fb35415db976ee652eecbeb4.webp' },
  { alt: 'Youtube', href: 'https://www.youtube.com/channel/UCxEzwY-Pl3PYrXESIgdYGXQ', img: 'https://s3ng.cashify.in/estore/c189227e02874c28b96e73df3d3f1854.webp' },
];

const footerSections = [
  {
    title: 'Services',
    links: [
      { label: 'Sell Phone', href: '/sell-old-mobile-phone' },
      { label: 'Sell Television', href: '/sell-old-television' },
      { label: 'Sell Smart Watch', href: '/sell-old-smart-watch' },
      { label: 'Sell Smart Speakers', href: '/sell-old-smart-speaker' },
      { label: 'Sell DSLR Camera', href: '/sell-old-dslr-camera' },
      { label: 'Sell Earbuds', href: '/sell-old-earbuds' },
      { label: 'Repair Phone', href: '/repair' },
      { label: 'Buy Gadgets', href: '/buy-refurbished-gadgets' },
      { label: 'Recycle Phone', href: '/recycle-old-mobile-phone' },
      { label: 'Find New Phone', href: '/find-new-phone' },
      { label: 'Partner With Us', href: '/partner-with-us' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Careers', href: '/career' },
      { label: 'Articles', href: '/articles' },
      { label: 'Press Releases', href: '/press-releases' },
      { label: 'Become Cashify Partner', href: '/partner-with-us' },
      { label: 'Become Supersale Partner', href: 'https://supersale.cashify.in/lp/home/index.html' },
      { label: 'Corporate Information', href: 'https://www.cashify.in/lp/corporate-information' },
    ],
  },
  {
    title: 'Sell Device',
    links: [
      { label: 'Mobile Phone', href: '/sell-old-mobile-phone' },
      { label: 'Laptop', href: '/sell-old-laptop' },
      { label: 'Tablet', href: '/sell-old-tablet' },
      { label: 'iMac', href: '/sell-old-imac' },
      { label: 'Gaming Consoles', href: '/sell-old-gaming-consoles' },
    ],
  },
  {
    title: 'Help & Support',
    links: [
      { label: 'FAQ', href: '/faq/category/buyback' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'Warranty Policy', href: '/warranty-policy' },
      { label: 'Refund Policy', href: '/refund-policy' },
    ],
  },
  {
    title: 'More Info',
    links: [
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms-of-use' },
      { label: 'E-Waste Policy', href: '/e-waste-policy' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'What is Refurbished', href: '/buy-refurbished-mobile-phones/what-is-refurbished-mobile-phones' },
      { label: 'Device Safety', href: 'https://devicesafety.org/' },
    ],
  },
];

const AccordionSection = ({ title, links }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div className="border-b border-gray-200 my-1 sm:hidden" />
      <div className="mr-0 sm:mr-5">
        <div className="relative flex flex-row justify-between flex-wrap items-center overflow-hidden">
          <button
            className="flex-1 flex justify-between items-center text-left py-2.5 px-3 sm:p-4 text-sm font-semibold text-gray-500 sm:cursor-default"
            onClick={() => setOpen(!open)}
          >
            {title}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
              className={`w-5 h-5 sm:hidden transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
              <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd"/>
            </svg>
          </button>
          {/* Mobile: show on open. Desktop: always show */}
          <div className={`w-full px-3 sm:px-4 overflow-hidden transition-all duration-200 ${open ? 'max-h-96' : 'max-h-0 sm:max-h-96'}`}>
            <div className="grid grid-flow-row ml-3 mb-2 mt-4 gap-2 sm:gap-4">
              {links.map(link => (
                <a key={link.label} href={link.href} className="text-xs font-normal text-gray-600 hover:text-[#42c8b7] transition">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="w-full pt-7 sm:pt-16 mt-4 bg-[#f7f7f7]">
    <div className="mx-auto max-w-screen-xl">
      <div className="w-full flex flex-col sm:flex-row">
        {/* Brand + Social */}
        <div className="px-4 sm:px-0 flex flex-col">
          <CashifyLogoFooter />
          <div className="flex flex-row items-center sm:items-start sm:flex-col mb-6 sm:mb-0">
            <span className="text-xs font-semibold text-gray-500 mr-4 sm:mr-0 sm:mb-3">Follow us on</span>
            <ul className="flex list-none p-0 gap-2.5">
              {socialLinks.map(s => (
                <li key={s.alt} className="w-9 h-9">
                  <a href={s.href} rel="nofollow noopener" target="_blank">
                    <img src={s.img} alt={s.alt} className="w-full aspect-square rounded" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Chat with us */}
          <div className="mt-4 sm:mt-6">
            <a href="https://chatai.cashify.in/" className="flex items-center gap-2.5 bg-[#42c8b7] rounded-lg p-2.5 w-fit cursor-pointer hover:bg-[#2e8c80] transition">
              <img
                src="https://s3ng.cashify.in/imageLibrary/Group_1000004325_adde26f035a5.svg"
                alt="Chat"
                className="w-10 h-10"
              />
              <div className="flex flex-col justify-between">
                <span className="text-xs font-semibold text-white">Chat with Us</span>
                <span className="text-xs text-white/80 whitespace-nowrap">Got questions? Just ask.</span>
              </div>
            </a>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="flex flex-col sm:flex-row sm:me-5 flex-1">
          {footerSections.map(section => (
            <AccordionSection key={section.title} title={section.title} links={section.links} />
          ))}
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="border-b border-gray-200 w-full my-1" />

    {/* ISO Banner */}
    <div className="mt-5 mb-2 sm:m-0 px-4 sm:px-0 sm:ml-20 sm:max-w-screen-xl flex sm:justify-end sm:mx-auto">
      <img
        src="https://s3ng.cashify.in/builder/8cbb8a48b0a74906b9e685bedc2e3fd5.svg"
        alt="ISO Certified"
        className="w-full sm:w-96 sm:h-28 object-contain"
      />
    </div>

    {/* Registered Office */}
    <div className="flex sm:flex-row sm:items-center flex-col mx-auto px-4 py-4 max-w-screen-xl">
      <div className="flex flex-col">
        <div className="text-xs text-gray-500 font-semibold sm:mb-5">Registered Office:</div>
        <span className="text-xs text-gray-600 mb-1">
          Manak Waste Management Pvt Ltd.| 55, 2nd Floor, Lane-2, Westend Marg, Saidullajab, Near Saket Metro Station, New Delhi–110030, India, Support-7290068900 | CIN: U46524DL2009PTC190441
        </span>
        <span className="text-xs text-gray-600 mb-5">
          Manak Waste Management Pvt Ltd. is ISO 27001 & 27701 Compliance Certified. Person who may be contacted in case of any compliance related queries or grievances: Manoj Kumar{' '}
          <a href="mailto:grievanceofficer@cashify.in" className="text-[#42c8b7]">(grievanceofficer@cashify.in)</a>
          {' '}Manak Waste Management Private Limited is R2v3 Certified.
        </span>
        <span className="text-xs text-gray-600">
          Country of Origin : India ** All product, logos, and brands are property of their respective owners.
        </span>
      </div>
    </div>

    <div className="border-b border-gray-200 w-full my-1" />
    <div className="text-xs text-gray-500 flex max-w-screen-xl w-full p-4 m-auto justify-center sm:justify-start text-center">
      Copyright @ 2026 Cashify All rights reserved
    </div>
    <div className="border-b border-gray-200 w-full my-1" />
  </footer>
);

export default Footer;
