// pages/contact.js
export default function Contact() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
      <p className="mb-4">
        I'm always open to **new opportunities, collaborations, and discussions** about web development, software engineering, and innovative projects.
        Whether you have a project idea or just want to say hello, feel free to reach out!
      </p>
      <ul className="space-y-2">
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:syed.osama.ali.96@gmail.com" className="text-blue-600 hover:underline">
            syed.osama.ali.96@gmail.com
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a 
            href="https://www.linkedin.com/in/osama-ali-/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/osama-ali-/
          </a>
        </li>
        <li>
          <strong>GitHub:</strong>{" "}
          <a 
            href="https://github.com/Osama4488" 
            target="_blank" 
            rel="noreferrer" 
            className="text-blue-600 hover:underline"
          >
            github.com/Osama4488
          </a>
        </li>
        <li>
          <strong>Location:</strong> Karachi, Pakistan
        </li>
      </ul>
      <p className="mt-6">
        I'm happy to connect with like-minded professionals, discuss **exciting projects**, and explore **new opportunities**.
      </p>
    </div>
  );
}
