import React, { useContext } from 'react';
import DataTable from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Context from '../../../Context/Context';
const API = 'https://timesheetapplication.onrender.com/chargeactivity';
const ChargeActivityTypeHome = () => {
    const {setChargeActivityId,setChargeProjectName,setChargeProjectId,setChargeCode,setActivityType,setChargeTask,setChargeNote,setChargeDescription}=useContext(Context);
    const [apiData, setApiData] = useState([]);
    const [filterApiData, setFilterApiData] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorText, setErrorText] = useState('');
    const nav = useNavigate();

    const handelRow=(row)=>{
        nav('/editor/chargeActivityTypeDetails')
        const id=row.chargeActivityId;
        const projectName=row.project_Info.name;
        const projectId=row.project_Info.projectId;
        const chargeCode=row.chargeCode;
        const activityType=row.activityType;
        const task=row.task;
        const description=row.descriptions;
        const note=row.notes;
        //console.log(id,projectName,chargeCode,activityType,task,description,note);
        setChargeActivityId({id});
        setChargeProjectName({projectName});
        setChargeProjectId({projectId});
        setChargeCode({chargeCode});
        setActivityType({activityType});
        setChargeTask({task});
        setChargeDescription({description});
        setChargeNote({note});
    }
    const handleDataFetch = () => {
        setIsProcessing(true)
        axios
            .get(API)
            .then((res) => {
                console.log('Data Process Successfuly');
                console.log(res.data);
                setApiData(res.data.data)
                setFilterApiData(res.data.data);
            })
            .catch((err) => {
                console.log('Data Process Error');
                console.log(err)
                setErrorText(err.message);
                setIsError(true)
            })
            .finally(() => setIsProcessing(false))
    }
    const columns = [
        {
            name: 'Charge Code',
            selector:'chargeActivityId',
            selector:'notes',
            selector: 'chargeCode',
            sortable: true,
            style:{
                color:'blue',
            },
            cell:(row) => <div className='cursor-pointer' onClick={()=> handelRow(row)}>{row.chargeCode}</div>
        },
        {
            name: 'Activity Type',
            selector: 'activityType',
            sortable: true
        },
        {
            name: "Project",
            selector: 'project_Info.name',
            sortable: true
        },
        {
            name: 'Task',
            selector: 'task',
            sortable: true
        },
        {
            name: 'Description',
            selector: 'descriptions',
            sortable: true
        }
    ];

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

    useEffect(() => {
        setIsProcessing(true);
        handleDataFetch()
    }, [])

    const handleFilter = (e) => {
        const newData = filterApiData.filter(row => row.chargeCode.toLowerCase().includes(e.target.value.toLowerCase()));
        setApiData(newData)
    }
    return (
        <div className='flex flex-col px-12 py-4'>
            {
                isProcessing ?
                    <div className='flex justify-center items-center w-full py-20 mt-20'>
                        <h2 className='text-3xl text-slate-400 font-medium mt-20 py-20'>Loading data.....</h2>
                    </div> :
                    <>
                        {
                            isError ? (
                                <div className='flex justify-center items-center w-full py-20 mt-20'>
                                    <h2 className='text-3xl text-slate-400 font-medium mt-20 py-20'>{errorText}</h2>
                                </div>
                            ) :
                                (
                                    <>
                                        <div className='flex justify-end mb-2'>
                                            <input className='outline-none border-5 border-gray-400 rounded px-4 py-2' placeholder='Search here' type='text' onChange={handleFilter} />
                                        </div>
                                        <DataTable
                                            columns={columns}
                                            data={apiData}
                                            pagination
                                            paginationPerPage={10}
                                            paginationRowsPerPageOptions={[4, 5, 6, 7, 10]}
                                            highlightOnHover
                                            customStyles={customStyle}

                                        />
                                        <div className='flex justify-end mt-4'>
                                            <button onClick={() => nav('/editor/createChargeActivity')} className='relative inline-flex px-8 py-3 font-semibold text-xl traking-widset bg-slate-400  hover:bg-slate-600 hover:text-white rounded-full mr-10 bg-gray-300'>ADD</button>
                                        </div>
                                    </>
                                )
                        }
                    </>
            }
        </div>
    )
}
export default ChargeActivityTypeHome;