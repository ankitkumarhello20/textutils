// type rfc react based component

// type impt 
import PropTypes from 'prop-types';
import React, {useState} from "react";

export default function Textform(props) {
    //  written inside react functional component 
    const [text, setText] = useState("Enter yur text2a");
    // text="new text"  wrong way to analyxe the text 
    // setText="new text" correct way to analyze the text 
    const handleUpClick=()=>{
        // console.log("Uppercase is clicked" +text)
        let newText= text.toUpperCase()
        // setText("You have clicked on h")
        setText(newText)
        props.showAlert('Converted to Uppercase','success')
    }
    const handleLowClick=()=>{
        let newText= text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to Lowercase','success')
    }
    const handleClearText=()=>{
        let newText= ""
        setText(newText)
        props.showAlert('Cleared text','success')
    }
    const handleOnChange=(event)=>{
        // console.log("on change")
        setText(event.target.value)
    }
    const handleCopyText = ()=>{
        var text =document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to keyboard','success')
    }
    const handleExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Removed extra spaces','success')
    }
    return (
        <>
        <div className='container' style={{color:props.mode=== 'dark'?'white': 'black'}} >
            <h1 style={{color:props.mode=== 'dark'?'white': 'black'}} >{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control"style={{backgroundcolour: props.mode=='dark'? 'Grey': 'white'}}
 value={text} onChange ={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            {/* type button.btn.btn.primary class is defined in bootstrap */}
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopyText}>Copy text</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode=== 'dark'?'white': 'black'}}>
            <h1 style={{color:props.mode=== 'dark'?'white': 'black'}} >Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length } Minutes read</p>
            <h3>Preview</h3>
            <p> {text}</p>
        </div>
        </>
    );
}
