import * as React from "react";

type timeLeft ={
    minutes: number;
    seconds: number;
}
type props ={
    handleTimeout: () => void;
}


export default function Timer({handleTimeout}:props) {

    const calculateTimeLeft = ():timeLeft => {
        let year = new Date().getFullYear();
        let timeLeftMs = startTime - Date.now() + 2400000
        let timeLeft

        if (timeLeftMs > 0) {
            timeLeft = {
                minutes: Math.floor((timeLeftMs / 1000 / 60) % 60),
                seconds: Math.floor((timeLeftMs / 1000) % 60),
            };
        }else{
            timeLeft = {minutes:0,seconds:0}
            handleTimeout()
        }
        return timeLeft;
    };

    const [startTime,setStartTime] = React.useState(Date.now());
    const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());
    const [year] = React.useState(new Date().getFullYear());


      React.useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });

    const timerComponents: Array<React.ReactChild> = [];

  Object.entries(timeLeft).forEach((unitValue) => {
    timerComponents.push(
      <span key={unitValue[0]}>
        {unitValue[1]} {unitValue[0]}{" "}
      </span>
    );
  });
    return(
        <>
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </>
    )
  }
