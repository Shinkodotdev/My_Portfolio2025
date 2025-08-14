import React from 'react'

const Projects = () => {
    const creationPics = [
    '/images/creating-project1.jpg',
    '/images/creating-project2.jpg',
    '/images/creating-project3.jpg',
    '/images/creating-project4.jpg',
  ]

  return (
    <>
      <section className="container mx-auto px-4 py-30 translate-y-20 min-h-screen max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Showcasing My Projects</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Throughout my learning journey, I have developed projects using a variety of programming languages and technologies. Below, I grouped them based on the tech stacks I used, reflecting my growth and versatility.
          </p>
        </div>

        {/* Projects grouped by Tech Stack */}
        <div className="space-y-20">
          {/* HTML, CSS, JavaScript only */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="/images/html-css-js.png"
              alt="HTML, CSS, JavaScript"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">HTML, CSS, JavaScript only</h2>
              <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
                <li>Responsive Portfolio Website showcasing my skills and projects.</li>
                <li>Interactive To-Do List app for managing daily tasks.</li>
                <li>Simple game built with pure JavaScript and CSS animations.</li>
              </ul>
              <a
                href="https://github.com/yourusername/html-css-js-projects"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
              >
                See all HTML/CSS/JS Projects
              </a>
            </div>
          </div>

          {/* HTML, CSS, JavaScript, PHP, and MySQL (using XAMPP) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <img
              src="/images/php-mysql.png"
              alt="PHP, MySQL, XAMPP"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-green-700">
                HTML, CSS, JavaScript, PHP, and MySQL (using XAMPP)
              </h2>
              <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
                <li>Blogging platform with user authentication and CRUD operations.</li>
                <li>E-commerce site with product catalog and shopping cart functionality.</li>
                <li>Student management system to track enrollment and grades.</li>
              </ul>
              <a
                href="https://github.com/yourusername/php-mysql-projects"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition"
              >
                See all PHP & MySQL Projects
              </a>
            </div>
          </div>

          {/* C++, Python, Java */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              src="/images/cpp-python-java.png"
              alt="C++, Python, Java"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-purple-700">C++, Python, Java</h2>
              <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
                <li>Inventory management system developed in C++.</li>
                <li>Data analysis scripts and automation tools built with Python.</li>
                <li>Desktop application for library management using Java.</li>
              </ul>
              <a
                href="https://github.com/yourusername/cpp-python-java-projects"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-5 py-2 rounded hover:bg-purple-700 transition"
              >
                See all C++, Python & Java Projects
              </a>
            </div>
          </div>

          {/* Cisco Video Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <img
              src="/images/cisco-videos.png"
              alt="Cisco Video Projects"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-red-600">Cisco Video Projects</h2>
              <ul className="list-disc list-inside text-gray-800 space-y-2 mb-6">
                <li>Network configuration tutorial videos using Cisco Packet Tracer.</li>
                <li>Video demonstrations of practical Cisco lab setups.</li>
                <li>Instructional videos on Cisco routing and switching concepts.</li>
              </ul>
              <a
                href="https://youtube.com/yourchannel" // replace with your video channel URL
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-5 py-2 rounded hover:bg-red-700 transition"
              >
                Watch All Cisco Videos
              </a>
            </div>
          </div>
        </div>
        {/* New section: Pictures Creating Projects */}
        <section className="mt-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">Behind The Scenes: Creating My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {creationPics.map((src, idx) => (
              <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={src}
                  alt={`Creating project ${idx + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}

export default Projects
