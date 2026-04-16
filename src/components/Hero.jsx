function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gray-950 flex items-center justify-center text-center px-6">
      <div>

        {/* Greeting */}
        <p className="text-blue-400 text-lg font-medium mb-2">👋 Hello, I'm</p>

        {/* Your Name */}
        <h1 className="text-5xl font-bold text-white mb-4">Thrichethra</h1>

        {/* Your Role */}
        <h2 className="text-2xl text-gray-400 mb-6">Frontend Developer</h2>

        {/* Short Description */}
        <p className="text-gray-500 max-w-xl mx-auto mb-8">
          I build beautiful and responsive websites using React and Tailwind CSS.
          Passionate about clean code and great user experiences.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition">
            View Projects
          </a>
          <a href="#contact" className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-medium transition">
            Contact Me
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;