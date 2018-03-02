const countSequence = (sequence, input) => {
  return sequence.length === 0? 0 : input.split(sequence).length-1;
};

module.exports = {
  title: "Exercise 4",
  run: countSequence
};
