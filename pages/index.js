import React from "react";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-red-950 to-black min-h-screen text-white font-sans">
      <header className="bg-red-900 flex justify-between items-center p-6 text-white font-bold text-xl">
        <div className="flex items-center space-x-4">
          <img src="/corny.png" alt="Corny" className="w-10 h-10" />
          <h1 className="text-2xl tracking-wider">COMING THIS SUMMER</h1>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#">Reviews</a>
          <a href="#">Categories</a>
          <a href="#">Staff Picks</a>
          <a href="#">Fan Rankings</a>
          <a href="#">CTS JR</a>
          <a href="#">About</a>
        </nav>
      </header>

      <section className="px-4 py-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Latest Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl p-4 bg-red-800">
            <h3 className="text-xl font-bold">Must See</h3>
            <img src="/mickey17.jpg" className="rounded mt-2" />
            <p className="mt-2 text-sm">Jay Martin - A highly entertaining adaptation of the novel.</p>
            <span className="bg-green-600 px-2 py-1 rounded text-sm inline-block mt-2">9.0</span>
          </div>
          <div className="rounded-xl p-4 bg-blue-800">
            <h3 className="text-xl font-bold">Wait for Streaming</h3>
            <img src="/godzilla.jpg" className="rounded mt-2" />
            <p className="mt-2 text-sm">Ryan Sharp - Too geared toward younger viewers, but still fun.</p>
            <span className="bg-blue-600 px-2 py-1 rounded text-sm inline-block mt-2">6.5</span>
          </div>
          <div className="rounded-xl p-4 bg-red-950">
            <h3 className="text-xl font-bold">Skip It</h3>
            <img src="/kraven.jpg" className="rounded mt-2" />
            <p className="mt-2 text-sm">JJ - Without a doubt one to avoid.</p>
            <span className="bg-red-600 px-2 py-1 rounded text-sm inline-block mt-2">2.0</span>
          </div>
        </div>
      </section>

      <footer className="flex justify-between items-center p-4 text-sm text-white bg-black">
        <span>© 2025 Coming This Summer</span>
        <img src="/corny.png" alt="Corny" className="w-12 h-12" />
      </footer>
    </main>
  );
}