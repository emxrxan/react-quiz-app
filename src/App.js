import React from 'react'
import QuestionHeader from './Components/QuestionComponent/QuestionHeader'
import Answere from './Components/AnswereComponent/Answere';
import Details from './Components/DetailsComponent/Details';
import Score from './Components/ScoreComponent/Score';
import { useState } from 'react';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const questions = [
  {
    question: "Wie viele Beine hat ein Löwe?",
    answers: [
      "Ein Löwe hat 3 Beine.",
      "Ein Löwe hat 5 Beine.",
      "Ein Löwe hat 4 Beine.",
    ],
    correctAnswer: "Ein Löwe hat 4 Beine.",
    points: 2,
  },
  {
    question: "Was ist JavaScript?",
    answers: [
      "Ein Computerspiel.",
      "Ein Land.",
      "Ein Gebirge.",
      "Eine Programmiersprache.",
    ],
    correctAnswer: "Eine Programmiersprache.",
    points: 3,
  },
  {
    question: "Was ist Python?",
    answers: ["Ein Computerspiel.", "Eine Programmiersprache.", "Ein Gebirge."],
    correctAnswer: "Eine Programmiersprache.",
    points: 2,
  },
  {
    question: "Wann fiel die Berliner Mauer?",
    answers: ["1991", "1988", "1989", "2001", "1990"],
    correctAnswer: "1989",
    points: 5,
  },
  {
    question: "Wann wurde die BRD gegründet?",
    answers: ["1949", "1804", "1905", "1922", "1990"],
    correctAnswer: "1949",
    points: 7,
  },
];

let maxScore = questions.reduce((accumulator, currentValue)=> accumulator + currentValue.points, 0);

function App() {
  let [countQuestion, setCountQuestion] = useState(0);
  let [score, setScore] = useState(0);

  const newQuestion = (answere) => {
    if(answere === questions[countQuestion].correctAnswer){
      score += questions[countQuestion].points;
      setScore(score);
    }

    countQuestion++;
    setCountQuestion(countQuestion);
  }

  const restart = () => {
    setScore(0);
    setCountQuestion(0);
  }

  return (
    <div className='mainContainer bg-warning-subtle'>
        <h1 className='bg-warning'>Quiz-App</h1>

        {countQuestion !== questions.length ? <div>
          <QuestionHeader question={questions[countQuestion].question} count={countQuestion + 1} key="Frage"/>

          <ul className="list-group">
            {questions[countQuestion].answers.map((answere) =>{
              return <li key={answere} className="list-group-item p-0"><Answere clickButton={() => newQuestion(answere)} answere={answere}/></li>}
            )}
          </ul>
    
          <Details currentAnswere={ countQuestion } maxAnswere={ questions.length }/>

        </div> : <div>

          <Details currentAnswere={ countQuestion } maxAnswere={ questions.length }/>
          <Score points={score} maxPoints={maxScore}/>
          <Answere answere="Restart" clickButton={() => restart()}/>

        </div>}
    </div>
  )
}

export default App
