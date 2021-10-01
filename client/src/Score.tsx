import { Alert, TextField, FormLabel, Button } from "@mui/material";
import * as React from "react";
import Scoreboard from "./Scoreboard";

type props = {
  correctAnswers: Array<string | null>;
  dataAnswers: any;
  time: number;
};

export default function Score({ correctAnswers, dataAnswers, time }: props) {
  const [postFailed, setPostFailed] = React.useState(false);

  let score = 0;

  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === dataAnswers["q" + (i + 1)]) {
      score++;
    }
  }

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
        <Scoreboard
          score={score}
          time={time}
          setPostFailed={setPostFailed}
          correctAnswers={correctAnswers}
        />
        ;
      </>
    );
  };

  // console.log(percentage(correctAns, totalQuestions));
  // const alert = () => {
  //   if (!postFailed) {
  //     if (percentage(correctAns, totalQuestions) >= passPercentage) {
  //       return (
  //         <>
  //           <Alert severity="success">
  //             {score} / {correctAnswers.length} Percentage ={" "}
  //             {Math.round(percentage(correctAns, totalQuestions))}% Pass
  //           </Alert>
  //         </>
  //       );
  //     } else {
  //       return (
  //         <>
  //           <Alert severity="error">
  //             {score} / {correctAnswers.length} Percentage ={" "}
  //             {Math.round(percentage(correctAns, totalQuestions))}% Better Luck
  //             Next Time
  //           </Alert>
  //         </>
  //       );
  //     }
  //   } else {
  //     return <Alert severity="error">Cannot submit data!!</Alert>;
  //   }
  // };
  return <>{!postFailed && submitScore()}</>;
}
