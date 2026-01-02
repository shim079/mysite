'use client';

import { useEffect } from 'react';

const TidioLoader = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//code.tidio.co/5cdxb8nm9iemnjzx1al06isrq3u9i1yv.js';
    script.async = true;
    document.body.appendChild(script);

    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; 
};

export default TidioLoader;
