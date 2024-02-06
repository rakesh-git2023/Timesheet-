import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from 'react-data-table-component';
import AddChargeCodeProjectDetails from "./AddChargeCodeProjectDetails";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Context from "../../../Context/Context";
import axios from "axios";
const API='https://timesheetapplication.onrender.com/client';
const api='https://timesheetapplication.onrender.com/chargeactivity';
const ProjectDetails = () => {
    const nav=useNavigate();
    const [apiData, setApiData]=useState([]);
    const {projectId,projectName,projectClientName,projectClientStatus,projectDescription,projectNote}=useContext(Context);
    const [showAddChargeCodePopUp, setShowAddChargeCodePopUp]=useState(false);
    useEffect(()=>{
        console.log(projectId.id);
        console.log(projectName.name);
        console.log(projectClientName.clientName);
        console.log(projectDescription.description);
        console.log(projectNote.note);
        console.log(projectClientStatus.status)
    },[])
    
    const columns = [
        {
            name: 'Charge Code',
            selector:row=>row.chargeActivityId,
            selector:row=>row.chargeCode,
            sortable: true
        },
        {
            name: 'Activity Type',
            selector:row=>row.activityType,
            sortable: true
        },
        {
            name: 'Task',
            selector:row=>row.task,
            sortable: true
        },
        {
            name: 'Description',
            selector:row=>row.descriptions,
            sortable: true
        },
        {
            name: 'Note',
            selector:row=>row.notes,
            sortable: true
        },
        {
            cell: (row) => (
                <div>
                  <RiDeleteBin6Line
                    style={{ marginLeft: 60, paddingLeft: 10 }}
                    className="cursor-pointer font-medium text-3xl"
                     onClick={() => handelDeletChargeActivity(row)}
                  />
                </div>
              ),
        }
    ]
    const customStyle = {
        headRow: {
            style: {
                backgroundColor: '#b0c4de',
                color: "black"
            }
        },
        headCell: {
            style: {
                fontSize: '16px',
                fontWeight: '600',
                TextTransform: 'uppercase'
            }
        },
        cells: {
            style: {
                fontSize: '15px',

            }
        }
    }
    const handalOnClose=()=>{
        setShowAddChargeCodePopUp(false);
        handelFetchChargeActivityData();
    }
    const handelDelete=()=>{
        if(apiData.length===0){
            if(window.confirm('Are you sure you want to delete')==true){
                axios
        .delete(`https://timesheetapplication.onrender.com/deleteProject/${projectId.id}`)
        .then(res=>{
            console.log(res)
            nav('/editor/project')
        })
        .catch(err=>console.log(err))
            }else{

            }
        }else{
            alert('This Charge Code is already assigned to an Employee')
        }
    }
    const handelFetchChargeActivityData=()=>{
        axios   
            .get(api)
            .then(res=>{
             const arr=res.data.data.filter((e,i)=>{
                  return e.project_Info.projectId===projectId.id;
                })
                setApiData(arr)
            })
            .catch(err=>alert(err.message))
    }
    useEffect(()=>{
        handelFetchChargeActivityData();
    },[])
    const handelDeletChargeActivity=(row)=>{
        if(window.confirm('Are you sure you want to delete')==true){
            axios
            .delete(`https://timesheetapplication.onrender.com/deleteChargeActivity/${row.chargeActivityId}`)
            .then(res=>{
               // alert('Data Deleted Successfuly')
                console.log(res)
                handelFetchChargeActivityData()
            })
            .catch(err=>console.log(err))
        }else{

        }
    }
    return (
        <div className="flex flex-col mt-8 px-12 py-4">
            <div className="flex space-x-40 mb-4">
                <span className="text-4xl font-medium text-slate-500">Project Details</span>
                <div className="flex gap-1 space-x-2 relative top-1">
                    <CiEdit className="text-2xl font-medium cursor-pointer mt-2 rounded-full border-solid border-2 bg-amber-400 " onClick={()=>nav('/editor/editProject')} />
                    <RiDeleteBin6Line className="cursor-pointer font-medium text-2xl mt-2" onClick={handelDelete}/>
                </div>
            </div>
            <div className="w-3/4 mb-8">
                <div className="grid grid-cols-2 gap-8">
                    <div className="py-6">
                        <h3 className="text-2xl font-medium mb-2">Project Name</h3>
                        <div className="flex w-90 flex-col gap-6">
                            <input className="outline-none border-5 border-gray-400 bg-gray-100 rounded px-4 py-2" readOnly={true} placeholder="Name" value={projectName.name} />
                        </div>
                    </div>
                    <div className="py-6">
                        <h3 className="text-2xl font-medium mb-2">Client</h3>
                        <div className="flex w-90 flex-col gap-1">
                            <input className="outline-none border-5 border-gray-400 bg-gray-100 rounded px-4 py-2" readOnly={true} placeholder="Status" value={projectClientName.clientName} />
                            {(projectClientStatus.status==='inactive' || projectClientStatus.status==='Inactive') && <span className="text-red-600">This client is Inactive</span>}
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-2xl font-medium mb-2">Note</h3>
                        <div className="flex w-90 flex-col gap-6">
                            <input className="outline-none border-5 border-gray-400 bg-gray-100 rounded px-4 py-2" readOnly={true} placeholder="Name" value={projectNote.note} />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-medium mb-2">Description</h3>
                        <div className="flex w-90 flex-col gap-6">
                            <input className="outline-none border-5 border-gray-400 bg-gray-100 rounded px-4 py-2" readOnly={true} placeholder="Status" value={projectDescription.description}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mb-4">
                <h3 className="text-2xl font-medium mb-2">List of Charge Code</h3>
                {(projectClientStatus.status==='active'|| projectClientStatus.status==='Active') && <button className="relative inline-flex px-8 py-3 font-semibold text-xl traking-widset bg-slate-400 hover:bg-slate-600 hover:text-white rounded-full" onClick={()=>setShowAddChargeCodePopUp(true)}>Create Charge code</button>}
            </div>
            <div className="">
                <DataTable columns={columns}
                    data={apiData}
                    pagination
                    paginationPerPage={5}
                    paginationRowsPerPageOptions={[3,4,5]}
                    highlightOnHover
                    fixedHeader
                    customStyles={customStyle}
                />
            </div>
            <AddChargeCodeProjectDetails visible={showAddChargeCodePopUp} onClose={handalOnClose}/>
        </div>
    )
}
export default ProjectDetails;