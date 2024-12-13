const Options = ({ onClick, total, onClickReset }) => {
  return (
    <>
      <button onClick={() => onClick("good")}>Good</button>
      <button onClick={() => onClick("neutral")}>Neutral</button>
      <button onClick={() => onClick("bad")}>Bad</button>
      {total > 0 && <button onClick={onClickReset}>Reset</button>}
    </>
  );
};

export default Options;
