// pages/about.js
export default function About() {
  return (
    <div className="max-w-4xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
        About Me
      </p>
      <h1 className="mb-6 text-3xl font-bold md:text-4xl">
        I build dependable web products from interface to API.
      </h1>

      <div className="space-y-6 leading-7 text-gray-700">
        <p>
          I&apos;m Syed Osama Ali, a Senior Full-Stack Software Engineer with 5+ years
          of experience delivering fintech platforms and AI-enabled SaaS products.
          My core stack includes React, Next.js, TypeScript, JavaScript, ASP.NET Core,
          C#, Node.js, Express.js, PostgreSQL, and MongoDB.
        </p>
        <p>
          In fintech, I&apos;ve worked on secure account-opening journeys, enterprise
          OIDC/SSO, API and service-layer development, Entity Framework Core and
          PostgreSQL persistence, PDF reporting, email workflows, and careful handling
          of applicant data. I focus on software that is clear, maintainable, and ready
          for real operational use.
        </p>
        <p>
          I also build backend services with JWT access and refresh tokens, OTP
          verification, HTTP-only cookies, Zod validation, CRUD, pagination, search,
          Docker, and cloud deployment workflows. On the frontend, I turn product and
          design requirements into responsive, accessible experiences with reusable
          components and predictable state management.
        </p>
        <p>
          I&apos;m comfortable owning features end to end: clarifying requirements,
          designing the implementation, shipping it, reviewing code, investigating
          production issues, and supporting teammates. I value practical engineering,
          honest communication, and measurable product outcomes.
        </p>
        <p>
          I&apos;m based in Karachi, Pakistan and open to remote, hybrid, on-site, and
          international relocation opportunities. For relocation, I require employer
          sponsorship and can join after a 30-day notice period.
        </p>
      </div>

      <a
        href="/Syed_Osama_Ali_Senior_Software_Engineer_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-all hover:bg-blue-700"
      >
        View My CV
      </a>
    </div>
  );
}
