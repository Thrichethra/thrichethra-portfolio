const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/YOUR-USERNAME/thrichethra-portfolio",
  },
  {
    title: "Project Two",
    description: "Description of your second project goes here.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
  },
  {
    title: "Project Three",
    description: "Description of your third project goes here.",
    tech: ["React", "CSS"],
    github: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-950 flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <h2 className="text-4xl font-bold text-white text-center mb-12">My <span className="text-blue-400">Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="bg-gray-800 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/20 transition">
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <a href={project.github} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;