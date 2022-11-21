// Implement the described class hierarchy: the Character class is the parent class for all
// the others. 6 child classes Bowerman, Swordsman, Magician, Daemon, Undead, and
// Zombie inherit from it, setting their own characteristics.
// 1.  Properties that instances of the Character class should have:
// name - name
// type - type
// health - standard of living
// level - character level
// attack - attack
// defense - protection
// 2. The class constructor must meet the following requirements:
// name - string, min - 2 characters, max - 10
// type - one of the types (string): Bowman, Swordsman, Magician, Daemon,
// Undead, Zombie
// If incorrect values   are passed, an error should be thrown
// throw new Error(...)
// 3. Your function should automatically set the following fields:
// health: 100
// level: 1
// Attack / Defense:
// ● Bowman: 25/25
// ● Swordsman: 40/10
// ● Magician: 10/40
// ● Undead: 25/25
// ● Zombie: 40/10
// ● Daemon: 10/40


class Character {
    constructor(name){
        
        if(name.length >= 2 && name.length <=10){
            this.name = name
        }else{
            throw new Error("NameError")
        }
        this.type =this.constructor.name 
        this.health = 100
        this.level = 1
        // this.attack
        // this.defense
        
    }

    levelUp(){
        
            if(this.health > 0){
                this.attack += this.attack*0.2
                this.defense += this.defense*0.2
                this.health = 100
                this.level += 1
            }else{
                throw new Error("health is 0")
            }
       
     
    }
    damage(points){
        
        this.health -= points * (1 - this.defense / 100)
        if(this.health < 0){
            this.health = 0
    }
}
}

class BowerMan extends Character{
    constructor(name){
        super(name)
        this.attack = 25
        this.defense = 25
    }
}

class Swordsman extends Character{
    constructor(name){
        super(name)
        this.attack = 40
        this.defense = 10
    }
}
class Magician extends Character{
    constructor(name){
        super(name)
        this.attack = 10
        this.defense = 40
    }
}
class Daemon extends Character{
    constructor(name){
        super(name)
        this.attack = 10
        this.defense = 40
    }
}
class Undead extends Character{
    constructor(name){
        super(name)
        this.attack = 25
        this.defense = 25
    }
}
class Zombie extends Character{
    constructor(name){
        super(name)
        this.attack = 40
        this.defense = 10
    }
}


let a = new BowerMan('Name')

a.damage(10)
a.damage(20)
a.damage(10)
a.damage(70)
a.damage(10)
a.damage(50)

let b = new Zombie('Name1')
console.log(a,b)