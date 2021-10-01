import { Alert, TextField, FormLabel, Button } from "@mui/material";
import * as React from "react";
import Scoreboard from "./Scoreboard";

type props = {
  correctAnswers: Array<string | null>;
  dataAnswers: any;
};

export default function Score({ correctAnswers, dataAnswers }: props) {
  const [username, setUsername] = React.useState<string>("");
  const [isAcceptableUsername, setIsAcceptableUsername] =
    React.useState<boolean>(true);
  const [helperText, setHelperText] = React.useState<string>("");
  const [hasSumbitted, setHasSubmitted] = React.useState<boolean>(false);
  const [postFailed, setPostFailed] = React.useState(false);

  let score = 0;
  let time = 0;

  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === dataAnswers["q" + (i + 1)]) {
      score++;
    }
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    setIsAcceptableUsername(true);
    setHelperText("");
  };
  const handleSubmit = () => {
    if (username.length == 0) {
      setIsAcceptableUsername(false);
      setHelperText("Username must exist");
      return;
    }
    const sendData = { username, score, time };
    setHasSubmitted(true);
    fetch("http://localhost:9000/scores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    }).catch((err) => setPostFailed(true));
  };

  //calculating percentage
  function percentage(partialValue: number, totalValue: number) {
    return (100 * partialValue) / totalValue;
  }

  const totalQuestions = correctAnswers.length;
  const correctAns = score;
  const passPercentage = 65;

  const submitScore = () => {
    return (
      <>
        <Scoreboard score={score} />;
        {!hasSumbitted && (
          <>
            <FormLabel component="legend">
              Would you like to submit your score?
            </FormLabel>
            <TextField
              id="username"
              label="Name"
              value={username}
              onChange={handleUsernameChange}
              error={!isAcceptableUsername}
              helperText={helperText}
            />
            <Button
              sx={{ mt: 1, mr: 1 }}
              onClick={handleSubmit}
              variant="outlined"
            >
              Submit
            </Button>
          </>
        )}
      </>
    );
  };

  console.log(percentage(correctAns, totalQuestions));
  const alert = () => {
    if (!postFailed) {
      if (percentage(correctAns, totalQuestions) >= passPercentage) {
        return (
          <>
            <Alert severity="success">
              {score} / {correctAnswers.length} Percentage ={" "}
              {Math.round(percentage(correctAns, totalQuestions))}% Pass
            </Alert>
          </>
        );
      } else {
        return (
          <>
            <Alert severity="error">
              {score} / {correctAnswers.length} Percentage ={" "}
              {Math.round(percentage(correctAns, totalQuestions))}% Better Luck
              Next Time
            </Alert>
          </>
        );
      }
    } else {
      return <Alert severity="error">Cannot submit data!!</Alert>;
    }
  };
  return (
    <>
      {alert()}
      {!postFailed && submitScore()}
    </>
  );
}
