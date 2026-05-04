import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { TbExternalLink } from "react-icons/tb";
import { SiHackerrank } from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi2";
import { cloudCredentials } from "../data/siteData";
import awsSvg from "../assets/svg/skills/aws.svg";

function VerifyLink({ href, children }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF9900] transition hover:text-[#ffb84d]"
    >
      {children}
      <TbExternalLink className="h-4 w-4" aria-hidden />
    </a>
  );
}

VerifyLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};

export default function Certifications() {
  const { aws, secondary } = cloudCredentials;

  return (
    <section
      id="certifications"
      className="section-inset border-t border-foreground/5 bg-gradient-to-b from-background to-foreground/[0.02] py-12 lg:py-20"
      aria-labelledby="certifications-heading"
    >
      <div className="page-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.04] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-foreground/85 sm:text-[13px]">
            <HiOutlineSparkles className="h-4 w-4 text-accent" aria-hidden />
            Credentials
          </p>
          <h2
            id="certifications-heading"
            className="text-balance text-[1.85rem] font-bold leading-tight tracking-tight text-foreground sm:text-[2.125rem] lg:text-[2.35rem]"
          >
            Cloud certification,{" "}
            <span className="text-accent">without the noise</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            One verified AWS credential—shown the same way you’d skim a resume:
            what it is, why it matters, and a link to proof when you want it.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto mt-10 max-w-4xl lg:mt-12"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-surface shadow-[0_24px_80px_rgba(0,0,0,0.12)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <div className="grid lg:grid-cols-[1fr_minmax(0,1fr)]">
              <div className="relative border-b border-foreground/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:border-foreground/10">
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#FF9900] via-[#FF9900]/70 to-transparent"
                  aria-hidden
                />
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#FF9900]/35 bg-[#FF9900]/10">
                    <img
                      src={awsSvg}
                      alt=""
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1 text-left">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF9900]">
                      {aws.kicker}
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
                      {aws.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted sm:text-[17px]">
                      {aws.description}
                    </p>
                    <VerifyLink href={aws.verifyUrl}>
                      Verify on Credly
                    </VerifyLink>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-5 p-6 sm:p-8">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {secondary.kicker}
                  </p>
                  <div className="mt-3 flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/[0.04] text-[#00EA64]">
                      <SiHackerrank className="h-7 w-7" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-lg font-semibold text-foreground">
                        {secondary.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted sm:text-base">
                        {secondary.description}
                      </p>
                    </div>
                  </div>
                </div>
                {secondary.profileUrl ? (
                  <a
                    href={secondary.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent transition hover:text-accent-bright"
                  >
                    View HackerRank profile
                    <TbExternalLink className="h-4 w-4" aria-hidden />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
