const footerLinks = [
  { label: "About", href: "/#about", icon: "info" },
  { label: "Contact", href: "mailto:contact@ecoloop.com", icon: "mail" },
  {
    label: "GitHub",
    href: "https://github.com/RajMajhi/Ecoloop_GsSOC-2026",
    icon: "github",
    external: true,
  },
];

function FooterIcon({ name }) {
  const sharedProps = {
    className: "site-footer__icon",
    width: "17",
    height: "17",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  if (name === "mail") {
    return (
      <svg {...sharedProps}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg {...sharedProps}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.3-.3-2.6-1.1-3.7.3-1.1.3-2.3 0-3.3 0 0-1 0-3 1.5a10.4 10.4 0 0 0-5.5 0C8 2 7 2 7 2c-.3 1-.3 2.2 0 3.3A5.4 5.4 0 0 0 5.9 9c0 3.5 3 5.5 6 5.5a4.8 4.8 0 0 0-1 3.5v4" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <a className="site-footer__logo" href="/" aria-label="EcoLoop home">
              EcoLoop
            </a>
            <p className="site-footer__tagline">
              A circular marketplace helping communities reuse, resell, and
              rediscover sustainable products.
            </p>
          </div>

          <div className="site-footer__actions">
            <nav className="site-footer__nav" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                >
                  <FooterIcon name={link.icon} />
                  {link.label}
                </a>
              ))}
            </nav>

            <a className="site-footer__cta" href="/#community">
              Join the Waitlist
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>&copy; {year} EcoLoop. Built for a more circular future.</p>
        </div>
      </div>
    </footer>
  );
}
