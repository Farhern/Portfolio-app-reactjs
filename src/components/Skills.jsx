import React from 'react';
import Javascript  from "../assets/javascript.png";
import HTML from "../assets/html.png";
import Tailwind from '../assets/tailwind.png';
import GitHub from '../assets/github.png';
import ReactImg from '../assets/react.png';
import CSS from '../assets/css.png';

function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/*container*/}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className="text-4xl font-bold inline border-b-4 border-pink-600">Skills</p>
                <p className="py-4">// These are the technologies i've worked with.</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                    <p className="my-4">HTML</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
                    <p className="my-4">CSS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Javascript} alt="Javascript icon" />
                    <p className="my-4">JavaScript</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
                    <p className="my-4">GitHub</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
                    <p className="my-4">Tailwind</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={ReactImg} alt="ReactImg icon" />
                    <p className="my-4">ReactJs</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
