function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white px-8 py-4 flex justify-between items-center shadow-lg z-50">
      
      {/* Logo / Name */}
      <h1 className="text-xl font-bold text-blue-400">Thrichethra</h1>

      {/* Nav Links */}
      <ul className="flex gap-6 text-sm font-medium">
        <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
        <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
        <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
        <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
        <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
      </ul>

    </nav>
  );
}

export default Navbar;