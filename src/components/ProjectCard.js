// components/ProjectCard.js
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  const { title, description, techStack, image, githubLink, liveLink } = project;

  return (
    <div className="border rounded-lg p-4 bg-white shadow-lg">
      {image && (
        <div className="mb-4">
          <Image 
            src={image} 
            alt={title} 
            width={600} 
            height={400}
            className="rounded"
          />
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <div className="text-sm mb-2 text-gray-700 flex gap-2 flex-wrap">
        {techStack?.map((tech) => (
          <span 
            key={tech} 
            className="bg-gray-200 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {githubLink && (
          <Link href={githubLink} target="_blank" className="text-blue-600 hover:underline">
            GitHub
          </Link>
        )}
        {liveLink && (
          <Link href={liveLink} target="_blank" className="text-blue-600 hover:underline">
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
}
