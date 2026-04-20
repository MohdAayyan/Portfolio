export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-10 text-[#D2C1B6]">PROJECTS</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <a href="https://mohdaayyan.github.io/Calorie-Calculator/" target="_blank" rel="noopener noreferrer" className="border border-gray-700 p-6 rounded-xl hover:bg-gray-800 hover:text-white transition hover:cursor-pointer hover:scale-110">
          <h3 className="text-xl font-medium">Calorie Calculator</h3>
          <p className="text-gray-400 mt-2">A simple web application to calculate daily calorie needs based on user input.</p>
        </a>

        <div className="border border-gray-700 p-6 rounded-xl hover:bg-gray-800 hover:text-white transition hover:cursor-pointer hover:scale-110">
          <h3 className="text-xl font-medium">DIY Sonar System</h3>
          <p className="text-gray-400 mt-2">A homemade sonar system for detecting objects within the radar range using Arduino uno.</p>
        </div>
      </div>
    </section>
  )
}