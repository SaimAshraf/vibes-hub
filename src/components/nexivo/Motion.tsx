import { useEffect, useRef, useState } from "react";

/** Scroll-triggered reveal wrapper */
export const Reveal = ({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  as?: any;
  className?: string;
}) => {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

/** Image with shimmer skeleton until loaded */
export const SmartImage = ({
  src,
  alt,
  className = "",
  wrapperClassName = "",
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement> & { wrapperClassName?: string }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <span className={`img-frame ${loaded ? "is-loaded" : ""} ${wrapperClassName}`}>
      <img
        src={src}
        alt={alt}
        className={className}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        {...rest}
      />
    </span>
  );
};

/** First-visit boot animation (~2s) */
export const BootScreen = () => {
  const [gone, setGone] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const a = window.setTimeout(() => setLeaving(true), 1700);
    const b = window.setTimeout(() => setGone(true), 2300);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, []);

  if (gone) return null;
  return (
    <div className={`boot-screen ${leaving ? "is-leaving" : ""}`} aria-hidden="true">
      <div className="boot-mark">
        <span className="boot-word">NEXIVO</span>
        <span className="boot-sub">Next · Vision · Organization</span>
        <span className="boot-bar"><i /></span>
      </div>
    </div>
  );
};

/** Thin top progress bar on route change */
export const RouteProgress = ({ trigger }: { trigger: string }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(true);
    const t = window.setTimeout(() => setActive(false), 700);
    return () => window.clearTimeout(t);
  }, [trigger]);
  return <div className={`route-progress ${active ? "is-active" : ""}`} aria-hidden="true" />;
};
