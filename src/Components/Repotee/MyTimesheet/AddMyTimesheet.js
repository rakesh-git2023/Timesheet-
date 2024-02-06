import React, { useEffect, useState } from "react";
import axios from "axios";
import { GrNext } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import ShowTable from "./ShowTable";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.module.css';
import { format, startOfWeek, endOfWeek, addWeeks, subWeeks, addDays } from 'date-fns';
const API='https://timesheetapplication.onrender.com/addMyTimesheet';
const AddMyTimesheet = () => {
    const nav = useNavigate();
    const [data, setData] = useState([{
        taskId:"",
        taskName:"",
        weeklyHours:{sun:0,mon:0,tue:0,wed:0,thurs:0,fri:0,sat:0},
        weeklyNotes:{sun:'',mon:'',tue:'',wed:'',thurs:'',fri:'',sat:''},
    }]);
    const [date, setDate] = useState([]);
    const [status, setStatus]=useState('draft')
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [opens, setOpens] = useState(false);
    const [isTrue, setIsTrue]=useState(false)
    const [totalHours, setTotalHours]=useState('')
    const [taskStatus, setTaskStatus]=useState('')
    const [timesheetId, setTimesheetId]=useState('')
    const [tableData, setTableData] = useState([]);
    const showData = () => {
        setData([...data,{
            taskId:"",
            taskName:"",
            weeklyHours:{sun:0,mon:0,tue:0,wed:0,thurs:0,fri:0,sat:0},
            weeklyNotes:{sun:'',mon:'',tue:'',wed:'',thurs:'',fri:'',sat:''},
        }]);  
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(data);
        console.log(format(selectedDate,'dd/mm/yyyy'))
        const req={
            employeeId:1000,
            leadId:1001,
            status:status,
            weekRange:format(selectedDate,'yyyy-MM-dd'),
            tasks:data
        }
         console.log(req);
         handleAddNewData(req);
      }
      const handleAddNewData =(req)=>{
            axios
              .post(API,req)
              .then((res)=> {
                console.log(res.data)
                handelSavedData()
              })
              .catch(err=>alert(err.response.data.error))
      }
      const handelEdit = (taskSatatus) => {
        console.log(data)
        console.log(taskSatatus)
        var u_date=new Date();
        var updateDate=`${u_date.getFullYear()}-${u_date.getMonth+1}-${u_date.getDay}`
       axios
    .put(`https://timesheetapplication.onrender.com/updateMyTimesheet/${timesheetId}`, {
        employeeId:1000,
            leadId:1001,
            status:taskSatatus,
            weekRange:updateDate,
            tasks:data
    })
    .then(res => {
     // nav('/editor/chargeActivity')
      console.log(res.data)
      handelSavedData()
    })
    .catch(err => alert(err))
    }
    const deleteShowTable = (index) => {
        var newData = [...data];
        newData.splice(index, 1);
        setData([]);
        setTimeout(()=>[
            setData(newData)
        ],1)
        console.log(index)
    }
    const prevWeek = () => {
        setSelectedDate(subWeeks(selectedDate, 1));
    }
    const nextWeek = () => {
        setSelectedDate(addWeeks(selectedDate, 1));
        // var d = Number(format(startOfWeek(addWeeks(selectedDate, 1)), 'dd')) + 1;
    }
    const startWeek = startOfWeek(selectedDate);
    const endWeek = endOfWeek(selectedDate);
    const handelSavedData=(selectedDate)=>{
        console.log(format(startWeek,'d/M/yyyy'))
        axios
        .get(`https://timesheetapplication.onrender.com/mytimesheet/1000/${format(startWeek,'d/M/yyyy')}`)
        .then((res) => {
          console.log("Data Process Successfuly");
          setTimeout(()=>{
            console.log(res.data.data.length)
          },1000)
         // console.log(res.data.data[0].tasks);
         if((res.data.data.length) !== 0){
            console.log('rakesh')
            setData([])
            setIsTrue(true)
            setTaskStatus(res.data.data[0].status);
            console.log(res.data.data[0].status)
            setTotalHours(res.data.data[0].totalHours)
            setTimesheetId(res.data.data[0].timesheetId)
            setTimeout(()=>{
              setData(res.data.data[0].tasks);
            },0.001)
         }else{
            setIsTrue(false)
            setTaskStatus('')
            setData([])
            console.log('shaw')
            setTimeout(()=>{
                setData([{
                    taskId:"",
                    taskName:"",
                    weeklyHours:{sun:0,mon:0,tue:0,wed:0,thurs:0,fri:0,sat:0},
                    weeklyNotes:{sun:'',mon:'',tue:'',wed:'',thurs:'',fri:'',sat:''},
                }])
            },0.001)
            console.log(data);
         }
        })
        .catch((err) => {
          console.log("Data Process Error");
          console.log(err);
        })
    }
    useEffect(()=>{
       handelSavedData()
    },[selectedDate])
    console.log(data);
    return (
        <div className="flex flex-col mt-8 px-12 py-0" style={{height:'700px'}}>
            <spann className="text-3xl font-medium text-slate-500">Weekly Timesheet</spann>
            <div className="flex gap-4 mt-5">
                <span className="text-xl font-medium text-slate-500">{isTrue && 'Total Hours:'}</span>
                <span className="text-xl font-medium text-slate-500">{isTrue && totalHours}</span>
            </div>
            <div className="flex gap-4 mt-5">
                <span className="text-xl font-medium text-slate-500">{isTrue && 'Status:'}</span>
                <span className="text-xl font-medium text-slate-500">{isTrue && taskStatus}</span>
            </div>
            <div className="flex justify-between items-center mt-3">
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-medium text-slate-500 mr-7">Week :</span>
                    <GrNext className="bg-slate-400 text-3xl mr-8" style={{ transform: 'rotate(180deg)' }} onClick={prevWeek} />
                    <span>{`${format(startWeek, 'dd/M/yyyy')} - ${format(endWeek, 'dd/M/yyyy')}`}</span>
                    <GrNext className="bg-slate-400 text-3xl ml-8" onClick={nextWeek} />
                    <SlCalender className="text-3xl ml-4" onClick={() => setOpens(!opens)} />
                    <DatePicker className='invisible' selected={selectedDate} onChange={(date) => setSelectedDate(date)} dateFormat="dd/MM/yyyy" open={opens} />
                </div>
                {taskStatus!=='submit' && <button className="relative inline-flex px-8 py-3 font-semibold text-xl traking-widset bg-slate-400 hover:bg-slate-600 hover:text-white rounded-full" onClick={showData}>Add Task</button>}
            </div>
            <div className="flex mt-4" style={{ backgroundColor: `#b0c4de` }}>
                <div className="flex justify-center items-center py-4 w-5/12">
                    <span className="text-xl font-medium">Task</span>
                </div>
                <div className="flex w-8/12">
                    {[...Array(7)].map((_, index) => {
                        const currentDate = addDays(startWeek, index);
                        return (
                            <div className={`flex flex-col justify-center items-center px-8 ${index % 2 === 0 ? 'bg-slate-400' : ''}`} key={index}>
                                <span className="font-normal text-base">{format(currentDate, 'dd')}</span>
                                <span className="font-normal text-base">{format(currentDate, 'EEE')}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col bg-white overflow-auto scrollbar-hide pb-5" style={{ height: '400px' }}>
                {
                    data.map((e, index) => {
                        return <ShowTable
                            key={index}
                            index={index}
                            status={taskStatus}
                            taskinfo={e}
                            onDelete={deleteShowTable}
                            showDel={data.length > 1}
                            handleData={(weeklyHours, weeklyNotes, taskId, taskName) => {
                                const newData = [...data];
                                newData[index] = { weeklyHours, weeklyNotes, taskId, taskName };
                                setData(newData);
                            }} />
                    })
                }
            </div>
            <div className="flex justify-between items-center w-full mt-5">
                <div className="flex gap-3 items-center w-2/3">
                    <span className="text-lg font-normal text-slate-600">Upload file</span>
                    <div className="flex flex-col justify-center gap-2 bg-white border-solid border-2 border-gray-400 w-1/3 py-3 px-2">
                        <span className="text-xs">This is nothing attach</span>
                        <span className="text-xs">Attach file</span>
                    </div>
                    <span className="text-lg font-normal text-slate-600">View Upload:</span>
                </div>
                <div className='flex justify-end gap-10'>
                <button className={taskStatus==='submit' ? 'relative inline-flex px-8 py-3 bg-gray-200 font-semibold text-xl text-gray-400 traking-widset rounded-full border-solid border-2 border-gray-400' : 'relative inline-flex px-8 py-3 font-semibold text-xl traking-widset bg-slate-400  hover:bg-slate-600 hover:text-white rounded-full bg-gray-300'} onClick={taskStatus==='submit' ? null : isTrue===false ? handleSubmit :()=>{ handelEdit(taskStatus)}}>Save</button>
                    <button className='relative inline-flex px-8 py-3 font-semibold text-xl traking-widset bg-slate-400  hover:bg-slate-600 hover:text-white rounded-full bg-gray-300 mr-10' onClick={()=>{handelEdit('submit')}}>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default AddMyTimesheet;