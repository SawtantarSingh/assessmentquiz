import { useEffect } from "react";

function Option({ filterQuestions, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div className="mt-8 flex flex-col gap-4">
      {filterQuestions.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === filterQuestions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={answer !== null}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
