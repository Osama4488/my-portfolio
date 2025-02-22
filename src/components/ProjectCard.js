
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  const { title, description, techStack, image, githubLink, liveLink } = project;

  return (
    <div className="relative overflow-hidden rounded-xl bg-[#1e293b] text-gray-200 shadow-md border border-gray-700 group">
      
      {/* Image Section (Moves & Zooms on Card Hover) */}
      {image && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-2"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-100">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>

        {/* Tech Stack - Improved Readability */}
        {techStack?.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-block rounded-full bg-blue-600 px-3 py-1 text-sm text-white font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links */}
        <div className="mt-4 flex items-center space-x-4">
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              className="text-blue-400 font-semibold hover:text-blue-500 transition"
            >
              GitHub
            </Link>
          )}
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              className="text-blue-400 font-semibold hover:text-blue-500 transition"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
