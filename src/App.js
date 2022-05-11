import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Home from './components/hero/Hero'
import Experience from './components/experience/Experience'
import Education from './components/education/Education'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
        {/*  
        <Navbar />
        <Hero /> 
        <Experience />
        <Education />
         <Footer />
        */}
        
     
        <Navbar />
        <Routes>
          <Route path="/"  element={<Home/>}/>
          <Route path="/experience"  element={<Experience/>}/>
          <Route path="/education"  element={<Education/>}/>
          
        </Routes>
      
  
        
      
    
    </div>
  );
}

export default App;
