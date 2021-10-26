import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { professional } from "../data";

export default function ProfessionalAchievements() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Professional Achievements
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {professional.map((professional) => (
            <a
              href={professional.link}
              key={professional.image}
              className="w-100 p-4 pl-48">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-2/3 h-full object-fit object-center"
                  src={professional.image}
                />
                <div className="px-8 py-10 relative z-10 w-2/3 h-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {professional.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {professional.title}
                  </h1>
                  <p className="leading-relaxed">{professional.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}