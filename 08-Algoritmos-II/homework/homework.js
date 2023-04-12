"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array;

  let pivot = array.shift();
  let izq = [];
  let der = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) izq.push(array[i]);
    else der.push(array[i]);
  }

  return quickSort(izq).concat(pivot).concat(quickSort(der));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //okey probemos ahora

  if (array.length <= 1) {
    return array;
  }

  let middleIndex = Math.floor(array.length / 2);
  let leftArray = array.slice(0, middleIndex);
  let rightArray = array.slice(middleIndex);

  let leftSortedArray = mergeSort(leftArray);
  let rightSortedArray = mergeSort(rightArray);

  return merge(leftSortedArray, rightSortedArray);
}

function merge(leftArray, rightArray) {
  let resultArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      resultArray.push(leftArray.shift());
    } else {
      resultArray.push(rightArray.shift());
    }
  }

  return resultArray.concat(leftArray).concat(rightArray);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
