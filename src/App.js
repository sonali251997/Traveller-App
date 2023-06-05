import Login from "./components/Form/Login";
import Registration from "./components/Form/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="Registration" element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
