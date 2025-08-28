"use client";

import { useState } from "react";

export default function MailingList() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageSuccess, setMessageSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch("/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();
        if (data.success) {
            setMessage("Success! Thanks for signing up!");
            setMessageSuccess(true);
            setEmail("");
        } else {
            setMessage("Something went wrong. Try again.");
        }
    };

    return (
        <section className="relative flex flex-row bg-black py-16 px-6 text-white items-center gap-x-24 justify-center">
            <div className="">
                <h2 className="text-3xl font-extrabold text-red-500 mb-6 tracking-wider">
                    Join Our Mailing List
                </h2>
                <p className="text-zinc-300 mb-8 max-w-md">
                    Sign up or miss out, poser.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 w-full max-w-md relative"
            >
                <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-md border-4 border-[#cccccc] bg-zinc-900 text-white font-bold placeholder-white focus:outline-none focus:ring-2 focus:ring-red-500 transition hover:border-red-500"
                    required
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-red-500 text-black font-extrabold rounded-md shadow-lg hover:bg-red-600 transition transform hover:scale-105"
                >
                    Subscribe
                </button>
            </form>

            {message && (
                <p className={`mt-6 font-bold text-center text-lg animate-pulse ${messageSuccess ? "text-green-400" : "text-red-400"}`}>
                    {message}
                </p>
            )}
        </section>
    );
}
