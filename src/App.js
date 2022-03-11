import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import {BrowserRouter,Routes,  Route} from "react-router-dom";
import Blog from './pages/Blog/Listing'
import Coupons from './pages/Coupons/Listing'
import ServiceCategory from './pages/Service-Category/Listing'
import ServiceProvider from './pages/Service-Provider/Listing'
import Users from './pages/Users/Listing' 
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Nopagefound from './pages/Nopagefound';
import Forgotpassword from './pages/forgot-password';
import Viewprofile from './pages/Profile/Viewprofile';
import AddBlog from './pages/Blog/Add'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<Forgotpassword />} />
        <Route path="*" element={<Nopagefound />} />
        <Route path="/" element={<Layout />} >

          
        <Route  index path="" element={<Dashboard />} />
        <Route  path="blog" element={<Blog />} />
        <Route  path="/addblog" element={<AddBlog />} />
        
        <Route  path="coupons" element={<Coupons />} />
        <Route  path="service-category" element={<ServiceCategory />} />
        <Route  path="service-provider" element={<ServiceProvider />} />
        <Route  path="users" element={<Users />} />
        <Route path="viewprofile" element={<Viewprofile />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
