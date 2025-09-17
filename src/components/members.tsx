"use client";

import bandData from "@/data/bandData";
import Image from "next/image";

export default function Members() {
    return (
        <section className="relative bg-black text-white py-16 px-6" id="members">
            <h2 className="text-3xl font-extrabold text-red-500 text-center mb-12">
                Band Members
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {bandData.members.map((member, i) => (
                    <div
                        key={i}
                        className="bg-zinc-900 rounded-md overflow-hidden shadow-lg text-center p-4"
                    >
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={400}
                            height={192}
                            className="w-full object-cover rounded-md mb-4"
                        />
                        <h3 className="text-xl font-bold text-red-500">{member.name}</h3>
                        <p className="text-zinc-300">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
