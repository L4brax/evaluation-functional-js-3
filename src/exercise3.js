const _ = require("lodash");

const meeteek = input => {
  let result = {};
  _.forEach(input, person => {
    result[person.firstname] = 
      _.chain(input)
        .filter(personChecked => personChecked.firstname=person.firstname)
        .filter(personChecked =>
          _.includes(personChecked.sexPartnerApproved, person.sex)
        && _.includes(person.sexPartnerApproved, personChecked.sex))
        .values();
  });
  return result;
};

module.exports = {
  title: "Exercise 3",
  run: meeteek
};
