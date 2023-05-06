
import Head from './myCompnents/Head.js';
import './App.css';
import Body from './myCompnents/Body';
import { Footer } from './myCompnents/Footer';
import About from './myCompnents/About';
import Region from './myCompnents/Region.js';
import Form from './myCompnents/Form.js';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
      <Head/>
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route path='/Form' element={<Form/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Region' element={<Region/>}/>
        </Routes>
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
