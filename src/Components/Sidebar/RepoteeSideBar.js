import { useState } from "react";
import React from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { PiList } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { IoIosPeople } from "react-icons/io";
import { FaRegFlag } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { CiExport } from "react-icons/ci";
import { IoLogoGameControllerB } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa";
import { GoStack } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { Link, Outlet } from "react-router-dom"; 
 
const RepoteeSideBar = () => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState('teamDashbord');
  const handelAction = (action) => {
    setActive(action);
  }
  return (
    <>
      <div className="flex">
        <div
          className={`bg-blue-950 h-100vh p-5 pt-8 ${open ? "w-72" : "w-20"
            } duration-300 relative`}
        >
          <BsArrowLeftShort
            className={`bg-white text-slate-900 text-3xl rounded-full absolute -right-3 top-4 border border-slate-900 cursor-pointer ${!open ? "rotate-180" : ""
              }`}
            onClick={() => setOpen(!open)}
          />
           <Link to='teamDashbord' onClick={()=>handelAction('teamDashbord')}>
          <div className={active==='teamDashbord' ? '  flex gap-2 mt-5 cursor-pointer p-2 rounded-md bg-indigo-500':' flex gap-2 mt-5 cursor-pointer p-2 rounded-md'}>
            <PiList className={`text-2xl text-white rounded cursor-pointer block float-left mr-2 ${active!=='adminDashbord' && 'hover:text-fuchsia-600'}`} />
            <span
              className={`text-white origin-left font-medium text-lg duration-300 ${active!=='adminDashbord' && 'hover:text-fuchsia-600'}  ${!open ? "scale-0" : ""
                }`}
            >
              Team Dashboard
            </span>
          </div>
          </Link>
          <div
            className={`flex items-center rounded-md bg-slate-300 mt-6 ${!open ? "px-2.5" : "px-4"
              } py-2`}
          >
            <BsSearch
              className={`text-white text-lg block float-left cursor-pointer ${open ? "mr-2" : ""
                }`}
            />
            <input
              type={"search"}
              placeholder="Search"
              className={`text-base bg-transparent w-full text-white focus:outline-none ${!open ? "hidden" : ""
                }`}
            />
          </div>
 
          <ul className="pt-2">
            <Link to='myDashbord' onClick={()=>handelAction('myDashbord')}>
              <li
                className={active === 'myDashbord' ? 'text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 bg-indigo-500' : 'text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-fuchsia-600 rounded-md mt-2'}
              >
                <span className="text-2xl block float-left ">
                  <IoIosPeople />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${!open ? "hidden" : ""
                    }`}
                >
                  My Dashboard
                </span>
              </li>
            </Link>
            <Link to="employee" onClick={()=>handelAction('employee')}>
              <li
                className={active === 'employee' ? 'text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 bg-indigo-500' : 'text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-fuchsia-600 rounded-md mt-2'}
 
              >
                <span className="text-2xl block float-left ">
                <IoHomeOutline />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${!open ? "hidden" : ""
                    }`}
                >
                  Employee
                </span>
              </li>
            </Link >
            <Link to='timesheetSetting' onClick={()=>handelAction('timesheetSetting')}>
              <li
                className={active === 'timesheetSetting' ? 'text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 bg-indigo-500' : 'text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-fuchsia-600 rounded-md mt-2'}
 
              >
                <span className="text-2xl block float-left ">
                <IoSettingsOutline />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${!open ? "hidden" : ""
                    }`}
                >
                  Timesheet Setting
                </span>
              </li>
            </Link>
            <Link to='taskAllocation' onClick={()=>handelAction('taskAllocation')}>
              <li
                className={active === 'taskAllocation' ? 'text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 bg-indigo-500' : 'text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-fuchsia-600 rounded-md mt-2'}
 
              >
                <span className="text-2xl block float-left ">
                <CiBookmark />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${!open ? "hidden" : ""
                    }`}
                >
                  Task Allocation
                </span>
              </li>
            </Link>
            <Link to='myTimesheet' onClick={()=>handelAction('myTimesheet')}>
              <li
                className={active === 'myTimesheet' ? 'text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 bg-indigo-500' : 'text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-fuchsia-600 rounded-md mt-2'}
 
              >
                <span className="text-2xl block float-left ">
                <HiOutlineSquares2X2 />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${!open ? "hidden" : ""
                    }`}
                >
                  My Timesheet
                </span>
              </li>
 
            </Link>
            <Link to='/approvals' onClick={()=>handelAction('approvals')}>
              <li
                className={active === 'approvals' ? 'text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 bg-indigo-500' : 'text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-fuchsia-600 rounded-md mt-2'}
 
              >
                <span className="text-2xl block float-left ">
                  <FaRegNewspaper />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${!open ? "hidden" : ""
                    }`}
                >
                  Approvals
                </span>
              </li>
            </Link>
            <Link to='/evalution-setting' onClick={()=>handelAction('evalution-setting')}>
              <li
                className={active === 'approvals' ? 'text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 bg-indigo-500' : 'text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-fuchsia-600 rounded-md mt-2'}
 
              >
                <span className="text-2xl block float-left ">
                  <IoLogoGameControllerB />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${!open ? "hidden" : ""
                    }`}
                >
                  Evaluation Setting
                </span>
              </li>
 
            </Link>
            <Link to='/'>
              <li
                className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:text-fuchsia-600 rounded-md mt-2"
 
              >
                <span className="text-2xl block float-left ">
                  <GoStack />
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${!open ? "hidden" : ""
                    }`}
                >
                  Role Change
                </span>
              </li>
            </Link>
          </ul>
        </div>
 
        <div className="container bg-slate-200 h-svh w-full">
          <Outlet/>
          {/* <ChildRoute/> */}
        </div>
      </div>
    </>
  );
}
 
export default RepoteeSideBar;
