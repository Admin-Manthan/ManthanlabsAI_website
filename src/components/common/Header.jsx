import React from "react";

export function Header({ currentView }) {
  const navLinks = [
    { id: "home", label: "Home", href: "#home" },
    { id: "products", label: "Products", href: "#products" },
    { id: "reelcut", label: "Reelcut", href: "#reelcut" },
    { id: "consultancy", label: "Consultancy", href: "#consultancy", quiet: true },
  ];

  return (
    <header className="top">
      <div className="wrap">
        <a className="mark" href="#home" aria-label="Apex Labs home">
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <path
              d="M2 20 L11 3 L20 20"
              fill="none"
              stroke="#3ED6F0"
              strokeWidth="1.8"
            />
            <circle cx="11" cy="14" r="2.2" fill="#3ED6F0" />
          </svg>
          Apex Labs
        </a>
        <nav className="nav" aria-label="Pages">
          {navLinks.map((link) => {
            const isCurrent = currentView === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                data-link={link.id}
                className={link.quiet ? "quiet" : undefined}
                aria-current={isCurrent ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
