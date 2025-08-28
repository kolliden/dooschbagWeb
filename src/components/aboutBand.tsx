"use client";

export default function AboutBand() {
    return (
        <>
        <img
            src="/media/stars.svg"
            alt="Stars"
            className="w-full"
        />
        <section className="relative bg-[#200000] text-white py-16 px-6 min-h-screen flex flex-row" id="about">
            {/* Left Ad Banner */}
            <div className="sticky top-24 left-6 w-24 h-48 ml-16 bg-zinc-800 border border-pink-500 rounded-md hidden lg:block absolute">
                <div className="flex items-center justify-center h-full text-center p-2">
                    <span className="text-pink-400 font-bold text-sm">AD PLACEHOLDER</span>
                </div>
            </div>

            {/* Center Content */}
            <div className="max-w-sm mx-auto text-center space-y-6 z-10 relative">
                <h2 className="text-3xl font-extrabold text-pink-400">About The Band</h2>
                <p className="text-zinc-300">
                    We are The Anarchy Tapes, a DIY punk band from the underground scene. Our
                    music is raw, unfiltered, and full of energy. Expect chaotic guitar riffs,
                    fast-paced drums, and lyrics that challenge the status quo.
                </p>
                <p className="text-zinc-300">
                    Since our formation, we have played countless shows across Europe, spreading
                    our message of rebellion and unity through punk music. Join us at a show, grab
                    some merch, and become part of the movement!
                </p>
            </div>

            {/* Right Ad Banner */}
            <div className="sticky top-24 right-6 w-24 h-48 mr-16 bg-zinc-800 border border-pink-500 rounded-md hidden lg:block absolute">
                <div className="flex items-center justify-center h-full text-center p-2">
                    <span className="text-pink-400 font-bold text-sm">AD PLACEHOLDER</span>
                </div>
            </div>
        </section>
        </>
    );
}
