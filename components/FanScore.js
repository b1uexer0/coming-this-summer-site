
import { useState } from 'react';

export default function FanScore() {
  const [score, setScore] = useState(7.5);
  const [votes, setVotes] = useState([7.5]); // Placeholder: you can replace with real backend data

  const handleVote = () => {
    const newVotes = [...votes, score];
    const average = (
      newVotes.reduce((acc, curr) => acc + curr, 0) / newVotes.length
    ).toFixed(1);
    setVotes(newVotes);
    setScore(parseFloat(average));
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl text-white">
      <h3 className="text-xl mb-2 font-semibold">Fan Rating</h3>
      <p className="text-3xl font-bold mb-4">{score}</p>
      <input
        type="range"
        min="1"
        max="10"
        step="0.1"
        value={score}
        onChange={(e) => setScore(parseFloat(e.target.value))}
        className="w-full mb-4"
      />
      <button
        onClick={handleVote}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Submit Vote
      </button>
    </div>
  );
}
