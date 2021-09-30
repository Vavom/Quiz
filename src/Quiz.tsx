import { Alert } from "@mui/material";
import * as React from "react";
import ReactDOM from "react-dom";
import Questions from "./Questions";

export type data = {
  questions: Array<{
    id: string;
    question: string;
    answers: Array<{
      id: string;
      answer: string;
    }>;
  }>;
};

export default function Quiz() {
  const [data, setData] = React.useState<data | null>(null);
  const [counter, setCounter] = React.useState(0);
  const [isLastQuestion, setIsLastQuestion] = React.useState(false);
  const [correctAnswers] = React.useState<Array<string | null>>([]);
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://multiverselearningproducts.github.io/swe/BCS-sample-questions.json"
      );
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []);

  React.useEffect(() => {
    if (data != null) {
      if (counter == data.questions.length - 1) {
        setIsLastQuestion(true);
      }
    }
  }, [counter]);

  if (data != null) {
    if (counter < data.questions.length) {
      return (
        <Questions
          dataQuestions={data}
          counter={counter}
          setCounter={setCounter}
          isLastQuestion={isLastQuestion}
          correctAnswers={correctAnswers}
        />
      );
    } else {
      return <Alert severity="info">Show Scoreboard</Alert>;
    }
  } else {
    return <Alert severity="error">No question data!!</Alert>;
  }
}
