import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Quiz from "./Quiz";
import { Container, Card, Box, Typography } from "@mui/material";

export default function App() {
  const [startTest, setStartTest] = React.useState(false);
  const button = (
    <Container
      sx={{ height: "100vh", minWidth: "100%", bgcolor: "primary.main" }}
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
              justifyContent: "center",
            }}
          >
            <Typography sx={{ textAlign: "center", width: "600px" }}>
              Welcome to the Quiz by Quizz You will have 40 minutes to answer
              all the questions. You will have 25 questions to complete.
              Remember to go back and change your answer at any time. Remember
              to leave some time at the end to check your answers.
            </Typography>
            <Button
              sx={{ mt: 1, mr: 1, bgcolor: "secondary.main" }}
              variant="contained"
              onClick={() => {
                setStartTest(true);
              }}
            >
              Start Test
            </Button>
          </Box>
        </Box>
      </Card>
    </Container>
  );
  const quiz = <Quiz />;
  return !startTest ? button : quiz;
}
