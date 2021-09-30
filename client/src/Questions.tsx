import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
} from "@mui/material";
import * as React from "react";
import ReactDOM from "react-dom";
import Question from "./Question";
import { data } from "./Quiz";

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
  if (correctAnswers[counter] == null) {
    correctAnswers[counter] = null;
  }
  const question = (
    <Question
      questionData={dataQuestions.questions[counter]}
      correctAnswers={correctAnswers}
      counter={counter}
    />
  );
  return (
    <Card sx={{ maxWidth: "37%", borderRadius: '16px', left: '32%', top: "20%", right: "32%", bottom: "20%", position: 'absolute'}}>
      <Box>
        {question}
      </Box>
      <Button
        sx={{ mt: 1, mr: 1,  }}
        onClick={() => {
          setCounter(counter - 1);
        }}
        variant="outlined"
      >
        Previous Question
      </Button>
      <Button
        sx={{ mt: 1, mr: 1 }}
        onClick={() => {
          setCounter(counter + 1);
        }}
        variant="outlined"
      >
        {isLastQuestion ? "Finish" : "Next Question"}
      </Button>
    </Card>
  );
}
