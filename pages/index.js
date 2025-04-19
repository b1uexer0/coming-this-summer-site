
import React, { useState } from "react";

export default function Home() {
  const [score, setScore] = useState("");
  const [fanVotes, setFanVotes] = useState([]);
  const handleVote = () => {
    const value = parseFloat(score);
    if (value >= 1 && value <= 10) {
      setFanVotes([...fanVotes, value]);
      setScore("");
    }
  };
  const average = fanVotes.length
    ? (fanVotes.reduce((a, b) => a + b, 0) / fanVotes.length).toFixed(1)
    : "N/A";

  return (
    <main className="bg-gradient-to-b from-black via-red-950 to-black text-white min-h-screen">
      <header className="flex justify-between items-center p-6 bg-red-900">
        <div className="flex items-center space-x-4">
          <img src="/corny.png" className="w-10 h-10" alt="Corny" />
          <h1 className="text-2xl font-bold tracking-wider">COMING THIS SUMMER</h1>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#">Reviews</a>
          <a href="#">Categories</a>
          <a href="#">News</a>
          <a href="#">Fan Scores</a>
          <a href="#">Reddit</a>
          <a href="#">YouTube</a>
        </nav>
      </header>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">🎯 Fan Score Spotlight</h2>
        <div className="bg-gray-900 p-6 rounded-xl space-y-4">
          <h3 className="text-lg font-semibold">Vote your score for "Dune: Part Two"</h3>
          <input
            type="number"
            step="0.1"
            min="1"
            max="10"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="text-black p-2 rounded"
            placeholder="e.g. 7.7"
          />
          <button onClick={handleVote} className="bg-green-700 px-4 py-2 rounded ml-2">
            Submit
          </button>
          <p className="mt-4">Average Fan Score: <span className="font-bold text-blue-400">{average}</span></p>
        </div>
      </section>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">📰 Latest News</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li><a href="https://variety.com" className="text-blue-400" target="_blank">Variety Headline Example</a></li>
          <li><a href="https://deadline.com" className="text-blue-400" target="_blank">Deadline Headline Example</a></li>
        </ul>
      </section>

      <section className="p-6 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">🔗 Reddit & YouTube</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <iframe
            src="https://www.reddit.com/r/movies/new/.embed"
            className="w-full h-64 bg-white"
            title="Reddit Feed"
          />
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed?listType=user_uploads&list=ComingThisSummer"
            title="YouTube"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </section>

      <footer className="p-6 text-sm text-center text-white bg-black">
        <p>© 2025 Coming This Summer | Built with 🌽 by Jay</p>
      </footer>
    </main>
  );
}
