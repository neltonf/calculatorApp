let a = "";
let b = "";

let signDone = false;
let signDot = false

let signValue

let add = (a, b) => (a + b);
let sub = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let btn = document.querySelectorAll('button').forEach(item => {
    item.addEventListener("click", () => {
        item.innerText;
        if (item.innerHTML == "/" || item.innerHTML == "*" ||
            item.innerHTML == "+" || item.innerHTML == "-") {
            //Checking if A is a value
            if (a != "") {
                signDone = true;
                signDot = false;
                document.getElementById("Dvalue").innerHTML = a;
                document.getElementById("Doperation").innerHTML = item.innerHTML;
                document.getElementById("Dcurrent").innerHTML = 0;
            }
        } else if (item.innerHTML == "ENTER") {
            if (a != "" && b != "") {
                a = Number(a);
                b = Number(b);
                signValue = document.getElementById("Doperation").innerHTML;
                if (signValue == "+")
                    a = add(a, b)
                else if (signValue == "-")
                    a = sub(a, b)
                else if (signValue == "/")
                    a = divide(a, b);
                else if (signValue == "*")
                    a = multiply(a, b);
                document.getElementById("Doperation").innerHTML = signValue + "    " + b;
                document.getElementById("Dcurrent").innerHTML = a;
                b = "";
                signDot = false;
            }
        } else if (item.innerHTML == "A/C") {
            a = "";
            b = "";
            signValue = ""
            document.getElementById("Dcurrent").innerText = 0;
            document.getElementById("Dvalue").innerHTML = 0;
            document.getElementById("Doperation").innerHTML = signValue;
            signDone = false;
        } else {
            //Updating value of A
            if (signDone == false) {
                //Normal values
                if (item.innerHTML != ".") {
                    a = a + item.innerHTML;
                    //Dot value
                } else if (signDot == false && item.innerHTML == ".") {
                    signDot = true;
                    a = a + item.innerHTML;
                }
                document.getElementById("Dcurrent").innerHTML = a;
            }
            //Updating Value of B
            else {
                if (item.innerHTML != ".") {
                    b = b + item.innerHTML;
                    //Dot value
                } else if (signDot == false && item.innerHTML == ".") {
                    signDot = true;
                    b = b + item.innerHTML;
                }
                document.getElementById("Dcurrent").innerHTML = b;
            }
        }
    });
});