import { Route, Routes } from "react-router-dom";
import AssignProblem from "./components/tech/assignedProb";
import AddUser from "./pages/addUser";
import AdminPage from "./pages/adminPage";
import AllSolutionPage from "./pages/allSolnPage";
import DetailPage from "./pages/detailPage";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import ProblemAddPage from "./pages/probAddPage";
import SolutionPage from "./pages/solutionPage";
import UserProblem from "./pages/userProblem";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/"  element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/admin/addUser" element={<AddUser/>} />
        <Route path="/user/addProblem" element={<ProblemAddPage/>} />
        <Route path="/problem/detail" element={<DetailPage/>}/>
        <Route path="/tech/assignedProblem" element={<AssignProblem/>} />
        <Route path="/problem/solution" element={<SolutionPage/>}/>
        <Route path="/solutions" element={<AllSolutionPage/>} />
        <Route path="/user/problems" element={<UserProblem/>} />
      </Routes>
    </div>
  );
}

export default App;
