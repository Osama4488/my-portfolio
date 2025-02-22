// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo / Name */}
        <Link href="/">
          <span className="text-xl font-bold cursor-pointer">
            My Portfolio
          </span>
        </Link>
        {/* Links */}
        <div className="space-x-4">
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="/projects" className="hover:text-gray-300">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
