function arrays(){
  kittens=['Milo','Otis','Garfield'];
}// Add your functions and code here

function destructivelyAppendKitten(name){
  kittens.push('Ralph')
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift('Bob');
  return kittens
}