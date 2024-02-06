import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import viewer from './images/Viewer.png';
const Role = () => {
    const nav = useNavigate();
    const handelEditor = () => {
        nav('/editor/adminDashbord')
    }
    const handelViewer = () => {
        nav('/viewer')
    }
    const handelRepotingLead = () => {
        nav('/repotingLead/teamDashbord')
    }
    return (
        <div className="flex flex-col justify-center items-center bg-gradient-to-t from-indigo-900 via-indigo-600  to-indigo-500 ..." style={{height:'670px'}}>
            <div className="">
                <div className="ml-12 py-6">
                    <h3 className="text-4xl font-medium text-white">Select Your role</h3>
                    <div className="w-24 h-2 bg-yellow-500 rounded-md mt-3"></div>
                </div>
                <div className="flex justify-around gap-5 w-full mt-10 h-30">
                    <div className="flex flex-col justify-center items-center bg-white border-solid border-8 border-white hover:border-solid hover:border-8 hover:border-yellow-500 rounded-lg cursor-pointer" onClick={handelEditor}>
                        <img src={viewer} alt="viewer" className="rounded-lg" style={{ width: '200px', height: '170px' }} />
                        <h3 className="font-medium text-xl mb-2 text-indigo-900">Editor</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white border-solid border-8 border-white hover:border-solid hover:border-8 hover:border-yellow-500 rounded-lg cursor-pointer" onClick={handelViewer}>
                        <img src={viewer} alt="viewer" className="rounded-lg" style={{ width: '200px', height: '170px' }} />
                        <h3 className="font-medium text-xl text-indigo-900 mb-2">Viewer</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white border-solid border-8 border-white hover:border-solid hover:border-8 hover:border-yellow-500 rounded-lg cursor-pointer" onClick={handelRepotingLead}>
                        <img src={viewer} alt="viewer" className="rounded-lg" style={{ width: '200px', height: '170px' }} />
                        <h3 className="font-medium text-xl text-indigo-900 mb-2">Repoting Lead</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Role;