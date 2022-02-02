import React,{useState} from 'react';

export default function TextForm(props) {
 const handleOnChange =(event)=>{
   console.log("On change");
  setText(event.target.value);
 }
const handleUpClick=()=>{
  console.log("Upper Case Was Clicked"+text);
  let newText=text.toUpperCase();
  setText(newText);
}
const handleLowerClick=()=>{
  console.log("Upper Case Was Clicked"+text);
  let newText=text.toLowerCase();
  setText(newText);
}
const handleExtraSpaces = ()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  }
const handleCopy=()=>{
  let text=document.getElementById("mybox");
 
  navigator.clipboard.writeText(text.value);
}
const handleClearClick=()=>{
  let newText="";
  setText(newText);
}
  const [text,setText]=useState('Enter text here');
// text="fkdjk";//Wrong way to change the state
// setText("jfhdj");//correct way to change the state
  return( 
    <>
  <div className='container'style={{color: props.mode==='dark'?'white':'#042743'}}>
  <label for="mybox" class="form-label my-3"><h3>{props.heading}</h3></label>
  <textarea class="form-control" id="mybox" value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
  <button className="btn btn-success m-3 " onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-success m-3 " onClick={handleLowerClick}>Convert to Lowercase</button>
  <button className="btn btn-success m-3 " onClick={handleClearClick}>Clear Text</button>
  <button className="btn btn-success m-3 " onClick={handleExtraSpaces}>Remove Extra spces</button>
  <button className="btn btn-success m-3 " onClick={handleCopy}>Copy Text</button>
</div>
<div className="container"style={{color: props.mode==='dark'?'white':'black'}}>
  <h3> Your text Summary</h3>
  <p>{text.split(/\s+/).length} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
  <h2>Preview</h2>
  <p>{text.length>0?text:'Enter the text to set preview'}</p>
</div>
</>
  )
}
