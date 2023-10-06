let saldo = 0

let saldoBaru = prompt("Masukkan Saldo : ")
saldo = saldo + parseInt(saldoBaru)
document.getElementById("saldo").innerHTML = "Saldo Kamu : "+ saldo;

function tambahSaldo(){
        saldoBaru = prompt("Masukkan Saldo : ")
        saldo = saldo + parseInt(saldoBaru)
        document.getElementById("saldo").innerHTML = "Saldo Kamu : " + saldo;
    }

    function kurangiSaldo(){
        saldoBaru = prompt("Masukkan Saldo : ")
        saldo = saldo - parseInt(saldoBaru)
        document.getElementById("saldo").innerHTML = "Saldo Kamu : " + saldo;
    }