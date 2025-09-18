"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import bandData from "@/data/bandData";

export default function Timeline() {
    return (
        <section className="relative bg-black text-white py-16 px-6" id="timeline">
            <h2 className="text-3xl font-extrabold text-red-500 text-center mb-12">
                Gig Timeline
            </h2>

            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Line (Hidden on Mobile) */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-red-500 h-full"></div>

                {/* Events */}
                <div className="space-y-24">
                    {bandData.timeline.map((event, i) => {
                        const isLeft = i % 2 === 0;
                        return <TimelineItem key={i} event={event} isLeft={isLeft} />;
                    })}
                </div>
            </div>
        </section>
    );
}

interface TimelineEvent {
    date: string;
    venue: string;
    image?: string;
}

interface TimelineItemProps {
    event: TimelineEvent;
    isLeft: boolean;
}

function TimelineItem({ event, isLeft }: TimelineItemProps) {
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative w-full flex flex-col md:flex-row md:items-center ${
                isLeft ? "md:justify-start" : "md:justify-end"
            }`}
        >
            {/* Timeline Dot (Hidden on Mobile) */}
            <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1.3 } : {}}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full"
            />

            {/* Content Container */}
            <div className={`flex items-center gap-6 max-w-xl ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}>
                <DateBadge date={event.date} />
                <div className="flex flex-col gap-3 max-w-sm text-center md:text-left">
                    <p className="text-lg text-zinc-300 font-light">{event.venue}</p>
                    {false && event.image && (
                        <img
                            src={event.image}
                            alt={event.venue}
                            className="w-full rounded-md shadow-lg border border-zinc-800 transform rotate-1 hover:rotate-0 transition-transform duration-300"
                        />
                    )}
                </div>
            </div>
        </motion.div>
    );
}

function DateBadge({ date }: { date: string }) {
    return (
        <div className="text-white font-extrabold text-lg px-4 py-2 rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(255,0,0,0.9)] border-2 border-red-700">
            {date}
        </div>
    );
}
