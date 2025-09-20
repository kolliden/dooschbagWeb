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
                        At a lasagne party in March 2025, Fionn got the brilliant idea, that he wanted to start a band. He ran around the party, found Freja and told her “we’re starting a punk band and it’s happening now”. He found Eamon and Leo, two munchkins from Minnesota, and next thing you know, Fionn had bought instruments off of Ebay, printed merch and gave them the name “DOOSCHBAG”.
                    </p>
                    <p className="text-zinc-300">
                        They played their first show in an art gallery a few days later, with 15 minutes of practice, with a bucket and a megaphone. Fionn almost got punched in the face under the ongoing premise of ‘if you knock our singer out, you get a free T-Shirt’.
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
