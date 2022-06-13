import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../components/Dashboard/Dashboard";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Navigation from "../components/Navigation/Navigation";
import RequireAuth from "../components/RequireAuth";
const Routing = () => {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
