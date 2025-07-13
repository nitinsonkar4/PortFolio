const Contact = () => {
  return (
    <>
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-16 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Contact Me
        </h2>

        <form
          action="mailto:your.email@example.com"
          method="POST"
          encType="text/plain"
          className="max-w-xl mx-auto space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="Name"
              required
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              required
              placeholder="your.email@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="Message"
              rows="5"
              required
              placeholder="Write your message here..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
