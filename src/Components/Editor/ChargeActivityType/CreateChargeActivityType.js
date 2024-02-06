import React, { useEffect } from 'react' 
import { useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const API='https://timesheetapplication.onrender.com/project';
const api='https://timesheetapplication.onrender.com/addChargeActivity';
const CreateChargeActivityType=()=> {
  const show='relative inline-flex px-8 py-3 font-semibold text-xl traking-widset bg-slate-400 hover:bg-slate-600 hover:text-white rounded-full mr-12';
  const nav=useNavigate();
  const [option, setOption]=useState([]);
  const [value, setValue]=useState('');
  const [value1, setValue1]=useState('');
    const [value2, setValue2]=useState('');
    const [value3, setValue3]=useState('');
    const [note, setNote]=useState('');
    const [description, setDescription]=useState('');
    const options1 = [
      { value: 'JMCOE0B006', label: 'JMCOE0B006' },
      { value: 'JMSET0B003', label: 'JMSET0B003' },
      { value: 'SETUDS14', label: 'SETUDS14'}
    ];
    const options2 = [
      { value: 'manual testing', label: 'manual testing' },
      { value: 'development', label: 'development' },
      { value: 'SETUDS14', label: 'SETUDS14'}
    ];
    const options3 = [
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
        backgroundColor: "white"
      }),
    }
    const handelGetProjectData=()=>{
      axios
        .get(API)
        .then((res) => {
          const newOptions = res.data.data.map((e) => ({ value: e.projectId, label: e.name }));  
                 setOption(newOptions);
        })
        .catch((err) => {
            console.log('Data Process Error');
            console.log(err.message)
        });
    }
    useEffect(()=>{
      handelGetProjectData();
    },[])
    const handleSubmit =(e)=>{
    //  e.preventDefault()
      const req = {
        projectId:value.value,
        chargeCode:value1.value,
        activityType:value2.value,
        task:value3.value,
        notes:note,
        descriptions:description
     }
     console.log(req);
     handleAddNewData(req);
  }
  const handleAddNewData =(req)=>{
      if(value!=='' && value1!=='' && value2!=='' && value3!==''){
        axios
          .post(api,req)
          .then((res)=> {
            console.log(res.data)
             nav('/editor/chargeActivity')
          })
          .catch(err=>alert(err.response.data.error))
      }else{
        alert('Please fill all required information');
      }
  }
  return (
 
        <div className='container w-1/2 py-12 px-20'>
      <span className='text-4xl font-medium text-slate-500' >
        Create Charge Activity Type
      </span>
        <div className='py-6'>
            <h3 className='text-2xl font-medium mb-2' >
                Project Name
            </h3>
            <div className="flex w-90 flex-col gap-6 ">
            <Select styles={selectStyle} options={option} defaultValue={value} onChange={setValue}  isSearchable/>
           </div>
        </div>
        <div>
            <h3 className='text-2xl font-medium mb-2' >
               Charge Code
            </h3>
           <div className="flex  w-90  flex-col gap-6 ">
          <Select styles={selectStyle} options={options1} defaultValue={value1} onChange={setValue1}  isSearchable/>
           </div>
        </div>
        <div className='py-6'>
            <h3 className='text-2xl font-medium mb-2' >
               Activity Type
            </h3>
           <div className="flex  w-90  flex-col gap-6 ">
          <Select styles={selectStyle} options={options2} defaultValue={value2} onChange={setValue2}  isSearchable/>
           </div>
        </div>
        <div>
            <h3 className='text-2xl font-medium mb-2' >
               Task
            </h3>
           <div className="flex  w-90  flex-col gap-6 ">
          <Select styles={selectStyle} options={options3} defaultValue={value3} onChange={setValue3}  isSearchable/>
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
            <button className='relative inline-flex px-8 py-3 font-semibold text-xl traking-widset hover:bg-slate-600 hover:text-white rounded-full' onClick={()=>nav('/editor/chargeActivity')}>Cancel</button>
            <button className={(value!=='' && value1!=='' && value2!=='' && value3!=='') ? show : 'relative inline-flex px-8 py-3 bg-gray-200 font-semibold text-xl text-gray-400 traking-widset rounded-full border-solid border-2 border-gray-400 ... mr-12'} onClick={handleSubmit}>Add</button>
        </div>
      </div>
  )
}
 
export default CreateChargeActivityType;