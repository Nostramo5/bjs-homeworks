"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    if (typeOf(percent) == NaN) {
        console.log(`Параметр "процент" содержит неправильное значение ${percent}`)
    } else if (typeOf(contribution) == NaN) {
        console.log(`Параметр "первый взнос" содержит неправильное значение ${contribution}`)
    } else if (typeOf(amount) == NaN) {
        console.log(`Параметр "сумма кредита" содержит неправильное значение ${amount}`)
    } else if (typeOf(date) == NaN) {
        console.log(`Параметр "срок платежа" содержит неправильное значение ${date}`)
    };
    let mortgageAmount = (amount - contribution);
    let paymentDuration = (Number(date.getFullMonth()) - Number(new Date.getFullMonth()));
    let monthlyPayment = (mortgageAmount * (percent / 12 + percent / 12 / (Math.pow((1 + percent / 12), paymentDuration ) - 1)));
    let totalAmount = Number(monthlyPayment * paymentDuration);
    totalAmount = totalAmount.toFixed(2);
    console.log(totalAmount);
    return totalAmount;
}

function getGreeting(name) {
    if (typeOf(name) == undefined) {
        let greeting = (console.log("Привет, мир! Меня зовут Аноним"));
    } else greeting = console.log(`Привет, мир! Меня зовут ${name}`);
    return greeting;
}