import Navbar from './components/Navbar';
import Textform from './components/Textform';
import './App.css';
import About from './components/About';
import React, {useState} from "react";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//automatically included when we type <Navbar>
// this is app

function App() {
  const [mode, setmode] = useState('light'); //whether dark mode is enabled
  const [alert, setalert] = useState(null); 

  const showAlert=(message,type)=>{
      setalert({
        msg:message,
        type: type
      })
      setTimeout(() => {
        setalert(null);
      }, 3000);
  }
  const toggleMode = ()=>{
    if(mode == 'light'){
      setmode('dark');
      document.body.style.backgroundColor='black'
      showAlert('Dark mode has been enabled','success')
      document.title='TextUtils -Dark Mode'
    }
    else{ 
      setmode('light');
      document.body.style.backgroundColor='white'
      showAlert('Light mode has been enabled','success')
      document.title='TextUtils -Light Mode'
    }
  } 
  return (
    <>                     
       <Navbar mode={mode} toggleMode={toggleMode}/>  
       <Alert alert={alert}/>
       {/* container is the defined class in bootstrap which center the text and my-3  3pxis spacing in y-axis */}
       <Router>
          <Switch>
            {/* foe exact url match  */}
          <Route exact path="/about"  > <About />
          </Route>
          
          <Route exact path="/" > <Textform  showAlert={showAlert} heading ="Enter text to analyze" mode={mode}/>
         
          </Route>
          </Switch>
               
         </Router>
      
      
           
    </>
  );
}
// function App() {
//   return (
//     <>                     {/*these are user defined userr wish can name anything  title/aboutText */}
//        {/* <Navbar title="TextUtil" aboutText="text"/> */}
//        <Navbar/>        
//        {/* nothing is set here so defaullt values are thrown ,if it has no default value and it.isRequired then it would throw error  */}
       
//     </>
//   );
// }

export default App;
