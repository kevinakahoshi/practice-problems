function randomize_list(input_array) {
  const output_array = [];

  for (let index = 0; index < input_array.length;) {
    let max = input_array.length;
    let min = 0;
    let array_index = Math.floor(Math.random() * (max - min)) + min;
    output_array.push(input_array[array_index]);
    input_array.splice(array_index, 1);
  }

  return output_array;
}

const test_array = [5, 3, 2, 5, 1];

randomize_list(test_array);
