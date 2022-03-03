import React from "react";
import video from "../img/video.png"
import "../css/Header.css";

export default function Banner() {
    return (
            <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                <div className="items-center justify-between">
                    <section className="text-gray-400 body-font">
                    <div className="flex flex-wrap justify-center items-center px-2 pt-10 mx-auto">
                        <div className="md:w-auto md:pr-3 md:py-2 mb-10 pb-10 ">
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
                        <div className="md:w-auto">
                            <img
                                className="p-0 w-auto"
                                style={{height:"450px"}}
                                src={video}
                                alt="Banner"
                            />
                        </div>
                    </div>
                    <div className='flex flex-wrap mx-auto justify-center py-4 gap-3'>
                        <div className="bg-color p-6 rounded-lg">
                            <h2 className="text-lg text-white font-medium title-font mb-2">Emotion-Based Trading</h2>
                        </div>
                        <div className="bg-color p-6 rounded-lg">
                            <h2 className="text-lg text-white font-medium title-font mb-2">Emotion-Based Trading</h2>
                        </div>
                        <div className="bg-color p-6 rounded-lg">
                            <h2 className="text-lg text-white font-medium title-font mb-2">World Economy In Crisis</h2>
                        </div>
                    </div>
                    </section>
                </div>
            </div>

    )
}