window.addEventListener("load", () => {
  user_1 = creatStudent("Vova", "Popov", 44, 125);

  console.log(user_1);
});

function creatStudent(name, lastName, age, midellBall) {
  let id = "";
  idLength = 7;
  for (let index = 0; index < idLength; index++) {
    rand = Math.floor(Math.random() * 10);
    id += String(rand);
  }
  studen = {
    name : name, 
    lastName : lastName,
    age : age,
    userID : id,
    midellBall : midellBall
  }

  return studen;
}
