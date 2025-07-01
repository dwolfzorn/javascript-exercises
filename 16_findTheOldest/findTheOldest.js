function findTheOldest(people) {
  const currentYear = new Date().getFullYear();

  return people.reduce((oldest, person) => {
    const deathYear = person.yearOfDeath ?? currentYear;
    const oldestDeathYear = oldest.yearOfDeath ?? currentYear;

    const age = deathYear - person.yearOfBirth;
    const oldestAge = oldestDeathYear - oldest.yearOfBirth;

    return age > oldestAge ? person : oldest;
  });
}


// Do not edit below this line
module.exports = findTheOldest;
