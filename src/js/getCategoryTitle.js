export function getCategoryTitle(category) {
  const array = category.split('');
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let letter = array[i];
    if (letter === ' ') {
      newArray.push(letter);
    }
    console.log(newArray.length);
  }
  return newArray.join('');
}

getCategoryTitle('Combined Print and E-Book Fiction');
