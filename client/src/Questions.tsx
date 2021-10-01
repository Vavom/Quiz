import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import * as React from "react";
import ReactDOM from "react-dom";
import Question from "./Question";
import { data } from "./Quiz";
import Timer from "./Timer";

type props = {
  dataQuestions: data;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  isLastQuestion: boolean;
  correctAnswers: Array<string | null>;
};

export default function Questions({
  dataQuestions,
  counter,
  setCounter,
  isLastQuestion,
  correctAnswers,
}: props) {
  const [isComplete, setIscomplete] = React.useState(false)
  if (correctAnswers[counter] == null) {
    correctAnswers[counter] = null;
  }

  return (
    <>
      <Question
        questionData={dataQuestions.questions[counter]}
        correctAnswers={correctAnswers}
        counter={counter}
      />
      {counter > 0 ? (
        <Button
          sx={{ mt: 1, mr: 1 }}
          onClick={() => {
            setCounter(counter - 1);
          }}
          variant="outlined"
        >
          Previous Question
        </Button>
      ) : null}
      <Button
        sx={{ mt: 1, mr: 1 }}
        onClick={() => {
          if(isLastQuestion){
            setIscomplete(true)
          }
          setCounter(counter + 1);
        }}
        variant="outlined"
      >
        {isLastQuestion ? "Finish" : "Next Question"}
      </Button>
      <Timer
      />
    </>
  );
}
