var a = 80000
var b = 200000
var ano = 0
 
while (a < b ){
 
 ano++
 a = a + (a * 0.03)
 b = b + (b * 0.015)
}
 
console.log ("Irá durar", ano, "anos")
