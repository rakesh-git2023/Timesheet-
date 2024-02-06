import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { IoEyeSharp } from "react-icons/io5";
const MyDashbord = () => {
    const nav=useNavigate();
    return (

        <div className="flex">
            <div className="flex flex-col w-1/3">
                <div className="container w-10/12 rounded-md bg-white flex flex-col ml-12 mt-5 shadow-2xl">
                    <div className=" flex flex-col justify-center items-center py-2">
                        <div className="container h-20 w-20 mt-6 rounded-full border-solid border-2 border-black"></div>
                        <h3 className="font-bold text-xl text-slate-800 mb-1 mt-1 ">Rakesh Shaw</h3>
                        <div className="w-3/4 h-0.5 bg-slate-200 rounded-full"></div>
                    </div>
                    <div className="bg-slate-100 py-4 ml-4 mr-4 rounded-md shadow-xl">
                        <div className="flex flex-row justify-between mb-1">
                            <span className="font-normal text-1xl px-8">Status</span>
                            {/* <span className="px-8" onClick={()=>nav('/editEmployee')}>E</span> */}
                            {/* <CiEdit className="mr-10 text-2xl font-medium cursor-pointer rounded-full border-solid border-2 bg-amber-400" /> */}
                        </div>
                        <div className="flex flex-row justify-between mb-1">
                            <span className="font-medium text-1xl px-8">Active</span>
                            <span className="px-8">.</span>
                        </div>
                        <div className="flex flex-row justify-between mb-1">
                            <span className="font-normal text-1xl px-8">Lead</span>
                            {/* <span className="px-8">Ey</span> */}
                            <IoEyeSharp className="mr-10 text-2xl fill-slate-400" />
                        </div>
                        <div className="flex flex-row justify-between">
                            <span className="font-medium text-1xl px-8">Rohit Singh</span>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2 py-4">
                        <span className="font-normal text-1xl px-10 mb-1">Gender</span>
                        <span className="font-medium text-1xl px-10 mb-1">Male</span>
                        <span className="font-normal text-1xl px-10 mb-1">Email</span>
                        <span className="font-medium text-1xl px-10 mb-1">rakesh@gmail.com</span>
                    </div>
                </div>
                <div className="container w-10/12 h-60 rounded-md bg-white ml-12 mt-4 shadow-2xl">
                    <h3 className="font-bold text-xl text-slate-800 mb-1 mt-1 px-6">Associated Clients</h3>
                    <div className="w-11/12 h-0.5 bg-slate-200 rounded-full ml-4"></div>
                </div>
            </div>
            <div className="flex flex-col w-2/3">
                <div className="container w-11/12 rounded-md bg-white mt-5 mr-12 ml-6 shadow-2xl">
                    <div className="flex justify-between ml-4 mr-10 mt-1">
                        <h3 className="font-bold text-xl text-slate-800">Timesheet Statistics</h3>
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
                            <div className="container flex flex-col justify-center items-center gap-3 h-20 w-20 mt-6 mb-3 rounded-full border-solid border-2 border-gray-400">
                                <span className="font-bold">0</span>
                                <span className="font-semibold text-xs text-orange-400">Drafts</span>
                            </div>
                            <span className="font-normal text-xs">Last drafted on</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="container flex flex-col justify-center items-center gap-3 h-20 w-20 mt-6 mb-3 rounded-full border-solid border-2 border-gray-400">
                                <span className="font-bold">0</span>
                                <span className="font-semibold text-xs text-blue-600 ">Submited</span>
                            </div>
                            <span className="font-normal text-xs">Last submited on</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="container flex flex-col justify-center items-center  h-20 w-20 mt-10 mb-3 rounded-full border-solid border-2 border-gray-400">
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
                            <div className="container flex flex-col justify-center items-center gap-3 h-20 w-20 mt-6 mb-3 rounded-full border-solid border-2 border-gray-400">
                                <span className="font-bold">0</span>
                                <span className="font-semibold text-xs text-emerald-600">Approved</span>
                            </div>
                            <span className="font-normal text-xs">Last drafted on</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="container flex flex-col justify-center items-center  h-20 w-20 mt-10 mb-3 rounded-full border-solid border-2 border-gray-400">
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
                            <div className="container flex flex-col justify-center items-center gap-3 h-20 w-20 mt-6 mb-3 rounded-full border-solid border-2 border-gray-400">
                                <span className="font-bold">0</span>
                                <span className="font-semibold text-xs text-red-600">Rejected</span>
                            </div>
                            <span className="font-normal text-xs">Last rejected on</span>
                        </div>
                    </div>
                </div>
                <div className="container w-11/12 rounded-md bg-white mt-4 mr-12 ml-6 shadow-2xl">
                    <div className="flex justify-between ml-4 mr-10 mt-1">
                        <h3 className="font-bold text-xl text-slate-800">Allocated Task(All)</h3>
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
                <div className="container w-11/12 h-60 rounded-md bg-white mt-4 mr-12 ml-6 shadow-2xl">
                    <div className="flex justify-between ml-4 mr-10 mt-1">
                        <h3 className="font-bold text-xl text-slate-800">Weekly Timesheet</h3>
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
export default MyDashbord;

