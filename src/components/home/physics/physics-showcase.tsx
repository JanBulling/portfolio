export default function PhysicsShowcaseSection() {
  return (
    <section
      id="showcase-physics"
      className="theme-container mx-auto max-w-4xl px-4 py-12"
    >
      <h2 className="text-xl font-bold">Physics research</h2>

      <div className="mt-2 grid grid-cols-2 gap-4">
        <div className="rounded border px-3 py-2">
          <h3 className="font-semibold">High Mass Quantum Mechanics</h3>
          <p className="mt-1 text-sm">
            Theoretical work on Gravitationally Induced Entanglement between
            levitated nanoparticles and especially on Casimir interactions in
            such settings.
          </p>
        </div>
        <div className="rounded border px-3 py-2">
          <h3 className="font-semibold">Low-Energy Quantum Gravity</h3>
          <p className="mt-1 text-sm"></p>
        </div>
      </div>
    </section>
  );
}
