function saySomething(whatToSay) {
    window.alert(whatToSay);
}
saySomething("hi");

function add(number1, number2) {
    return number1 + number2;
}

const result = add(3, 5);

saySomething("The sum is " + add(3, 5) + ".");
