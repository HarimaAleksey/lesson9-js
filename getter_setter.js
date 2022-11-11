class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._gender = null; // приватное поле
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        if(value === 'male' || value === 'female') {
            this._gender = value;
        } else {
            console.log('Only choose male or female');
        }
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const aleksey = new Person('Aleksey', 'Petrovskiy');
aleksey.gender = 'sdklhgdsk';
aleksey.gender = 'male';
console.log(aleksey.gender);
console.log(aleksey.getFullName())