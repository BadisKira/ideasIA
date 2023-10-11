const Cards = () => {
    return (
        <div className="
      w-full
      flex flex-col gap-2 
      md:flex-row items-center justify-center
      bg-slate-800
      text-white gap-5 py-5
      "
        >
            <div className="bg-slate-400 rounded-xl p-3 w-64">
                <div className="rounded-t-xl bg-slate-800 flex flex-col items-center p-5">
                    <div className="text-lg py-5">BASIC</div>
                    <div className="flex mt-5 mb-10 flex-col items-center space-y-5">
                        <p className="text-5xl">100GB</p>
                        <p className="">$1.99/month</p>
                        <button className="px-10 py-3 hover:bg-violet-800 duration-200 rounded-md border border-violet-800"
                        >
                            Purchase
                        </button>
                    </div>

                </div>
                <div className="border-t border-slate-400 "></div>
                <div className="rounded-b-xl bg-slate-800 flex flex-col items-center justify-center p-5 space-y-2">
                    <div className="flex items-center justify-center ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>

                        <span className="text-sm">100 GB of storage</span>

                    </div>
                    <div className="flex items-center justify-center ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>

                        <span className="text-sm" > Option to add memebers</span>

                    </div>
                    <div className="flex items-center justify-center ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>

                        <span className="text-sm">Extra member benefits</span>

                    </div>
                </div>
            </div>
       </div>
    )
}; 
export default Cards;;