import React,{useState} from 'react';
import Alert from './components/Alert';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
function App(){
  const [mode,setMode]=useState("light");
  const[alert,setAlert]=useState(null);
  const[modeText,setModeText]=useState("Enable Dark Mode")
const toogleMode=()=>{
  if(mode=="light"){
    setMode("dark");
    document.body.style.backgroundColor="#042743";
    showAlert("Dark mode has been enabled",'success');
    document.title='textutils dark mode';
    // setInterval(() => {
    //   document.title='textutil is amazing';
    // }, 2000);
    // setInterval(() => {
    //   document.title='textutil is very good';
    // }, 1500);
  }
  else{
    setMode("light");
    document.body.style.backgroundColor="white";
    showAlert("Light mode has been enabled",'success');
    document.title='textutils light mode';
  }
}
const showAlert=(message,type)=>{
setAlert({
  msg: message,
  type: type
});
}

  return(
  <>
  <Alert alert={alert}/>
    <Navbar title="TextUtils" aboutText="About"  mode={mode} tooglemode={toogleMode}    />
<TextForm showAlert={showAlert} heading="Entert he text to analyze below" mode={mode}/>
<About/>
 
{/* <Router> */}
  
   
    {/* <div className="container">
      <Routes>
        <Route path="/about" element={<About  />} />
        <Route path="/" element={<TextForm/>} />
      </Routes>
      </div>
    </Router> */}
   
  </>
  );
}

export default App;
