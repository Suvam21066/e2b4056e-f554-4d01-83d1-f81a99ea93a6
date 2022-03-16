import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Registration from './component/Registration';
import UserDashboard from './component/User/UserDashboard';
import PrivateRoute from './component/PrivateRoute';
import AdminDashboard from './component/Admin/AdminDashboard';
import AddAcademy from './component/Admin/AddAcademy';
import AccessDenied from './component/AccessDenied';
import EnrollCourse from './component/User/EnrollCourse';
import ViewCourse from './component/User/ViewCourse';

function App() {
  return (
    <div className="App" >
      <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Registration />}></Route>

          {/*For Private Routes*/}
          <Route element={<PrivateRoute />}>

            {/*Routes for user role*/}
            <Route element={<PrivateRoute rolerequired="ROLE_USER" />}>
              <Route path="/user-dashboard" element={<UserDashboard />}></Route>
              <Route path='/enrollcourse' element={<EnrollCourse />}></Route>
              <Route path='/viewcourses' element={<ViewCourse />}></Route>
            </Route>

            {/*Routes for admin role*/}
            <Route element={<PrivateRoute rolerequired="ROLE_ADMIN" />}>
              <Route path="/add-academy" element={<AddAcademy />}></Route>
              <Route path="/admin-dashboard" element={<AdminDashboard />}></Route>
              <Route path="/edit-academy/:instituteId" element={<AddAcademy />}></Route>
            </Route>
          </Route>

          <Route path="/accessdenied" element={<AccessDenied />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
