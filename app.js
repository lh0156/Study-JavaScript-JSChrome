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

console.log(calculater.add(10, 20));
console.log(calculater.subtract(10, 20));
console.log(calculater.division(10, 20));
console.log(calculater.multiply(10, 20));
console.log(calculater.squared(10, 20));
