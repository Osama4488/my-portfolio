// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Syed Osama Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
