import { useEffect } from 'react';

const AdSenseScript: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4592814778191453';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `(adsbygoogle = window.adsbygoogle || []).push({});`;
    document.head.appendChild(inlineScript);
  }, []);

  return null;
};

export default AdSenseScript;