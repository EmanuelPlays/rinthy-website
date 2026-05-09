import { motion } from "framer-motion";
import { ArrowDown, Smartphone, Zap, Shield } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { usePerformanceProfile } from "../hooks/usePerformanceProfile";

export default function Hero() {
  const { t } = useI18n();
  const { enableAnimations, enableGlows } = usePerformanceProfile();

  const fadeUpAnim = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 } };
  const fadeUp = enableAnimations ? fadeUpAnim : { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } };


  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 items-center">
        <div className="space-y-6 xs:space-y-7 sm:space-y-8 z-10">
          <motion.div
            {...fadeUp}
            transition={{ duration: enableAnimations ? 0.6 : 0.01, ease: [0.22, 1, 0.36, 1] }}

            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-modrinth-green tracking-wide uppercase touch-manipulation"
          >
            <span className="w-2 h-2 rounded-full bg-modrinth-green animate-pulse" />
            {t.hero.badge}
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: enableAnimations ? 0.6 : 0.01, delay: enableAnimations ? 0.05 : 0, ease: [0.22, 1, 0.36, 1] }}

            className="font-display font-bold text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
          >
            {t.hero.title}
            <br />
            <span className="text-gradient">{t.hero.titleGradient}</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: enableAnimations ? 0.6 : 0.01, delay: enableAnimations ? 0.1 : 0, ease: [0.22, 1, 0.36, 1] }}

            className="text-lg text-modrinth-muted max-w-lg leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: enableAnimations ? 0.8 : 0.01, delay: enableAnimations ? 0.35 : 0, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#download"
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-modrinth-green text-modrinth-dark font-semibold hover:brightness-110 transition-all duration-300 ${enableGlows ? "glow-green-strong" : "glow-green-strong-subtle"}`}
            >
              <Smartphone size={18} />
              {t.hero.downloadApk}
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass text-white font-medium hover:bg-white/5 transition-all duration-300"
            >
              {t.hero.exploreFeatures}
              {enableAnimations && <ArrowDown size={16} className="animate-bounce" />}
            </a>
          </motion.div>

          <motion.div
            initial={enableAnimations ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ delay: enableAnimations ? 0.8 : 0, duration: enableAnimations ? 1 : 0.01 }}
            className="flex items-center gap-6 pt-4"
          >
            {[
              { icon: Zap, label: t.hero.stats.fast },
              { icon: Shield, label: t.hero.stats.secure },
              { icon: Smartphone, label: t.hero.stats.native },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-modrinth-muted">
                <item.icon size={14} className="text-modrinth-green" />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={enableAnimations ? { opacity: 0, scale: 0.9, rotateY: -15 } : { opacity: 1, scale: 1, rotateY: 0 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: enableAnimations ? 1 : 0.01, delay: enableAnimations ? 0.3 : 0, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end perspective-1000"
        >
          <div className={`relative w-full max-w-xs sm:max-w-sm mx-auto ${enableAnimations ? "animate-float" : ""}`}>
            <div className="absolute inset-0 bg-gradient-to-tr from-modrinth-green/20 to-transparent rounded-[3rem] blur-2xl" />
            <div className={`relative bg-modrinth-card border border-modrinth-border rounded-[2.5rem] p-3 shadow-2xl ${enableGlows ? "glow-green" : "glow-green-subtle"} touch-manipulation`}>
              <div className="bg-modrinth-dark rounded-[2rem] overflow-hidden aspect-[9/19] relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
                <div className="p-4 xs:p-5 pt-8 xs:pt-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                      <img src="/logo.png" alt="Rinthy" className="w-6 h-6" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-modrinth-border" />
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="h-3 w-3/4 bg-modrinth-border rounded-full" />
                    <div className="h-3 w-1/2 bg-modrinth-border rounded-full" />
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-20 rounded-2xl bg-modrinth-border/50" />
                    ))}
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="h-14 rounded-xl bg-modrinth-border/30 flex items-center px-4 gap-3">
                      <div className="w-8 h-8 rounded-lg bg-modrinth-border/20" />
                      <div className="space-y-1.5 flex-1">
                        <div className="h-2.5 w-2/3 bg-modrinth-border rounded-full" />
                        <div className="h-2 w-1/3 bg-modrinth-border/60 rounded-full" />
                      </div>
                    </div>
                    <div className="h-14 rounded-xl bg-modrinth-border/30 flex items-center px-4 gap-3">
                      <div className="w-8 h-8 rounded-lg bg-modrinth-border/20" />
                      <div className="space-y-1.5 flex-1">
                        <div className="h-2.5 w-1/2 bg-modrinth-border rounded-full" />
                        <div className="h-2 w-1/4 bg-modrinth-border/60 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {enableAnimations && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} className="text-modrinth-muted" />
        </motion.div>
      )}
    </section>
  );
}

