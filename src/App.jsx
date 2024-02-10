import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  QuizCard from './quizCard'
import QuizAppHeader from './Header'
import PopularQuizzez from './popularQuizzez'
import FooterQuiz from './footer'
import QuizDisplay from './quizDisplay'
import { questions } from './quizQuestions'
function App() {
  
  const [popStatus, setPopStatus]=useState(true);

  const updatePopStatus=()=>{

    setPopStatus(false);
  }
  return (
    <>
    <div className="div" >
    
      <QuizAppHeader/>

      <QuizCard />
      <PopularQuizzez/>
      {/* {popStatus? (<PopularQuizzez/>):(<QuizCard popular={updatePopStatus}/>)} */}

     <FooterQuiz/>
     </div>
    </>
  )
}

export default App
