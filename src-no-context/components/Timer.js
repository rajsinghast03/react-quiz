import { useEffect } from "react";
import { useQuiz } from "../../context/QuizContext";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  const mins = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
  useEffect(
    function () {
      const id = setInterval(() => {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}:{sec}
      {sec < 10 && "0"}
    </div>
  );
}

export default Timer;
