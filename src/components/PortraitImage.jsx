import PropTypes from "prop-types";
import { site } from "../data/siteData";

export const portraitImageClassName =
  "h-auto w-full max-h-[min(40svh,300px)] object-contain object-[50%_18%] contrast-[1.02] sm:max-h-[min(44svh,360px)] sm:object-[50%_20%] lg:max-h-[min(48svh,420px)] lg:object-[50%_22%] xl:max-h-[min(50svh,460px)]";

const aboutCropFrame =
  "relative w-full min-w-0 overflow-hidden rounded-xl " +
  "h-[min(30svh,188px)] sm:h-[min(36svh,240px)] lg:h-[min(40svh,260px)] xl:h-[min(42svh,276px)]";

const aboutCropImage =
  "h-full w-full object-cover object-[center_28%] contrast-[1.02]";

export default function PortraitImage({ className = "", compact = false }) {
  if (compact) {
    return (
      <div className={[aboutCropFrame, className].filter(Boolean).join(" ")}>
        <img
          className={aboutCropImage}
          src={site.portraitSrc}
          alt={site.portraitAlt}
        />
      </div>
    );
  }

  return (
    <img
      className={[portraitImageClassName, className].filter(Boolean).join(" ")}
      src={site.portraitSrc}
      alt={site.portraitAlt}
    />
  );
}

PortraitImage.propTypes = {
  className: PropTypes.string,
  compact: PropTypes.bool,
};
