const calculater = {
  add: function(a, b){
    return a+b;
  },

  subtract: function(a, b){
    return a-b;
  },

  division: function(a, b){
    return a/b;
  },

  multiply: function(a, b){
    return a * b;
  },

  squared: function(a, b){
    return a ** b;
  }
};

const human = {
  name: "yunseop",
  age: "25"
};

console.log(human.age);

human["age"] = 22;

console.log(human.age);
