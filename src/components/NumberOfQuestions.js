function NumberOfQuestions({ dispatch, numQuestions, numberOfQuestions }) {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-semibold text-slate-100 text-2xl ">
        Select Number Of Questions
      </h2>
      <div className="px-6">
        <input
          type="range"
          min={3}
          max={numQuestions}
          value={numberOfQuestions}
          onChange={(e) =>
            dispatch({
              type: "selectQuestions",
              payload: Number(e.target.value),
            })
          }
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-300 "
        />
      </div>
      <h4 className="block w-9 h-9 py-2 text-sm font-bold text-center border border-gray-300 rounded-lg focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500  self-center">
        {numberOfQuestions}
      </h4>

      <button
        className="inline-block text-sm md:text-m rounded-full font-medium border-buttonColor text-white transition-colors duration-300 md:px-4 md:py-4 bg-buttonColor self-center hover:bg-mainColor hover:border-2 hover:border-buttonColor  focus:ring-gray-300 focus:ring-offset-2 focus:ring px-2 py-2"
        onClick={() => dispatch({ type: "start" })}
      >
        Next
      </button>
    </div>
  );
}

export default NumberOfQuestions;
