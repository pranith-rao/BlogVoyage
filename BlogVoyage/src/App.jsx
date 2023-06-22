import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterComponent from "./Components/RegisterComponent/RegisterComponent";
import LoginComponent from "./Components/LoginComponent/LoginComponent";
import HomeComponent from "./Components/HomeComponent/HomeComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeComponent />}></Route>
          <Route path="/register" exact element={<RegisterComponent />}></Route>
          <Route path="/login" exact element={<LoginComponent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
