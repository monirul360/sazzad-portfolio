import { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import Contact from './Page/Contact/Contact';
import Dashboard from './Page/Dashboard/Dashboard';
import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login';
import Require from './Page/Require/Require';
// import Nav from './Page/Share/Nav/Nav';
import Top from './Page/Top/Top';
import Infowork from './Page/works/Infowork';
import Works from './Page/works/Works';

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
      {/* <Nav></Nav> */}
      <Top></Top >
      <Wrapper>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route path='/work' element={<Works></Works>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/infowork/:id' element={<Infowork></Infowork>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/dashboard' element={
            <Require>
              <Dashboard></Dashboard>
            </Require>
          }></Route>
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
