import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/singlePost/SinglePost";
import Write from "./pages/write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
    <BrowserRouter>
    <Topbar />
    <Routes>
      <Route path="/" exact element={<Homepage></Homepage>}></Route> 
      <Route path="/register" element={currentUser ? <Homepage/> : <Register />} ></Route>
      <Route path="/login" element={currentUser ? <Homepage/> : <Login />} ></Route>
      <Route path="/write" element={currentUser ? <Write /> : <Register />} ></Route>
      <Route path="/settings" element={currentUser ? <Settings /> : <Register/>} ></Route>
      <Route path="/post/:postId" element={<Single />} ></Route> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;