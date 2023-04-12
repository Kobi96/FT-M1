"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:

  let array = [1];

  if (num === 1) return array;

  for (let i = 2; i <= num; i++) {
    while (num % i === 0) {
      array.push(i);
      num = num / i;
    }
  }

  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let aux = array[j + 1];
        array[j + 1] = array[j];
        array[j] = aux;
      }
    }
  }

  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i;

    while (j >= 0 && array[j - 1] > key) {
      array[j] = array[j - 1];
      j--;
    }
    array[j] = key;
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    let current = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[current]) {
        current = j;
      }
    }
    if (current !== i) {
      let aux = array[i];
      array[i] = array[current];
      array[current] = aux;
    }
  }

  return array;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
