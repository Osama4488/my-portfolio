import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* Hero Section */}
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">
          Hey, I’m <span className="text-blue-400">Osama!</span>
        </h1>
        <p className="text-lg mb-6">
          I'm a <strong>Senior Software Engineer</strong> specializing in
          <span className="text-blue-300 font-medium"> React.js, Next.js, and Node.js</span>.
          I build high-performance, scalable web applications, focusing on
          **UI/UX design, server-side rendering, and cloud deployment**.
        </p>
        <p className="mb-6">
          Welcome to my portfolio! Explore my work and discover how I turn ideas into reality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col justify-center sm:flex-row gap-4">
          <Link
            href="/projects"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all"
          >
            View My Projects
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-gray-800 text-gray-100 px-6 py-3 rounded-lg hover:bg-gray-700 transition-all"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
