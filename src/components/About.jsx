function About() {
  return (
    <section id="about" className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold text-white mb-6">About <span className="text-blue-400">Me</span></h2>
        <p className="text-gray-400 text-lg mb-6">
          Hi! I'm Thrichethra, a passionate Frontend Developer from Sri Lanka.
          I love building clean, responsive and user-friendly websites.
        </p>
        <p className="text-gray-400 text-lg mb-8">
          I'm currently learning React and Tailwind CSS and building projects
          to grow my skills every day.
        </p>
        <div className="flex justify-center gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-400">1+</h3>
            <p className="text-gray-400">Years Learning</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-400">5+</h3>
            <p className="text-gray-400">Projects</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-blue-400">3+</h3>
            <p className="text-gray-400">Technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;