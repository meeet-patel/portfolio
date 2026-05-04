import { motion } from "framer-motion";
import PortraitImage from "./PortraitImage";
import TechStackMarquee from "./TechStackMarquee";
import { TECH_MARQUEE_ITEMS } from "../data/techMarqueeData";
import { site, experience } from "../data/siteData";

const cardBase =
  "rounded-2xl border border-foreground/5 bg-surface p-5 sm:p-6 lg:p-7";

const aboutIntroCard =
  "rounded-2xl border border-foreground/5 bg-surface px-5 py-3.5 sm:px-6 sm:py-4 lg:px-7 lg:py-5";

export default function About() {
  return (
    <section
      className="section-inset py-12 lg:py-20"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 inline-flex rounded-full border border-foreground/10 bg-foreground/[0.04] px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-foreground/90">
            {site.aboutTitle}
          </p>
          <h2
            id="about-heading"
            className="max-w-3xl text-[2rem] font-bold leading-tight tracking-tight text-foreground sm:text-[2.375rem] lg:text-[2.775rem] lg:leading-[1.12]"
          >
            Building systems you can{" "}
            <span className="text-accent">trust in production</span>
          </h2>
        </motion.div>

        <div className="mt-8 lg:mt-10">
          <motion.div
            className={`${aboutIntroCard} flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8 xl:gap-10`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="min-w-0 flex flex-1 flex-col justify-center">
              <p className="text-[1.375rem] font-semibold text-foreground sm:text-2xl">
                {site.aboutIntro}
              </p>
              <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
                {site.aboutBody}
              </p>
            </div>

            <motion.div
              className="mx-auto flex w-full max-w-sm shrink-0 justify-center self-center lg:mx-0 lg:max-w-[min(100%,20rem)] lg:self-stretch xl:max-w-[22rem]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <PortraitImage compact />
            </motion.div>
          </motion.div>
        </div>

        <TechStackMarquee
          tools={TECH_MARQUEE_ITEMS}
          className="mt-10 lg:mt-12"
        />

        <div className="mt-8 flex flex-col gap-6 lg:mt-10">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {site.stats.map((s, i) => (
              <motion.div
                key={s.label}
                className={`${cardBase} text-center sm:text-left`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <p className="text-[26px] font-bold tabular-nums text-accent sm:text-[32px]">
                  {s.value}
                </p>
                <p className="mt-2 text-[14px] font-medium leading-snug text-muted sm:text-base">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="rounded-2xl border border-foreground/5 bg-surface p-4 sm:p-5 lg:p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-foreground">
              Experience
            </h3>
            <p className="mt-1.5 max-w-xl text-base leading-snug text-muted">
              Roles focused on APIs, integrations, and cloud delivery.
            </p>
            <ul className="mt-5 divide-y divide-foreground/[0.08]">
              {experience.map((job) => (
                <li key={job.id} className="flex gap-3 py-3.5 sm:gap-4 sm:py-4">
                  <div
                    className={`relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-foreground/10 sm:h-12 sm:w-12 ${
                      job.logo
                        ? "bg-[#FDFCFC] p-1 dark:bg-muted/25"
                        : "bg-accent/15 text-xs font-bold text-accent sm:text-sm"
                    }`}
                    aria-hidden
                  >
                    {job.logo ? (
                      <div className="flex h-full w-full min-h-0 min-w-0 items-center justify-center overflow-hidden rounded-lg">
                        <img
                          src={job.logo}
                          alt=""
                          className="max-h-full max-w-full min-h-0 min-w-0 object-contain object-center"
                        />
                      </div>
                    ) : (
                      job.company.slice(0, 1)
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div className="min-w-0 space-y-1">
                        <p className="text-base font-bold leading-snug text-foreground sm:text-[17px]">
                          {job.company}
                        </p>
                        <p className="text-sm font-normal leading-snug text-muted sm:text-[15px]">
                          {job.role}
                        </p>
                        <p className="text-sm text-muted/90">{job.location}</p>
                      </div>
                      <span className="inline-flex w-fit shrink-0 rounded-full border border-accent/40 bg-accent/[0.06] px-3.5 py-1.5 text-xs font-medium tabular-nums text-muted shadow-[inset_0_1px_0_rgb(var(--accent)/0.12)] dark:border-accent/35 dark:bg-accent/[0.08]">
                        {job.period}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
