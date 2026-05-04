import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Past this scroll offset (px), the “scroll for more” hint hides. */
const SCROLL_HIDE_PX = 48;

/**
 * Mouse-style scroll hint for the hero only. Hides after the user scrolls a bit;
 * shows again when back near the top.
 */
export default function HeroScrollCue() {
  const reduceMotion = useReducedMotion();
  const [showHint, setShowHint] = useState(() =>
    typeof window !== "undefined" ? window.scrollY <= SCROLL_HIDE_PX : true,
  );
  const firstRevealRef = useRef(
    typeof window === "undefined" ? true : window.scrollY <= SCROLL_HIDE_PX,
  );

  useEffect(() => {
    const onScroll = () => {
      setShowHint(window.scrollY <= SCROLL_HIDE_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!showHint) firstRevealRef.current = false;
  }, [showHint]);

  const outlineLoop =
    showHint && !reduceMotion
      ? {
          opacity: [0.72, 1, 0.72],
          scale: [1, 1.045, 1],
        }
      : { opacity: showHint ? 1 : 0, scale: 1 };

  return (
    <motion.a
      href="#what-i-do"
      className="pointer-events-auto absolute bottom-12 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-foreground/50 outline-none transition-colors hover:text-foreground/80 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-14 lg:bottom-16"
      initial={{ opacity: 0, y: 8 }}
      animate={{
        opacity: showHint ? 1 : 0,
        y: showHint ? 0 : 10,
      }}
      transition={{
        duration: reduceMotion ? 0.12 : 0.28,
        delay: showHint && firstRevealRef.current ? 1.05 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ pointerEvents: showHint ? "auto" : "none" }}
      aria-hidden={!showHint}
      tabIndex={showHint ? 0 : -1}
      aria-label="Scroll to What I Do"
    >
      <motion.span
        className="relative flex h-[3.75rem] w-8 flex-col overflow-hidden rounded-full border-2 border-current sm:h-[4.35rem] sm:w-9"
        aria-hidden
        animate={outlineLoop}
        transition={
          showHint && !reduceMotion
            ? {
                duration: 2.35,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : { duration: 0.25 }
        }
      >
        {reduceMotion ? (
          <span className="flex flex-1 items-center justify-center">
            <span className="h-3 w-2.5 rounded-full bg-current opacity-85 sm:h-3.5 sm:w-3" />
          </span>
        ) : (
          <div className="flex w-full flex-1 flex-col items-center overflow-hidden pt-2.5 sm:pt-3">
            <motion.span
              className="h-3 w-2.5 shrink-0 rounded-full bg-current shadow-glow-sm sm:h-3.5 sm:w-3"
              animate={
                showHint
                  ? { y: [0, 17, 0], opacity: [0.85, 1, 0.85] }
                  : { y: 0, opacity: 0 }
              }
              transition={
                showHint
                  ? {
                      duration: 1.65,
                      repeat: Infinity,
                      ease: [0.45, 0, 0.55, 1],
                    }
                  : { duration: 0.2 }
              }
            />
          </div>
        )}
      </motion.span>
    </motion.a>
  );
}
