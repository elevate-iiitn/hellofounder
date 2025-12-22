export default function BackgroundSection({ children, className = "" }) {
  return (
    <section
      className={`relative bg-[url('/images/isfbg.png')] bg-cover bg-center bg-no-repeat ${className}`}
    >
      {/* bottom fade to black */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-linear-to-b from-transparent to-black" />

      {/* content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
