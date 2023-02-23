import React from "react";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section className="my-8 bg-slate-500 py-12">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Education</h2>
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className="md:w-1/3 text-center md:pr-8">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <div className="text-3xl text-blue-500 mb-2">
                <FaGraduationCap />
              </div>
              <h3 className="text-lg font-bold mb-2">Kurukshetra University</h3>
              <p className="text-gray-700">Bachelor of Commerce, 2018-2020</p>
            </div>
          </div>
          <div className="md:w-1/3 text-center md:px-4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <div className="text-3xl text-blue-500 mb-2">
                <FaGraduationCap />
              </div>
              <h3 className="text-lg font-bold mb-2">Kurukshetra University</h3>
              <p className="text-gray-700">Ielts trainer  certificate  certified  by IDP <br/> ( international  development  programme  )</p>
            </div>
          </div>
          <div className="md:w-1/3 text-center md:pl-8">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <div className="text-3xl text-blue-500 mb-2">
                <FaGraduationCap />
              </div>
              <h3 className="text-lg font-bold mb-2">MD senior  secondary  school</h3>
              <p className="text-gray-700">2017</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
