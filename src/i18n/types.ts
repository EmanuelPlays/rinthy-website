// ============================================================
//  i18n Types — Central type definitions for all translations
//  Add new language codes here when creating a new language file
// ============================================================

export type Language = "en" | "ru" | "it" | "fr";

export interface FeatureItem {
  title: string;
  desc: string;
}

export interface StepItem {
  step: string;
  title: string;
  desc: string;
}

export interface Translations {
  nav: {
    features: string;
    screenshots: string;
    howItWorks: string;
    download: string;
    tech: string;
    gitHub: string;
    discord: string;
  };
  hero: {
    badge: string;
    title: string;
    titleGradient: string;
    description: string;
    downloadApk: string;
    exploreFeatures: string;
    stats: {
      fast: string;
      secure: string;
      native: string;
    };
  };
  features: {
    badge: string;
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };
  screenshots: {
    badge: string;
    title: string;
    subtitle: string;
    labels: {
      login: string;
      dashboard: string;
      analytics: string;
    };
  };
  steps: {
    badge: string;
    title: string;
    subtitle: string;
    items: StepItem[];
  };
  techStack: {
    badge: string;
    title: string;
    subtitle: string;
  };
  download: {
    badge: string;
    title: string;
    subtitle: string;
    android: {
      title: string;
      desc: string;
      button: string;
    };
    ios: {
      title: string;
      desc: string;
      button: string;
    };
  };
  footer: {
    tagline: string;
    madeWith: string;
    rinthyBy: string;
    websiteBy: string;
    disclaimer: string;
    viewOnGitHub: string;
    joinDiscord: string;
  };
}


