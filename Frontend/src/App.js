import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterComponent from "./Components/RegisterComponent/RegisterComponent";
import LoginComponent from "./Components/LoginComponent/LoginComponent";
import HomeComponent from "./Components/HomeComponent/HomeComponent";
import BlogsComponent from "./Components/BlogsComponent/BlogsComponent";
import ProfileComponent from "./Components/ProfileComponent/ProfileComponent";
import EditProfileComponent from "./Components/ProfileComponent/EditProfileComponent";
import BlogTemplate from "./Components/BlogsComponent/BlogTemplate";
import ViewBlog from "./Components/BlogsComponent/ViewBlog";
import EditBlogTemplate from "./Components/BlogsComponent/EditBlogTemplate";
import UserViewBlog from "./Components/BlogsComponent/UserViewBlog";

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
          <Route path="/createBlog" exact element={<BlogTemplate />}></Route>
          <Route path="/viewBlog/:id" exact element={<ViewBlog />}></Route>
          <Route
            path="/editBlog/:id"
            exact
            element={<EditBlogTemplate />}
          ></Route>
          <Route path="/userViewBlog/:id" exact element={<UserViewBlog />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
