import { Alert } from "@mui/material";
import * as React from "react";
import ReactDOM from "react-dom";
import Questions from "./Questions";
import Score from "./Score";

export type data = {
  questions: Array<{
    id: string;
    question: string;
    answers: Array<{
      id: string;
      answer: string;
    }>;
  }>;
  correct_answers: any;
};

export default function Quiz() {
  const [data, setData] = React.useState<data | null>(null);
  const [counter, setCounter] = React.useState(0);
  const [isLastQuestion, setIsLastQuestion] = React.useState(false);
  const [correctAnswers] = React.useState<Array<string | null>>([]);
  const [loadingFailed, setLoadingFailed] = React.useState(false);
  const [startTime,setStartTime] = React.useState(Date.now())
  const [completionTime, setCompletionTime] = React.useState(999999999999999999)

  React.useEffect(() => {
    const getData = async () => {
      fetch(
        "https://multiverselearningproducts.github.io/swe/BCS-sample-questions.json"
      )
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setLoadingFailed(true))
    };
    getData();
  }, []);

  React.useEffect(() => {
    if (data != null) {
      if (counter == data.questions.length - 1) {
        setIsLastQuestion(true);
      }
      if(counter == data.questions.length){
        setCompletionTime(Date.now()-startTime)
      }
    }
  }, [counter]);

  React.useEffect(()=>{
    setStartTime(Date.now())
  },[data])

  if (data != null) {
    if (counter < data.questions.length) {

      return (
        <>
        <Questions
          dataQuestions={data}
          counter={counter}
          setCounter={setCounter}
          isLastQuestion={isLastQuestion}
          correctAnswers={correctAnswers}
        />
        </>
      );
    } else {
      return (
        <Score
          correctAnswers={correctAnswers}
          dataAnswers={data.correct_answers}
          time={completionTime}
        />
      );
    }
  } else if(loadingFailed) {
    return <Alert severity="error">No question data!!</Alert>;
  }
  else {
    return <div>loading...</div>
  }
}
