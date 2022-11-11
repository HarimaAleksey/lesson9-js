function Student(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
}

Student.prototype.showInfo = function() {
    console.log(`Student name: ${this.firstName} ${this.lastName}`);
};
Student.prototype.showAge = function() {
    const deltaTime = Date.now() - Date.parse(this.birthday);
    const studentAge = Math.floor(deltaTime/(365*24*60*60*1000));
    console.log(`${this.firstName} ${this.lastName} is ${studentAge} years old`);
};


const student = new Student();
console.log(student);

const michael = new Student('Michael', 'Dowson', '11/23/2001');
michael.showInfo();
michael.showAge();


// const diana = {
//     firstName: 'Diana',
//     lastName: 'Fention',
//     birthday: '07.22.1996',
//     showInfo: function() {
//         console.log(`Student name: ${this.firstName} ${this.lastName}`);
//     },
//     showAge: function() {
//         const deltaTime = Date.now() - Date.parse(this.birthday);
//         const studentAge = Math.floor(deltaTime/(365*24*60*60*1000));
//         console.log(`${this.firstName} ${this.lastName} is ${studentAge} years old`);
//     }
// }

// const luis = {
//     firstName: 'Luis',
//     lastName: 'Melitano',
//     birthday: '02.06.2002',
//     showInfo: function() {
//         console.log(`Student name: ${this.firstName} ${this.lastName}`);
//     },
//     showAge: function() {
//         const deltaTime = Date.now() - Date.parse(this.birthday);
//         const studentAge = Math.floor(deltaTime/(365*24*60*60*1000));
//         console.log(`${this.firstName} ${this.lastName} is ${studentAge} years old`);
//     }
// }

// console.log(diana);
// diana.showInfo();
// diana.showAge();
// console.log(luis);