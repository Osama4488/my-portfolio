// pages/about.js
export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-6">
        I&apos;m a Senior Full-Stack Software Engineer with 5+ years of experience
        delivering fintech and AI-enabled SaaS products. React and TypeScript are my
        strongest technologies, and I also implement production backend workflows with
        ASP.NET Core, C#, Node.js, Express.js, Entity Framework Core, PostgreSQL, and MongoDB.
      </p>
      <p className="mb-6">
        My recent fintech work includes account-opening workflows, enterprise OIDC/SSO,
        API and service-layer changes, PostgreSQL-backed persistence, DevExpress PDF
        reporting, email templates, and secure handling of applicant data.
      </p>
      <p className="mb-6">
        I have also built Node.js and Express.js APIs with JWT access and refresh tokens,
        OTP verification, HTTP-only cookies, Zod validation, CRUD, pagination, search,
        MongoDB persistence, and Dockerized services.
      </p>
      <p className="mb-6">
        I enjoy translating complex product requirements into maintainable software,
        collaborating across teams, reviewing code, and mentoring junior engineers.
      </p>
      <p>
        I&apos;m based in Karachi, Pakistan and open to remote, hybrid, on-site, and
        international relocation opportunities.
      </p>


      {/* Download CV Button */}
      <a 
  href="/Syed_Osama_Ali_Senior_Software_Engineer_CV.pdf"
  target="_blank" 
  rel="noopener noreferrer"
  className="mt-10 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
>
  View My CV
</a>

    </div>
  );
}
