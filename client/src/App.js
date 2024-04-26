import logo from './logo.png';
import logo1 from './logo1.png';
import logo2 from './logo2.jpeg';
import logo5 from './logo5.jpg';
import logo3 from './logo3.png';
import Login from "./components/Login";
import  About  from "./components/About";
import  Contact  from "./components/Contact";
import  Fertilizers  from "./components/Fertilizers";
import  Navigation  from "./components/Navigation";
import Registraion from "./components/Registration";
import Feedback from "./components/Feedback";
import Landing from "./components/Landing";
import Home from './components/Home';
import {MDBContainer} from 'mdb-react-ui-kit';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Marquee from "react-fast-marquee";
import './App.css';
import app2 from './components/app2';
import Payments from './components/Payments';



function App() {
  return (
    <div className="App">
      <Navigation/>
        <div header className="App-header">
        <Marquee>
        <img src={logo} className="App-logo" alt="logo"  />
        <br></br>
        <img src={logo1} className="App-logo" alt="logo1"  />
        <br/>
        <img src={logo5} className="App-logo" alt="logo5"  />
        <img src={logo2} className="App-logo" alt="logo2"  />

        <img src={logo3} className="App-logo" alt="logo3"  />
      </Marquee>

      
        
     </div>
      
     <div className='App-body'>
          <MDBContainer>
            <BrowserRouter>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/reg" element={<Registraion />}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Con" element={<Contact/>}/>
                <Route path="/Land" element={<Landing/>}/>
                <Route path="/fert" element={<Fertilizers/>}/>
                <Route path="/pay" element={<Payments/>}/>
                <Route path="/feed" element={<Feedback/>}/>
                

              </Routes>
              </BrowserRouter>
           </MDBContainer>
    </div>
    </div>


     

  );
}

export default App; 
