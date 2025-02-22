import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo / Brand Name */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-extrabold tracking-wide text-blue-400">
            Osama.dev
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-blue-400 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
