
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
          <Route path='/form' element={<Form/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/region' element={<Region/>}/>
        </Routes>
      </Router>
      <Footer/>
      
    </div>
  );
}

export default App;
