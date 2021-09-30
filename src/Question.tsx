import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
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

export default function Questions({
  questionData,
  correctAnswers,
  counter,
}: props) {
  const [value, setValue] = React.useState(correctAnswers[counter]);
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const handleRadioChange = (event: any) => {
    setValue(event.target.value);
    correctAnswers[counter] = event.target.value ?? null;
  };

  React.useEffect(() => {
    setValue(correctAnswers[counter]);
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (value === "best") {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "worst") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };
  console.log(correctAnswers);

  return (
    <form id={questionData.id} onSubmit={handleSubmit}>
      <FormControl
        sx={{ m: 3 }}
        component="fieldset"
        error={error}
        variant="standard"
      >
        <FormLabel component="legend">{questionData.question}</FormLabel>
        <RadioGroup
          aria-label="quiz"
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
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </form>
  );
}
