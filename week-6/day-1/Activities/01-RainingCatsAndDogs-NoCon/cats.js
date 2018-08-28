var dog = {
    raining: true,
    noise: 'Woof!',
    makeNoise: function () {
        if (this.raining === true)
            console.log("It is raining dogs, " + dog.noise)
    }
};

var cat = {
    raining: false,
    noise: "Meow!",
    catNoise: function () {
        if (this.raining === true)
            console.log("it is raining cats, " + cat.noise)
    }
};

dog.makeNoise();

cat.raining = true;
cat.catNoise();

