const player = {
    name: "nico",
    sayHello: function(otherPersonsName) {
        console.log("Hello" + otherPersonsName + "nice to meet you");
    }
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("yunseop");