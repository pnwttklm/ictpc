import React from "react";
import { Metadata } from "next";
import { ExternalLink } from "lucide-react"; // Import the external link icon

export const metadata: Metadata = {
  title: "About | ICTPC",
  description: "Learn more about the ICTxDST Sport Cup and its organizers.",
};

export default function About() {
  return (
    <>
      <div className="min-h-screen pb-40 md:pb-60 bg-white flex flex-col items-center text-gray-900 p-6 sm:p-8 md:p-12 lg:p-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 sm:mt-8">
          About
        </h1>

        {/* ICTxDST Sport Cup Section */}
        <section className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 text-justify mt-6 space-y-6 bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold text-gray-800">
            About ICTxDST Sport Cup
          </h2>
          <p className="indent-8 sm:indent-12 md:indent-16">
            The ICTxDST Sport Cup is an annual event designed to bring students
            from the ICT and DST faculties together, fostering camaraderie and
            building strong friendships within the community.
          </p>
          <p>
            <a
              href="https://www.instagram.com/muict_studentactivities"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline ml-2 flex items-center gap-1"
            >
              @muict_studentactivities
              <ExternalLink className="w-5 h-5" />
            </a>
          </p>
        </section>

        {/* About Host Section */}
        <section className="w-full sm:w-11/12 md:w-3/4 lg:w-2/3 text-justify mt-10 space-y-6 bg-gray-100 p-6 sm:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold text-gray-800">
            About Host
          </h2>
          <p className="indent-8 sm:indent-12 md:indent-16">
            Dev Club, in association with the Faculty of Information and
            Communication Technology, Mahidol University, is a student club
            under the Faculty of ICT at Mahidol University. It serves as a hub
            and learning space for students specializing in software
            development, UX design, interface design, software quality
            assurance, project management, and game development, providing a
            real-world working environment.
          </p>
          <p>
            Currently, Dev Club is responsible for both software development and
            academic services.
          </p>
          <p className="flex items-center gap-2">
            Visit our website:
            <a
              href="https://muictdev.club"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline flex items-center gap-1"
            >
              muictdev.club
              <ExternalLink className="w-5 h-5" />
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
