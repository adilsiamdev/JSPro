//ekta single number odd or even check korar function
function oddeven(a) {
    return a % 2 === 0 ? "even" : "odd";
}

//ekta range er moddhe sob number odd or even check korar function
function oddevenRange(n) {
    for (let i = 0; i <= n; i++) {
        console.log(i + " is " + oddeven(i));
    }
}

oddevenRange(2);