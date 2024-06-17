import Option from "./Option";

function Question({ filterQuestions, dispatch, answer }) {
  return (
    <div>
      <h4 className="text-slate-200 text-center md:text-2xl text-sm font-semibold  ">
        {filterQuestions.question}
      </h4>
      <Option
        filterQuestions={filterQuestions}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
}

export default Question;
