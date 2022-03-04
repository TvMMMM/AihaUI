import React from "react";
import "../css/Main.css";
import certificate from "../img/license.png";

export default function AboutUs() {
  return (
    <div className="container mx-auto px-2 py-10 sm:px-6 lg:px-6">
      <section className="text-white body-font overflow-hidden">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-3xl font-medium title-font mb-4 text-white">
            About Us
          </h1>
        </div>
        <div className="lg:w-4/5 border border-gray-500 bg-sky-800/50 py-10 px-5  mx-auto flex flex-wrap items-center rounded-2xl">
          <div className="mx-auto flex flex-wrap md:justify-between sm:justify-center xs:justify-center">
            <img
              alt="certificate"
              className="lg:w-72 lg:ml-5 md:w-64 sm:w-60 xs:w-60 lg:h-auto object-cover object-center rounded mb-4"
              src={certificate}
            />
            <div className=" md:w-1/2 grid items-center grid-cols-2 gap-2 px-5 text-left mx-auto">
              <div>
                <p className="leading-relaxed font-medium">Company Name:</p>
              </div>
              <div>
                <p className="leading-relaxed lg:text-base font-thin">
                  International AIHA Tech Pty.Ltd{" "}
                </p>
              </div>
              <div className="col-start-1">
                <p className="leading-relaxed font-medium">Established Time:</p>
              </div>
              <div className="">
                <p className="leading-relaxed lg:text-base font-thin">2018</p>
              </div>
              <div className="col-start-1">
                <p className="leading-relaxed font-medium">Address:</p>
              </div>
              <div className="">
                <p className="leading-relaxed lg:text-base font-thin">
                  No. 132, Lane 12, Phan Van Truong Street,Vong Hau Ward - Cau
                  Giay District - Hanoi.{" "}
                </p>
              </div>
              <div className="col-start-1">
                <p className="leading-relaxed font-medium">Code:</p>
              </div>
              <div className="">
                <p className="leading-relaxed lg:text-base font-thin">
                  0104097123
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
