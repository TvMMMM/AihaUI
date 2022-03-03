import React from "react";

export default function Advantage(){
    return (
        <div className="container-fluid mx-auto px-5 py-24 sm:px-6 lg:px-8">
            <div class="flex flex-col text-center w-full mb-12">
                <h1 class="sm:text-3xl text-3xl font-medium title-font mb-4 text-white">Advantages</h1>
            </div>
            <div className="mx-auto flex flex-wrap justify-center gap-3">
                <div className="bg-color w-96 mx-1 p-3 rounded-lg">
                    <h2 className="text-lg text-white font-medium title-font mb-2">Various Support Instruments</h2>
                    <p className="leading-relaxed font-thin text-slate-400">Use advanced technical indicators including RSI, EMA, Bollinger Band, Stoch, StochRSI, Ichimoku, ADX, MFI, ... </p>
                </div>
                <div className="bg-color w-96 mx-3 p-3 rounded-lg">
                    <h2 className="text-lg text-white font-medium title-font mb-2">Various Trading Strategies</h2>
                    <p className="leading-relaxed font-thin text-slate-400 ">Provide a variety of strategies to support traders such as Trailing Stop, DCA, Reversal Trading... </p>
                </div>
                <div className="bg-color w-96 mx-3 p-3 rounded-lg">
                    <h2 className="text-lg text-white font-medium title-font mb-2">Absolute safety</h2>
                    <p className="leading-relaxed font-thin text-slate-400 ">Commitment to not cause any problems with the account as well as the trader's information. </p>
                </div>            
                <div className="bg-color w-96 mx-3 p-3 rounded-lg">
                    <h2 className="text-lg text-white font-medium title-font mb-2">Continuous Automated Trading</h2>
                    <p className="leading-relaxed font-thin text-slate-400">Save time and improve your ability to trade profitably as the software will analyze and trade continuously. </p>
                </div>
                <div className="bg-color w-96 mx-3 p-3 rounded-lg">
                    <h2 className="text-lg text-white font-medium title-font mb-2">Easy Using Interface</h2>
                    <p className="leading-relaxed font-thin text-slate-400">The interface is suitable for both professional traders and newbies. </p>
                </div>
            </div>
            
        </div>
        
    )
}