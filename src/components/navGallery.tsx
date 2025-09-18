import React from "react";
import Link from "next/link";

function Header() {
    return (
        <header className="relative overflow-hidden border-b border-zinc-800 bg-zinc-950/80">
            <div className="relative z-10 py-6">
                <Link href="/">
                    <div className="flex md:flex-row ml-16 gap-4">
                        {/* 
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider text-white drop-shadow-[0_0_10px_rgba(255,62,165,.35)]">
                            DOOSCHBAG
                        </h1>
                        */}
                        <img
                            src="/logo.png"
                            alt="Dooschbag Logo"
                            className="h-15 w-auto object-contain"
                        />
                        <p className="mt-0 text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 md:max-w-[16ch] md:whitespace-pre-line md:leading-tight">
                            That&apos;s the name
                            <br />
                            of the Band
                        </p>
                    </div>
                </Link>
            </div>
        </header>
    );
}

export default Header;