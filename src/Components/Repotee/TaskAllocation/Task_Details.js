import React, {useContext} from "react";
import Context from "../../../Context/Context";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Task_Details = () => {
  const nav=useNavigate();
  const {taskId,taskName,taskEmployeeName,taskProjectName,taskChargeCode,taskActivityType,taskEstimatedHours,taskBillable,taskStartDate,taskEndDate,taskNote}=useContext(Context)
  const handelDelete=()=>{
    if(window.confirm('Are you sure you want to delete')==true){
       axios
   .delete(`https://timesheetapplication.onrender.com/deleteTask/${taskId.id}`)
   .then(res=>{
      // alert('Data Deleted Successfuly')
       console.log(res)
       nav('/repotingLead/taskAllocation')
   })
   .catch(err=>console.log(err))
   }else{ 

   }
 }
  return (
    <div className="flex flex-col px-10 py-8 w-full">
      <div className="mb-6 flex space-x-40">
        <span className='text-4xl font-medium text-slate-500'>Task Details</span>
        <div className="flex gap-1 space-x-2 relative top-1">
               <CiEdit className="text-2xl font-medium cursor-pointer mt-2 rounded-full border-solid border-2 bg-amber-400 " onClick={()=>nav('/repotingLead/editTask')}/>
               <RiDeleteBin6Line className="cursor-pointer font-medium text-2xl mt-2" onClick={handelDelete}/>
            </div>
      </div>
      <div className="mb-4">
        <span className="text-xl font-medium">Task</span>
        <div className="flex w-6/12 flex-col gap-6 mt-1">
          <input className='outline-none border-5 border-gray-400 bg-gray-100 rounded px-4 py-2' readOnly={true} value={taskName.t_name}></input>
        </div>
      </div>
      <div className="mb-4">
        <span className="text-xl font-medium">Employee</span>
        <div className="flex w-3/12 flex-col gap-6 mt-1">
          <input className='outline-none border-5 border-gray-400 bg-gray-100 rounded px-4 py-2' readOnly={true} value={taskEmployeeName.e_name}></input>
        </div>
      </div>
      <div className="flex gap-10 w-full mb-4">
        <div>
          <span className="text-xl font-medium">Project</span>
          <div className="flex w-full flex-col gap-6 mt-1">
            <input className='outline-none border-5 border-gray-400 bg-gray-100 rounded px-4 py-2' readOnly={true} value={taskProjectName.p_name}></input>
          </div>
        </div>
        <div>
          <span className="text-xl font-medium">Charge Code</span>
          <div className="flex w-full flex-col gap-6 mt-1">
            <input className='outline-none border-5 border-gray-400 bg-gray-100 rounded px-4 py-2' readOnly={true} value={taskChargeCode.c_code}></input>
          </div>
        </div>
        <div>
          <span className="text-xl font-medium">Activity Type</span>
          <div className="flex w-full flex-col gap-6 mt-1">
            <input className='outline-none border-5 border-gray-400 bg-gray-100 rounded px-4 py-2' readOnly={true} value={taskActivityType.a_type}></input>
          </div>
        </div>
      </div>
      <div className="flex gap-10 mb-4">
        <div>
          <span className="text-xl font-medium">Start Date</span>
          <div className="flex w-full flex-col gap-6 mt-1">
            <input className='outline-none border-5 border-gray-400 bg-gray-100 rounded px-4 py-2' readOnly={true} value={taskStartDate.s_date}></input>
          </div>
        </div>
        <div>
          <span className="text-xl font-medium">End Date</span>
          <div className="flex w-full flex-col gap-6 mt-1">
            <input className='outline-none border-5 border-gray-400 bg-gray-100 rounded px-4 py-2' readOnly={true} value={taskEndDate.e_date}></input>
          </div>
        </div>
      </div>
      <div className="flex gap-10 mb-4">
        <div>
          <span className="text-xl font-medium">Allocated Hours</span>
          <div className="flex w-full flex-col gap-6 mt-1">
            <input className='outline-none border-5 border-gray-400 bg-gray-100 rounded px-4 py-2' readOnly={true} ></input>
          </div>
        </div>
        <div>
          <span className="text-xl font-medium">Consumed Hours</span>
          <div className="flex w-full flex-col gap-6 mt-1">
            <input className='outline-none border-5 border-gray-400 bg-gray-100 rounded px-4 py-2' readOnly={true}></input>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <span className="text-xl font-medium">Billable</span>
        <div className="flex w-6/12 flex-col gap-6 mt-1">
          <input className='outline-none border-5 border-gray-400 bg-gray-100 rounded px-4 py-2' readOnly={true} value={taskBillable.billable}></input>
        </div>
      </div>
      <div>
        <span className="text-xl font-medium">Notes</span>
        <div className="flex w-6/12 flex-col gap-6 mt-1">
          <input className='outline-none border-5 border-gray-400 bg-gray-100 rounded px-4 py-2' readOnly={true} value={taskNote.note}></input>
        </div>
      </div>
    </div>
  )
}
export default Task_Details;