import { useState } from 'react';

const brands = [
  { name: 'Apple', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/2e7cdc22-5a5f.jpg', href: '/sell-old-mobile-phone/sell-apple' },
  { name: 'Xiaomi', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/cb96df6e-080f.jpg', href: '/sell-old-mobile-phone/sell-xiaomi' },
  { name: 'Samsung', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/406a512d-e8dd.jpg', href: '/sell-old-mobile-phone/sell-samsung' },
  { name: 'Vivo', img: 'https://s3ng.cashify.in/cashify/brand/img/xhdpi/20922c34-8afc.jpg', href: '/sell-old-mobile-phone/sell-vivo' },
];

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 10.259 7.151" style={{ marginRight: '8px', flexShrink: 0 }}>
    <path d="M75.14 245.721l-4.983 4.979-2.542-2.542a.8.8 0 0 0-1.133 1.133l3.108 3.108a.8.8 0 0 0 1.133 0l5.549-5.549a.8.8 0 0 0-1.133-1.133zm0 0" fill="#2bc9af" transform="translate(-66.248 -245.486)"/>
  </svg>
);

const Hero = () => {
  const [query, setQuery] = useState('');

  return (
    <div style={{ width: '100%' }}>
      {/* Breadcrumb */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '20px 16px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#707070' }}>
          <a href="/" style={{ color: '#707070' }}>Home</a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '14px', height: '14px' }}>
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd"/>
          </svg>
          <span style={{ color: '#0f0f0f' }}>Sell Old Mobile Phone</span>
        </div>
      </div>

      {/* Banner */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '16px 16px 0' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          background: '#f7f7f7',
          borderRadius: '12px',
          padding: '16px',
          gap: '16px',
          position: 'relative',
        }} className="hero-banner">
          {/* Left content */}
          <div style={{ flex: 1 }}>
            {/* Title row with mobile image */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <h1 style={{ fontSize: '20px', fontWeight: 700, color: '#0f0f0f', lineHeight: '1.3', marginBottom: '0', maxWidth: '210px' }}>
                Sell Old Mobile Phone for Instant Cash
              </h1>
              {/* Mobile image */}
              <img
                src="https://s3ng.cashify.in/cashify/web/1bf13dcba9414a7ebe6e7a7afdc10f41.webp"
                alt="Sell Phone"
                style={{ width: '96px', height: 'auto', flexShrink: 0 }}
                className="hero-img-mobile"
              />
            </div>

            {/* Tags — desktop only */}
            <ul style={{ display: 'none', flexWrap: 'wrap', gap: '0 20px', marginBottom: '40px', marginTop: '8px' }} className="hero-tags">
              {['Maximum Value', 'Safe & Hassle-free', 'Free Doorstep Pickup'].map(tag => (
                <li key={tag} style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#374151' }}>
                  <CheckIcon />{tag}
                </li>
              ))}
            </ul>

            {/* Search box */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              border: '1px solid #e5e7eb', borderRadius: '4px',
              background: '#fff', padding: '10px 12px', marginTop: '16px',
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" style={{ width: '20px', height: '20px', color: '#9ca3af', flexShrink: 0 }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
              </svg>
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search your Mobile Phone to sell"
                style={{ flex: 1, fontSize: '12px', outline: 'none', background: 'transparent', color: '#374151', border: 'none' }}
              />
            </div>

            {/* Or choose brand */}
            <div style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <div style={{ height: '1px', background: '#42c8b7', width: '32px' }} />
                <span style={{ fontSize: '13px', color: '#707070' }}>Or choose a brand</span>
                <div style={{ height: '1px', background: '#42c8b7', width: '32px' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} className="brand-row">
                <div style={{ display: 'flex', gap: '4px' }}>
                  {brands.map(brand => (
                    <a key={brand.name} href={brand.href} title={`Sell Old ${brand.name}`}
                      style={{ width: '25%', padding: '4px', boxShadow: '0 1px 4px rgba(0,0,0,0.12)', borderRadius: '8px', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={brand.img} alt={brand.name} style={{ width: '100%', borderRadius: '6px', aspectRatio: '1/1', objectFit: 'contain' }} />
                    </a>
                  ))}
                </div>
                <a href="/sell-old-mobile-phone/brands"
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid #42c8b7', borderRadius: '999px', padding: '8px 16px', fontSize: '13px', color: '#374151', width: 'fit-content' }}>
                  More Brands
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px' }}>
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Desktop image */}
          <div style={{ display: 'none', alignItems: 'center', justifyContent: 'center' }} className="hero-img-desktop">
            <img
              src="https://s3ng.cashify.in/cashify/web/1bf13dcba9414a7ebe6e7a7afdc10f41.webp"
              alt="Sell Phone"
              style={{ height: '384px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .hero-banner {
            flex-direction: row !important;
            align-items: center !important;
            padding: 24px 48px !important;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important;
          }
          .hero-img-mobile { display: none !important; }
          .hero-img-desktop { display: flex !important; }
          .hero-tags { display: flex !important; }
          .brand-row { flex-direction: row !important; align-items: center !important; }
          h1 { font-size: 28px !important; max-width: none !important; margin-bottom: 20px !important; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
