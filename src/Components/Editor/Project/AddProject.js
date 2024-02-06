import React, { useState,useEffect, useContext } from 'react' 
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';
import Context from '../../../Context/Context';
const API = 'https://timesheetapplication.onrender.com/client';
const api='https://timesheetapplication.onrender.com/addProject';
const AddProject=()=> {
   const nav=useNavigate();
   const [value, setValue]=useState('')
   const [isTrue, setIsTrue]=useState(false);
   const [option, setOption]=useState([]);
   const {projectId}=useContext(Context);
   const selectStyle = {
      control: (baseStyles, state) => ({
        ...baseStyles,
        borderColor: state.isFocused ? 'none' : 'none',
        padding: 1,
        backgroundColor: "white"
      }),
    }
   const handelGetClientData=()=>{
      axios
        .get(API)
        .then((res) => {
          const newOptions = res.data.data.map((e) => ({ value: e.clientId, label: e.name }));  
                 setOption(newOptions);
        })
        .catch((err) => {
            console.log('Data Process Error');
            console.log(err.message)
        });
   }
   const formik = useFormik({
      initialValues: {
        name: '',
        notes:'',
        descriptions:''
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .required('Project name is required')
      }),
      onSubmit: (values) => {
         values.clientId=value.value;
        console.log(values);
        value!=='' ? handleAddNewData(values)  : setIsTrue(true)
      }
    })
  const handleAddNewData =(req)=>{
      axios
          .post(api,req)
          .then((res)=> {
            console.log(res.data)
             nav('/editor/project')
          })
          .catch(err=>alert(err.response.data.error))
  }
  useEffect(()=>{
   handelGetClientData();
  },[])
  useEffect(()=>{setIsTrue(false)},[value.value])
  return (
 
        <div className='container w-1/2 py-12 px-20'>
      <span className='text-4xl font-medium text-slate-500' >
        Add Project
      </span>
       <form onSubmit={formik.handleSubmit}>
       <div className='py-6'>
            <h3 className='text-2xl font-medium mb-2' >
                Project Name
            </h3>
            <div className="flex w-90 flex-col">
           <input className='outline-none border-5 border-gray-400 rounded px-4 py-2 hover:bg-slate-50' name='name' id='name' value={formik.values.name} onChange={formik.handleChange}></input>
           <label className='text-red-500'>{formik.errors.name && formik.errors.name}</label>
           </div>
        </div>
        <div>
            <h3 className='text-2xl font-medium mb-2' >
               Client
            </h3>
           <div className="flex  w-90  flex-col">
          <Select styles={selectStyle} options={option} defaultValue={value} onChange={setValue}  isSearchable/>
          <label className='text-red-500'>{isTrue===true && 'Please select client'}</label>
           </div>
        </div>
        <div className='py-6'>
            <h3 className='text-2xl font-medium mb-2' >
               Note
            </h3>
           <div className="flex  w-90  flex-col gap-6 ">
           <input  className='outline-none border-5 border-gray-400 rounded px-4 py-2 hover:bg-slate-50' name='notes' id='notes' value={formik.values.notes} onChange={formik.handleChange}></input>
           </div>
        </div>
        <div>
            <h3 className='text-2xl font-medium mb-2' >
               Description
            </h3>
           <div className="flex  w-90  flex-col gap-6 ">
           <input className='outline-none border-5 border-gray-400 rounded px-4 py-6 hover:bg-slate-50' name='descriptions' id='descriptions' value={formik.values.descriptions} onChange={formik.handleChange}></input>
           </div>
        </div>
        <div className='flex flex-row justify-end gap-10 w-full absolute bottom-9 left-0 ...'>
            <button className='relative inline-flex px-8 py-3 font-semibold text-xl traking-widset hover:bg-slate-600 hover:text-white rounded-full' onClick={()=>nav('/editor/project')}>Cancel</button>
            <button className='relative inline-flex px-8 py-3 font-semibold text-xl traking-widset bg-slate-400 hover:bg-slate-600 hover:text-white rounded-full mr-12' type='submit'>Save</button>
        </div>
       </form>
      </div>
  )
}
 
export default AddProject;