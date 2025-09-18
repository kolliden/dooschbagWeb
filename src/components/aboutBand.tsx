"use client";
import Image from "next/image";

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
                <div className="sticky top-24 left-6 w-48 h-96 ml-16 bg-white hidden lg:block">
                    <Image
                        src="/media/poster1.png"
                        alt="Ad"
                        width={96}
                        height={192}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Center Content */}
                <div className="max-w-sm mx-auto text-center space-y-6 z-10 relative">
                    <h2 className="text-3xl font-extrabold text-red-500">About The Band</h2>
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
                <div className="sticky top-24 right-6 w-48 h-96 mr-16 bg-white hidden lg:block">
                    <Image
                        src="/media/poster1.png"
                        alt="Ad"
                        width={96}
                        height={192}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </>
    );
}
