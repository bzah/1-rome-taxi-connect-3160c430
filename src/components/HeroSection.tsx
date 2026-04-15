import { motion } from "framer-motion";
import heroImage from "@/assets/rome-hero.jpg";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  image?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  secondaryCtaText,
  secondaryCtaHref,
  image,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center overflow-hidden">
      <img
        src={image || heroImage}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-6 text-center text-background pt-16 sm:pt-20 pb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 sm:mb-4 text-xs sm:text-sm font-medium uppercase tracking-[0.15em] sm:tracking-[0.2em] opacity-80"
        >
          {subtitle}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-4 sm:mt-6 max-w-2xl text-sm sm:text-lg leading-relaxed opacity-85"
        >
          {description}
        </motion.p>
        {(ctaText || secondaryCtaText) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            {ctaText && ctaHref && (
              <a
                href={ctaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg gold-gradient px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                {ctaText}
              </a>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border-2 border-background/30 px-6 sm:px-8 py-3 sm:py-3.5 text-sm font-semibold text-background backdrop-blur-sm transition-all hover:bg-background/10 active:scale-[0.98]"
              >
                {secondaryCtaText}
              </a>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
