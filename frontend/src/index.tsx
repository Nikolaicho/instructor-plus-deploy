import ReactDOM from "react-dom/client";
import "./index.css";
import AssignClasses from "./components/AssignClass";
import LogIn from "./components/LogIn";
import Documents from "./components/Documents";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import Registry from "./components/Registry";
import ChooseCorporation from "./components/ChooseCorporation";
import ReviewRequests from "./components/ReviewRequests";
import Register from "./components/Register";
import CreateCorporation from "./components/CreateCorporation";
import ThankYou from "./components/ThankYou";
import ClassesUser from "./components/ClassesUser";
import UserOrFirm from "./components/UserOrFirm";
import Home from "./components/HomePage";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

console.log("Backend URL:", process.env.REACT_APP_BACKEND_URL);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/assignClasses" element={<AssignClasses />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/registry" element={<Registry />} />
      <Route path="/reviewRequests" element={<ReviewRequests />} />
      <Route path="/sendRequestToFirm" element={<ChooseCorporation />} />
      <Route path="/createCorporation" element={<CreateCorporation />} />
      <Route path="/ThankYou" element={<ThankYou />} />
      <Route path="/classes/:id" element={<ClassesUser />} />
      <Route path="/userOrFirm" element={<UserOrFirm />} />
    </Routes>
  </Router>
);
