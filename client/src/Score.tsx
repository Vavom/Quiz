import { Alert,TextField,FormLabel,Button } from "@mui/material";
import * as React from "react";

type props = {
  correctAnswers: Array<string | null>;
  dataAnswers: any;
};

export default function Score({ correctAnswers, dataAnswers }: props) {
  const [username,setUsername] = React.useState<string>("");
  const [isAcceptableUsername,setIsAcceptableUsername ] = React.useState<boolean>(true);
  const [helperText,setHelperText] = React.useState<string>("");
  let score = 0;
  let time = 0;

  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === dataAnswers["q" + (i + 1)]) {
      score++;
    }
  }

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }
  const handleSubmit = () =>{
    if (username.length == 0){
      setIsAcceptableUsername(false)
      setHelperText("Username must exist")
      return
    }
    const sendData = {username,score,time}
    fetch('http://localhost:9000/scores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body:
                JSON.stringify(sendData)
            }
            )
    // function to load highscores page goes here
  }


  return (
    <div>
    <Alert severity="error">
      {score} / {correctAnswers.length}
    </Alert>
    <FormLabel component="legend">Would you like to submit your score?</FormLabel>
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
      >Submit</Button>

  </div>
  );
}
