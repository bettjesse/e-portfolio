import React from "react";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section className="my-8 bg-gray-100 p-6 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800">
        <FaBriefcase className="inline-block mr-2 text-blue-600" />
        Experience
      </h2>
      <div className="mt-4">
        <h3 className="text-lg font-bold">IELTS Trainer</h3>
        <p className="text-lg">India</p>
        <ul className="list-disc ml-8 mt-4">
          <li>Developed and implemented lesson plans for IELTS test preparation</li>
          <li>Assisted students with exam registration and test-taking strategies</li>
          <li>Provided feedback and evaluation of student progress</li>
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold">Crew Member</h3>
        <p className="text-lg">McDonald's, 2021-present</p>
        <ul className="list-disc ml-8 mt-4">
          <li>Prepare and serve food and beverages according to McDonald's standards</li>
          <li>Assist customers with orders and resolve complaints</li>
          <li>Maintain cleanliness and organization of kitchen and dining areas</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
