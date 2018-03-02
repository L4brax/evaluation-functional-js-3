const moment = require("moment");

const sortProduct = input => {
  return {
    tomato : input
      .filter(value => moment(value.dateAdded).toDate() > moment().year(2000).toDate())
  }
};

module.exports = {
  title: "Exercise 1",
  run: sortProduct
};
