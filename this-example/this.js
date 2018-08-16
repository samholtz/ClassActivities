function foo() {
    console.log(this);

}

foo();

var poodle = {
    bark: function () {
        console.log("bow wow");
    },
    walk: function () {
        console.log("wassup");
    },
    all: function () {
        this.walk();
        this.bark();
    },
    bounce: foo
}

poodle.all();
poodle.bounce();


var ruined = foo.bind({ msg: "I am destroyer of worlds" });
ruined();