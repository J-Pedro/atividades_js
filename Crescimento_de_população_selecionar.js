var a = prompt ("Insira o numero de habitantes A:")
var b = prompt ("Insira o numero de habitantes B:")
var ano = 1
var taxa1 = prompt ("Insira o valor da taxa do A")
var taxa2 = prompt ("Insira o valor da taxa de B")
a = parseInt(a)
b = parseInt(b)
taxa1 = parseFloat(a)
taxa2 = parseFloat(b)
 
 while (a < b){
   ano = ano + 1
   a = a + (a * taxa1)
   b = b + (b * taxa2)
 }
 
 
console.log ("Irá durar", ano, "anos")
