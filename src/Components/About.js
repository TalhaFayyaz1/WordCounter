import React, {useState} from "react";

export default function About() {
     const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
     })
     const [btntext, setBtnText] = useState("Change Color Mode")
     
     const toggleStyle = ()=>{
       if(myStyle.color === 'black'){
        setMyStyle({
            color: 'white',
            backgroundColor: 'black',
            border: '2px solid white'
        })
        setBtnText("Enable Light Mode")
       }
       else setMyStyle({
        color: 'black',
        backgroundColor: 'white'
       })
       setBtnText("Enable Dark Mode");
     }
    

  return (
    <div classNameName="container">
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Change the Text in UpperCase.</strong> Our web is for the
              Text Ediding in first place we have a UpperCase button to change
              the letters in UpperCase by clicking the button when you click the
              button the paragraphbor words will change in UpperCase This is all
              about UpperCase letters.<code>.accordion-body</code>, though the
              transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Change the Text in LowerCase.</strong> Our web is for the
              Text Ediding in second place we have a LowerCase button to change
              the letters in LowerCase by clicking the button when you click the
              button the paragraphbor words will change in LowerCase This is all
              about UpperCase letters.<code>.accordion-body</code>, though the
              transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Clear all the Text .</strong>When the user click the
              button the text in the box and the text in the preview will be
              cleared and the screen will be shown blank .
              <code>.accordion-body</code>, though the transition does limit
              overflow.
            </div>
          </div>
        </div>
      </div>
       <div className="container my-1">
        <button onClick={toggleStyle} type="button" className="btn btn-secondary my-2">{btntext}</button>
       </div>

    </div>
  );
}
