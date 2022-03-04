import React from "react";

export default function Advantage() {
  return (
    <div className="container mx-auto px-2 py-12 sm:px-2 lg:px-6">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-2xl text-3xl font-medium title-font mb-4 text-white">
          Advantages
        </h1>
      </div>
      <div className="flex flex-wrap tracking-tighter justify-center gap-5">
        <div className="bg-color lg:w-1/4 lg:h-56 md:w-1/3 md:h-60 sm:w-60 sm:h-60  mx-1 p-4 rounded-lg">
          <h2 className="my-2 text-lg text-white font-medium title-font mb-2">
            Various Support Instruments
          </h2>
          <p className="leading-relaxed text-lg font-light text-slate-400">
            Use advanced technical indicators including RSI, EMA, Bollinger
            Band, Stoch, StochRSI, Ichimoku, ADX, MFI,...{" "}
          </p>
        </div>
        <div className="bg-color lg:w-1/4 lg:h-56 md:w-1/3 md:h-60 sm:w-60 sm:h-60 mx-1 p-4 rounded-lg">
          <h2 className="my-2 text-lg text-white font-medium title-font mb-2">
            Various Trading Strategies
          </h2>
          <p className="leading-relaxed text-lg font-light text-slate-400 ">
            Provide a variety of strategies to support traders such as Trailing
            Stop, DCA, Reversal Trading...{" "}
          </p>
        </div>
        <div className="bg-color lg:w-1/4 lg:h-56 md:w-1/3 md:h-60 sm:w-60 sm:h-60 mx-1 p-4 rounded-lg">
          <h2 className="my-2 text-lg text-white font-medium title-font mb-2">
            Absolute safety
          </h2>
          <p className="leading-relaxed text-lg font-light text-slate-400 ">
            Commitment to not cause any problems with the account as well as the
            trader's information.{" "}
          </p>
        </div>
        <div className="bg-color lg:w-1/4 lg:h-56 md:w-1/3 md:h-60 sm:w-60 sm:h-60 mx-1 p-4 rounded-lg">
          <h2 className="my-2 text-lg text-white font-medium title-font mb-2">
            Continuous Automated Trading
          </h2>
          <p className="leading-relaxed text-lg font-light text-slate-400">
            Save time and improve your ability to trade profitably as the
            software will analyze and trade continuously.{" "}
          </p>
        </div>
        <div className="bg-color lg:w-1/4 lg:h-56 md:w-1/3 md:h-60 sm:w-60 sm:h-60 mx-1 p-4 rounded-lg">
          <h2 className="my-2 text-lg text-white font-medium title-font mb-2">
            Easy Using Interface
          </h2>
          <p className="leading-relaxed text-lg font-light text-slate-400">
            The interface is suitable for both professional traders and newbies.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
