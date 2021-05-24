import React, {useContext, useState} from "react";
import { AnsContext } from "../../App";

//import "../style.css";
  
// Function to question inside our app
const QuestionBox = ({qb, no}) => {
  const {questionId, question, answers, correct } = qb;
  const [userAnswer, setUserAnswer] = useContext(AnsContext);
  let firstAnswer = {
        questionId: '',
        ans: '',
        correct: ''
    }
  const addNewAnswerToArray = (e) => {
    const name = e.target.value;
    let newAnswer = {
        questionId: questionId,
        ans: name,
        correct: correct
    }
    const others = userAnswer.filter(pd => pd.questionId !== questionId);
    const finalUserAnswer = [...others, newAnswer];
    setUserAnswer(finalUserAnswer);  
    }
    
  return (
    <div className="questionBox">
        <div className="question">{no}<span>. </span>{question}</div>
        <span>
        {answers.map((an, index) => (<div>
          <label onChange={addNewAnswerToArray}>
          <input type="radio" value={an} name={no} /> <span>{an }<br/></span></label></div>)
        )
        }
        </span>
    </div>
  )
};
  
export default QuestionBox;