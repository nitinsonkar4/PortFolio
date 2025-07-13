const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md mt-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
           
            {
              title: "E-commerce Store",
              description:
                "A full-stack e-commerce web app with product listings, cart, and payment integration.",
            },
            {
              title: "Task Manager",
              description:
                "A React-based task management app with CRUD features and local storage support.",
            },
            {
              title: "Blog Platform",
              description:
                "A simple blog platform using Node.js and Express with markdown support and user authentication.",
            },
            {
              title: "Weather App",
              description:
                "Weather forecasting app that fetches data from public APIs and displays current weather conditions.",
            },
          ].map(({ title, description }) => (
            <div
              key={title}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                {title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {description}
              </p>

              {/* “View Project” button without navigation */}
              <button
                type="button"
                className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-medium focus:outline-none"
                onClick={() => {}}
              >
                View Project &rarr;
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
