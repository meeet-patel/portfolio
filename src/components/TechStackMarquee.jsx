import PropTypes from "prop-types";

function MarqueeTool({ tool }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-full border border-foreground/10 bg-foreground/[0.04] py-2.5 pl-3 pr-5 shadow-sm">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-surface">
        {tool.svg ? (
          <img src={tool.svg} alt="" className="h-6 w-6 object-contain" />
        ) : tool.Icon ? (
          <tool.Icon
            className={`h-6 w-6 ${tool.className ?? ""}`}
            aria-hidden
          />
        ) : (
          <span
            className="text-[10px] font-bold uppercase leading-none tracking-wide text-accent"
            aria-hidden
          >
            {(tool.initial || tool.name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2) || "?").slice(0, 2)}
          </span>
        )}
      </span>
      <span className="whitespace-nowrap text-[15px] font-semibold text-foreground/95">
        {tool.name}
      </span>
    </div>
  );
}

MarqueeTool.propTypes = {
  tool: PropTypes.shape({
    name: PropTypes.string.isRequired,
    svg: PropTypes.string,
    Icon: PropTypes.elementType,
    className: PropTypes.string,
    initial: PropTypes.string,
  }).isRequired,
};

export default function TechStackMarquee({ tools, className = "" }) {
  return (
    <div className={className}>
      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Tech stack
          </p>
          <p className="mt-1 text-lg font-semibold text-foreground sm:text-xl">
            Technologies I ship with
          </p>
        </div>
      </div>

      <div
        className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-surface/80 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] dark:bg-surface/50"
        aria-label="Scrolling technology list"
      >
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent sm:w-14"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent sm:w-14"
          aria-hidden
        />

        <div className="flex w-max will-change-transform animate-tech-marquee motion-reduce:animate-tech-marquee-slow">
          <div className="flex shrink-0 items-center gap-4 px-3 sm:gap-5 sm:px-4">
            {tools.map((tool) => (
              <MarqueeTool key={tool.name} tool={tool} />
            ))}
          </div>
          <div
            className="flex shrink-0 items-center gap-4 px-3 sm:gap-5 sm:px-4"
            aria-hidden
          >
            {tools.map((tool) => (
              <MarqueeTool key={`${tool.name}-dup`} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

TechStackMarquee.propTypes = {
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      svg: PropTypes.string,
      Icon: PropTypes.elementType,
      className: PropTypes.string,
      initial: PropTypes.string,
    }),
  ).isRequired,
  className: PropTypes.string,
};
