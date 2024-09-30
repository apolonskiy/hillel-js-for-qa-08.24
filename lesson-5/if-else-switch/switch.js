let type;

const plantName = 'cucumber'
switch (plantName) {
  case 'tomato':
  case 'cucumber':
    if(1 < 0) {
      type = 'Vegetable';
      console.log(type);
    }
    break;
  case 'apple':
  case 'pear':
  case 'kiwi':
    type = 'Fruit';
    console.log(type);
    break;
  default:
    type = 'Unknown';
}
console.log(type)