const car = {
    _brand: 'Tesla',
    _model: 'Model S',
    _year: 2018,
    _specs: {
        engine: 'Electric',
        horsepower: 300,
        dimensions: {
            length: '4970mm',
            width: '1964mm',
            height: '1445mm'
        }
    },
    _owners: ['Andrii', 'Bob'],

    carAge: function (currentYear) {
        const age = currentYear - this._year;
        if (age <= 0) {
            console.log(`${this._brand} ${this._model} is a new car`);
        } else {
            console.log(`${this._brand} ${this._model} is ${age} year(s) old.`);
        }
        return age;
    },
    addOwner: function (value) {
        this._owners.push(value);
        console.log(`New owner added: ${value}`);
    },

    get brand() {
        return this._brand.toUpperCase();
    },

    set brand(value) {
        if (typeof value === 'string') {
            this._brand = value.toLowerCase();
            console.log(`A new owner added:  ${value.toUpperCase()}`);
        } else {
            console.log('Owner name should contain only letters!');
        }
    },

    get year() {
        return this._year;
    },

    set year(value) {
        if (typeof value === 'number') {
            this._year = value;
            console.log(`Age updated:  ${value}`);
        } else {
            console.log('Age must be a number!');
        }
    },

    get model() {
        return this._model.toUpperCase();
    },

    set model(value) {
        if (typeof value === 'string') {
            this._model = value.toLowerCase();
            console.log(`A new owner added:  ${value.toUpperCase()}`);
        } else {
            console.log('Model name should contain only letters!');
        }
    },

    get ownersCount() {
        return this._owners.length;
    },
    get horsepower() {
        return this._specs.horsepower;
    },
    set horsepower(value) {
        if (typeof value === 'number') {
            this._specs.horsepower = value;
            console.log(`Horsepower updated to ${value}`);
        } else {
            console.log('Horsepower must be a number!');
        }
    },
    summary: function () {
        return `${this.brand} ${this._model} Year: ${this._year}, Horsepower: ${this._specs.horsepower} Owners: ${this._owners.join(', ')} `;
    }
};

console.log(car.brand);
car.brand = 'BMW';
console.log(car.brand);

console.log(car.ownersCount);
car.addOwner('XXXXxXXXX');
console.log(car.ownersCount);

console.log(car.horsepower);
car.horsepower = 350;
console.log(car.horsepower);

console.log(car.year);
car.year = 2015;
console.log(car.year);

console.log(car.model);
car.model = 'X5';
console.log(car.model);

car.carAge(2025);
console.log(car.summary());

car.model = 5;
car.horsepower = '350';
car.year = '2025';
