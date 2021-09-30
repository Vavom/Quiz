import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Quiz from "./Quiz";

export default function App() {
  const [startTest, setStartTest] = React.useState(false);
  const button = (
    <Button
      variant="contained"
      onClick={() => {
        setStartTest(true);
      }}
    >
      Start Test
    </Button>
  );
  const quiz = <Quiz />;
  return startTest ? button : quiz;
}
