import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DownloadSection from "./components/DownloadSection";

import GradientOrbs from "./components/GradientOrbs";
// import GoodbyeIsland from "./components/GoodbyeIsland";


// Lazy-load below-the-fold sections to reduce initial bundle and rendering work
const Features = lazy(() => import("./components/Features"));
const Screenshots = lazy(() => import("./components/Screenshots"));
const Steps = lazy(() => import("./components/Steps"));
const TechStack = lazy(() => import("./components/TechStack"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div className="relative min-h-screen bg-modrinth-dark text-white overflow-x-hidden safe-top safe-bottom selection:bg-modrinth-green selection:text-modrinth-dark touch-manipulation">
      <GradientOrbs />
      <Navbar />
      <main>
        <Hero />
        <DownloadSection />
        <Suspense fallback={<div className="h-96" aria-hidden="true" />}>
          <Features />
        </Suspense>
        <Suspense fallback={<div className="h-96" aria-hidden="true" />}>
          <Screenshots />
        </Suspense>
        <Suspense fallback={<div className="h-96" aria-hidden="true" />}>
          <Steps />
        </Suspense>
        <Suspense fallback={<div className="h-96" aria-hidden="true" />}>
          <TechStack />
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-48" aria-hidden="true" />}>
        <Footer />
      </Suspense>
      <SpeedInsights />
      <Analytics />
    </div>
  );
}

export default App;

