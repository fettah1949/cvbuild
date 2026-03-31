'use client';

import { useEffect, useRef } from 'react';

export default function AdSense() {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && adRef.current) {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-6">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1841159989456495"
        data-ad-slot="7872713240"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
