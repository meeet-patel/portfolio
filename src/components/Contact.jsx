import { useRef, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import {
  HiOutlineExclamationCircle,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { site } from "../data/siteData";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const contactFormUrl = (import.meta.env.VITE_CONTACT_FORM_URL || "").trim();

function isValidOptionalUrl(s) {
  const t = s.trim();
  if (!t) return true;
  try {
    const u = /^https?:\/\//i.test(t) ? t : `https://${t}`;
    new URL(u);
    return true;
  } catch {
    return false;
  }
}

function validateFields(values) {
  const err = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();
  const website = values.website.trim();

  if (!name) err.name = "Please add your name.";
  if (!email) err.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) err.email = "Use a valid email address.";
  if (!message) err.message = "Tell me how I can help.";
  if (!isValidOptionalUrl(website))
    err.website = "Use a full link (e.g. https://yoursite.com).";

  return err;
}

function FieldError({ id, message }) {
  return message ? (
    <p
      id={id}
      role="alert"
      className="mt-2 flex items-start gap-2.5 rounded-xl border border-amber-200/80 bg-amber-50/90 px-3 py-2 text-[0.8125rem] font-medium leading-snug text-amber-900 shadow-sm dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-100"
    >
      <span
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-amber-500 text-white shadow-sm"
        aria-hidden
      >
        <HiOutlineExclamationCircle className="h-3.5 w-3.5" strokeWidth={2} />
      </span>
      <span>{message}</span>
    </p>
  ) : null;
}

FieldError.propTypes = {
  id: PropTypes.string.isRequired,
  message: PropTypes.string,
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [values, setValues] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const inputBase =
    "w-full rounded-2xl border bg-surface px-5 py-3.5 text-sm text-foreground placeholder:text-muted outline-none transition focus:ring-1";

  const inputNormal = `${inputBase} border-foreground/10 focus:border-accent focus:ring-accent/40`;
  const inputError = `${inputBase} border-amber-400/80 bg-amber-50/50 focus:border-amber-500 focus:ring-amber-400/30 dark:border-amber-500/45 dark:bg-amber-950/25`;

  const clearError = useCallback((key) => {
    setErrors((prev) => {
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  const handleChange = (key) => (e) => {
    const v = e.target.value;
    setValues((prev) => ({ ...prev, [key]: v }));
    clearError(key);
    setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = validateFields(values);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    if (!contactFormUrl) {
      setStatus({
        type: "info",
        text: "Form endpoint not configured. Set VITE_CONTACT_FORM_URL in .env",
      });
      return;
    }

    try {
      await axios.post(contactFormUrl, {
        name: values.name.trim(),
        email: values.email.trim(),
        website: values.website.trim(),
        message: values.message.trim(),
      });
      setStatus({ type: "ok", text: "Thanks — your message was sent." });
      setValues({ name: "", email: "", website: "", message: "" });
    } catch {
      setStatus({
        type: "err",
        text: "Could not send. Try email or LinkedIn instead.",
      });
    }
  };

  const { contacts: c } = site;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="section-inset my-8 lg:my-12"
    >
      <div
        id="contact"
        className="page-container rounded-4xl border border-foreground/5 bg-surface/50 px-6 py-10 lg:px-12 lg:py-14"
      >
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Get in touch
        </p>
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-2xl font-bold tracking-tight text-foreground lg:text-4xl"
        >
          Contact <span className="text-accent">Me</span>
        </motion.h2>

        <div className="mt-10 flex flex-col items-start gap-12 lg:mt-16 lg:flex-row">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[42%]"
          >
            <form
              className="w-full space-y-4 lg:space-y-5"
              onSubmit={handleSubmit}
              noValidate
            >
              <div>
                <input
                  className={errors.name ? inputError : inputNormal}
                  type="text"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  value={values.name}
                  onChange={handleChange("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? "contact-name-error" : undefined
                  }
                />
                <FieldError id="contact-name-error" message={errors.name} />
              </div>
              <div>
                <input
                  className={errors.email ? inputError : inputNormal}
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  inputMode="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "contact-email-error" : undefined
                  }
                />
                <FieldError id="contact-email-error" message={errors.email} />
              </div>
              <div>
                <input
                  className={errors.website ? inputError : inputNormal}
                  type="text"
                  name="website"
                  placeholder="Your website (if any)"
                  autoComplete="url"
                  value={values.website}
                  onChange={handleChange("website")}
                  aria-invalid={Boolean(errors.website)}
                  aria-describedby={
                    errors.website ? "contact-website-error" : undefined
                  }
                />
                <FieldError
                  id="contact-website-error"
                  message={errors.website}
                />
              </div>
              <div>
                <textarea
                  className={`${
                    errors.message ? inputError : inputNormal
                  } h-32 resize-none`}
                  name="message"
                  placeholder="How can I help? *"
                  value={values.message}
                  onChange={handleChange("message")}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "contact-message-error" : undefined
                  }
                />
                <FieldError
                  id="contact-message-error"
                  message={errors.message}
                />
              </div>

              {status ? (
                <p
                  role="status"
                  className={`text-sm font-medium ${
                    status.type === "ok"
                      ? "text-emerald-600 dark:text-emerald-400"
                      : status.type === "err"
                        ? "text-red-600 dark:text-red-400"
                        : "text-muted"
                  }`}
                >
                  {status.text}
                </p>
              ) : null}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-4 pt-2 lg:flex-row lg:items-center lg:gap-5"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-fit rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-[#0D0D0D] shadow-glow-sm transition-colors hover:bg-accent-bright lg:max-w-xs lg:flex-1"
                >
                  Get In Touch
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="mt-2 space-y-1 text-2xl font-bold tracking-tight text-foreground lg:mt-0 lg:text-5xl">
              <h2>
                Let&apos;s <span className="text-accent">talk</span> about
              </h2>
              <h2>your next backend</h2>
            </div>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted lg:mt-6 lg:text-base">
              {site.tagline}
            </p>

            <div className="mt-8 flex flex-col gap-4 text-sm font-medium lg:mt-8 lg:text-lg">
              <motion.a
                whileHover={{ x: 5 }}
                className="group flex items-center gap-3 text-foreground"
                href={`mailto:${c.email}`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/15 text-accent transition group-hover:bg-accent/25">
                  <IoMdMail className="h-5 w-5" aria-hidden />
                </span>
                {c.email}
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                className="group flex items-center gap-3 text-foreground"
                href={c.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/15 text-accent transition group-hover:bg-accent/25">
                  <IoLogoLinkedin className="h-5 w-5" aria-hidden />
                </span>
                LinkedIn
              </motion.a>

              <motion.a
                whileHover={{ x: 5 }}
                className="group flex items-center gap-3 text-foreground"
                href={`tel:${c.phoneTel}`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent/15 text-accent transition group-hover:bg-accent/25">
                  <FaPhone className="h-4 w-4" aria-hidden />
                </span>
                {c.phone}
              </motion.a>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-foreground"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/15 text-accent">
                  <HiOutlineLocationMarker className="h-5 w-5" aria-hidden />
                </span>
                {c.address}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
