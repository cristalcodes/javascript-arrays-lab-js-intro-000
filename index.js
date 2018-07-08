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

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.splice(0,1)
  return kittens
}

function appendKitten(name){
  var kittens=['Milo','Otis','Garfield']
  [...kittens, 'Broom']
  return kittens
}
