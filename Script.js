function aumenta() {
    let x = parseFloat(document.getElementById("numero 1").value)
    let y = parseFloat(document.getElementById("numero 2").value) 
    
    total = x + y
      document.getElementById("resultado").innerHTML = "Total: " + total.toFixed(2);
    
    clear()
    }
      
   
function multiplicação(){
let t = parseFloat(document.getElementById("numero 1").value) 
let o = parseFloat(document.getElementById("numero 2").value) 
    oi = t * o
    document.getElementById("resultado").innerHTML = "Total: " + oi.toFixed(2);
clear()
}

function diminuir() {
let p = parseFloat(document.getElementById("numero 1").value)   
let i = parseFloat(document.getElementById("numero 2").value) 

po = p - i
    document.getElementById("resultado").innerHTML = "Total: " + po.toFixed(2);
clear()
}



function dividr() {
let u = parseFloat(document.getElementById("numero 1").value)   
let r = parseFloat(document.getElementById("numero 2").value) 

op = u / r
    document.getElementById("resultado").innerHTML = "Total: " + op.toFixed(2)

    clear()
    
}

function clear(){
    {
        document.getElementById('numero 1').value='';
        document.getElementById('numero 2').value='';
    }
}