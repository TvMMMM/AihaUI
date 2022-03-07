import React from "react";
import logo from "../img/logo.png";
import facebook from "../img/fb.png";
import linkedin from "../img/ins.png";
import twitter from "../img/twit.png";
import reddit from "../img/red.png";
import telegram from "../img/tele.png";

export default function Footer() {
  return (
    <footer className="text-white body-font">
      <div className="container px-1 sm:px-1 lg:px-1 py-12 mx-auto flex lg:justify-center md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex flex-wrap justify-content-evenly lg:px-4 md:px-2 -mb-3 md:mt-0 mt-10 md:text-center sm:text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-5 mb-3">
            <div className="flex lg:justify-start justify-center w-full mb-3">
              <img
                className="block lg:hidden h-20 w-auto"
                src={logo}
                alt="Aiha"
              />
              <img
                className="hidden lg:block h-20 w-auto"
                src={logo}
                alt="Aiha"
              />
            </div>
            <p className="leading-relaxed text-lg font-light text-white text-left mb-3">
              AIHA TECH is a pioneer in applying AI technologies in the fields
              of technology, finance, education, game... AIHA is the latest
              generation automatic trading robot in the world owned by AIHA Tech
              Corporation in the US.
            </p>
          </div>
          <div className="lg:w-1/3 grid items-center content-center grid-cols-2 gap-2 mx-auto">
            <div>
              <a
                href="/"
                className="flex float-left items-center md:justify-start "
              >
                <img className="h-10 w-auto" src={facebook} alt="facebook" />
                <span className="ml-4 mb-18 font-thin text-white">
                  Facebook
                </span>
              </a>
            </div>
            <div>
              <a
                href="/"
                className="flex float-right items-center md:justify-end justify-center"
              >
                <p className="font-thin text-white text-right">About us</p>
              </a>
            </div>
            <div className="col-start-1">
              <a
                href="/"
                className="flex float-left items-center md:justify-start justify-center"
              >
                <img className="h-10 w-auto" src={twitter} alt="twitter" />
                <span className="ml-4 mb-18 font-thin text-white">Twitter</span>
              </a>
            </div>
            <div>
              <a
                href="/"
                className="flex float-right items-center md:justify-end justify-center"
              >
                <p className="font-thin text-white">Advantage</p>
              </a>
            </div>
            <div className="col-start-1">
              <a
                href="/"
                className="flex float-left items-center md:justify-start justify-center"
              >
                <img className="h-10 w-auto" src={telegram} alt="telegram" />
                <span className="ml-4 mb-18 font-thin text-white">
                  Telegram
                </span>
              </a>
            </div>
            <div>
              <a
                href="/"
                className="flex   float-right items-center md:justify-end justify-center"
              >
                <p className="font-thin text-white">Pricing</p>
              </a>
            </div>
            <div className="col-start-1">
              <a
                href="/"
                className="flex  float-left items-center md:justify-start justify-center"
              >
                <img className="h-10 w-auto" src={linkedin} alt="linkedin" />
                <span className="ml-4 mb-18 font-thin text-white">
                  LinkedIn
                </span>
              </a>
            </div>
            <div>
              <a
                href="/"
                className="flex float-right items-center md:justify-end justify-center"
              >
                <p className="font-thin text-white">Team</p>
              </a>
            </div>
            <div className="col-start-1">
              <a
                href="/"
                className="flex float-left items-center md:justify-start justify-center"
              >
                <img className="h-10 w-auto" src={reddit} alt="reddit" />
                <span className="ml-4 mb-18 font-thin text-white">Reddit</span>
              </a>
            </div>
            <div>
              <a
                href="/"
                className="flex float-right items-center md:justify-end justify-center"
              >
                <p className="font-thin text-white">Contact</p>
              </a>
            </div>
          </div>
          <div className="lg:w-1/3 mx-auto md:w-1/2 w-full px-2 flex flex-wrap justify-center py-4 gap-3">
            <h2 className="title-font font-bold text-white tracking-widest text-xl mb-2">
              KNOWLEDGE BLOG
            </h2>
            <div className="grid grid-cols-1 gap-4 justify-center p-2">
              <div className="bg-color p-4 rounded-lg">
                <h2 className="text-lg text-white font-medium title-font mb-1">
                  WHAT IS TRADING BOT ?
                </h2>
              </div>
              <div className="bg-color p-4 rounded-lg">
                <h2 className="text-lg text-white font-medium title-font mb-1">
                  THE ADVANTAGES OF TRADING BOT{" "}
                </h2>
              </div>
              <div className="bg-color p-4  rounded-lg">
                <h2 className="text-lg text-white font-medium title-font mb-1">
                  "TIPS" TO USE TRADING BOT EFFECTIVELY
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
