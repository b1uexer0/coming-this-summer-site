import React from "react";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <header className="bg-red-800 p-6 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src="/corny.png" className="w-10 h-10" alt="Corny Logo" />
          <h1 className="text-3xl font-bold">Coming This Summer</h1>
        </div>
        <nav className="space-x-4">
          <a href="#">Reviews</a>
          <a href="#">Box Office</a>
          <a href="#">Fan Vote</a>
          <a href="#">News</a>
          <a href="#">CTS JR</a>
        </nav>
      </header>

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-2">Fan Score Spotlight</h2>
        <div className="bg-gray-900 p-4 rounded-lg flex justify-between items-center">
          <div>
            <h3 className="text-xl">Dune: Part Two</h3>
            <p className="text-gray-400">Jay: 9.1 | Ryan: 7.5 | Fans: 8.6</p>
          </div>
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-2">Top 10 at the Box Office</h2>
        <ol className="list-decimal ml-5 space-y-1">
          <li>Dune: Part Two</li>
          <li>Ghostbusters: Frozen Empire</li>
          <li>Challengers</li>
          <li>Monkey Man</li>
          <li>Fall Guy</li>
          <li>The Ministry of Ungentlemanly Warfare</li>
          <li>Kung Fu Panda 4</li>
          <li>Imaginary</li>
          <li>Mickey 17</li>
          <li>Seize Them!</li>
        </ol>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-2">New Movie Releases This Week</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-900 p-4 rounded">Megalopolis</div>
          <div className="bg-red-900 p-4 rounded">Seize Them!</div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-2">New TV Releases</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-900 p-4 rounded">Outer Range - S2</div>
          <div className="bg-blue-900 p-4 rounded">Fallout - S1</div>
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-2">CTS Reviewer Scores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 p-4 rounded">Jay - 8.5<br />“Hype with heart”</div>
          <div className="bg-gray-700 p-4 rounded">Ryan - 7.0<br />“Stylish but slow”</div>
          <div className="bg-gray-600 p-4 rounded">JJ - 6.3<br />“Great action, weak plot”</div>
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-2">Entertainment News</h2>
        <ul className="space-y-2 text-blue-400 underline">
          <li><a href="#">Variety: Marvel Revamps Avengers 5</a></li>
          <li><a href="#">Deadline: Fallout Series Breaks Records</a></li>
        </ul>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-2">Latest Reddit Posts</h2>
        <ul className="space-y-2 text-red-400 underline">
          <li><a href="#">Fan Theory: Ghostbusters Timeline</a></li>
        </ul>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-bold mb-2">Latest YouTube Video</h2>
        <div className="aspect-video bg-gray-900 flex justify-center items-center text-gray-500">
          [YouTube Embed Placeholder]
        </div>
      </section>

      <footer className="p-4 bg-black text-center text-white">
        <p>© 2025 Coming This Summer</p>
      </footer>
    </main>
  );
}