function findFirstNotRepeatedChar(str) {
  let array = str.split('');
  let result = '';
  let counter = 0;

  for (let i = 0; i < array.length; i++) {
    counter = 0;

    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]){
        counter+=1;
      }
    }

    if (counter < 2) {
      result = array[i];
      break;
    }
  }

  return result;
}

console.log(findFirstNotRepeatedChar('abacddbec'));
