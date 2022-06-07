import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Navigation from "../components/Navigation/Navigation";
const Routing = () => {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/dashboard"></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
