import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const API = 'https://timesheetapplication.onrender.com/addClient';
//const API='https://timesheet-application-9xly.onrender.com/addclient';
const AddClient = () => {
  const nav = useNavigate();
  const [status, setStatus] = useState('active');
  const show = 'relative inline-flex px-8 py-3 font-semibold text-xl traking-widset bg-slate-400 hover:bg-slate-600 hover:text-white rounded-full mr-12';
  const formik = useFormik({
    initialValues: {
      name: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Client name is required')
    }),
    onSubmit: (values) => {
      console.log(values);
      handleAddNewData(values)
    }
  })
  const handleAddNewData = (req) => {
    axios
      .post(API, req)
      .then((res) => {
        console.log(res.data)
        nav('/editor/client')
        formik.handleReset();
      })
      .catch(err => alert(err.response.data.error))
  }
  return (
    <div className='container w-1/2 py-12 px-20'>
      <span className='text-4xl font-medium text-slate-500' >
        Add Client
      </span>
      <form onSubmit={formik.handleSubmit}>
        <div className='py-6'>
          <div className='flex'>
            {/* <span className='text-red-500 text-2xl absolute left-'>*</span> */}
          <h3 className='text-2xl font-medium mb-4' >
            Client Name
          </h3>
          </div>
          <div className="flex w-90 flex-col ">
            <input className='outline-none border-5 border-gray-400 rounded px-4 py-2 hover:bg-slate-50' type='text' placeholder='Enter Client name' name='name' id='name' value={formik.values.name} onChange={formik.handleChange}></input>
            <label className='text-red-500'>{formik.errors.name && formik.errors.name}</label>
          </div>
        </div>
        <div>
          <h3 className='text-2xl font-medium mb-4' >
            Status
          </h3>
          <div className="flex  w-90  flex-col gap-6 ">
            <input className='outline-none border-5 border-gray-400 rounded px-4 py-2' type='text' placeholder='Status' name='status' id='status' value={status}></input>
          </div>
        </div>
        <div className='flex flex-row justify-end gap-10 w-full absolute bottom-9 left-0 ...'>
          <button className='relative inline-flex px-8 py-3 font-semibold text-xl traking-widset hover:bg-slate-600 hover:text-white rounded-full' onClick={() => nav('/editor/client')}>Cancel</button>
          <button className={formik.values.name === '' ? 'relative inline-flex px-8 py-3 bg-gray-200 font-semibold text-xl text-gray-400 traking-widset rounded-full border-solid border-2 border-gray-400 ... mr-12' : show} type='submit'  >Save</button>
        </div>
      </form>
    </div>
  )
}

export default AddClient;