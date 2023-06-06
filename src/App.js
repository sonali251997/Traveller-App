import Login from "./components/Form/Login";
import Registration from "./components/Form/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/UI/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />}/>
        <Route path="Registration" element={<Registration />}/>
        <Route path="/UI/Home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
