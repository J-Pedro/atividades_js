var fatorial = 1
var n = prompt("Insira o valor de n")
n = parseInt(n)

for (i= n; i> 1; i--){
  fatorial = fatorial * i
  console.log(fatorial)
}
