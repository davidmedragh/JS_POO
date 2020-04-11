//david
const david = {
    name : "david",
    health : 150,
    force : 25,
    velocity : 30,

    describe() {
        return `name is ${this.name} with health ${this.health} and force ${this.force} and velocity ${this.velocity} ` 
    }
};
console.log(david.describe());
david.velocity += 15;
console.log(`david earn move velocity and is now==>  ${david.describe()}`);

class pers {
    name;
    health;
    force;
    velocity;
    constructor(name,health,force,velocity) {
        this.name = name;
        this.health = health;
        this.force = force;
        this.velocity = velocity;
    }

    describe() {
        return `name is ${this.name} with health ${this.health} and force ${this.force} and velocity ${this.velocity} ` ;
    }
}

    const claude = new pers('claude',140,55,25);
    const maxime = new pers('maxime',160,25,36);
    console.log(claude.describe());
    console.log(maxime.describe());
    const danielle = Object.create(maxime);
    danielle.name = 'danielle';
    console.log(danielle.describe());
    const olivier = maxime;
    olivier.name = 'olivier';
    console.log('describe olivier ==>' +olivier.describe());
    console.log('describe maxime==>' +olivier.describe());

