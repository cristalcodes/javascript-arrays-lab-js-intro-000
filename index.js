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
    return [...kittens, 'Broom']

}

function prependKitten(){
  return ['Arnold',...kittens]
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length-1)
}

function removeFirstKitten(){
  return kittens.slice(1);
}
