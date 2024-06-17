import { useState } from "react";

function Admin({ dispatch, filterQuestions }) {
  const [input, setInput] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctOption: "",
    points: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    if (
      input.option1 === input.option2 ||
      input.option2 === input.option3 ||
      input.option4 === input.option1
    ) {
      alert("Same Options are not allowed");
      return;
    }
    const newInput = {
      question: input.question,
      options: [input.option1, input.option2, input.option3, input.option4],
      correctOption: Number(input.correctOption),
      points: Number(input.points),
      id: Math.random().toString(36).substr(2, 9),
    };
    console.log(newInput);
    dispatch({ type: "addQuestion", payload: newInput });
    alert("submitted");
  }

  function getdata(e) {
    const { name, value } = e.target;
    setInput(() => {
      return {
        ...input,
        [name]: value,
      };
    });
  }
  return (
    <div className="grid w-full grid-rows-[auto_1fr_auto] justify-center">
      <h3 className="text-center text-white font-semibold text-3xl md:text-4xl mb-6 ">
        Welcome Admin
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-2 ">
        <div className="flex items-center gap-2 ">
          <label className="text-xs md:text-sm text-white font-semibold">
            Enter Question
          </label>
          <input
            name="question"
            type="text"
            placeholder="Enter Question"
            value={input.question}
            onChange={getdata}
            className="input md:w-72 "
          />
        </div>

        <div className="flex items-center gap-3 ">
          <label className="text-white text-xs md:text-sm  font-semibold">
            Enter Option 1
          </label>
          <input
            onChange={getdata}
            value={input.option1}
            name="option1"
            type="text"
            placeholder="Enter Option 1"
            className="input  md:w-72 "
          />
        </div>

        <div className="flex items-center gap-3">
          <label className="text-xs md:text-sm text-white font-semibold">
            Enter Option 2
          </label>
          <input
            onChange={getdata}
            value={input.option2}
            name="option2"
            type="text"
            placeholder="Enter Option 2"
            className="input md:w-72 "
          />
        </div>

        <div className="flex items-center gap-3">
          <label className="text-white text-xs md:text-sm font-semibold">
            Enter Option 3
          </label>
          <input
            onChange={getdata}
            value={input.option3}
            name="option3"
            type="text"
            placeholder="Enter Option 3"
            className="input  md:w-72 "
          />
        </div>

        <div className="flex items-center gap-3">
          <label className="text-white text-xs md:text-sm font-semibold">
            Enter Option 4
          </label>
          <input
            onChange={getdata}
            value={input.option4}
            name="option4"
            type="text"
            placeholder="Enter Option 4"
            className="input  md:w-72 "
          />
        </div>

        <div className="flex items-center gap-3">
          <label className="text-white text-xs md:text-sm font-semibold">
            Correct Option
          </label>
          <input
            onChange={getdata}
            value={input.correctOption}
            name="correctOption"
            type="number"
            min={0}
            max={3}
            placeholder="Correct option"
            className="input w-48 md:w-72 "
          />
        </div>

        <div className="flex items-center gap-14 space-x-1 md:space-x-3">
          <label className="text-white text-xs md:text-sm font-semibold">
            Points
          </label>
          <input
            onChange={getdata}
            value={input.points}
            name="points"
            type="number"
            placeholder="Points"
            min={10}
            max={30}
            className="input  w-48 md:w-72 "
          />
        </div>

        <button
          className="mt-4 inline-block text-sm rounded-full  font-semibold uppercase text-stone-500 transition-colors duration-300 hover:bg-slate-200 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-offset-2 disabled:cursor-not-allowed tracking-wide w-20 py-2 md:py-3  bg-slate-50 self-center"
          type="submit"
        >
          Add
        </button>
      </form>
      <button
        className="mt-4 mb-4 text-sm font-semibold underline uppercase text-blue-300 "
        onClick={() => dispatch({ type: "dataReceived" })}
      >
        Start Quiz &rarr;
      </button>
    </div>
  );
}

export default Admin;
