function GenerateCharacter(name, profession, gender, age, strength, hitPoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;

    this.printStats = function () {
        console.log(this)
    }

    this.isAlive = function () {
        if (this.hitPoints > 0) {
            console.log("Alive")
        } else {
            console.log("dead")
        }
    }

    this.attack = function (character2) {
        character2.hitPoints -= this.strength;
        // name[2].hitpoints-name[1].strength
    };

    this.LevelUp = function () {
        this.age += 1;
        this.strength += 5;
        this.hitPoints += 25;
    };
};

var characterOne = new GenerateCharacter("Ike", "Blacksmith", "alien", 25, 69, 100)
// characterOne.printStats();
characterOne.isAlive();

var characterTwo = new GenerateCharacter("Jimmy", "cook", "human male", 40, 10, 50)
// characterTwo.printStats();
characterTwo.isAlive();

var characterThree = new GenerateCharacter("Sonya", "ranger", "elf female", 2000, 40, 75)
// characterThree.printStats();
characterThree.isAlive();

characterOne.attack(characterThree);
characterOne.LevelUp();
characterOne.printStats();
characterThree.printStats();