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
    <section className="relative min-h-[75vh] sm:min-h-[88vh] flex items-center justify-center overflow-hidden">
      <img
        src={image || heroImage}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Cinematic overlay with warm amber tint */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/40 to-espresso/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 text-center text-linen pt-20 sm:pt-24 pb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 sm:mb-5 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-amber-light flex items-center justify-center gap-4"
        >
          <span className="w-8 h-px bg-amber-light/50 hidden sm:block" />
          {subtitle}
          <span className="w-8 h-px bg-amber-light/50 hidden sm:block" />
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-5 sm:mt-8 max-w-2xl text-sm sm:text-lg leading-relaxed opacity-80 text-pretty"
        >
          {description}
        </motion.p>
        {(ctaText || secondaryCtaText) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"
          >
            {ctaText && ctaHref && (
              <a
                href={ctaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm gold-gradient px-8 sm:px-10 py-3.5 sm:py-4 text-sm font-semibold text-espresso amber-glow transition-all hover:amber-glow-lg hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98]"
              >
                {ctaText}
              </a>
            )}
            {secondaryCtaText && secondaryCtaHref && (
              <a
                href={secondaryCtaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-linen/25 px-8 sm:px-10 py-3.5 sm:py-4 text-sm font-medium text-linen backdrop-blur-sm transition-all hover:bg-linen/10 active:scale-[0.98]"
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
