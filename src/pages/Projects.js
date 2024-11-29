import projects from '../data/projects';

function Projects() {
  return (
    <div className="p-10 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-black bg-opacity-50 rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-white">{project.name}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="mt-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline mr-4"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
