import Login from "./components/Form/Login";
import Registration from "./components/Form/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/containers";
import { routes } from "./constants/url";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.REGISTRATION} element={<Registration />} />
        <Route path={routes.HOME} element={<Home />} />

        {/* <Route path={routes.ABOUTUS} element={<AboutUs />} />
        <Route path={routes.SERVICES} element={<Services />} />
        <Route path={routes.CONTACTUS} element={<ContactUs />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
