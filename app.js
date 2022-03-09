const age = parseInt(prompt("How old are you"));


if(isNaN(age)){
  console.log("문자입니다.");
} else if (age < 18){
  console.log("미성년자는 술을 먹을 수 없습니다");
} else if (age >= 18 && age <= 500{
  console.log("음주 가능합니다")
} 