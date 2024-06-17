function StartScreen({ numQuestions, dispatch, difficulty, highScore }) {
  return (
    <div className="flex items-center gap-4 md:gap-8 justify-center flex-col">
      <h3 className="font-semibold text-slate-100 text-xl md:text-3xl">
        Welcome To React Quiz!
      </h3>
      <h4 className="font-semibold text-slate-100 text-l md:text-2xl">
        HighScore: {highScore}
      </h4>
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 md:p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) =>
          dispatch({ type: "setDifficulty", payload: e.target.value })
        }
      >
        <option value={"all"}>All</option>
        <option value={"easy"}>Easy</option>
        <option value={"medium"}>Medium</option>
        <option value={"hard"}>Hard</option>
      </select>
      <h4 className="font-semibold text-slate-100 text-xs md:text-2xl">
        Select From {numQuestions} Question To Test Your Knowledge
      </h4>
      <button
        className="inline-block text-sm md:text-m rounded-full font-medium border-buttonColor text-white transition-colors duration-300 md:px-4 md:py-4 bg-buttonColor self-center hover:bg-mainColor hover:border-2 hover:border-buttonColor  focus:ring-gray-300 focus:ring-offset-2 focus:ring px-2 py-2"
        onClick={() => dispatch({ type: "numberOfQuestions" })}
      >
        Let start
      </button>
    </div>
  );
}

export default StartScreen;
