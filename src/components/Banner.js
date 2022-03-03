import React from "react";
import video from "../img/img-ytb.png"
import "../css/Header.css";

export default function Banner() {
    return (
            <div className="container mx-auto px-2 py-10 sm:px-6 lg:px-8">
                    <section className="text-gray-400 body-font">
                    <div className="flex flex-wrap justify-center items-center px-1 py-10 ">
                        <div className="lg:w-1/2 md:w-auto md:pr-3 md:py-2 mb-3 ">
                        <p className="leading-relaxed text-left ">AIHA - The Perfect Choice</p>
                        <h1 className="sm:text-2xl text-xl font-medium title-font mb-2 text-white text-left">THE BEST AUTOMATED TRADING ROBOT IN THE WORLD</h1>
                        <div className="flex space-x-5 text-white ">
                            <button className="signup-btn hover:shadow-lg font-bold">
                            Sign up
                            </button>
                            <button className="signin-btn hover:shadow-lg font-bold">
                            Sign in
                            </button>
                        </div>
                        </div>
                        <div className="lg:w-1/2 md:w-auto">
                            <img
                                className=" w-fit"
                                style={{height:"400px"}}
                                src={video}
                                alt="Banner"
                            />
                        </div>
                    </div>
                    <div className='flex flex-wrap mx-auto text-center lg:justify-center md:justify-center sm:justify-center xs:justify-center m-4 py-2 gap-3'>
                        <div className="bg-color p-5 rounded-lg">
                            <h2 className="md:w-44 sm:w-44 xs:w-52 text-lg text-white font-medium title-font mb-2">Emotion-Based Trading</h2>
                        </div>
                        <div className=" bg-color p-5 rounded-lg">
                            <h2 className="md:w-44 sm:w-44 xs:w-52 text-lg text-white font-medium title-font mb-2">Emotion-Based Trading</h2>
                        </div>
                        <div className="bg-color p-5 rounded-lg">
                            <h2 className="md:w-44 sm:w-44 xs:w-52  text-lg text-white font-medium title-font mb-2">World Economy In Crisis</h2>
                        </div>
                    </div>
                    </section>
                </div>
    )
}