export const people = [
  {
    id: 1,
    name: "Gildong",
    age: 18,
    gender: "male",
  },
  {
    id: 2,
    name: "Chulsu",
    age: 11,
    gender: "male",
  },
  {
    id: 3,
    name: "Hanee",
    age: 31,
    gender: "female",
  },
];

export const getById = id => {
  const filteredPeople = people.filter(person => id === person.id);
  return filteredPeople[0];
}