import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import LeaderBoard from "./pages/LeaderBoard";
import { QuizProvider } from "./quizContext/quizcontext";

const App = () => {
  return (
    <QuizProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        </Routes>
      </Router>
    </QuizProvider>
  );
};

export default App;
