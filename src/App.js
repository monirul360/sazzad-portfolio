import { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import Contact from './Page/Contact/Contact';
import Home from './Page/Home/Home/Home';
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
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
