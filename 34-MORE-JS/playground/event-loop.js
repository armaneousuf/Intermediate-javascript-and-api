function one() {
    two();
    console.log(1);
}
function two() {
    setTimeout(() => {
        console.log('Inside two');
    }, 2000);
    three();
    console.log(2);
}
function three() {
    setTimeout(() => {
        console.log('Inside three');
    }, 0);
    four();
    console.log(3);
}
function four() {
    five();
    console.log(4);
}
function five() {
    console.log(5);
}

one();