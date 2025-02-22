// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Hey, I’m Osama!</h1>
      <p className="mb-6">
        I'm a Senior Software Engineer with expertise in React, Next.js, Node.js, and AWS.
        Welcome to my portfolio, where I showcase the projects I'm passionate about.
      </p>

      <Link
        href="/projects"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View My Projects
      </Link>
    </div>
  );
}
