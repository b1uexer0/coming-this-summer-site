
import dynamic from 'next/dynamic';

const FanScore = dynamic(() => import('../components/FanScore'), { ssr: false });

export default function HomePage() {
  return (
    <main className="p-6 space-y-12 bg-gray-950 text-white min-h-screen font-sans">
      <section>
        <h2 className="text-2xl font-bold mb-4">Fan Score Spotlight</h2>
        <FanScore />
      </section>
    </main>
  );
}
