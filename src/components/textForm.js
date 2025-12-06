import React,{useState} from 'react'

export default function TextForm(props) {
    const handleupclick = () => {
        console.log("uppercase was clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
    }
    const handlelowclick = () => {
        console.log("lowercase was clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const handleonchange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }
    const [text, setText] = useState("enter text here");
    // setText("new text");
  return (
    <>
<div className="contaier">

  -<label htmlFor="myBox" className="form-label">{props.heading}</label>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="6"></textarea>
</div>
</div>
<button className="btn_primary mx-3" onClick={handleupclick}>Convert to Uppercase</button>
<button className="btn_primary mx-3" onClick={handlelowclick}>Convert to Lowercase</button>
<div className="container">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words, {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
</div>
    </>
  )   
}
