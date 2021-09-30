import { Alert } from "@mui/material";

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

  
//calculating percentage
  function percentage(partialValue: number, totalValue: number) {
    return (100 * partialValue) / totalValue;
  } 
  
  const totalQuestions = correctAnswers.length;
  const correctAns = score
  const passPercentage = 65
  
  console.log(percentage(correctAns, totalQuestions))
  
  //determining pass or fail
  if (percentage(correctAns, totalQuestions) >= passPercentage) {
    return (
      <Alert severity="success">{score} / {correctAnswers.length}            Percentage = {Math.round(percentage(correctAns, totalQuestions))}%  Pass</Alert>
      
    )}
     else {
       return (
        <Alert severity="error">{score} / {correctAnswers.length}             Percentage = {Math.round(percentage(correctAns, totalQuestions))}% Better Luck Next Time</Alert>
       )
     }
 
  
}


