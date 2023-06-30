import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterComponent from "./Components/RegisterComponent/RegisterComponent";
import LoginComponent from "./Components/LoginComponent/LoginComponent";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import BlogsComponent from "./Components/BlogsComponent/BlogsComponent";
import ProfileComponent from "./Components/ProfileComponent/ProfileComponent";
import EditProfileComponent from "./Components/ProfileComponent/EditProfileComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<HomeComponent />}></Route>
          <Route path="/register" exact element={<RegisterComponent />}></Route>
          <Route path="/login" exact element={<LoginComponent />}></Route>
          <Route path="/blogs" exact element={<BlogsComponent />}></Route>
          <Route path="/profile" exact element={<ProfileComponent />}></Route>
          <Route
            path="/edit_profile"
            exact
            element={<EditProfileComponent />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
