import React from "react";
import "../css/Main.css";
import certificate from "../img/certificate.png"

export default function AboutUs(){
    return (
        <div className="container-fluid mx-auto px-5 py-24 sm:px-6 lg:px-8">
        <section className="text-white body-font overflow-hidden">
                <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-3xl font-medium title-font mb-4 text-white">About Us</h1>
                </div>
                <div className="lg:w-4/5 border border-gray-500 bg-sky-800/50 py-10 px-5  mx-auto flex flex-wrap items-center rounded-xl">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap md:justify-between sm:justify-center">
                    <img alt="certificate" className="lg:w-64 md:w-56 sm:w-40 lg:h-auto object-cover object-center rounded mb-3" src={certificate} />
                    <div className=" md:w-1/2 grid items-center grid-cols-2 gap-2 text-left mx-auto">
                        <div>
                            <p className="leading-relaxed font-medium">Company Name:</p>
                        </div>
                        <div>
                            <p className="leading-relaxed font-thin">International AIHA Tech Pty.Ltd </p>
                        </div>
                        <div className="col-start-1">
                            <p className="leading-relaxed font-medium">Company Name:</p>
                        </div>
                        <div className="">
                            <p className="leading-relaxed font-thin">2018</p>
                        </div>
                        <div className="col-start-1">
                            <p className="leading-relaxed font-medium">Address:</p>
                        </div>
                        <div className="">
                            <p className="leading-relaxed font-thin">No. 132, Lane 12, Phan Van Truong Street,Vong Hau Ward - Cau Giay District - Hanoi. </p>
                        </div>
                        <div className="col-start-1">
                            <p className="leading-relaxed font-medium">Code:</p>
                        </div>
                        <div className="">
                            <p className="leading-relaxed font-thin">0104097123</p>
                        </div>

                    </div>
                    </div>
                </div>
        </section>
        </div>
    )
}