function calculate() {
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var selector = document.getElementById("math")

    var math = selector.options[selector.selectedIndex].value


    switch (math) {
        case "addition":
            var answer = parseInt(num1) + parseInt(num2)
            break;
        case "subtract":
            var answer = parseInt(num1) - parseInt(num2)
            break;
        case "multiply":
            var answer = parseInt(num1) * parseInt(num2)
            break;
        case "divide":
            var answer = parseInt(num1) / (num2)
            break;
        default:
            alert("Error")
    }
    document.getElementById("answer").innerHTML = answer
}