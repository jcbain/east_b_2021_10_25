const mug = {
  color: 'blue', 
  size: 'large',
  handle: true,
  volume: 30
};

const relatives = [ 'yeti', 'bigfoot', 'gigantopithecus'];
for(const index in relatives) {
  console.log(index)
}
// for(const relative of relatives) {
//   console.log(relative)
// }

// for(const attribute in mug){
//   console.log(attribute)
//   console.log(mug[attribute])
// }
