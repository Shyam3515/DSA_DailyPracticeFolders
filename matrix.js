let mat = [];
// Create a 3x3 matrix with random values between 1 and 10
function createMatrix() {
  for (let i = 0; i < 3; i++) {
    mat[i] = []; // create inner array
    for (let j = 0; j < 3; j++) {
      mat[i][j] = Math.floor(Math.random() * 10) + 1;
    }
  }
}
createMatrix();

// Sum of all elements in the matrix
function sumofMatrix() {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      sum += mat[i][j]; // Add the current element to the sum
    }
  }
  return sum;
}
console.log(sumofMatrix());

// Print the matrix
function printMatrix() {
  for (let i = 0; i < mat.length; i++) {
    console.log(mat[i].join(" ")); // Join the elements of the inner array with a space and print it
  }
}
printMatrix();

//Spiral Matrix
function spiralMatrix(matrix) {
  let result = [];
  if (matrix.length === 0) return result;

  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse from left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++; // Move down to the next row

    // Traverse from top to bottom
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--; // Move left to the next column

    if (top <= bottom) {
      // Traverse from right to left
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--; // Move up to the next row
    }
  }
  return result;
}
console.log(spiralMatrix(mat));

// Diagonal Elements
let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
function diagonal(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === j || i + j === matrix.length - 1) {
        console.log(matrix[i][j]);
      }
    }
  }
}
diagonal(matrix);

//Secondary solution for diagonal elements
for (let i = 0; i < matrix.length; i++) {
  {
    console.log(matrix[i][i]); // Primary diagonal element
    console.log(matrix[i][matrix.length - 1 - i]); // Secondary diagonal element
  }
}
// For the secondary diagonal, the column index is calculated as matrix.length - 1 - i. This allows us to access both diagonals of the matrix efficiently. Where when i increases, the column index for the secondary diagonal decreases, ensuring we get the correct elements from both diagonals. For example, in a 4x4 matrix, when i is 0, we access matrix[0][3] for the secondary diagonal; when i is 1, we access matrix[1][2], and so on.
// (0,3) => matrix[0][3] => 4; matrix.length - 1 - 0 => 3;
// (1,2)
// (2,1)

// To rotate the matrix by 90deg
// Two-line explanation for interviews
// First, transpose the matrix so rows become columns.
// Then, reverse each row to obtain the 90° clockwise rotated matrix.
function rotateBy90(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[i].length; j++) {
      // Swap elements at (i,j) and (j,i)
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];

      // newMatrix[i][j] = matrix[j][matrix.length - 1 - i]; to do this we need to create a new matrix, bcz without new matrix the values will be misplaced even before performing opearation, and we will have the ouput in new matrix.
    }
  }

  // Reverse each row to get the 90-degree clockwise rotation
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
}
rotateBy90(matrix);
console.log(matrix);
