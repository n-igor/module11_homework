function getSum(num) {
    return function(num1) {
        console.log(num + num1)
        return num + num1;
    }
}
getSum(2)(4)