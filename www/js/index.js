function testar() {
    var num = Number(window.document.getElementById("primo").value);
    var res = window.document.getElementById("resprimo");
    var divisores = 0;
    var num1 = Number(window.document.getElementById("num1").value);
    var num2 = Number(window.document.getElementById("num2").value);
    var res1 = window.document.getElementById("resultado");
    for (var count = 1; count <= num; count++)
        if (num % count == 0) {
            divisores++;
        }
    if (divisores == 2) {
        res.innerHTML = 'O primeiro número é primo';
    } else {
        res.innerHTML = 'O primeiro número não é primo';
    }
    if(num2 != 0){
    res1.innerHTML = `A soma de ${num1} + ${num2} = ${num1 + num2}` + `</br></br>` + 
    `A subtração de ${num1} - ${num2} = ${num1 - num2}` + `</br></br>` +
    `A divisão de ${num1} / ${num2} = ${num1 / num2}` + `</br></br>` + 
    `A multiplicação de ${num1} x ${num2} = ${num1 * num2}` + `</br></br>` + 
    `A sobra da divisão de ${num1} % ${num2} = ${num1 % num2}` + `</br></br>`;
    } else{
        res1.innerHTML = "Digite valores válidos."
    }
}

function limpa() {
    var num = Number(window.document.getElementById("primo").value);
    var res = window.document.getElementById("resprimo");
    var divisores = 0;
    var num1 = Number(window.document.getElementById("num1").value);
    var num2 = Number(window.document.getElementById("num2").value);
    var res1 = window.document.getElementById("resultado");
    if (document.getElementById('primo').value != "" || document.getElementById('num2').value != "" || document.getElementById('num1').value != "") {
        document.getElementById('primo').value = "";
        document.getElementById('num1').value = "";
        document.getElementById('num2').value = "";
    }
    if(document.getElementById('resprimo').value != "" || document.getElementById('resultado').value != ""){
        res.innerHTML = "</br>";
        res1.innerHTML = "</br>";
    }
}