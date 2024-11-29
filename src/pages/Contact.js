function Contact() {
  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Contact Me</h1>
      <div className="max-w-3xl mx-auto bg-black bg-opacity-50 p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-300">
          Feel free to reach out to me through the following channels:
        </p>
        <ul className="mt-4 space-y-4">
          <li>
            <a
              href="mailto:bpu333@gmail.com"
              className="text-blue-400 hover:underline"
            >
              Email: bpu333@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/bwils5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub: github.com/bwils5
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/brian-wilson-52476875/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn: https://www.linkedin.com/in/brian-wilson-52476875/
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;

