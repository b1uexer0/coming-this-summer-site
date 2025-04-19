export default function HomePage() {
  return (
    <main className="p-6 space-y-12 bg-gray-950 text-white min-h-screen">
      {/* 🗳️ Fan Score Spotlight */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Fan Score Spotlight</h2>
        <div className="bg-gray-800 p-4 rounded-xl shadow-md">
          {/* This is where your Fan Score component goes */}
          <p>Live Fan Score system here 🔥</p>
        </div>
      </section>

      {/* 📰 News Feed */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Entertainment News</h2>
        <ul className="space-y-2">
          <li><a href="#" className="hover:underline">[Variety] Latest Hollywood news headline</a></li>
          <li><a href="#" className="hover:underline">[Deadline] Another juicy industry update</a></li>
        </ul>
      </section>

      {/* 👥 CTS Team Reviews */}
      <section>
        <h2 className="text-2xl font-bold mb-4">CTS Team Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["Jay", "Ryan", "JJ", "Bean Jr", "Skye", "Joda"].map((name) => (
            <div key={name} className="bg-gray-800 p-4 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p>Score: 8.3</p>
              <img src={`/corny-avatars/${name.toLowerCase()}.png`} alt={`${name}'s Corny`} className="w-16 h-16 mt-2" />
            </div>
          ))}
        </div>
      </section>

      {/* 📈 Top 10 Box Office */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Top 10 Box Office</h2>
        <ol className="list-decimal ml-6 space-y-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <li key={i}>Movie Title #{i + 1} - $XX.XM</li>
          ))}
        </ol>
      </section>

      {/* 🎞️ New Movie Releases */}
      <section>
        <h2 className="text-2xl font-bold mb-4">New Movie Releases</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {["Film A", "Film B", "Film C"].map((title) => (
            <div key={title} className="bg-gray-800 p-4 rounded-xl shadow-md text-center">
              <div className="h-32 bg-gray-700 mb-2" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📺 New TV Releases */}
      <section>
        <h2 className="text-2xl font-bold mb-4">New TV Releases</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {["Show A", "Show B", "Show C"].map((title) => (
            <div key={title} className="bg-gray-800 p-4 rounded-xl shadow-md text-center">
              <div className="h-32 bg-gray-700 mb-2" />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔗 Reddit + YouTube */}
      <section>
        <h2 className="text-2xl font-bold mb-4">From the Fans</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Reddit Posts</h3>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">[Reddit] Post title 1</a></li>
              <li><a href="#" className="hover:underline">[Reddit] Post title 2</a></li>
            </ul>
          </div>
          <div className="bg-gray-800 p-4 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2">Latest YouTube Video</h3>
            <iframe
              className="w-full aspect-video rounded-lg"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
