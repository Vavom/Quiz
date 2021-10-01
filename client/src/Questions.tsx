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
  Typography
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
    <Container sx={{ height: "100vh", minWidth: "100%", bgcolor: 'primary.main', alignItems: "center", display: "flex", justifyContent: "center"}}>
      <Card sx={{ display: "flex", p: 1, alignItems: "center", flexDirection: "column", maxWidth: "40%", maxHeight: "50%"}}>
        <Box sx={{ justifyContent: "center" }}>
          <Question
            questionData={dataQuestions.questions[counter]}
            correctAnswers={correctAnswers}
            counter={counter}
          />
        </Box>
        <Box sx={{ mt: 1, mr: 1, display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
        <Typography variant="button">
          {counter > 0 ? (
            <Button
              sx={{ mt: 1, mr: 1, bgcolor: 'secondary.main'}}
              onClick={() => {
                setCounter(counter - 1);
              }}
              variant="outlined"
            >
              Previous Question
            </Button>
          ) : null}
          <Timer/>
          <Button
            sx={{ mt: 1, mr: 1, bgcolor: 'secondary.main'}}
            onClick={() => {
              setCounter(counter + 1);
            }}
            variant="outlined"
          >
            {isLastQuestion ? "Finish" : "Next Question"}
          </Button>
            
        </Typography> 
        </Box>
      </Card>
    </Container>
  );
}
