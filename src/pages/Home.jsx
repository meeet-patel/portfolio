import { motion } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import PortraitImage from "../components/PortraitImage";
import { site } from "../data/siteData";

export default function Home() {
  return (
    <section
      id="home"
      className="section-inset relative flex min-h-[100dvh] flex-col pb-10 pt-[4.35rem] sm:pt-[4.6rem] lg:min-h-[100svh] lg:pb-12 lg:pt-[4.85rem]"
    >
      <div className="page-container flex flex-1 flex-col justify-center gap-3 lg:gap-4 xl:gap-5">
        <div className="pt-6 text-center sm:pt-8 lg:pt-10">
          <motion.div
            className="mx-auto min-w-0 w-full max-w-none"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-3 mt-0 inline-flex rounded-full border border-foreground/10 bg-foreground/[0.06] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-foreground/90 sm:mb-3 sm:text-[13px]">
              {site.heroLead}
            </p>
            <h1 className="text-balance text-[calc(1.85rem+2px)] font-bold leading-[1.1] tracking-tight sm:text-[calc(2.3rem+2px)] sm:leading-[1.08] md:text-[calc(2.85rem+2px)] lg:text-[calc(3.4rem+2px)] lg:leading-[1.06] xl:text-[calc(3.85rem+2px)] xl:leading-[1.05] 2xl:text-[calc(4.25rem+2px)] 2xl:leading-[1.03]">
              <span className="block text-foreground">{site.heroLine1}</span>
              <span className="mt-1 block sm:mt-1.5">
                <span className="inline-block max-sm:whitespace-normal sm:whitespace-nowrap">
                  <span className="text-accent">{site.heroLine2Accent}</span>
                </span>
              </span>
            </h1>
          </motion.div>
        </div>

        <div className="grid items-stretch gap-5 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-4 xl:gap-x-10">
          <motion.div
            className="mx-auto flex w-full max-w-md justify-center lg:col-span-5 lg:mx-0 lg:max-w-none"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <PortraitImage />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <p className="text-[calc(0.9375rem+6px)] leading-relaxed text-muted sm:text-[calc(1rem+6px)] lg:text-[calc(1.02rem+6px)] lg:leading-[1.65]">
              {site.heroBio}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-7 sm:gap-4 lg:justify-start">
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-[#0D0D0D] shadow-glow transition hover:bg-accent-bright sm:px-8"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                View projects
              </motion.a>
              <motion.a
                href={site.resumeUrl}
                download={site.resumeDownloadName}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-accent bg-transparent px-5 py-3.5 text-base font-semibold text-foreground transition hover:bg-accent/10 sm:px-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Download CV
                <TbDownload className="h-4 w-4" aria-hidden />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
