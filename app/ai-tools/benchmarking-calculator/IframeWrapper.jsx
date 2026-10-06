"use client";
import { useEffect, useRef } from "react";

export default function IframeWrapper({ src, title }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data && event.data.type === 'resize') {
        if (iframeRef.current) {
          iframeRef.current.style.height = `${event.data.height}px`;
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <iframe 
      ref={iframeRef}
      src={src} 
      className="w-full border-none transition-all duration-300"
      title={title}
      style={{ minHeight: '80vh' }}
      scrolling="no"
    />
  );
}
