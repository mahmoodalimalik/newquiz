import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import photo1 from "/countries.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import QuizDisplay from "./quizDisplay";
import { questions } from "./quizQuestions";

function QuizCard() {

const [statusUpdate,setStatusUpdate]=useState(true);


const updateStatus=()=>
{
  setStatusUpdate(false);
};
  return (
    <>
    {statusUpdate?(
      <div className="div mt-5">
        <div
          className="div"
          style={{
            backgroundImage: `url(${photo1})`,
            // backgroundImage: `url(${externalImage})`,
            backgroundSize: "860px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            height: "500px",
            minWidth: "200px",
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              width: "50",
              position: "absolute",
              top: "60%",
              left: "50%",
              minWidth: "200px",
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className="card text-center mb-1 card-center">
              <div style={{ border: "solid" }}>
                {" "}
                <p className="card-title">Countries Related</p>
              </div>

              <div className="card-body">
                <p className="card-text">Flags belong to, which country?</p>
                <Button variant="primary"  onClick={updateStatus}>Start</Button>
                <br />
                <div
                  style={{
                    width: "auto",
                    position: "absolute",
                    top: "90%",
                    left: "30%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <h6>20 Questions</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      )
      : ( <QuizDisplay {...questions}/>)
      }
      </>
  );
}

export default QuizCard;
