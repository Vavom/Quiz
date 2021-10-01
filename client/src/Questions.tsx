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
  Stack,
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

  return (
    <Card sx={{ maxWidth: "37%", borderRadius: '16px', left: '32%', top: "20%", right: "32%", bottom: "20%", position: 'absolute', p: 1}}>
      <Box>
        <Question
          questionData={dataQuestions.questions[counter]}
          correctAnswers={correctAnswers}
          counter={counter}
        />
      </Box>
      <Box>
        {counter > 0 ? (
          <Button
            sx={{ mt: 1, mr: 1, position: "absolute", bottom: 5,  }}
            onClick={() => {
              setCounter(counter - 1);
            }}
            variant="outlined"
          >
            Previous Question
          </Button>
        ) : null}
        <Button
          sx={{ mt: 1, mr: 1, position: "absolute", bottom: 5, right : 5}}
          onClick={() => {
            setCounter(counter + 1);
          }}
          variant="outlined"
        >
          {isLastQuestion ? "Finish" : "Next Question"}
        </Button>
      </Box>
    </Card>
  );
}
