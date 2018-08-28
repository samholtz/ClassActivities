function DigitalPal(hungry, sleepy, bored, age) {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;

    this.Feed = function () {
        if (this.hungry === true) {
            console.log("That was yummy!")
            this.hungry = false,
                this.sleepy = true
        } else {
            console.log("No thank you, i'm full")
        }
    }

    this.Sleep = function () {
        if (this.sleepy === true) {
            console.log("zzzzzzz")
            this.sleepy = false,
                this.bored = true,
                IncreaseAge();

        } else {
            console.log("No way, i'm not tired!")
        }
    }

    this.Play = function () {
        if (this.bored === true) {

            console.log("Lets play")
            this.bored = false;
            this.hungry = true
        } else {
            console.log("Not right now, Later?")

        }
    }

    this.IncreaseAge = function () {
        this.age++;
        console.log("Happy birthday to me! I am " + age + " old!")
    }


}


var friendOne = new DigitalPal();
friendOne.Feed();
friendOne.Sleep();
friendOne.Play();