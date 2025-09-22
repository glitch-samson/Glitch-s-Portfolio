import { useRef, useState, useCallback } from 'react';

export const useParallaxTilt = ({ maxTilt = 12, scale = 1.04, shine = true } = {}) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [shineStyle, setShineStyle] = useState({});

  const onMouseMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;  // 0..1
    const py = (e.clientY - rect.top) / rect.height;  // 0..1
    const tiltX = (maxTilt / 2 - px * maxTilt);
    const tiltY = (py * maxTilt - maxTilt / 2);

    setStyle({
      transform: `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale3d(${scale}, ${scale}, ${scale})`,
      transition: 'transform 120ms ease-out',
      willChange: 'transform',
      transformStyle: 'preserve-3d'
    });

    if (shine) {
      const x = Math.round(px * 100);
      const y = Math.round(py * 100);
      setShineStyle({
        background: `radial-gradient(600px circle at ${x}% ${y}%, rgba(255,255,255,0.35), transparent 60%)`
      });
    }
  }, [maxTilt, scale, shine]);

  const onMouseLeave = useCallback(() => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)',
      transition: 'transform 220ms ease-in-out',
      transformStyle: 'preserve-3d'
    });
    if (shine) setShineStyle({ background: 'none' });
  }, [shine]);

  return { ref, style, shineStyle, onMouseMove, onMouseLeave };
};
