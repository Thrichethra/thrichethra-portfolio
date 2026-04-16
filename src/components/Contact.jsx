function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-gray-950 flex items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Contact <span className="text-blue-400">Me</span></h2>
        <p className="text-gray-400 mb-8">Have a project in mind? Let's work together!</p>
        <div className="bg-gray-800 rounded-xl p-8 text-left space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition">
            Send Message 🚀
          </button>
        </div>
        <div className="flex justify-center gap-6 mt-8 text-gray-400">
          <a href="mailto:your@email.com" className="hover:text-blue-400 transition">📧 Email</a>
          <a href="https://github.com/YOUR-USERNAME" className="hover:text-blue-400 transition">🐙 GitHub</a>
          <a href="https://linkedin.com/in/YOUR-USERNAME" className="hover:text-blue-400 transition">💼 LinkedIn</a>
        </div>
      </div>
    </section>
  );
}
export default Contact;