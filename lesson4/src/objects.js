const car = {
    brand: 'Tesla',
    model: 'Model S',
    year: 2018,
    specs: {
        engine: 'Electric',
        horsepower: 300,
        dimensions: {
            length: '4970mm',
            width: '1964mm',
            height: '1445mm'
        }
    },
    owners: ['Andrii', 'Bob'],

    carAge: function (currentYear) {
        const age = currentYear - this.year;
        if (age <= 0) {
            console.log(`${this.brand} ${this.model} is a new car`);
        } else {
            console.log(`${this.brand} ${this.model} is ${age} year(s) old.`);
        }
    },
    addOwner: function (name) {
        this.owners.push(name);
        console.log(`New owner added: ${name}`);
    }
};
car.carAge(2018);
car.carAge(2025);
car.addOwner('Stepan');
