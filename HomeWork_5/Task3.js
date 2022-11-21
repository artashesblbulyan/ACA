// Task 3
// Create classes named Jungle, Animal, Food, Tiger, Monkey, Snake, Fish,
// Grain, Meat.
// Tiger, Monkey, Snake should be extended from the class Animal.
// Fish, Grain, Meat should be extended from the class Food.
// ● The Jungle contains 3 species of animals; tigers, monkeys and snakes.
// ● All animals can do 3 things. Make a sound, eat food and sleep.
// ● By default when an animal’s energy level changes, it changes in the following
// ways:
// ○ -3 for making a sound.
// ○ +5 for eating food.
// ○ +10 for sleeping.
// ● The jungle can perform a sound off(soundOff). This involves all of the animals in
// the jungle each making their sound, along with reporting their energy level.
// ● Tigers get +5 of energy for sleeping.
// ● Monkeys get +2 of energy for eating and -4 for making a sound.
// ● Only monkeys will have the ability to play. When they do so, they say “Oooo Oooo”
// and get -8 of energy. If they don't have energy to play, they say “I’m too tired”.
// ● The jungle contains several types of food (Fish, Grain and Meat), and Tigers
// can’t eat Grain because they have sensitive digestive systems. And when they try
// to eat Grain , they say “I can’t eat that”.
// ● Bonus: The jungle can have each animal perform a random activity out of the ones
// possible for that animal.

const ANIMALS_SOUND ={
    Tiger:'Ar rrr rrr',
    Monkey:'Oooo Oooo',
    Snake: 'Fsh shs h'

}

class Animal {
    constructor(){
        this.energy = 0
        this.sounds = ANIMALS_SOUND[this.constructor.name]
    }
    sound (){
        console.log(this.sounds)
        this.energy -= 3
    }
    eatFood (food){
        this.energy += 5 
    }
    sleep (){
        this.energy += 10
    }

}





class Jungle {
    static sound = true
    static animals = []
    constructor(animal){
       this.animal = animal
       Jungle.animals.push(animal)
       this.animals = Jungle.animals
       console.log(this.animal.sound(),'asdasdasdasd')
       if(Jungle.sound){
       console.log(ANIMALS_SOUND[this.animal.constructor.name],this.animal)
       }
    }
    soundOff(){
        this.animal.sounds = false
    }
   
    

        }
    

class Food {

}

class Tiger extends Animal {
   sleep(){
    this.energy += 5
   }
}


// console.log(a.constructor.name)




class Monkey extends Animal{
    sound (){
        this.energy -= 4
    }
    eatFood (){
        this.energy += 2 
    }
    
    play () {
        if (this.energy < 8){
            console.log('I’m too tired')
        }
        else{
        this.energy -= 8
         console.log("Oooo Oooo")
        }
    }
}




class Snake extends Animal {

}

class Fish extends Food {

}
class Grain extends Food {

}

class Meat extends Food {

}
let a  = new Tiger ()
a.sleep()
let b = new Monkey()
b.sleep()
b.sleep()
b.sound()
b.sound()
b.sound()
b.sound()
// b.play()
// console.log(b,a)
let c = new Jungle(a)
let k = new Jungle(b)
c.soundOff()
// c.soundOff()
// a.sound()
// a.sound()
// a.sound()
console.log(k,c)
// console.log(c,'fffff')