import * as React from "react";
import Header from '../components/Header/Header';
export default function AboutPage() {
  return (
      <>
      <Header/>
    <main className="flex flex-col items-center px-6 py-8 bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
      {/* Hero Section */}
      <section className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          About Dream 11
        </h1>
        <p className="text-lg text-gray-600">
          Dream 11 is a dynamic platform where users can explore matches, make
          predictions, and enjoy a seamless experience powered by cutting-edge
          technologies. Dive into the details below to learn more about the
          model and the technologies that power this application.
        </p>
      </section>

      {/* About the Model Section */}
      <section className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">
          About the Model
        </h2>
        <p className="text-lg text-gray-600">
          Our predictive model leverages machine learning algorithms trained on
          historical match data and real-time updates to provide accurate and
          insightful predictions. The model focuses on data-driven
          decision-making and user engagement.
        </p>
      </section>

      {/* Frontend Technologies Section */}
      <section className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-green-600 mb-4">
          Frontend Technologies
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>React.js: The core framework for building user interfaces.</li>
          <li>Tailwind CSS: For creating responsive and modern designs.</li>
          <li>JavaScript: Provides interactivity and dynamic content.</li>
        </ul>
      </section>

      {/* Backend Technologies Section */}
      <section className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">
          Backend Technologies
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-600">
          <li>Node.js: Handles the server-side logic and APIs.</li>
          <li>Express.js: Simplifies routing and middleware management.</li>
          <li>MongoDB: A NoSQL database for storing match and user data.</li>
        </ul>
      </section>

      {/* Additional Information Section */}
      <section className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-orange-600 mb-4">
          Additional Information
        </h2>
        <p className="text-lg text-gray-600">
          Dream 11 was developed by a passionate team of developers and
          designers committed to delivering the best user experience. The
          application integrates real-time updates, secure authentication, and
          seamless navigation to ensure a flawless journey for users.
        </p>
      </section>
    </main>
      </>
  );
}
