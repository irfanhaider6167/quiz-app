import React from "react";

const QuestionCard = ({ question, options, onSelect }) => {
  return (
    <div className="card shadow p-4">
      <h4 className="fw-semibold">{question}</h4>
      <div className="mt-3">
        {options.map((item,i) => {
          return (
            <button
              className="btn btn-outline-primary w-100 mt-2"
              key={i}
              onClick={() => onSelect(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;
