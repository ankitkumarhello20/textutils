
import './App-1.css';
// this is app here we will do changes and make our own app

// later will be served as it is 
let name = "<b>Harry</b>";
function App() {
  return (
    <>
    <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </nav>
    {/* <img src="" alt="" > will throw error */}
    <img src="" alt="" /> 
    unterminated JSX content should not be included otherwise it will throw error
    <div className="container">
        <h1>Hello {name} </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ducimus, provident eos vero aliquam similique sapiente earum vel modi distinctio magni consectetur incidunt dolorem? Maiores numquam vitae culpa saepe nostrum! Laudantium, iste fugiat. Est.</p>
    </div>
    </>
  );
}

export default App;

// change setting it will help
// make sure to change emmet abbreviation as
// javascript : javascriptreact