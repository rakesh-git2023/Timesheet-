import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import axios from 'axios';
const API='https://timesheetapplication.onrender.com/addTimesheetSetting';
const Add_TimesheetSetting = () => {
  const nav = useNavigate();
  const show = 'relative inline-flex px-8 py-3 font-semibold text-xl traking-widset bg-slate-400 hover:bg-slate-600 hover:text-white rounded-full mr-12';
  const [periodStart, setPeriodStart] = useState('');
  const [periodEnd, setPeriodEnd] = useState('');
  const [e_value, setE_Value] = useState('')
  const [e_option, setE_Option] = useState([]);
  const [c_value, setC_Value] = useState('');
  const [c_option, setC_Option] = useState([]);
  const [value, setValue] = useState('')
  const [note, setNote]=useState('');
  const options = [
    { value: 'kolkata', label: 'kolkata' },
    { value: 'indore', label: 'indore' },
    { value: 'bhopal', label: 'bhopal' },
    { value: 'shillong', label: 'shillong'}
  ];
  const selectStyle = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? 'none' : 'none',
      padding: 1,
      backgroundColor: "white"
    }),
  }
  const handelFetchEmployee = () => {
    axios
      .get('https://timesheetapplication.onrender.com/employee')
      .then((res) => {
        const newOptions = res.data.data.map((e) => ({ value: e.employeeId, label: e.fName + ' ' + e.lName }));
        setE_Option(newOptions);
        console.log(newOptions)
      })
      .catch((err) => {
        console.log('Data Process Error');
        console.log(err.message)
      });
  }
  const handelFetchClient = () => {
    axios
      .get('https://timesheetapplication.onrender.com/client')
      .then((res) => {
        const newOptions = res.data.data
          .filter((e) => e.status === 'active')
          .map((e) => ({ value: e.clientId, label: e.name }));

        setC_Option(newOptions);
        console.log(newOptions);
      })
      .catch((err) => {
        console.log('Data Process Error');
        console.log(err.message);
      });
  }
  useEffect(() => {
    handelFetchEmployee();
    handelFetchClient();
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    const req = {
      employeeId:e_value.value,
      clientId:c_value.value,
      location:value.value,
      startDate:periodStart,
      endDate:periodEnd,
      notes:note
    }
    console.log(req);
    (e_value !== '' && c_value !== '' && value !== '' && periodStart !== '' && periodEnd !== '')? handleAddNewData(req):alert('Please fill all information')

  }
  const handleAddNewData = (req) => {
     axios
      .post(API, req)
      .then((res) => {
        console.log(res.data)
        nav('/repotingLead/timesheetSetting')
      })
      .catch(err => alert(err.response.data.error))
  }
  return (

    <div className='container w-full py-12 px-20'>
      <span className='text-4xl font-medium text-slate-500' >
        Timesheet Setting
      </span>
      <form onSubmit={handleSubmit}>
      <div className='grid grid-cols-2 gap-10 mt-5'>
        <div className='py-6'>
          <h3 className='text-2xl font-medium mb-2' >
            Employee
          </h3>
          <div className="flex w-90 flex-col gap-6 ">
            <Select styles={selectStyle} options={e_option} defaultValue={e_value} onChange={setE_Value} isSearchable />
          </div>
        </div>
        <div className='py-6'>
          <h3 className='text-2xl font-medium mb-2' >
            Client
          </h3>
          <div className="flex  w-90  flex-col gap-6 ">
            <Select styles={selectStyle} options={c_option} defaultValue={c_value} onChange={setC_Value} isSearchable />
          </div>
        </div>
        <div className='py-6'>
          <h3 className='text-2xl font-medium mb-2' >
            Location
          </h3>
          <div className="flex  w-90  flex-col gap-6 ">
            <Select styles={selectStyle} options={options} defaultValue={value} onChange={setValue} isSearchable />
          </div>
        </div>
        <div className='py-6'>
          <h3 className='text-2xl font-medium mb-2' >
            Note
          </h3>
          <div className="flex  w-90  flex-col gap-6 ">
            <input className='outline-none border-5 border-gray-400 rounded px-4 py-2' value={note} onChange={(e)=>setNote(e.target.value)}></input>
          </div>
        </div>
        <div className='py-6'>
          <h3 className='text-2xl font-medium mb-2' >
            Period Start
          </h3>
          <div className="flex  w-90  flex-col gap-6 ">
            <input className='outline-none cursor-pointer border-5 border-gray-400   rounded px-4 py-2 mr-2 w-full font-normal text-lg' type="date" value={periodStart} onChange={(e) => setPeriodStart(e.target.value)} />
          </div>
        </div>
        <div className='py-6'>
          <h3 className='text-2xl font-medium mb-2' >
            Period End
          </h3>
          <div className="flex  w-90  flex-col gap-6 ">
            <input className='outline-none cursor-pointer border-5 border-gray-400   rounded px-4 py-2 mr-2 w-full font-normal text-lg' type="date" value={periodEnd} onChange={(e) => setPeriodEnd(e.target.value)} />
          </div>
        </div>
        <div className='flex flex-row justify-end gap-10 w-full absolute bottom-0 left-0 ...'>
          <button className='relative inline-flex px-8 py-3 font-semibold text-xl traking-widset hover:bg-slate-600 hover:text-white rounded-full' onClick={() => nav('/repotingLead/timesheetSetting')}>Cancel</button>
          <button className={(e_value !== '' && c_value !== '' && value !== '' && periodStart !== '' && periodEnd !== '') ? show : 'relative inline-flex px-8 py-3 bg-gray-200 font-semibold text-xl text-gray-400 traking-widset rounded-full border-solid border-2 border-gray-400 ... mr-12'}>Add</button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Add_TimesheetSetting;