"use client";

export default function Navbar() {

    const navLinks = [
        { label: "about", href: "#about" },
        { label: "experience", href: "#experience" },
        { label: "contact", href: "#contact" },
    ];

    return (
        <nav
            className="flex items-center justify-between w-full"
            style={{
                height: "56px",
                backgroundColor: "#0a0a0a",
                borderBottom: `1px solid rgba(255,255,255,0.05)`,
                transition: "background-color 0.3s ease, border-color 0.3s ease",
            }}
        >
          <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-24">
            {/* Logo / Name */}
            <span
                className="font-bold text-base tracking-tight select-none"
                style={{
                    fontFamily: "var(--font-geist-sans)",
                    color: "#ffffff",
                    transition: "color 0.3s ease",
                }}
            >
                yash
            </span>

            {/* Right side: nav links + theme toggle */}
            <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        style={{
                            fontFamily: "var(--font-geist-sans)",
                            fontSize: "",
                            color: "#ffffff",
                            transition: "color 0.2s ease",
                            textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                        (e.currentTarget.style.color =
                            "#ffffff")
                        }
                        onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                            "#ffffff")
                        }
                    >
                        {link.label}
                    </a>
                ))}
            </div>
          </div>
        </nav>
    );
}
