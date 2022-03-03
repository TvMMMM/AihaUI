import React from "react";
import avt from "../img/avatar.png";
import "../css/Main.css";

export default function Team(){
    return(
        <section className="text-gray-600 body-font">
            <div className="container mx-auto px-2 py-10 sm:px-6 lg:px-6 ">
                <div class="flex flex-col text-center w-full mb-12">
                        <h1 class="sm:text-3xl text-3xl font-medium title-font mb-4 text-white">Team</h1>
                </div>
                <div className="flex flex-wrap justify-center mx-auto py-4 gap-3">
                    <div className="p-4 lg:w-56 md:w-1/3 ">
                        <div className="h-full flex flex-col items-center text-center">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-40 h-auto object-cover object-center mb-5" src={avt} />
                        <div className="w-52 bg-color p-4 rounded-lg">
                            <h2 className="leading-relaxed font-thin text-slate-400 mb-1">Daniel Paul</h2>
                            <h3 className="title-font font-medium text-lg text-white">CEO</h3>
                        </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-56 md:w-1/3">
                        <div className="h-full flex flex-col items-center text-center">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-40 h-auto object-cover object-center mb-5" src={avt} />
                        <div className="w-52 bg-color p-4 rounded-lg">
                            <h2 className="leading-relaxed font-thin text-slate-400 mb-1">Lorenz Arjay</h2>
                            <h3 className="title-font font-medium text-lg text-white">Software Developer</h3>
                        </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-56 md:w-1/3">
                        <div className="h-full flex flex-col items-center text-center">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-40 h-auto object-cover object-center mb-5" src={avt} />
                        <div className="w-52 bg-color p-4 rounded-lg">
                            <h2 className="leading-relaxed font-thin text-slate-400 mb-1">Alex Kurokhin</h2>
                            <h3 className="title-font font-medium text-lg text-white">Software Developer</h3>
                        </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-56 md:w-1/3">
                        <div className="h-full flex flex-col items-center text-center">
                        <img alt="team" className="flex-shrink-0 rounded-lg w-40 h-auto object-cover object-center mb-5" src={avt} />
                        <div className="w-52 bg-color p-4 rounded-lg">
                            <h2 className="leading-relaxed font-thin text-slate-400 mb-1">Vincent Le Bartz</h2>
                            <h3 className="title-font font-medium text-lg text-white">Project Manager</h3>
                        </div>
                        </div>
                    </div>
                </div>
            </div>    
    </section>

    )
}