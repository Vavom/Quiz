import { Alert } from "@mui/material";
import Scoreboard from "./Scoreboard";

type props = {
  correctAnswers: Array<string | null>;
  dataAnswers: any;
};

export default function Score({ correctAnswers, dataAnswers }: props) {
  let score = 0;

  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === dataAnswers["q" + (i + 1)]) {
      score++;
    }
  }

  return (
    <>
      <Alert severity="error">
        {score} / {correctAnswers.length}
      </Alert>
      <Scoreboard />
    </>
  );
}
