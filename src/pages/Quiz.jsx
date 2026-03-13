import Timer from "../components/Timer";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";
import { useContext} from "react";
import { QuizContext } from "../quizContext/quizcontext";
import { useNavigate } from "react-router-dom";
import useTimer from "../hook/useTimer";

const Quiz = () => {
  const { state, dispatch } = useContext(QuizContext);
  const { index, questions } = state;
  const navigate = useNavigate();
  const { time, reset } = useTimer(15);
  

  if (!questions || questions.length === 0) {
    return <h2 className="text-center mt-5">Loading Questions....</h2>;
  }
  if (index >= questions.length) {
    dispatch({ type: "FINISH" });
    navigate("/result");
    return null;
  }

  const handleSelect = (opt) => {
    dispatch({ type: "ANSWER", payload: opt === curquetion.answer });
    reset();
  };

  const curquetion = questions[index];
  return (
    <div className="container mt-4">
      <Timer time={time} />
      <ProgressBar current={index} total={questions.length} />
      <QuestionCard
        question={curquetion.question}
        options={curquetion.options}
        onSelect={handleSelect}
      />
    </div>
  );
};

export default Quiz;
