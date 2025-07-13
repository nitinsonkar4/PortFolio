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
              title: "Portfolio Website",
              description:
                "A personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
              link: "https://yourportfolio.com",
            },
            {
              title: "E-commerce Store",
              description:
                "A full-stack e-commerce web app with product listings, cart, and payment integration.",
              link: "https://ecommerce.example.com",
            },
            {
              title: "Task Manager",
              description:
                "A React-based task management app with CRUD features and local storage support.",
              link: "https://taskmanager.example.com",
            },
            {
              title: "Blog Platform",
              description:
                "A simple blog platform using Node.js and Express with markdown support and user authentication.",
              link: "https://blogplatform.example.com",
            },
            {
              title: "Chat App",
              description:
                "Real-time chat application built with Socket.io and React for instant messaging.",
              link: "https://chatapp.example.com",
            },
            {
              title: "Weather App",
              description:
                "Weather forecasting app that fetches data from public APIs and displays current weather conditions.",
              link: "https://weatherapp.example.com",
            },
          ].map(({ title, description, link }) => (
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
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline font-medium"
              >
                View Project &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
