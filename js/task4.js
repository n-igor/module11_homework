const printNumber = (num1, num2) => {
    let i = num1;
    const timerId = setInterval(() => {
        (i <= num2) ?  console.log(i++) : clearInterval(timerId);
    }, 1000);
};
printNumber(2, 6);
