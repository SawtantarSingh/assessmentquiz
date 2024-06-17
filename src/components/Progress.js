function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header>
      <div className="flex flex-col px-3">
        <div className="flex w-auto md:w-full flex-col gap-4 ">
          <progress
            className="flex w-full rounded-full h-4 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-cyan-500 [&::-moz-progress-bar]:bg-cyan-500"
            max={numQuestions}
            value={index + Number(answer !== null)}
          />
        </div>
        <div className="flex justify-between mt-2 px-5">
          <p className="text-slate-200 font-medium">
            Question <strong>{index + 1}</strong> / {numQuestions}
          </p>
          <p className="text-slate-200 font-medium">
            {points} / {maxPossiblePoints}
          </p>
        </div>
      </div>
    </header>
  );
}

export default Progress;
