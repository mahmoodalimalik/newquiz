
import React from "react";
import { useState } from "react";
export default  function QuizDisplay(props) {

  const [showQuiz, setShowquiz] = useState(0);
  const [selectedOptionindex, setSelectedOptionIndex] = useState(-1);
  
  const [userSelectedValue, setUserSelectedValue] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [result, setResult] = useState(true);

  const restart=()=>{

    setResult(true);
    setShowquiz(0);
    setTotalScore(0);
    setSelectedOptionIndex(-1);

  }

  const onOptionSelected = (selectedOptionindex) => {
    setSelectedOptionIndex(selectedOptionindex);

  };

  const nextQuestion = () => {
    if (selectedOptionindex === props[showQuiz].correctOptionIndex) {
      setTotalScore(totalScore+1);
    } 
    setUserSelectedValue[showQuiz]=props[showQuiz].Options[selectedOptionindex];
    setShowquiz(showQuiz+1);
    
  } 
  

return (
  <>
  
  <div className="container my-5">
          <div className="div mb-5"   key={props[showQuiz]?.id}>
            <h4> Progress : {showQuiz + 1} / 5     Total Score : {totalScore}</h4>
            <div className="div"
                      >
               {props[showQuiz].image}
              
            </div>

            <ul className="list-group list-group-flush">
              {props[showQuiz].Options.map((op, index) => (
               <button className="btn btn-white btn-sm mt-3">
               <li
                  className={ 
                    selectedOptionindex === index
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                  Key={index}
                  onClick={() => onOptionSelected(index)}
                >
                  {op} 
                </li></button>
              ))}
            </ul>
          </div>

          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={nextQuestion}
            >
              {" "}
              Next Question{" "}
            </button>
          </div>
          </div>
  
  </>
)
}