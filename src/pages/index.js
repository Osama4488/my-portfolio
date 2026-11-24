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
          I&apos;m a <strong>Senior Full-Stack Software Engineer</strong> building
          secure fintech and AI-enabled products with
          <span className="text-blue-300 font-medium"> React, TypeScript, ASP.NET Core, and Node.js</span>.
          My work spans polished interfaces, REST APIs, authentication, data workflows,
          reporting, and production debugging.
        </p>
        <p className="mb-6">
          Explore selected public projects and professional product work. Employer source
          code and non-public environments are intentionally kept confidential.
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
