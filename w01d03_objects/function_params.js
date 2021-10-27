


const creature = 'bigfoot';


const printDifferentCreature = function(someCreature){
  someCreature = 'el chupacabra';
  
  console.log(`creature during function call: ${someCreature}`)
};

console.log('creature before function call: ', creature)
printDifferentCreature(creature)
console.log('creature after function call: ', creature)

const mug = {
  color: 'blue', 
  size: 'large',
  handle: true,
  volume: 30
};

mug.circumference = 10

const printDifferentMugColor = function(mugObj) {
  const copyMug = mugObj;
  copyMug.color = 'yellow';
  console.log(`the mugs color during the function call is ${copyMug.color}`)
}

console.log('mug before function call', mug)
printDifferentMugColor(mug)
console.log('mug after function call', mug)