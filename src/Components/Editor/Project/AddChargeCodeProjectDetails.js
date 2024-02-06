import React, { useContext, useState } from "react";
import Select from 'react-select';
import Context from "../../../Context/Context";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
const API = 'https://timesheetapplication.onrender.com/addChargeActivity'
const AddChargeCodeProjectDetails = ({ visible, onClose }) => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');
    const [note, setNote] = useState('');
    const [description, setDescription] = useState('');
    const { projectName, projectId } = useContext(Context);
    const options1 = [
        { value: 'JMCOE0B006', label: 'JMCOE0B006' },
        { value: 'JMSET0B003', label: 'JMSET0B003' },
        { value: 'SETUDS14', label: 'SETUDS14' }
    ];
    const options2 = [
        { value: 'manual testing', label: 'manual testing' },
        { value: 'development', label: 'development' },
        { value: 'SETUDS14', label: 'SETUDS14' }
    ];
    const options3 = [
        { value: 'enhancement-set', label: 'enhancement-set' },
        { value: 'enhancement-sets', label: 'enhancement-sets' },
        { value: 'enhancement-wofco', label: 'enhancement-wofco' },
        { value: 'enhancement-jm&a', label: 'enhancement-jm&a' }
    ];
    const selectStyle = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'none' : 'black',
            padding: 1,
            backgroundColor: "white",
            height: 1
        }),
    }
    const handleSubmit = (e) => {
        // e.preventDefault()
        const req = {
            projectId: projectId.id,
            chargeCode: value1.value,
            activityType: value2.value,
            task: value3.value,
            notes: note,
            descriptions: description
        }
        console.log(req);
        handleAddNewData(req);
        setValue1('')
        setValue2('')
        setValue3('')
        setDescription('')
        setNote('')
        //onClose()

    }
    const handleAddNewData = (req) => {
        axios
            .post(API, req)
            .then((res) => {
                console.log(res.data)
            })
            .catch(err => alert(err.response.data.error))
    }
    const handleClose = (e) => {
        if (e.target.id === 'container')
            onClose();
    }
    if (!visible) {
        return null;
    }
    return (
        <div id="container" className="fixed inset-0 flex items-top justify-end mt-2">
            <div className="bg-white p-2 rounded w-72 h-max">
                <div className="flex py-2 justify-between">
                    <span className="font-semibold text-center text-xl text-slate-900">
                        Add Charge Activity
                    </span>
                    <RxCross1 onClick={onClose} className=" mt-1" />
                </div>
                <div className="flex flex-col mt-2">
                    <div>
                        <h5 className="font-semibold text-gray-700">Project</h5>
                        <input
                            type="text"
                            value={projectName.name}
                            readOnly={true}
                            className="outline-none border border-5 border-gray-300 bg-gray-100 rounded p-1 mb-2 w-60"
                        />
                    </div>
                    <div>
                        <h5 className="font-semibold text-gray-700">Charge Type Or Code</h5>
                        <div className="w-60 ">
                            <Select styles={selectStyle} options={options1} defaultValue={value1} onChange={setValue1} isSearchable />
                        </div>
                    </div>
                    <div>
                        <h5 className="font-semibold text-gray-700">ActivityType</h5>
                        <div className="w-60 ">
                            <Select styles={selectStyle} options={options2} defaultValue={value2} onChange={setValue2} isSearchable />
                        </div>
                    </div>
                    <div>
                        <h5 className="font-semibold text-gray-700">Task</h5>
                        <div className="w-60 ">
                            <Select styles={selectStyle} options={options3} defaultValue={value3} onChange={setValue3} isSearchable />
                        </div>
                    </div>
                    <div>
                        <h5 className="font-semibold text-gray-700">Note</h5>
                        <input
                            type="text"
                            value={note} onChange={(e) => setNote(e.target.value)}
                            className="border border-gray-700 p-1 rounded mb-2 w-60 hover:bg-slate-50"
                        />
                    </div>
                    <div>
                        <h5 className="font-semibold text-gray-700">Description</h5>
                        <input
                            type="text"
                            value={description} onChange={(e) => setDescription(e.target.value)}
                            className="border border-gray-700 p-1 rounded mb-2 w-60 hover:bg-slate-50"
                        />
                    </div>
                </div>
                <div className="text-center mt-2">
                    <button id="container" onClick={handleSubmit} className={(value1!=='' && value2.value!=='' && value3.value!=='')? "px-5 py-2 bg-gray-700 text-white rounded":'border-solid border-2 border-gray-400 bg-slate-100 px-5 py-2 text-slate-500'}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
export default AddChargeCodeProjectDetails;