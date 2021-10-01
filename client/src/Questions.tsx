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
  Container,
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
    <Container sx={{ height: "100vh", minWidth: "100%", bgcolor: 'primary.main'}}>
      <Card sx={{ maxWidth: "37%", borderRadius: '16px', left: '32%', top: "25%", right: "32%", bottom: "37%", position: 'absolute', p: 1}}>
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
              sx={{ mt: 1, mr: 1, position: "absolute", bottom: 5, bgcolor: 'secondary.main' }}
              onClick={() => {
                setCounter(counter - 1);
              }}
              variant="outlined"
            >
              Previous Question
            </Button>
          ) : null}
          <Button
            sx={{ mt: 1, mr: 1, position: "absolute", bottom: 5, right : 5, bgcolor: 'secondary.main' }}
            onClick={() => {
              setCounter(counter + 1);
            }}
            variant="outlined"
          >
            {isLastQuestion ? "Finish" : "Next Question"}
          </Button>
          <Timer/>
        </Box>
      </Card>
    </Container>
  );
}
