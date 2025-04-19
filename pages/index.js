import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-red-900 text-white">
      <header className="bg-red-800 py-6 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/corny.png" alt="Corny" className="w-10 h-10" />
          <h1 className="text-3xl font-extrabold tracking-wide">COMING THIS SUMMER</h1>
        </div>
        <nav className="space-x-6 text-lg font-semibold">
          <a href="#">Reviews</a>
          <a href="#">Categories</a>
          <a href="#">Staff Picks</a>
          <a href="#">Fan Rankings</a>
          <a href="#">CTS JR</a>
          <a href="#">About</a>
        </nav>
      </header>

      <section className="py-10 px-6">
        <h2 className="text-2xl font-bold mb-6">Latest Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-700 p-4 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold">MICKEY 17</h3>
            <p className="text-sm text-gray-200">Jay Martin - 9.0</p>
            <p className="mt-2">A highly entertaining adaptation of the novel.</p>
          </div>
          <div className="bg-blue-700 p-4 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold">GODZILLA x KONG</h3>
            <p className="text-sm text-gray-200">Ryan Sharp - 6.5</p>
            <p className="mt-2">Not very memorable, but still fun.</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold">KRAVEN</h3>
            <p className="text-sm text-gray-200">JJ - 2.0</p>
            <p className="mt-2">Without a doubt one to avoid.</p>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white p-6 flex justify-between items-center">
        <span className="text-sm">© 2025 Coming This Summer</span>
        <img src="/corny.png" alt="Corny" className="w-12 h-12" />
      </footer>
    </main>
  );
}