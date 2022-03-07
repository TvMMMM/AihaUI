import React from "react";
import "../css/Main.css";
import card from "../img/img-blog.png";

export default function Knowledge() {
  return (
    <div className="container mx-auto px-2 py-12 sm:px-2 md:px-1 lg:px-6">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-3xl font-medium title-font mb-4 text-white">
          Knowledge Blog
        </h1>
      </div>
      <div className=" mx-auto flex flex-wrap justify-center -m-4">
        <div className="lg:w-1/3 p-4 md:w-1/2 ">
          <div className="h-full bg-color bg-sky-800/50 border-opacity-60 rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={card}
              alt="blog"
            />
            <div className="p-6 text-left">
              <h1 className="title-font text-lg font-bold text-white mb-3">
                WHAT IS TRADING BOT?
              </h1>
              <p className="leading-relaxed font-thin text-slate-400 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae fermentum congue enim dolor sed dictum quam…{" "}
              </p>
              <div className="flex items-center flex-wrap ">
                <button className="pri-btn text-white mt-2 font-light focus:outline-none hover:shadow-lg text-lg">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 p-4 md:w-1/2 ">
          <div className="h-full bg-color bg-sky-800/50 border-opacity-60 rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={card}
              alt="blog"
            />
            <div className="p-6 text-left">
              <h1 className="title-font text-lg font-bold text-white mb-3">
                WHAT IS TRADING BOT?
              </h1>
              <p className="leading-relaxed font-thin text-slate-400 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae fermentum congue enim dolor sed dictum quam…{" "}
              </p>
              <div className="flex items-center flex-wrap ">
                <button className="pri-btn text-white mt-2 font-light focus:outline-none hover:shadow-lg text-lg">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 p-4 md:w-1/2 ">
          <div className="h-full bg-color bg-sky-800/50 border-opacity-60 rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={card}
              alt="blog"
            />
            <div className="p-6 text-left">
              <h1 className="title-font text-lg font-bold text-white mb-3">
                WHAT IS TRADING BOT?
              </h1>
              <p className="leading-relaxed font-thin text-slate-400 mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                vitae fermentum congue enim dolor sed dictum quam…{" "}
              </p>
              <div className="flex items-center flex-wrap ">
                <button className="pri-btn text-white mt-2 font-light focus:outline-none hover:shadow-lg text-lg">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
