const calculater = {
  add: function(a, b){
    console.log(a+b);
  },

  subtract: function(a, b){
    console.log(a-b)
  },

  division: function(a, b){
    console.log(a/b);
  },

  multiply: function(a, b){
    console.log(a * b);
  },

  squared: function(a, b){
    console.log(a ** b);
  }
};

calculater.add(10, 20);
calculater.subtract(10, 20);
calculater.division(10, 20);
calculater.multiply(10, 20);
calculater.squared(10, 20);
