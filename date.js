// const today = new Date();
// console.log(today);

// console.log(Date.now()); // количество миллисекунд прошедшее с 1 января 1970г

// const date1 = new Date("2022-05-17"); // год-месяц-день
// console.log(date1);

// const date2 = new Date("06/25/2021"); // месяц/день/год
// console.log(date2);

// const date3 = new Date("1999-11-02T13:25:00"); // год-месяц-деньTчасы:минуты:секунды
// console.log(date3);

// // год, месяц (0-11), день, часы, минуты, секунды, миллисекунды
// const date4 = new Date(2022, 0, 22, 03, 45, 12, 500);
// console.log(date4);

// // если дата установлена не верно, то вернется объект с текстом "Invalid Date"

// // разница между двумя датами в миллисекундах
// console.log(date1 - date3); // 711218100000

// // разница между двумя датами в днях
// console.log(Math.round((date1 - date3)/24/60/60/1000)); // 8232 дней

// // конвертация миллисекунд в дату/время
// console.log(new Date(711218100000)); // Thu Jul 16 1992 00:35:00 GMT+0800 (Новосибирск, летнее время)

// // вчера
// console.log(new Date(Date.now()-86400000));

// // завтра
// console.log(new Date(Date.now()+86400000));

// Задача. Определение того, на какой день недели приходился день рождения пользователя
// const userDate = prompt("Введите своб дату рождения в формате year-month-day", "2000-08-14");
// const birthday = String(new Date(userDate)) === 'Invalid Date' ? 'error' : new Date(userDate);
// console.log(birthday);
// if(birthday !== 'error') {
//     const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thurdsday', 'friday', 'saturday'];
//     alert(`Вы родились в: ${days[birthday.getDay()]}`);
// } else {
//     alert('Некорретная дата');
// }

// Задача. Задать дату и вычислить в каких месяцах этот день выпадает на тот же день недели.
const currentDate = new Date();
const mutableDate = new Date();
// const month = currentDate.getMonth()
// const weekDay = currentDate.getDay();
const [month, weekDay] = [currentDate.getMonth(), currentDate.getDay()]; // деструктаризация
for(let i = 0; i < 12; i++) {
    if(i === month) continue; // избавимся от вывода текущего месяца
    mutableDate.setMonth(i);
    if(weekDay === mutableDate.getDay()) {
        console.log(mutableDate, mutableDate.toLocaleDateString());
    }
}