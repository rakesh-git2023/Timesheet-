import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GrNext } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import ShowTable from "./ShowTable";
import DatePicker from "react-datepicker";
import Context from "../../../Context/Context";
import 'react-datepicker/dist/react-datepicker.module.css';
import { format, startOfWeek, endOfWeek, addWeeks, subWeeks, addDays } from 'date-fns';
const Status = () => {
    const nav = useNavigate();
    const {week,myTimesheetId,myTimesheettTaskStatus,myTimesheetTotalHours,myTimesheetTask}=useContext(Context);
    const [data, setData] = useState(myTimesheetTask.task);
    const [date, setDate] = useState([]);
    const [totalHours, setTotalHours]=useState(myTimesheetTotalHours.totalHours)
    const [taskStatus, setTaskStatus]=useState(myTimesheettTaskStatus.status)
    const [timesheetId, setTimesheetId]=useState(myTimesheetId.id)
    const [selectedDate, setSelectedDate] = useState(new Date(week.startDate));
    const [opens, setOpens] = useState(false);
    const [tableData, setTableData] = useState([]);
    useEffect(()=>{
    console.log(week.startDate,myTimesheetTask.task,myTimesheetTotalHours.totalHours,myTimesheettTaskStatus.status)
    console.log(data)
    },[])
    const showData = () => {
        setData([...data,{
            taskId:"",
            taskName:"",
            weeklyHours:{sun:0,mon:0,tue:0,wed:0,thurs:0,fri:0,sat:0},
            weeklyNotes:{sun:'',mon:'',tue:'',wed:'',thurs:'',fri:'',sat:''},
        }]);  
    }
    //console.log(data);
    const handelEdit = (taskStatus) => {
        console.log('rakesh')
        var u_date=new Date();
        var updateDate=`${u_date.getFullYear()}-${u_date.getMonth+1}-${u_date.getDay}`
       axios
    .put(`https://timesheetapplication.onrender.com/updateMyTimesheet/${timesheetId}`, {
        employeeId:1000,
            leadId:1001,
            status:taskStatus,
            weekRange:updateDate,
            tasks:data
    })
    .then(res => {
     // nav('/editor/chargeActivity')
      console.log(res.data)
      handelSavedData();
    })
    .catch(err => alert(err))
    }
    const deleteShowTable = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData([]);
        setTimeout(()=>[
            setData(newData)
        ],1)
        console.log(index);
        console.log(data);
    }
    console.log(data);
    const startWeek = startOfWeek(selectedDate);
    const endWeek = endOfWeek(selectedDate);
    console.log(selectedDate);
    const handelSavedData=(selectedDate)=>{
        console.log(format(startWeek,'d/M/yyyy'))
        axios
        .get(`https://timesheetapplication.onrender.com/mytimesheet/1000/${format(startWeek,'d/M/yyyy')}`)
        .then((res) => {
          console.log("Data Process Successfuly");
            setData([])
            setTaskStatus(res.data.data[0].status);
            setTotalHours(res.data.data[0].totalHours)
            setTimesheetId(res.data.data[0].timesheetId)
            setTimeout(()=>{
              setData(res.data.data[0].tasks);
            },0.001)
        })
        .catch((err) => {
          console.log("Data Process Error");
          console.log(err);
        })
    }
    return (
        <div className="flex flex-col mt-8 px-12 py-0" style={{height:'700px'}}>
            <spann className="text-3xl font-medium text-slate-500">Weekly Timesheet</spann>
            <div className="flex gap-4 mt-5">
                <span className="text-xl font-medium text-slate-500">Total Hours:</span>
                <span className="text-xl font-medium text-slate-500">{totalHours}</span>
            </div>
            <div className="flex gap-4 mt-5">
                <span className="text-xl font-medium text-slate-500">Status:</span>
                <span className="text-xl font-medium text-slate-500">{taskStatus}</span>
            </div>
            <div className="flex justify-between items-center mt-6">
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-medium text-slate-500 mr-7">Week :</span>
                    <span>{`${format(startWeek, 'dd/MM/yyyy')} - ${format(endWeek, 'dd/MM/yyyy')}`}</span>
                    <SlCalender className="text-3xl ml-4" onClick={() => setOpens(!opens)} />
                    <DatePicker className='invisible' selected={selectedDate} dateFormat="dd/MM/y" open={opens} />
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
                    <button className={taskStatus==='submit' ? 'relative inline-flex px-8 py-3 bg-gray-200 font-semibold text-xl text-gray-400 traking-widset rounded-full border-solid border-2 border-gray-400 ' : 'relative inline-flex px-8 py-3 font-semibold text-xl traking-widset bg-slate-400  hover:bg-slate-600 hover:text-white rounded-full bg-gray-300'} onClick={taskStatus==='submit' ? null : ()=> handelEdit(taskStatus)}>Save</button>
                    <button className='relative inline-flex px-8 py-3 font-semibold text-xl traking-widset bg-slate-400  hover:bg-slate-600 hover:text-white rounded-full bg-gray-300 mr-10' onClick={()=>handelEdit('submit')}>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Status;