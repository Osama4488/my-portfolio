// pages/about.js
export default function About() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-6">
        I'm a Senior Software Engineer with 4 years of experience in **front-end development**, specializing in **React.js, Next.js, and JavaScript**. I have a strong foundation in building **high-performance, scalable web applications**, focusing on **server-side rendering (SSR), lazy loading, and UI optimizations**.
      </p>
      <p className="mb-6">
        In addition to front-end expertise, I have experience with **backend development using Node.js and Express.js**, and have deployed applications on **AWS and Nginx**, managing cloud infrastructures efficiently.
      </p>
      <p className="mb-6">
        Over the years, I have worked on several large-scale applications, including **SEO analytics tools, AI-powered content generators, email deliverability platforms, and FinTech trading applications**. My contributions range from **designing interactive UI components** to **implementing complex functionalities and optimizing application performance**.
      </p>
      <p className="mb-6">
        I am always eager to explore **new technologies** and continuously improve my skills. I enjoy working with cross-functional teams and ensuring that every product I build delivers a smooth and engaging user experience.
      </p>
      <p>
        Outside of coding, I have a keen interest in **backend development**, **competitive programming** (HackerRankID: syed_osama_ali_1), and **sports**.
      </p>


      {/* Download CV Button */}
      <a 
  href="https://drive.google.com/file/d/1W2CNwLA0tXLIw-0g13itSCFmHqVau9kg/view?usp=sharing" 
  target="_blank" 
  rel="noopener noreferrer"
  className="mt-10 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
>
  View My CV
</a>

    </div>
  );
}
