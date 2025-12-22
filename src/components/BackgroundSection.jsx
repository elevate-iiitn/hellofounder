export default function BackgroundSection({ children, className = "" }) {
  return (
    <section
      className={`relative bg-[url('/images/isfbg.png')] bg-cover bg-center bg-no-repeat ${className}`}
    >
      {/* optional overlay for contrast */}
      <div className="absolute inset-0 bg-black/50" />

      {/* content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
