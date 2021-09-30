import { Alert } from "@mui/material";
import * as React from "react";
import ReactDOM from "react-dom";
import Questions from "./Questions";

export type data = {
  questions: Array<{
    id: string;
    question: string;
    answers: Array<{
      id: string;
      answer: string;
    }>;
  }>;
};

export default function Quiz() {
  const [data, setData] = React.useState<data | null>(null);

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://multiverselearningproducts.github.io/swe/BCS-sample-questions.json"
      );
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []);

  if (data != null) {
    return <Questions dataQuestions={data} />;
  } else {
    return <Alert severity="error">No question data!!</Alert>;
  }
}
