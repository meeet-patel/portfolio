import { motion } from "framer-motion";
import { TbArrowUpRight } from "react-icons/tb";
import { projects } from "../data/siteData";

export default function Projects() {
  return (
    <section
      className="my-4 w-full py-12 lg:my-5 lg:py-20"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="page-container">
        <p className="mx-auto mb-4 flex w-fit items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.06] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-foreground/90 sm:text-[14px]">
          Selected work
        </p>
        <h2
          id="projects-heading"
          className="mx-auto max-w-3xl text-center text-[2rem] font-bold leading-tight tracking-tight text-foreground sm:text-[2.375rem] lg:text-[2.775rem] lg:leading-[1.12]"
        >
          Projects — <span className="text-accent">APIs & platforms</span>
        </h2>

        <div className="mx-auto mt-12 grid w-full max-w-4xl gap-6 sm:gap-7 lg:mt-14 lg:max-w-5xl lg:grid-cols-2 lg:gap-x-5 lg:gap-y-7 xl:max-w-6xl">
          {projects.map((project, index) => {
            const hasLink = typeof project.link === "string" && project.link;

            const cardClass =
              "group relative flex h-full min-h-0 w-full max-w-2xl flex-col justify-self-center overflow-hidden rounded-[1.5rem] border border-foreground/10 bg-card text-left shadow-sm no-underline transition-[box-shadow,border-color,transform] duration-300 sm:rounded-[1.65rem] lg:max-w-none lg:justify-self-stretch hover:border-accent/25 hover:shadow-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

            const motionProps = {
              initial: { opacity: 0, y: 36 },
              whileInView: { opacity: 1, y: 0 },
              whileHover: { y: -2 },
              transition: {
                type: "spring",
                stiffness: 80,
                damping: 14,
                delay: index * 0.12,
              },
              viewport: { once: true, margin: "-40px" },
              "aria-labelledby": `project-title-${project.id}`,
            };

            const inner = (
              <div className="flex h-full min-h-0 flex-1 flex-col gap-3.5 p-4 sm:gap-4 sm:p-5 md:p-6">
                <div className="group/media relative aspect-[2/1] w-full min-h-[180px] shrink-0 overflow-hidden rounded-xl border border-foreground/10 bg-elevated sm:min-h-[222px] sm:rounded-2xl sm:aspect-[21/8] lg:aspect-[11/4] lg:min-h-[238px]">
                  <span className="absolute left-3 top-3 z-10 rounded-full border border-accent/25 bg-card/90 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent shadow-sm backdrop-blur-sm sm:left-4 sm:top-4 sm:px-3.5 sm:py-2 sm:text-[13px]">
                    {project.tag}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center p-6 transition-[filter] duration-300 group-hover/media:brightness-[1.05]">
                    <img
                      src={project.image}
                      alt=""
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <div className="flex min-h-0 flex-1 flex-col">
                  <h3
                    id={`project-title-${project.id}`}
                    className="text-xl font-bold tracking-tight text-foreground sm:text-[1.375rem] lg:text-[26px]"
                  >
                    {project.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted sm:text-[1.0625rem] lg:text-lg">
                    {project.description}
                  </p>
                  <div className="mt-auto flex justify-end pt-3 sm:pt-4">
                    <span
                      className="pointer-events-none inline-flex h-11 w-11 items-center justify-center rounded-full border border-foreground/15 bg-surface text-accent shadow-md transition-colors group-hover:border-accent/45 group-hover:bg-accent/15 group-hover:text-accent-bright sm:h-12 sm:w-12"
                      aria-hidden
                    >
                      <TbArrowUpRight className="h-6 w-6" strokeWidth={1.75} />
                    </span>
                  </div>
                </div>
              </div>
            );

            if (hasLink) {
              return (
                <motion.a
                  key={project.id}
                  href={project.link}
                  className={cardClass}
                  {...motionProps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {inner}
                </motion.a>
              );
            }

            return (
              <motion.article
                key={project.id}
                className={cardClass}
                {...motionProps}
              >
                {inner}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
