import React from "react";
import "../css/Main.css";
import logo from "../img/logo.png";

export default function Advice() {
  return (
    <div className="container mx-auto px-2 py-24 sm:px-2 lg:px-6">
      <div class="flex justify-center w-full mb-12">
        <img className="block lg:hidden h-auto w-auto" src={logo} alt="Aiha" />
        <img className="hidden lg:block h-auto w-auto" src={logo} alt="Aiha" />
      </div>
      <div className="w-4/5 border border-gray-500 bg-sky-800/50 py-10 px-5  mx-auto flex flex-wrap items-center rounded-xl mb-11">
        <div className="p-2 rounded-lg">
          <p className="leading-relaxed lg:text-xl md:text-lg font-extralight text-white mb-3">
            AIHA is a non-custodial trading platform or monitored by any third
            party. We developed this platform with the desire to provide
            automated trading solutions that are safe, efficient and minimize
            risk for traders thanks to advanced Blockchain technologies.
          </p>
        </div>
      </div>
      <div className="w-4/5 border border-gray-500 bg-sky-800/50 py-10 px-5   mx-auto flex flex-wrap items-center rounded-xl">
        <div className="p-2 rounded-lg">
          <h2 className="lg:text-2xl md:text-xl text-white font-bold mb-2">
            Advice
          </h2>
          <p className="leading-relaxed lg:text-xl md:text-lg font-extralight text-white mb-1">
            AIHA is an automated trading support tool, it helps traders make
            buying or selling decisions based on analysis and signals from the
            market and not based on emotions at all. Besides, this tool will
            support effective transaction negotiation and secure transaction.
          </p>
          <p className="leading-relaxed lg:text-xl md:text-lg font-extralight text-white mb-3">
            The advice is to become a smart trader, using AIHA robot as an
            investment management tool with the same level of efficiency as
            financial experts with the formula "Health, Intelligence and
            Discipline“
          </p>
          <h1 className="lg:text-2xl md:text-xl font-extrabold text-red-500">
            INDEPENDENT COMES FROM AIHA - FINANCIAL FREEDOM
          </h1>
        </div>
      </div>
    </div>
  );
}
