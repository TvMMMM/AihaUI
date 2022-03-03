import React from "react";
import "../css/Main.css";

export default function ContactUs(){
    return (
        <div className="container mx-auto px-2 py-10 sm:px-2 lg:px-6">

            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-3xl font-medium title-font mb-4 text-white">Contact Us</h1>
            </div>
            <div className=" mx-auto flex flex-wrap justify-center -m-4">
                <div className="lg:w-4/5 sm:justify-center xs:justify-center border border-gray-500 bg-sky-800/50 py-10 px-2  mx-auto flex flex-wrap items-center rounded-xl">
                    <div className="lg:w-1/2 md:w-1/2 rounded p-6 flex flex-col md:ml-auto mt-10 sm:mb-3">
                        <div className="relative text-left mb-5">
                            <label htmlFor="full-name" className="leading-7 text-white">Full Name</label>
                            <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative text-left mb-5">
                            <label htmlFor="full-name" className="leading-7 text-white">Email</label>
                            <input type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative text-left mb-5">
                            <label htmlFor="email" className="leading-7 text-white">Question or Message</label>
                            <input type="email" id="email" name="email" className="w-full h-40 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className="pri-btn text-white mt-2 font-light focus:outline-none hover:shadow-lg text-lg">Send</button>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 md:pr-5 items-center">
                        <h2 className="title-font font-bold text-xl text-white">SUPPORT HAPPY TO HELP</h2>
                        <p className="leading-relaxed font-medium mt-4 text-white">If you have any questions, do not hesitate to send them to us.</p>
                        <p className="leading-relaxed font-light mt-4 text-white">The questions will be answered by our team in 24 hours.</p>
                    </div>
                </div>    
            </div>        
        </div>
        
    )
}