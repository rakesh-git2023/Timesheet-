import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import Context from '../../../Context/Context';
import axios from 'axios';
const EditClient = () => {
  const nav = useNavigate();
  const { clientName, cilentId,clientStatus } = useContext(Context)
  const [value, setValue]=useState({value: clientStatus.c_status, label:clientStatus.c_status})
  const show = 'relative inline-flex px-8 py-3 font-semibold text-xl traking-widset bg-slate-400 hover:bg-slate-600 hover:text-white rounded-full mr-12';
  const selectStyle = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? 'none' : 'none',
      padding: 1,
      backgroundColor: "white"
    }),
  }
  const options = [
    { value: 'active', label: 'active' },
    { value: 'inactive', label: 'inactive' }
  ];
  const formik = useFormik({
    initialValues: {
      name: clientName.c_name
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Client name is required')
    }),
    onSubmit: (values) => {
     handelEdit(values);
    }
  })
  const handelEdit = (values) => {
    axios
      .put(`https://timesheetapplication.onrender.com/updateClient/${cilentId.id}`, {
        status: value.value,
        name:values.name
      })
      .then(res => {
        nav('/editor/client')
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    if (clientName.c_name === undefined) {
      nav('/editor/adminDashbord')
    }
  }, [])
  return (
    <div className='container w-1/2 py-12 px-20'>
      <span className='text-4xl font-medium text-slate-500' >
        Edit Client
      </span>
      <form onSubmit={formik.handleSubmit}>
      <div className='py-6'>
        <h3 className='text-2xl font-medium mb-4' >
          Client Name
        </h3>
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
          <Select styles={selectStyle} options={options} defaultValue={value} onChange={setValue} isSearchable />
        </div>
      </div>
      <div className='flex flex-row justify-end gap-10 w-full absolute bottom-9 left-0 ...'>
        <button className='relative inline-flex px-8 py-3 font-semibold text-xl traking-widset hover:bg-slate-600 hover:text-white rounded-full' onClick={() => nav('/editor/clientDetails')}>Cancel</button>
        <button className={formik.values.name === '' ? 'relative inline-flex px-8 py-3 bg-gray-200 font-semibold text-xl text-gray-400 traking-widset rounded-full border-solid border-2 border-gray-400 ... mr-12' : show} type='submit'>Save</button>
      </div>
      </form>
    </div>
  )
}

export default EditClient;