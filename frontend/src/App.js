import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddCustomerForApprovement from "./components/customer_for_approvement_page/AddCustomerForApprovement";
import Home from "./components/home/Home";
import Register from "./components/register/Register";
import ProtectedRoute from "./routes/ProtectedRoute";
import Pdf from "./pdf/Pdf"



import CustomerList from "./components/admin/customer_list/CustomerList";
import AdminPage from "./components/admin/AdminPage";
import ReviewerPage from "./components/reviewer/ReviewerPage";
import AgentPage from "./components/agent/AgentPage";
import AgentCustomersList from "./components/agent/agent_customer_list/AgentCustomersList";
import EmployeeList from "./components/admin/employee_list/EmployeeList";
import ReviewList from "./components/review_page/ReviewList";
function App() {
 

  return (
    <div className="App flex flex-col " style={{ height: "100vh" }}>  {/* flex */}
      {/* <AddCustomerForApprovement/>  */}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
 
      
      
        <Route
          exact
          path="/agent"
          element={<ProtectedRoute Component={AddCustomerForApprovement} />}
        />
        <Route path="/admin_page" element={<AdminPage />}  >
          <Route path="add"  element={<AddCustomerForApprovement/>} />
          <Route index   element={<CustomerList />} />
          <Route path="list"   element={<CustomerList />} />
          <Route path="emplist"   element={<EmployeeList />} />
          <Route path="reviewlist"   element={<ReviewList />} />
        </Route>
        <Route path="/agent_page" element={<AgentPage />}  >
          <Route path="add"  element={<AddCustomerForApprovement/>} />
          <Route  index path="list"   element={<AgentCustomersList />} />
        </Route>
        <Route path="/reviewer_page" element={<ReviewerPage />} />
        <Route path="/pdf" element={<Pdf />} />
      </Routes>
    </div>
  );
}

export default App;
