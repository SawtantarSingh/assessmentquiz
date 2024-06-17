import { useReducer } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import NumberOfQuestions from "./NumberOfQuestions";
import PreviousBtn from "./PreviousBtn";
import Login from "./Login";
import Admin from "./Admin";

const SECS_PER_QUESTION = 30;
const data = {
  highScore: {
    highScore: 30,
  },
  questions: [
    {
      question: "Which is the most popular JavaScript framework?",
      options: ["Angular", "React", "Svelte", "Vue"],
      correctOption: 1,
      points: 10,
      id: "33a4",
    },
    {
      question: "Which company invented React?",
      options: ["Google", "Apple", "Netflix", "Facebook"],
      correctOption: 3,
      points: 10,
      id: "c856",
    },
    {
      question: "What's the fundamental building block of React apps?",
      options: ["Components", "Blocks", "Elements", "Effects"],
      correctOption: 0,
      points: 10,
      id: "7926",
    },
    {
      question:
        "What's the name of the syntax we use to describe the UI in React components?",
      options: ["FBJ", "Babel", "JSX", "ES2015"],
      correctOption: 2,
      points: 20,
      id: "b110",
    },
    {
      question: "How does data flow naturally in React apps?",
      options: [
        "From parents to children",
        "From children to parents",
        "Both ways",
        "The developers decides",
      ],
      correctOption: 0,
      points: 30,
      id: "b6e2",
    },
  ],
};

const initialState = {
  questions: data.questions,
  status: "login",
  index: 0,
  answer: null,
  answerArray: [],
  points: 0,
  highScore: data.highScore.highScore,
  secondsRemaining: null,
  numberOfQuestions: null,
  difficulty: "all",
  filterQuestions: data.questions,
  username: "admin",
  password: "admin123",
};

function reducer(state, action) {
  switch (action.type) {
    case "adminPanel":
      return {
        ...state,
        status: "admin",
      };

    case "addQuestion":
      return {
        ...state,
        filterQuestions: [...state.questions, action.payload],
        questions: [...state.questions, action.payload],
      };

    case "dataReceived":
      return {
        ...state,
        status: "ready",
      };

    case "highscoreReceived":
      return {
        ...state,
      };

    case "dataFailed":
      return { ...state, status: "error" };

    case "setDifficulty":
      return {
        ...state,
        difficulty: action.payload,
        filterQuestions:
          action.payload === "easy"
            ? state.questions.filter((ques) => ques.points === 10)
            : action.payload === "medium"
            ? state.questions.filter((ques) => ques.points === 20)
            : action.payload === "hard"
            ? state.questions.filter((ques) => ques.points === 30)
            : state.questions,
      };

    case "numberOfQuestions":
      return {
        ...state,
        numberOfQuestions: state.filterQuestions.length,
        status: "questions",
        // secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };

    case "selectQuestions":
      return {
        ...state,
        numberOfQuestions: action.payload,
        // secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };

    case "start":
      return {
        ...state,
        status: "active",
        filterQuestions: state.filterQuestions.slice(
          0,
          state.numberOfQuestions
        ),
        secondsRemaining: state.numberOfQuestions * SECS_PER_QUESTION,
      };

    case "newAnswer":
      const question = state.filterQuestions.at(state.index);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
        answerArray: [...state.answerArray, action.payload],
      };

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: state.answerArray[state.index + 1]
          ? state.answerArray.at(state.index + 1)
          : null,
      };

    case "prevQuestion":
      console.log(state.answerArray);
      return {
        ...state,
        index: state.index - 1,
        answer: state.answerArray[state.index - 1]
          ? state.answerArray[state.index - 1]
          : null,
      };

    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };
    case "restart":
      return {
        ...initialState,
        questions: state.questions,
        filterQuestions: state.questions,
        status: "ready",
        highScore: state.highScore,
      };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    default:
      throw new Error("action is unknown");
  }
}

export default function App() {
  const [
    {
      status,
      index,
      answer,
      points,
      highScore,
      secondsRemaining,
      numberOfQuestions,
      difficulty,
      filterQuestions,
      username,
      password,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = filterQuestions.length;
  const maxPossiblePoints = filterQuestions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  return (
    <div className="bg-mainColor">
      <Header />

      <Main>
        {status === "admin" && (
          <Admin dispatch={dispatch} filterQuestions={filterQuestions} />
        )}
        {status === "login" && (
          <Login username={username} password={password} dispatch={dispatch} />
        )}
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen
            numQuestions={numQuestions}
            dispatch={dispatch}
            difficulty={difficulty}
            highScore={highScore}
          />
        )}
        {status === "questions" && (
          <NumberOfQuestions
            dispatch={dispatch}
            numQuestions={numQuestions}
            numberOfQuestions={numberOfQuestions}
          />
        )}

        {status === "active" && (
          <div className="flex flex-col gap-10">
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              filterQuestions={filterQuestions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <Footer>
              <div className="flex items-center justify-between mb-10">
                <Timer
                  dispatch={dispatch}
                  secondsRemaining={secondsRemaining}
                />
                <div className="flex gap-4 ">
                  <PreviousBtn dispatch={dispatch} index={index} />
                  <NextButton
                    dispatch={dispatch}
                    answer={answer}
                    index={index}
                    numQuestions={numQuestions}
                  />
                </div>
              </div>
            </Footer>
          </div>
        )}
        {status === "finished" && (
          <>
            <FinishedScreen
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              highScore={highScore}
              dispatch={dispatch}
              status={status}
            />
          </>
        )}
      </Main>
    </div>
  );
}
