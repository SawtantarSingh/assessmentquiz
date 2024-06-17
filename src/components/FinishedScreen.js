function FinishedScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage > 0 && percentage < 50) emoji = "😐";
  if (percentage === 0) emoji = "🤦‍♂️";

  return (
    <div className="flex flex-col gap-4">
      <p className="inline-block text-sm md:text-base rounded-full font-medium border-buttonColor text-white transition-colors duration-300 md:px-8 md:py-6 bg-cyan-400 self-center px-4 py-6 md:w-96 w-72 text-center ">
        <span>{emoji}</span> You scored{" "}
        <strong>
          {points} out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
        </strong>
      </p>
      <p className="text-white font-normal text-center">
        (Highscore:{" "}
        <span className="font-semibold text-red-500"> {highScore} </span>{" "}
        points)
      </p>

      <button
        className="inline-block text-sm md:text-base rounded-full font-medium border-buttonColor text-white transition-colors duration-300 md:px-8 md:py-4 bg-buttonColor self-center hover:bg-mainColor hover:border-2 hover:border-buttonColor  focus:ring-gray-300 focus:ring-offset-2 focus:ring px-3 py-2 md:w-96 w-72"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </div>
  );
}

export default FinishedScreen;
