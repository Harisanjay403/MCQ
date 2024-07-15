 
import {useState} from "react";
import questionData from "./question.json"

export default function App() {
    const [showScore,  setShowScore]=useState(false)
     const [currentQuestion,setCurrentQuestion]=useState(0)   
    const [timer,setTimer]=useState(100)
    
  return (
      <>
          
          <div className="quiz-app">
              {showScore ? (
                          <div className="score-section" >
                              <h2>Your Score : 3/3 </h2>
                              <button>Restart</button>
                          </div>
                      ):(
                          <div className="question-section">
                                  <h2>Question No: {currentQuestion + 1}</h2>
                              
                                  <p>{questionData[currentQuestion].question}</p>
                              
                                  <div className="option">
                                      {questionData[currentQuestion].options.map((option,index)=>(
                                          <button key={index}>{option}</button>
                                      ))}
                                  </div>
                              
                              <div className="timer"> Time left <span>{timer}s</span> </div>
                      </div>
                      )
              
              }
              

              
              
              
          </div>
          
     </>
  )
    
}
    
       


