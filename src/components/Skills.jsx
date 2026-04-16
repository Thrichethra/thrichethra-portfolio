const skills = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "80%" },
  { name: "JavaScript", level: "70%" },
  { name: "React", level: "60%" },
  { name: "Tailwind CSS", level: "70%" },
  { name: "Git & GitHub", level: "60%" },
];

function Skills() {
  return (
    <section id="skills" className="min-h-screen bg-gray-900 flex items-center justify-center px-6 py-20">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl font-bold text-white text-center mb-12">My <span className="text-blue-400">Skills</span></h2>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-blue-400">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;