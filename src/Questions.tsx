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

type props = {
  dataQuestions: data;
};

export default function Questions({ dataQuestions }: props) {
  const [counter, setCounter] = React.useState(0);
  const question = <Question questionData={dataQuestions.questions[counter]} />;
  return (
    <>
      {question}
      <Button
        sx={{ mt: 1, mr: 1 }}
        onClick={() => {
          setCounter(counter + 1);
        }}
        variant="outlined"
      >
        Next Question
      </Button>
    </>
  );
}
