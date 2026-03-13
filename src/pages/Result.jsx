import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { QuizContext } from "../quizContext/quizcontext";

const Result = () => {
  const { state, dispatch } = useContext(QuizContext);

  const percentage = (state.score / state.questions.length) * 100;
  
  useEffect(() => {
    const entry = {
      name: state.username,
      score: state.score,
      percentage,
      date: new Date().toLocaleString(),
    };
    const store =  JSON.parse(localStorage.getItem('leaderboard')) || [];    
    const updated = [...store, entry];
    localStorage.setItem("leaderboard", JSON.stringify(updated));
    
  });

  return (
    <div className="container text-center mt-5">
      <div className="card shadow p-5">
        <h2 className="fw-bold mb-3">🎉 Quiz Completed!</h2>
        <h4>{state.username}, your score is:</h4>
        <h1 className="text-success">{state.score}</h1>
        <div className="d-flex justify-content-center gap-3 mt-4">
          <Link to="/leaderboard" className="btn btn-primary">
            View Leaderboard
          </Link>
          <Link
            to="/"
            className="btn btn-warning"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Result;
