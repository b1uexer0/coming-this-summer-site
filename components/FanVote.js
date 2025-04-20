import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

export default function FanVote({ movieId }) {
  const [vote, setVote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const checkVote = async () => {
      const ip = await fetch('/api/get-ip').then(res => res.text());
      const { data } = await supabase
        .from('fan_votes')
        .select('id')
        .eq('movie_id', movieId)
        .eq('ip_address', ip);
      if (data && data.length > 0) {
        setSubmitted(true);
      }
    };
    checkVote();
  }, [movieId]);

  const submitVote = async () => {
    const ip = await fetch('/api/get-ip').then(res => res.text());
    const { error } = await supabase.from('fan_votes').insert([
      { movie_id: movieId, vote, ip_address: ip },
    ]);
    if (!error) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg text-center mt-4">
      <h3 className="text-lg font-bold mb-2">Fan Voting</h3>
      {!submitted ? (
        <div className="flex flex-col items-center space-y-2">
          <input
            type="number"
            step="0.1"
            min="1"
            max="10"
            value={vote}
            onChange={(e) => setVote(e.target.value)}
            placeholder="Enter score (1.0 - 10.0)"
            className="w-40 text-black p-1 rounded"
          />
          <button
            onClick={submitVote}
            className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-white"
          >
            Submit Vote
          </button>
        </div>
      ) : (
        <p className="text-blue-400">Thanks for voting!</p>
      )}
    </div>
  );
}