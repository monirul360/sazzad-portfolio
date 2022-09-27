import { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './Admin.css';
import About from './Page/About/About';
import Contact from './Page/Contact/Contact';
import Addwork from './Page/Dashboard/Addwork/Addwork';
import Dashboard from './Page/Dashboard/Dashboard';
import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login';
import Require from './Page/Require/Require';
import Infowork from './Page/works/Infowork';
import Works from './Page/works/Works';
import View from './Page/Dashboard/View';
import AllPosts from './Page/Dashboard/AllPosts/AllPosts';

function App() {

  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  }

  return (
    <>
      <Wrapper>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route path='/work' element={<Works></Works>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/infowork/:id' element={<Infowork></Infowork>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/addwork' element={<Addwork></Addwork>}></Route>
          <Route path='/dashboard' element={
            <Require>
              <Dashboard></Dashboard>
            </Require>
          }>
            <Route index element={<View></View>}></Route>
            <Route path='addwork' element={<Addwork></Addwork>}></Route>
            <Route path='AllPosts' element={<AllPosts></AllPosts>}></Route>

          </Route>
        </Routes>
      </Wrapper>
      <ToastContainer />
    </>
  );
}

export default App;
