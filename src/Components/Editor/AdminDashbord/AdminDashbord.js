import React from "react";
const AdminDashbord = () => {
    return (
        <div className="flex flex-col ml-8 mr-5 mt-5 overflow-auto scrollbar-hide" style={{height:'700px'}}>
            <div>
                <span className="text-3xl font-medium text-slate-500">Welcome, Rakesh Shaw</span>
            </div>
            <div className="mt-1">
                <span className="text-xl font-base text-slate-500">Editor</span>
            </div>
            <div className="container w-full rounded-md bg-white mt-5 shadow-2xl">
                <div className="flex justify-between ml-4 mr-10 mt-1">
                    <h3 className="font-bold text-xl text-slate-800">Direct Repotees Timesheet</h3>
                    <div className='relative inline-flex px-0 py-0 border-solid border-2 border-gray-400'>
                        <select className="outline-none hover:bg-gray-200 py-0.5">
                            <option>2023</option>
                            <option>2022</option>
                        </select>
                    </div>
                </div>
                <div className="w-11/12 h-0.5 bg-slate-200 rounded-full ml-5 mt-2"></div>
                <div className="flex justify-evenly ml-3 mb-4">
                    <div className="flex flex-col justify-center items-center ">
                        <div className="container flex flex-col justify-center items-center gap-3 h-28 w-28 mt-6 mb-3 rounded-full border-solid border-2 border-gray-400">
                            <span className="font-bold">0</span>
                            <span className="font-semibold text-xs text-gray-500">Not Start</span>
                        </div>
                        <span className="font-normal text-xs">Last drafted on</span>
                    </div>
                    <div className="flex flex-col justify-center items-center ">
                        <div className="container flex flex-col justify-center items-center gap-3 h-28 w-28 mt-6 mb-3 rounded-full border-solid border-2 border-gray-400">
                            <span className="font-bold">0</span>
                            <span className="font-semibold text-xs text-orange-400">Drafts</span>
                        </div>
                        <span className="font-normal text-xs">Last drafted on</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="container flex flex-col justify-center items-center gap-3 h-28 w-28 mt-6 mb-3 rounded-full border-solid border-2 border-gray-400">
                            <span className="font-bold">0</span>
                            <span className="font-semibold text-xs text-blue-600 ">Submited</span>
                        </div>
                        <span className="font-normal text-xs">Last submited on</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="container flex flex-col justify-center items-center gap-1  h-28 w-28 mt-10 mb-3 rounded-full border-solid border-2 border-gray-400">
                            <span className="font-bold">0</span>
                            <div className="flex flex-col justify-center items-center">
                                <span className="font-semibold text-xs text-sky-400">Partially</span>
                                <span className="font-semibold text-xs text-sky-400">submitted</span>
                            </div>
                        </div>
                        <span className="font-normal text-xs ">Last partially submited</span>
                        <span className="font-normal text-xs">on</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="container flex flex-col justify-center items-center gap-3 h-28 w-28 mt-6 mb-3 rounded-full border-solid border-2 border-gray-400">
                            <span className="font-bold">0</span>
                            <span className="font-semibold text-xs text-emerald-600">Approved</span>
                        </div>
                        <span className="font-normal text-xs">Last drafted on</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="container flex flex-col justify-center items-center gap-1 h-28 w-28 mt-10 mb-3 rounded-full border-solid border-2 border-gray-400">
                            <span className="font-bold">0</span>
                            <div className="flex flex-col justify-center items-center">
                                <span className="font-semibold text-xs text-green-500">Partially</span>
                                <span className="font-semibold text-xs text-green-500">Approved</span>
                            </div>
                        </div>
                        <span className="font-normal text-xs">Last partially approved</span>
                        <span className="font-normal text-xs">on</span>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="container flex flex-col justify-center items-center gap-3 h-28 w-28 mt-6 mb-3 rounded-full border-solid border-2 border-gray-400">
                            <span className="font-bold">0</span>
                            <span className="font-semibold text-xs text-red-600">Rejected</span>
                        </div>
                        <span className="font-normal text-xs">Last rejected on</span>
                    </div>
                </div>
            </div>
            <div className="flex w-full">
                <div className="container w-1/3 h-80 rounded-md bg-white mt-4 shadow-2xl">
                    <h3 className="font-bold text-xl text-slate-800 mb-1 mt-1 px-6">All Repotees</h3>
                    <div className="w-11/12 h-0.5 bg-slate-200 rounded-full ml-4"></div>
                </div>
                <div className="container w-full h-80 rounded-md bg-white mt-4 ml-6 shadow-2xl">
                    <div className="flex justify-between ml-4 mr-10 mt-1">
                        <h3 className="font-bold text-xl text-slate-800">Claimed Task</h3>
                        <div className='relative inline-flex px-0 py-0 border-solid border-2 border-gray-400'>
                            <select className="outline-none hover:bg-gray-200 py-0.5">
                                <option>2023</option>
                                <option>2022</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-11/12 h-0.5 bg-slate-200 rounded-full ml-5 mt-2"></div>
                    <div className="flex justify-evenly ml-3 mb-4">
                        <div className="flex flex-col justify-center items-center ">
                            <div className="container h-20 w-20 mt-6 rounded-full bg-slate-200"></div>
                            <span className="font-normal text-xs">Last drafted on</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="container h-20 w-20 mt-6 rounded-full bg-slate-200"></div>
                            <span className="font-normal text-xs">Last submited on</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="container h-20 w-20 mt-10 rounded-full bg-slate-200"></div>
                            <span className="font-normal text-xs">Last partially submited</span>
                            <span className="font-normal text-xs">on</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="container h-20 w-20 mt-6 rounded-full bg-slate-200"></div>
                            <span className="font-normal text-xs">Last drafted on</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="container h-20 w-20 mt-10 rounded-full bg-slate-200"></div>
                            <span className="font-normal text-xs">Last partially approved</span>
                            <span className="font-normal text-xs">on</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="container h-20 w-20 mt-6 rounded-full bg-slate-200"></div>
                            <span className="font-normal text-xs">Last rejected on</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full">
                <div className="container w-1/3 h-80 rounded-md bg-white mt-4 shadow-2xl">
                    <h3 className="font-bold text-xl text-slate-800 mb-1 mt-1 px-6">All Clients</h3>
                    <div className="w-11/12 h-0.5 bg-slate-200 rounded-full ml-4"></div>
                </div>
                <div className="container w-full h-80 rounded-md bg-white mt-4 ml-6 shadow-2xl">
                    <div className="flex justify-between ml-4 mr-10 mt-1">
                        <h3 className="font-bold text-xl text-slate-800">Request</h3>
                        <div className='relative inline-flex px-0 py-0 border-solid border-2 border-gray-400'>
                            <select className="outline-none hover:bg-gray-200 py-0.5">
                                <option>2023</option>
                                <option>2022</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-11/12 h-0.5 bg-slate-200 rounded-full ml-5 mt-2"></div>
                    <div className="flex justify-evenly ml-3 mb-4">
                        <div className="flex flex-col justify-center items-center ">
                            <div className="container h-20 w-20 mt-6 rounded-full bg-slate-200"></div>
                            <span className="font-normal text-xs">Last drafted on</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="container h-20 w-20 mt-6 rounded-full bg-slate-200"></div>
                            <span className="font-normal text-xs">Last submited on</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="container h-20 w-20 mt-10 rounded-full bg-slate-200"></div>
                            <span className="font-normal text-xs">Last partially submited</span>
                            <span className="font-normal text-xs">on</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="container h-20 w-20 mt-6 rounded-full bg-slate-200"></div>
                            <span className="font-normal text-xs">Last drafted on</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="container h-20 w-20 mt-10 rounded-full bg-slate-200"></div>
                            <span className="font-normal text-xs">Last partially approved</span>
                            <span className="font-normal text-xs">on</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="container h-20 w-20 mt-6 rounded-full bg-slate-200"></div>
                            <span className="font-normal text-xs">Last rejected on</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AdminDashbord;