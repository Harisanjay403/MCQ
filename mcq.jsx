 
import {useState} from "react";

export default function App() {
    
        
    
  return (
      <>
          <div className="quiz-app">
              
              <div className="score-section" style={{display:"none"}}>
                  <h2>Your Score : 3/3 </h2>
                  <button>Restart</button>
              </div>

              <div className="question-section">
                  <h2>Question No: 1</h2>
                  <p>This is the sample question</p>
                  <div className="option">
                      <button>Option 1</button>
                      <button>Option 2</button>
                      <button>Option 3</button>
                      <button>Option 4</button>
                  </div>
                  <div className="timer"> Time left : 5s</div>
              </div>
              
              
          </div>
          
     </>
  )
    
}
    
       


