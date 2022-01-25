import logo from './logo.svg';
import './App.css';
// this is app
// In react we have two type of components one is function based component and other is object based component 
// earlier class based components were used but nowadays object based components 
// since this is .js file everything inside is javascript
// JSX is also javascript
// JSX is html but it has mask of javascript still be called javascript but it is html only lol

function App() {
  return (
    // JSX will return only one enclosing tag
    //this is JSX( it is html code with extension of javascript ( javascript is written in curly bracket)
    // this is how comment is written in React JSX
    //class is written as className
    <>  {/*  we can return multiple tags(JSX fragment) by enclosing under one tag*/ }
    {/* // <h1>return only one tag</h1> //show syntax error */}
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        "for" is a reserved keyword of javascript so we have to write replace it in our html as
        htmlFor
        <a 
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with harry
        </a>
      </header>
    </div>
    {/* ending of JSX      ) */}
    </>
  );
}

export default App;
