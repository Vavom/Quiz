import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Quiz from "./Quiz";
import{
  Container,
  Card,
  Box,
  Typography,
} from "@mui/material";

export default function App() {
  const [startTest, setStartTest] = React.useState(false);
  const button = (
    <Container sx={{ height: "100vh", minWidth: "100%", bgcolor: 'primary.main'}}>
      <Card sx={{ maxWidth: "37%", borderRadius: '16px', left: '32%', top: "25%", right: "32%", bottom: "37%", position: 'absolute', p: 1}}>
        <Typography>
          Welcome to the Quiz by Quizz
          You will have 40 minutes to answer all the questions
          <Button
            sx={{ mt: 1, mr: 1, position: "absolute", bottom: 5, bgcolor: 'secondary.main', left: "40%"}}
            variant="contained"
            onClick={() => {
              setStartTest(true);
            }}
          >
            Start Test
          </Button>
        </Typography>
      </Card>
    </Container>
  );
  const quiz = <Quiz />;
  return !startTest ? button : quiz;
}
