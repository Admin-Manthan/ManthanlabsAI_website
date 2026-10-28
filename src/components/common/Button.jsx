import React from "react";

export function Button({
  href,
  onClick,
  type = "button",
  variant = "cyan", // 'cyan' or 'line-mute'
  className = "",
  children,
  ...props
}) {
  const baseClass = variant === "line-mute" ? "btn line-mute" : "btn";
  const combinedClass = `${baseClass} ${className}`.trim();

  if (href) {
    return (
      <a href={href} onClick={onClick} className={combinedClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass} {...props}>
      {children}
    </button>
  );
}
