function checkNumber(num) {
    let res = '';
    if (num < 2 || num > 1000) {
        console.log('Введено недопустимое значение')
    }
    if (num == 2) res = 'простое число'
    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
            res = 'Не является простым числом'
            break;
        } else {
            res = 'простое число'
        }
    }   
    console.log(res);
};
checkNumber(27);