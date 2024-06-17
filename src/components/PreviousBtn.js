function PreviousBtn({ dispatch, index }) {
  if (index > 0)
    return (
      <div>
        <button
          className="btn w-14 md:w-24"
          onClick={() => dispatch({ type: "prevQuestion" })}
        >
          Prev
        </button>
      </div>
    );
}

export default PreviousBtn;
