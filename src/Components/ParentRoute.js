import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import ClientHome from "./Editor/Client/ClientHome";
import AddClient from "./Editor/Client/AddClient";
import Home from "./Editor/Home";
import ClientSideBar from './Sidebar/ClientSideBar';
import Role from "./Role";
import ClientDetails from "./Editor/Client/ClientDetails";
import EditClient from "./Editor/Client/EditClient";
import ProjectHome from "./Editor/Project/ProjectHome";
import AddProject from "./Editor/Project/AddProject";
import ProjectDetails from "./Editor/Project/ProjectDetails";
import EditProject from "./Editor/Project/EditProject";
import ChargeActivityTypeHome from "./Editor/ChargeActivityType/ChargeActivityTypeHome";
import CreateChargeActivityType from "./Editor/ChargeActivityType/CreateChargeActivityType";
import ChargeActivityTypeDetails from "./Editor/ChargeActivityType/ChargeActivityTypeDetails";
import EditChargeActivityType from "./Editor/ChargeActivityType/EditChargeActivityType";
import EmployeeHome from "./Editor/Employees/EmployeeHome";
import AddEmployee from "./Editor/Employees/AddEmployee";
import EmployeDetails from "./Editor/Employees/EmployeDetails";
import EditEmployee from "./Editor/Employees/EditEmployee";
import TimesheetSettingHome from "./Editor/TimesheetSetting/TimesheetSettingHome";
import AddTimesheetSetting from "./Editor/TimesheetSetting/AddTimesheetSetting";
import TimesheetSettingDetails from "./Editor/TimesheetSetting/TimesheetSettingDetails";
import EditTimesheetSetting from "./Editor/TimesheetSetting/EditTimesheetSetting";
import TaskAllocationHome from "./Editor/TaskAllocation/TaskAllocationHome";
import AddTaskAllocation from "./Editor/TaskAllocation/AddTaskAllocation";
import TaskDetails from "./Editor/TaskAllocation/TaskDetails";
import EditTask from "./Editor/TaskAllocation/EditTask";
import RepoteeSideBar from "./Sidebar/RepoteeSideBar";

import MyDashbord from "./Repotee/MyDashbord/MyDashbord";
import Employee_Home from "./Repotee/Employee/Employee_Home";
import Employe_Details from "./Repotee/Employee/Employe_Details";
import TimesheetSetting_Home from "./Repotee/TimesheetSetting/TimesheetSetting_Home";
import Add_TimesheetSetting from "./Repotee/TimesheetSetting/Add_TimesheetSetting";
import TimesheetSetting_Details from "./Repotee/TimesheetSetting/TimesheetSetting_Details";
import TaskAllocation_Home from "./Repotee/TaskAllocation/TaskAllocation_Home";
import Task_Details from "./Repotee/TaskAllocation/Task_Details";
import Add_TaskAllocation from "./Repotee/TaskAllocation/Add_TaskAllocation";
import Edit_Task from "./Repotee/TaskAllocation/Edit_Task";
import MyTimesheet from "./Repotee/MyTimesheet/MyTimesheet";
import AddMyTimesheet from "./Repotee/MyTimesheet/AddMyTimesheet";
import AdminDashbord from "./Editor/AdminDashbord/AdminDashbord";
import TeamDashbord from "./Repotee/TeamDashbord/TeamDashbord";
import Status from "./Repotee/MyTimesheet/Status";
import ApprovalsHome from "./Editor/Approvals/ApprovalsHome";
const ParentRoute = () => {
   return (
      <div>
         <Router>
            <div className="bg-gradient-to-r from-indigo-950 to-indigo-800 ...">
               <NavBar />
            </div>
            <Routes>
               <Route path="/" element={<Role />} />
               <Route path="/editor" element={<ClientSideBar />}>
                  <Route path="adminDashbord" element={<AdminDashbord/>}/>

                  <Route path="client" element={<ClientHome />} />
                  <Route path="addClient" element={<AddClient />} />
                  <Route path="clientDetails" element={<ClientDetails />} />
                  <Route path="editClient" element={<EditClient />} />

                  <Route path="project" element={<ProjectHome />} />
                  <Route path="addProject" element={<AddProject />} />
                  <Route path="projectDetails" element={<ProjectDetails />} />
                  <Route path="editProject" element={<EditProject />} />

                  <Route path="chargeActivity" element={<ChargeActivityTypeHome />} />
                  <Route path="createChargeActivity" element={<CreateChargeActivityType />} />
                  <Route path="chargeActivityTypeDetails" element={<ChargeActivityTypeDetails />} />
                  <Route path="editChargeActivityType" element={<EditChargeActivityType />} />

                  <Route path="employee" element={<EmployeeHome />} />
                  <Route path="addEmployee" element={<AddEmployee />} />
                  <Route path="employeeDetails" element={<EmployeDetails />} />
                  <Route path="editEmployee" element={<EditEmployee />} />

                  <Route path="timesheetSetting" element={<TimesheetSettingHome />} />
                  <Route path="addTimeSheetSetting" element={<AddTimesheetSetting />} />
                  <Route path="timesheetSettingDetails" element={<TimesheetSettingDetails />} />
                  <Route path="editTimesheetSetting" element={<EditTimesheetSetting />} />

                  <Route path="taskAllocation" element={<TaskAllocationHome />} />
                  <Route path="addTask" element={<AddTaskAllocation />} />
                  <Route path="taskDetails" element={<TaskDetails />} />
                  <Route path="editTask" element={<EditTask />} />

                  <Route path="approvals" element={<ApprovalsHome/>}/>
               </Route>

               <Route path="/viewer" element={<RepoteeSideBar />} />

               <Route path="/repotingLead" element={<RepoteeSideBar />} >
                  <Route path="teamDashbord" element={<TeamDashbord/>}/>

                  <Route path="myDashbord" element={<MyDashbord />} />

                  <Route path="employee" element={<Employee_Home />} />
                  <Route path="employeeDetails" element={<Employe_Details />} />

                  <Route path="timesheetSetting" element={<TimesheetSetting_Home />} />
                  <Route path="addTimeSheetSetting" element={<Add_TimesheetSetting />} />
                  <Route path="timesheetSettingDetails" element={<TimesheetSetting_Details />} />

                  <Route path="taskAllocation" element={<TaskAllocation_Home />} />
                  <Route path="addTask" element={<Add_TaskAllocation />} />
                  <Route path="taskDetails" element={<Task_Details />} />
                  <Route path="editTask" element={<Edit_Task />} />

                  <Route path="myTimesheet" element={<MyTimesheet />} />
                  <Route path="addMyTimesheet" element={<AddMyTimesheet />} />
                  <Route path="status" element={<Status/>}/>
               </Route>
            </Routes>
            {/* <SideBar/> */}
         </Router>
      </div>
   )
}
export default ParentRoute;