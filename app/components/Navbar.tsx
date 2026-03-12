"use client";

export default function Navbar() {

    const RESUME_URL = "https://drive.google.com/file/d/1gcJPKYqwmLngCaruuUED1utYBywRZB6k/view?usp=drive_link";

    const navLinks = [
        { label: "about", href: "#about" },
        { label: "experience", href: "#experience" },
        { label: "projects", href: "/projects" },
        { label: "contact", href: "#contact" },
    ];

    return (
        <nav
            className="flex items-center justify-between w-full"
            style={{
                height: "56px",
                backgroundColor: "#0a0a0a",
                transition: "background-color 0.3s ease, border-color 0.3s ease",
            }}
        >
          <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-6 sm:px-10 lg:px-24">
            {/* Logo / Name */}
            <a
                href="/"
                className="font-bold text-base tracking-tight select-none"
                style={{
                    fontFamily: "var(--font-geist-sans)",
                    color: "#ffffff",
                    transition: "color 0.3s ease",
                    textDecoration: "none",
                }}
            >
                yash
            </a>

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
                <a
                    href={RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs border border-[#444444] hover:border-white text-[#aaaaaa] hover:text-white transition-colors px-3 py-1 rounded font-[family-name:var(--font-geist-mono)]"
                >
                    resume
                </a>
            </div>
          </div>
        </nav>
    );
}
