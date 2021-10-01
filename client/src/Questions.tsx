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
  Typography,
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
  handleTimeout: () => void;
};

export default function Questions({
  dataQuestions,
  counter,
  setCounter,
  isLastQuestion,
  correctAnswers,
  handleTimeout
}: props) {
  const [isComplete, setIscomplete] = React.useState(false);
  if (correctAnswers[counter] == null) {
    correctAnswers[counter] = null;
  }

  return (
    <Container
      sx={{ height: "100vh", minWidth: "100%", bgcolor: "primary.main" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: "37%",
            borderRadius: "16px",
            left: "32%",
            top: "25%",
            right: "32%",
            bottom: "37%",
            position: "absolute",
            p: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Box sx={{}}>
                <Question
                  questionData={dataQuestions.questions[counter]}
                  correctAnswers={correctAnswers}
                  counter={counter}
                />
              </Box>
            </Box>
          </Box>
        </Card>
        <Card
          sx={{
            maxWidth: "37%",
            borderRadius: "16px",
            p: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Box>
                <Typography variant="button">
                  {counter > 0 ? (
                    <Button
                      sx={{ mt: 1, mr: 1, bgcolor: "secondary.main" }}
                      onClick={() => {
                        setCounter(counter - 1);
                      }}
                      variant="contained"
                    >
                      Previous Question
                    </Button>
                  ) : null}
                  <Timer
                    handleTimeout = {handleTimeout}
                  />
                  <Button
                    sx={{ mt: 1, mr: 1, bgcolor: "secondary.main" }}
                    onClick={() => {
                      setCounter(counter + 1);
                    }}
                    variant="contained"
                  >
                    {isLastQuestion ? "Finish" : "Next Question"}
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </Container>
  );
}
