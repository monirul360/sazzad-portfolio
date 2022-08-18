import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Page/About/About';
import Animation from './Page/Animation/Animation';
import Contact from './Page/Contact/Contact';
import Footer from './Page/Share/Footer/Footer';
import Works from './Page/works/Works';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Works></Works>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='/Animation' element={<Animation></Animation>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
