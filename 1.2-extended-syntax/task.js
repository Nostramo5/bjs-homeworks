"use strict";
function getResult(a,b,c) {
    let x, a, b, c;
    (a*x**2 + b*x + c) = 0;
    let discr = (b**2 - 4*a*c);
    if (discr < 0) {
        x = [];
    } else if (discr = 0) {
        x = (-1*b**2 / 2*a);
    } else x = [((-1*b + Math.sqrt(discr)) / 2*a), ((-1*b - Math.sqrt(discr)) / 2*a)];
    return x;
}

function getAverageMark(marks) {
    let averageMark;
    let marks = [];
    if (marks.length = 0) {
        averageMark = 0;
    } else if (marks > 5) {
        console.log("Введено более пяти аргументов!")
        marks = marks.splice(5);
    };
    let sum = 0;
    for (let i = 0; i <= marks.length; i++) {
        sum += marks[i];
    };
    averageMark = (sum / marks.length);
    return averageMark;
}

function askDrink(name,dateOfBirthday) {
    let visitorAge = (new Date.getFullYear() - dateOfBirthday.getFullYear());
    if (visitorAge >= 18) {
        result = console.log (`Не желаете ли олд-фэшн, ${name}?`);
    } else result = console.log (`Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`);
    return result;
}