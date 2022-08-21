import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import Animation from './Page/Animation/Animation';
import Contact from './Page/Contact/Contact';
import Home from './Page/Home/Home/Home';
import Footer from './Page/Share/Footer/Footer';
// import Nav from './Page/Share/Nav/Nav';
import Top from './Page/Top/Top';
import Works from './Page/works/Works';

function App() {
  return (
    <>
      {/* <Nav></Nav> */}
      <Top></Top>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/work' element={<Works></Works>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Animation' element={<Animation></Animation>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
