import React from 'react' 
import { useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import Context from '../../../Context/Context';
import axios from 'axios';
const EditChargeActivityType=()=> {
    const nav=useNavigate();
    const {chargeActivityId,chargeProjectId,chargeProjectName,chargeCode,activityType,chargeTask,chargeNote,chargeDescription}=useContext(Context);
    const [task, setTask]=useState('');
  const show='relative inline-flex px-8 py-3 font-semibold text-xl traking-widset bg-slate-400 hover:bg-slate-600 hover:text-white rounded-full mr-12';
  const [value1, setValue1]=useState({value:activityType.activityType, label:activityType.activityType});
  const [value2, setValue2]=useState({value:chargeTask.task, label:chargeTask.task});
  const [note, setNote]=useState(chargeNote.note);
  const [description, setDescription]=useState(chargeDescription.description)
  const options1 = [
    { value: 'manual testing', label: 'manual testing' },
    { value: 'development', label: 'development' },
    { value: 'SETUDS14', label: 'SETUDS14'}
  ];
  const options2 = [
    { value: 'enhancement-set', label: 'enhancement-set' },
    { value: 'enhancement-sets', label: 'enhancement-sets' },
    { value: 'enhancement-wofco', label: 'enhancement-wofco'},
    { value: 'enhancement-jm&a', label: 'enhancement-jm&a'}
  ];
  const selectStyle = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? 'none' : 'none',
      padding: 1,
      backgroundColor: "white",
      height: 1
    }),
  }
  const handelEdit=()=>{
    axios
    .put(`https://timesheetapplication.onrender.com/updateChargeActivity/${chargeActivityId.id}`, {
        projectId:chargeProjectId.projectId,
        chargeCode:chargeCode.chargeCode,
        activityType:value1.value,
        task:value2.value,
        notes:note,
        descriptions:description
    })
    .then(res => {
      nav('/editor/chargeActivity')
      console.log(res.data)
    })
    .catch(err => alert(err))
  }
  return (
 
        <div className='container w-1/2 py-12 px-20'>
      <span className='text-4xl font-medium text-slate-500' >
        Edit Charge Activity Type
      </span>
        <div className='py-6'>
            <h3 className='text-2xl font-medium mb-2' >
                Project Name
            </h3>
            <div className="flex w-90 flex-col gap-6 ">
           <input className='outline-none border-5 border-gray-400 rounded px-4 py-2 hover:bg-slate-50' value={chargeProjectName.projectName} ></input>
           </div>
        </div>
        <div>
            <h3 className='text-2xl font-medium mb-2' >
               ChargeTypeOrCode
            </h3>
           <div className="flex  w-90  flex-col gap-6 ">
           <input  className='outline-none border-5 border-gray-400 rounded px-4 py-2' value={chargeCode.chargeCode} ></input>
           </div>
        </div>
        <div className='py-6'>
            <h3 className='text-2xl font-medium mb-2' >
               Activity Type
            </h3>
           <div className="flex  w-90  flex-col gap-6 ">
          <Select styles={selectStyle} options={options1} defaultValue={value1} onChange={setValue1}  isSearchable/>
           </div>
        </div>
        <div>
            <h3 className='text-2xl font-medium mb-2' >
               Task
            </h3>
           <div className="flex  w-90  flex-col gap-6 ">
          <Select styles={selectStyle} options={options2} defaultValue={value2} onChange={setValue2}  isSearchable/>
           </div>
        </div>
        <div className='py-6'>
            <h3 className='text-2xl font-medium mb-2' >
               Description
            </h3>
           <div className="flex  w-90  flex-col gap-6 ">
           <input  className='outline-none border-5 border-gray-400 rounded px-4 py-2 hover:bg-slate-50' value={description} onChange={(e)=>setDescription(e.target.value)}></input>
           </div>
        </div>
        <div>
            <h3 className='text-2xl font-medium mb-2' >
               Note
            </h3>
           <div className="flex  w-90  flex-col gap-6 ">
           <input className='outline-none border-5 border-gray-400 rounded px-4 py-2 hover:bg-slate-50' value={note} onChange={(e)=>setNote(e.target.value)}></input>
           </div>
        </div>
        <div className='flex flex-row justify-end gap-10 w-full absolute bottom-0 left-0 ...'>
            <button className='relative inline-flex px-8 py-3 font-semibold text-xl traking-widset hover:bg-slate-600 hover:text-white rounded-full' onClick={()=>nav('/editor/chargeActivityTypeDetails')}>Cancel</button>
            <button className={(value1!=='' && value2!=='') ? show : 'relative inline-flex px-8 py-3 bg-gray-200 font-semibold text-xl text-gray-400 traking-widset rounded-full border-solid border-2 border-gray-400 ... mr-12'} onClick={handelEdit}>Add</button>
        </div>
      </div>
  )
}
 
export default EditChargeActivityType;