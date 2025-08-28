"use client";

export default function XXXDivider() {
  return (
    <section className="relative bg-black overflow-hidden flex items-center">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/media/grunge-bg.webp')] bg-repeat" />
      <div className="whitespace-nowrap animate-scroll text-[#300000] text-4xl font-black tracking-widest">
        {"XXX ".repeat(100)}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: inline-block;
          white-space: nowrap;
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
