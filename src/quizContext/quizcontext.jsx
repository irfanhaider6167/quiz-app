import { createContext, useReducer } from "react";
// import quizReducer from "./QuizReducer";
import questions from "../data/questions.json";

const QuizContext = createContext();

const initialState = {
  username: "",
  index: 0,
  score: 0,
  completed: false,
  questions,
};
const quizReducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return {
        ...state,
        username: action.payload,
      };
    case "ANSWER":
      return {
        ...state,
        index: state.index + 1,
        score: action.payload ? state.score + 1 : state.score,
      };
    case "FINISH":
      return {
        ...state,
        completed: true,
      };
    case "RESET":
      return {
       ...initialState,
        questions: state.questions
      };
    default:
      return state;
  }
};
const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export { QuizContext, QuizProvider };
