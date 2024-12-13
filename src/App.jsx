// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { useEffect, useState } from "react";
import "./App.css";
import Descriptions from "./commponents/Descriptions/Descriptions";
import Options from "./commponents/Options/Options";
import FeedBack from "./commponents/FeedBack/FeedBack";
import Notification from "./commponents/Notification/Notification";

function App() {
  // const [feedBack, setFeedBack] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  const [feedBack, setFeedBack] = useState(() => {
    const data = JSON.parse(localStorage.getItem("feedback"));

    if (!(data === null)) {
      return data;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedBack));
  }, [feedBack]);

  const totalFeedback = feedBack.good + feedBack.neutral + feedBack.bad;
  const positiveFeedback = Math.round((feedBack.good / totalFeedback) * 100);

  function updateFeedback(feedBackType) {
    setFeedBack({ ...feedBack, [feedBackType]: feedBack[feedBackType] + 1 });
  }

  function resetFeedback() {
    setFeedBack({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <>
      <Descriptions />
      <Options
        onClick={updateFeedback}
        total={totalFeedback}
        onClickReset={resetFeedback}
      />
      {(totalFeedback > 0 && (
        <FeedBack feedBacks={feedBack} positive={positiveFeedback} />
      )) || <Notification />}
    </>
  );
}

export default App;
