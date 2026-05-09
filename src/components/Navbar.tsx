import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, MessageCircle } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { usePerformanceProfile } from "../hooks/usePerformanceProfile";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {

  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { enableAnimations, enableBlur } = usePerformanceProfile();

  const navLinks = useMemo(() => [
    { label: t.nav.features, href: "#features" },
    { label: t.nav.screenshots, href: "#screenshots" },
    { label: t.nav.howItWorks, href: "#how-it-works" },
    { label: t.nav.download, href: "#download" },
    { label: t.nav.tech, href: "#tech" },
  ], [t.nav]);

  useEffect(() => {
    let rafId: number;
    const onScroll = () => {
      rafId && cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      rafId && cancelAnimationFrame(rafId);
    };
  }, []);

  const mobileTopClass = enableBlur
    ? "bg-modrinth-dark/72 backdrop-blur-md border-b border-white/[0.06] md:bg-transparent md:backdrop-blur-0 md:border-b-0"
    : "bg-modrinth-dark/95 border-b border-white/[0.06] md:bg-transparent md:border-b-0";

  const glassClass = enableBlur
    ? scrolled || mobileOpen
      ? "glass-strong"
      : mobileTopClass
    : scrolled || mobileOpen
      ? "glass-strong-simple"
      : mobileTopClass;

  return (
    <motion.nav
      initial={enableAnimations ? { y: -80 } : { y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: enableAnimations ? 0.6 : 0.01, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 ${glassClass}`} 
      style={{ willChange: "transform" }}

    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img src="/logo.png" alt="Rinthy" className="w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Rinthy</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-modrinth-muted hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-modrinth-green group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/imsawiq/Rinthy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-modrinth-border hover:border-modrinth-green/50 hover:bg-modrinth-green/5 transition-all duration-300 text-sm"
          >
            <Github size={16} />
            <span>{t.nav.gitHub}</span>
          </a>
          <a
            href="https://discord.gg/wzXpC2C6Uu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-modrinth-border hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 transition-all duration-300 text-sm"
          >
            <MessageCircle size={16} />
            <span>{t.nav.discord}</span>
          </a>
          <LanguageSwitcher />
        </div>

        <button
          className="md:hidden p-3 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={useCallback(() => setMobileOpen((prev) => !prev), [])}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen ? true : false}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {enableAnimations ? (
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`md:hidden border-t border-modrinth-border ${enableBlur ? "glass-strong" : "glass-strong-simple"} touch-manipulation`}
            >
              <div className="px-4 xs:px-6 py-6 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-modrinth-muted hover:text-white transition-colors py-3 min-h-[44px] flex items-center text-base"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://github.com/imsawiq/Rinthy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-modrinth-green py-2"
                >
                  <Github size={16} />
                  <span>{t.footer.viewOnGitHub}</span>
                </a>
                <a
                  href="https://discord.gg/wzXpC2C6Uu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#5865F2] py-2"
                >
                  <MessageCircle size={16} />
                  <span>{t.footer.joinDiscord}</span>
                </a>
                <div className="pt-2">
                  <LanguageSwitcher />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        mobileOpen && (
          <div className={`md:hidden border-t border-modrinth-border ${enableBlur ? "glass-strong" : "glass-strong-simple"}`}>
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-modrinth-muted hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/imsawiq/Rinthy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-modrinth-green py-2"
              >
                <Github size={16} />
                <span>{t.footer.viewOnGitHub}</span>
              </a>
              <a
                href="https://discord.gg/wzXpC2C6Uu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#5865F2] py-2"
              >
                <MessageCircle size={16} />
                <span>{t.footer.joinDiscord}</span>
              </a>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )
      )}
    </motion.nav>
  );
}

