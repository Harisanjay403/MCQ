
import {useState, useEffect} from "react";
import questionData from "./question.json"

export default function App() {
    const [showScore,  setShowScore]=useState(false)
     const [currentQuestion,setCurrentQuestion]=useState(0)   
    const [timer,setTimer]=useState(10)
    const [score,setScore]=useState(0);

    useEffect(()=>{
        let interval;
        interval=setInterval(()=>{
            if(timer>0 && !showScore){
                 setTimer((prevTimer)=> prevTimer-1 )
            }else{
                clearInterval(interval)
                setShowScore(true)
            }
           
        },1000)
        return ()=> clearInterval(interval)
        
    },[timer,showScore])

    const handleAnswerClick=(selectedOption)=>{
        if(selectedOption===questionData[currentQuestion].correctOption){
            setScore((prevScore)=> prevScore + 1)
        }

        if (currentQuestion<questionData.length-1){
            setCurrentQuestion((prevQuestion)=> prevQuestion + 1)
            setTimer(10)
        }else{
            setShowScore(true)
        }
    }
    const handleRestartQuiz = ()=>{
        setCurrentQuestion(0)
        setScore(0)
        setShowScore(false)
        setTimer(10)
    }
  return (
      <>
          
          <div className="quiz-app">
              {showScore ? (
                          <div className="score-section" >
                              <h2>Your Score : {score}/{questionData.length} </h2>
                              <button onClick={handleRestartQuiz}>Restart</button>
                          </div>
                      ):(
                          <div className="question-section">
                                  <h2>Question No: {currentQuestion + 1}</h2>
                              
                                  <p>{questionData[currentQuestion].question}</p>
                              
                                  <div className="option">
                                      {questionData[currentQuestion].options.map((option,index)=>(
                                          <button key={index} onClick={()=>{handleAnswerClick(option)}}>{option}</button>
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
    
       


