function aumenta() {
    let x = parseFloat(document.getElementById("numero 1").value)
    let y = parseFloat(document.getElementById("numero 2").value) 
    
    resultado = x + y
      document.getElementById("resultado").innerHTML = "Total: " + resultado.toFixed(2);
    
    clear()
    }
      
   
function multiplicação(){
let x = parseFloat(document.getElementById("numero 1").value) 
let y = parseFloat(document.getElementById("numero 2").value) 
    resultado = x * y
    document.getElementById("resultado").innerHTML = "Total: " + resultado.toFixed(2);
clear()
}

function diminuir() {
let x = parseFloat(document.getElementById("numero 1").value)   
let y = parseFloat(document.getElementById("numero 2").value) 

resultado = x - y
    document.getElementById("resultado").innerHTML = "Total: " + resultado.toFixed(2);
clear()
}



function dividr() {
let x = parseFloat(document.getElementById("numero 1").value)   
let y = parseFloat(document.getElementById("numero 2").value) 

resultado = x / y
    document.getElementById("resultado").innerHTML = "Total: " + resultado.toFixed(2)

    clear()
    
}

function clear(){
    {
        document.getElementById('numero 1').value='';
        document.getElementById('numero 2').value='';
    }
}