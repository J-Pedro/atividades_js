var n = prompt ("Insira valor de n")
n = parseInt(n)
var primo = 0

for (i=2; i<n; i++){
  if ( n % i == 0){
    primo++
    break
    }
  if ( n % i != 0){
    
  }
}
  
  if(primo==0){
    console.log (n, 'É um número primo')
  }

  if(primo!=0){
    console.log (n, 'Não é número primo')
  }

