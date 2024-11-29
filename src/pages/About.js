function About() {
  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">About Me</h1>
      <div className="max-w-3xl mx-auto bg-black bg-opacity-50 p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-300">
          Hi, I’m Brian Wilson, a passionate software engineer focused on building
          innovative web applications and scalable solutions. With experience in
          front-end and back-end development, I specialize in creating dynamic
          projects like <span className="font-semibold text-white">Brian's Blog</span> and
          serverless solutions such as the <span className="font-semibold text-white">
          AWS Image Resizer</span>.
        </p>
        <p className="text-lg text-gray-300 mt-4">
          You can view my resume to learn more about my professional experience:
        </p>
        <a
          href="/Brian_Wilson_Resume_new_BIDA.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg mt-4 inline-block"
        >
          Download My Resume (PDF)
        </a>
      </div>
    </div>
  );
}

export default About;
