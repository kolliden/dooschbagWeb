import React from "react";
import Link from "next/link";

const navItems = [
    { name: "Gallery", href: "/gallery", isPage: true },
    { name: "About", href: "#about" },
    { name: "Mailing List", href: "#mailing-list" },
    { name: "Timeline", href: "#timeline" },
    { name: "Members", href: "#members" },
];

function Header() {
    return (
        <header className="relative overflow-hidden border-b border-zinc-800 bg-zinc-950/80">
            <div className="relative z-10 py-6">
                <Link href="/">
                <div className="flex flex-col md:flex-row md:ml-16 md:gap-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider text-white drop-shadow-[0_0_10px_rgba(255,62,165,.35)]">
                        DOOSCHBAG
                    </h1>
                    <p className="mt-2 md:mt-0 text-zinc-400 md:max-w-[16ch] md:whitespace-pre-line md:leading-tight">
                        That&apos;s the name
                        <br />
                        of the Band
                    </p>
                </div>
                </Link>

                {/* Navigation */}
                <nav className="mt-6">
                    <ul className="flex justify-center items-center md:gap-x-30 text-sm uppercase font-bold tracking-wide">
                        {navItems.map((item, idx) => (
                            <React.Fragment key={item.name}>
                                <li>
                                    {item.isPage ? (
                                        <Link href={item.href} className="hover:text-pink-400">
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <a
                                            href={item.href}
                                            className="hover:text-pink-400"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                document
                                                    .getElementById(item.href.substring(1))
                                                    ?.scrollIntoView({ behavior: "smooth" });
                                            }}
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </li>
                                {idx < navItems.length - 1 && (
                                    <span className="mx-4 text-zinc-600">|</span>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;