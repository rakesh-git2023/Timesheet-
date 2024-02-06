import React, { useContext } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
const API = "https://timesheetapplication.onrender.com/mytimesheet/1000";
const ApprovalsHome = () => {
  const [apiData, setApiData] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorText, setErrorText] = useState("");
  const nav = useNavigate();
  const [value, setValue] = useState("");

  const selectStyle = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "none" : "none",
      padding: 1,
      backgroundColor: "white",
    }),
  };
  const options = [
    { value: "Active", label: "Active" },
    { value: "inactive", label: "inactive" },
  ];

  const handleDataFetch = () => {
    setIsProcessing(true);
    axios
      .get(API)
      .then((res) => {
        console.log("Data Process Successfuly");
        console.log(res.data);
        setApiData(res.data.data);
      })
      .catch((err) => {
        console.log("Data Process Error");
        console.log(err);
        setErrorText(err.message);
        setIsError(true);
      })
      .finally(() => setIsProcessing(false));
  };
  const handelRow = (row) => {
   
  }
  const columns = [
    {
      name: "Week",
      selector: "weekRange.range",
      sortable: true,
      style: {
        color: 'blue',
      },
      cell: (row) => <div className='cursor-pointer' onClick={() => handelRow(row)}>{row.weekRange.range}</div>
    },
    {
      name: "Total Hours",
      selector: "totalHours",
      sortable: true,
    },
    {
      name: "Status",
      selector: "statusUpdatedAt",
      sortable: true,
    },
    {
        name: "Billable",
        selector: "statusUpdatedAt",
        sortable: true,
      },
      {
        name: "Employee",
        selector: "statusUpdatedAt",
        sortable: true,
      },
  ];

  const customStyle = {
    headRow: {
      style: {
        backgroundColor: "#b0c4de",
        color: "black",
      },
    },
    headCell: {
      style: {
        fontSize: "16px",
        fontWeight: "600",
        TextTransform: "uppercase",
      },
    },
    cells: {
      style: {
        fontSize: "15px",
      },
    },
  };

  useEffect(() => {
    setIsProcessing(true);
    handleDataFetch();
  }, []);
  return (
    <div className="flex flex-col px-12 py-3">
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
                    <div className="flex gap-8 mb-1">
                      <div className="flex gap-4 items-center">
                        <span className="font-medium text-slate-600 text-lg">Year:</span>
                        <div className="w-48">
                        <Select
                          styles={selectStyle}
                          options={options}
                          defaultValue={value}
                          onChange={setValue}
                          isSearchable
                        />
                        </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <span className="font-medium text-slate-600 text-lg">RL/PL:</span>
                        <div className="w-48">
                        <Select
                          styles={selectStyle}
                          options={options}
                          defaultValue={value}
                          onChange={setValue}
                          isSearchable
                        />
                        </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <div className="flex flex-col">
                        <span className="font-medium text-slate-600 text-lg">Direct</span>
                        <span className="font-medium text-slate-600 text-lg">Repotess:</span>
                        </div>
                        <div className="w-48">
                        <Select
                          styles={selectStyle}
                          options={options}
                          defaultValue={value}
                          onChange={setValue}
                          isSearchable
                        />
                        </div>
                      </div>
                      <div className="flex gap-4 items-center">
                        <span className="font-medium text-slate-600 text-lg">Status</span>
                       <div className="w-48">
                       <Select
                          styles={selectStyle}
                          options={options}
                          defaultValue={value}
                          onChange={setValue}
                          isSearchable
                        />
                       </div>
                      </div>
                    </div>
                    <DataTable
                      columns={columns}
                      data={apiData}
                      pagination
                      paginationPerPage={10}
                      paginationRowsPerPageOptions={[5, 10]}
                      highlightOnHover
                      customStyles={customStyle}
                      onRowDoubleClicked={() => nav("/repotingLead/status")}
                    />
                    <div className="flex justify-end mt-2">
                      <button
                        className="relative inline-flex px-9 py-2 font-semibold text-xl traking-widset bg-slate-400  hover:bg-slate-600 hover:text-white rounded-full mr-10 bg-gray-300"
                        onClick={() => nav('/repotingLead/addMyTimesheet')}
                      >
                        ADD
                      </button>
                    </div>
                  </>
                )
            }
          </>
      }
    </div>
  );
};
export default ApprovalsHome;