import { type } from "@testing-library/user-event/dist/type";
import { useState } from "react";

function Login({ username, password, dispatch }) {
  console.log(username);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    // Check if the username and password are correct.

    if (username === name && password === pass) {
      dispatch({ type: "adminPanel" });
    } else {
      alert("Invalid username or password.");
    }
  }
  return (
    <div className="grid w-full grid-rows-[auto_1fr_auto] justify-center">
      <h2 className="text-white font-semibold text-3xl md:text-4xl mb-6 ">
        Welcome To The Quiz!
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col px-3 md:px-2">
        <div className="space-x-6 ">
          <label className="text-white text-sm font-semibold">Admin</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Admin Username"
            className="input mb-2 md:w-72"
          />
        </div>
        <div className="space-x-2">
          <label className="text-white text-sm font-semibold">Password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Admin Password"
            className="input mb-4 md:w-72"
          />
        </div>
        <button
          className="inline-block text-sm rounded-full  font-semibold uppercase text-stone-500 transition-colors duration-300 hover:bg-slate-200 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-offset-2 disabled:cursor-not-allowed tracking-wide w-20 py-3 bg-slate-50 self-center"
          type="submit"
        >
          Login
        </button>
      </form>

      <button
        onClick={() => dispatch({ type: "dataReceived" })}
        className="mt-4 font-semibold uppercase text-neutral-200 ml-4 hover:text-neutral-500"
      >
        If User Click Here &rarr;
      </button>
    </div>
  );
}

export default Login;
