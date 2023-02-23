import React from "react";
import { FaPaintBrush, FaExchangeAlt, FaExpandArrowsAlt, FaBullseye, FaBolt, FaClipboardCheck, FaHeart, FaBalanceScale, FaBookReader, FaRegPauseCircle } from "react-icons/fa";

function Skills() {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex flex-col items-center mx-6 my-4">
          <FaPaintBrush className="text-5xl mb-2" />
          <p className="text-lg font-bold">Creativity</p>
        </div>
        <div className="flex flex-col items-center mx-6 my-4">
          <FaExchangeAlt className="text-5xl mb-2" />
          <p className="text-lg font-bold">Versatility</p>
        </div>
        <div className="flex flex-col items-center mx-6 my-4">
          <FaExpandArrowsAlt className="text-5xl mb-2" />
          <p className="text-lg font-bold">Flexibility</p>
        </div>
        <div className="flex flex-col items-center mx-6 my-4">
          <FaBullseye className="text-5xl mb-2" />
          <p className="text-lg font-bold">Focused</p>
        </div>
        <div className="flex flex-col items-center mx-6 my-4">
          <FaBolt className="text-5xl mb-2" />
          <p className="text-lg font-bold">Taking Initiative</p>
        </div>
        <div className="flex flex-col items-center mx-6 my-4">
          <FaClipboardCheck className="text-5xl mb-2" />
          <p className="text-lg font-bold">Honesty</p>
        </div>
        <div className="flex flex-col items-center mx-6 my-4">
          <FaHeart className="text-5xl mb-2" />
          <p className="text-lg font-bold">Dedication</p>
        </div>
        <div className="flex flex-col items-center mx-6 my-4">
          <FaBalanceScale className="text-5xl mb-2" />
          <p className="text-lg font-bold">Integrity</p>
        </div>
        <div className="flex flex-col items-center mx-6 my-4">
          <FaBookReader className="text-5xl mb-2" />
          <p className="text-lg font-bold">Continuous Learning</p>
        </div>
        <div className="flex flex-col items-center mx-6 my-4">
          <FaRegPauseCircle className="text-5xl mb-2" />
          <p className="text-lg font-bold">Self-control</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
