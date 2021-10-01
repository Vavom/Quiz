import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Box,
} from "@mui/material";
import * as React from "react";

type question = {
  id: string;
  question: string;
  answers: Array<{
    id: string;
    answer: string;
  }>;
};

type props = {
  questionData: question;
  correctAnswers: Array<string | null>;
  counter: number;
};

export default function Question({
  questionData,
  correctAnswers,
  counter,
}: props) {
  const [value, setValue] = React.useState(correctAnswers[counter]);

  const handleRadioChange = (event: any) => {
    setValue(event.target.value);
    correctAnswers[counter] = event.target.value ?? null;
  };

  React.useEffect(() => {
    setValue(correctAnswers[counter]);
  });

  console.log(correctAnswers);

  return (
    <>
      <FormLabel id = "cy-question" component="legend">{questionData.question}</FormLabel>
      <RadioGroup
        aria-label="quiz"
        id = "cy-ans"
        name="quiz"
        value={value}
        onChange={handleRadioChange}
      >
        {questionData.answers.map((answer) => {
          return (
            <FormControlLabel
              value={answer.id}
              key={answer.id}
              control={<Radio />}
              label={answer.answer}
            />
          );
        })}
      </RadioGroup>
    </>
  );
}
