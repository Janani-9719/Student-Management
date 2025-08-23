import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './pages/header/Header';
import DashBoard from './pages/dashboard/Dashboard';
import NotFound from './pages/noMatch/NotFound';
import StudentRegistration from './pages/students/StudentRegistration';
import ViewStudents from './pages/students/ViewStudents';
import UpdateStudent from './pages/students/UpdateStudent';

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<DashBoard/>} />
      <Route path='/register' element={<StudentRegistration/>} />
      <Route path='/view' element={<ViewStudents/>} />
      <Route path='/update/:id' element={<UpdateStudent/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </>
  );
}

export default App;
