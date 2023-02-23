import React from "react";
import { FaHeadphones, FaBook } from "react-icons/fa";

function About() {
return (
<section className="bg-white shadow-lg rounded-lg p-8 mx-4 lg:mx-auto my-15">
<div className="flex justify-center">
<img
       src="../images/avatar.jpg"
       alt="Avatar"
       className="w-48 h-48 rounded-full border-4 border-blue-500"
     />
</div>
<div className="text-center mt-4">
<h2 className="text-xl font-bold text-gray-800">Neha beniwal</h2>
<h3 className="text-lg font-semibold text-gray-600 mt-2">McDonald's Crew Member</h3>
</div>
<p className="text-gray-700 text-base mt-4">
I am a certified IELTS trainer with the International Development Program (IDP). I am passionate about helping students achieve their language goals and have experience in developing customized lesson plans and providing individual feedback to enhance learning.
</p>
<div className="flex justify-center mt-4">
<div className="mr-8">
<FaHeadphones className="text-3xl text-blue-500 animate-bounce" />
<p className="text-gray-700 text-sm mt-1">Singing</p>
</div>
<div>
<FaBook className="text-3xl text-blue-500 animate-bounce" />
<p className="text-gray-700 text-sm mt-1">Reading</p>
</div>
</div>
</section>
);
}

export default About;