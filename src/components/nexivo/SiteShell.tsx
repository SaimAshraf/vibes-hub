import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { BootScreen, RouteProgress } from "./Motion";

export const SiteShell = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <BootScreen />
      <RouteProgress trigger={pathname} />
      <Navbar />
      <main key={pathname} className="page-enter"><Outlet /></main>
      <Footer />
    </div>
  );
};
