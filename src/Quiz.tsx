import * as React from "react";
import ReactDOM from "react-dom";
import Question from "./Question";

export default function Quiz() {
  const [data, setData] = React.useState(null);
  let counter = 0;

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

  console.log(data);
  return <Question counter={counter} />;
}
