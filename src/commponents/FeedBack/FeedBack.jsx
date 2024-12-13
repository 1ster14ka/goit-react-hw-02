const FeedBack = ({ feedBacks, positive }) => {
  return (
    <>
      <p>Good: {feedBacks.good}</p>
      <p>Neutral: {feedBacks.neutral}</p>
      <p>Bad: {feedBacks.bad}</p>
      <p>Positive: {positive}%</p>
    </>
  );
};

export default FeedBack;
