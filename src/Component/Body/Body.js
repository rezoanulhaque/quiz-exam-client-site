import React, { useContext, useState } from 'react';
import Data from '../Data/Data';
import QuestionBox from '../Data/QuestionBox';
import Result from '../Data/Result';
import {Button} from 'react-bootstrap';
import { AnsContext } from '../../App';


const Body = () => {
    const [questionBank, setQuestionBank] = useState(Data);
    const [userAnswer, setUserAnswer] = useContext(AnsContext);
    const [score, setScore] = useState(0);
    console.log(score,'hi')
    console.log(userAnswer)
    const [response, setResponse] = useState(0);
    const playAgain = () => {
        setScore(0);
        setResponse(0);
      };
      const showResult = () => {
        let count=0;
       for(var i=0; i<userAnswer.length; i++){
        if(userAnswer[i].correct===userAnswer[i].ans){
          count=count+1;
        }
        else{
          count=count;
        }
       }
      setScore(count);
      }
    return (
      <div className="container">
      <div className="title">
        Take Quiz
      </div>
      {
       questionBank.map((qb, index) => <QuestionBox qb={qb} key={qb.questionId}  no={index+1} 
       />)
       }
      {  
          (<Result score={score} response={response}
            playAgain={playAgain}/>)
      }
      <Button onClick={showResult}> cal {score}</Button>
    </div>
    );
};

export default Body;