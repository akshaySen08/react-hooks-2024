
const usersList = Array.from({ length: 77777 }, (_, i) => ({ id: i, name: `Name ${i}`, isSelected: false }));

usersList[77776].isSelected = true;

console.log(usersList);


export default usersList;