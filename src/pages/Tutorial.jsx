import Header from '../components/Header/Header';
import * as React from "react";

export default function TutorialPage() {
  return (
    <>
      <Header/>
    <main className="flex flex-col items-center px-6 py-8 bg-gray-50 min-h-screen">
      {/* Documentation Section */}
      <section className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Product Documentation
        </h1>
        <p className="text-lg text-gray-600">
          Welcome to the Dream 11 tutorial section. Here you’ll find
          step-by-step instructions and guidance to make the most of our
          platform. Watch the video below for a detailed walkthrough, and start
          enjoying an unparalleled experience with Dream 11.
        </p>
      </section>

      {/* YouTube Video Section */}
      <section className="w-full max-w-4xl">
        <div className="relative overflow-hidden rounded-lg shadow-md">
          <iframe
            className="w-full h-[315px] sm:h-[450px]"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your YouTube video ID
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        </div>
      </section>
    </main>
            </>
  );
}
