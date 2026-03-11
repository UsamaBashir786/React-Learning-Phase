import React from "react";
import Badge from "../atoms/Badge";

const About = ({heading,description}) => {
  return (
    <section className="px-20 py-20 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-900">
          {heading}
        </h3>
        <p className="text-lg text-gray-400 font-semibold mt-4">
          {description}
        </p>
      </div>
    </section>
  );
};

export default About;
