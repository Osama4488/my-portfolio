// // components/ProjectCard.js
// import Image from "next/image";
// import Link from "next/link";

// export default function ProjectCard({ project }) {
//   const { title, description, techStack, image, githubLink, liveLink } = project;

//   return (
//     <div className="border rounded-lg p-4 bg-white shadow-lg">
//       {image && (
//         <div className="mb-4">
//           <Image 
//             src={image} 
//             alt={title} 
//             width={600} 
//             height={400}
//             className="rounded"
//           />
//         </div>
//       )}
//       <h3 className="text-xl font-bold mb-2">{title}</h3>
//       <p className="mb-2">{description}</p>
//       <div className="text-sm mb-2 text-gray-700 flex gap-2 flex-wrap">
//         {techStack?.map((tech) => (
//           <span 
//             key={tech} 
//             className="bg-gray-200 px-2 py-1 rounded"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//       <div className="flex gap-4">
//         {githubLink && (
//           <Link href={githubLink} target="_blank" className="text-blue-600 hover:underline">
//             GitHub
//           </Link>
//         )}
//         {liveLink && (
//           <Link href={liveLink} target="_blank" className="text-blue-600 hover:underline">
//             Live Demo
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// }

// components/ProjectCard.js
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  const { title, description, techStack, image, githubLink, liveLink } = project;

  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-md transition-shadow hover:shadow-xl">
      {/* Image Section */}
      {image && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>

        {/* Tech Stack */}
        {techStack?.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-block rounded bg-gray-100 px-2 py-1 text-sm text-gray-700"
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
              className="text-blue-600 hover:underline"
            >
              GitHub
            </Link>
          )}
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
