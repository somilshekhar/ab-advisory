"use client";
import { useEffect, useRef, useState } from "react";

export default function IframeWrapper({ src, title }) {
  const iframeRef = useRef(null);
  const [height, setHeight] = useState(800);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let intervalId = null;
    let observer = null;
    let resizeObs = null;

    function measure() {
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!doc || !doc.body) return;
        const h = Math.max(
          doc.body.scrollHeight,
          doc.documentElement.scrollHeight,
          doc.body.offsetHeight,
          doc.documentElement.offsetHeight
        );
        if (h > 50) setHeight(h);
      } catch (e) {
        // ignore cross-origin errors
      }
    }

    function handleMessage(e) {
      if (e.data?.type === "resize" && e.data.height > 50) {
        setHeight(e.data.height);
      }
    }

    function onLoad() {
      measure();

      // Set up MutationObserver on iframe body to catch DOM changes
      try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (doc?.body) {
          observer = new MutationObserver(() => {
            measure();
            // Delayed re-measure for CSS transitions / animations
            setTimeout(measure, 150);
          });
          observer.observe(doc.body, {
            childList: true,
            subtree: true,
            attributes: true,
          });

          if (window.ResizeObserver) {
            resizeObs = new ResizeObserver(measure);
            resizeObs.observe(doc.body);
          }

          // Listen for clicks and inputs inside iframe
          doc.addEventListener("click", () => {
            setTimeout(measure, 100);
            setTimeout(measure, 400);
          });
          doc.addEventListener("input", measure);
        }
      } catch (e) {
        // ignore
      }

      // Safety poll: re-measure every 500ms for the first 10s
      let count = 0;
      intervalId = setInterval(() => {
        measure();
        count++;
        if (count >= 20) clearInterval(intervalId);
      }, 500);
    }

    iframe.addEventListener("load", onLoad);
    window.addEventListener("message", handleMessage);

    return () => {
      iframe.removeEventListener("load", onLoad);
      window.removeEventListener("message", handleMessage);
      if (intervalId) clearInterval(intervalId);
      if (observer) observer.disconnect();
      if (resizeObs) resizeObs.disconnect();
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={title}
      scrolling="no"
      className="w-full border-none block"
      style={{ height: `${height}px`, overflow: "hidden" }}
    />
  );
}
