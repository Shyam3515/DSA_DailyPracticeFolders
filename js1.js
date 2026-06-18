// Day - 1;
// Reverse a number
function reverse(num) {
  let rev = 0;
  if (num <= 9) return num; // Single digit numbers are the same when reversed, so we can return the number itself.

  while (num > 0) {
    let lastDigit = num % 10; // gives last digit of num 1234 -> 4
    rev = rev * 10 + lastDigit; // adds last digit to rev 0 * 10 + 4 -> 4, 4 * 10 + 3 -> 43
    num = Math.floor(num / 10); // removes last digit from num 1234 -> 123.4 -> 123
  }
  return rev;
}
console.log("Reverse : ", reverse(1234));

//Palindrome check [We can also reverse the number and check if it is same as original number]
function palindrome(num) {
  let str = num.toString();
  let i = 0,
    j = str.length - 1;
  if (num < 10) return "Palindrome";

  while (i < j) {
    if (str[i] !== str[j]) {
      return "Not Palindrome";
    }
    i++;
    j--;
  }
  return "Palindrome";
}
console.log("Palindrome : ", palindrome(42124));

//Longest Substring without repeating Character
function LSS(str) {
  let newStr = "",
    subStr = "";
  let maxLength = 0;

  for (let char of str) {
    if (newStr.includes(char)) {
      let index = newStr.indexOf(char); // returns first index of duplicate char
      //i/p: hello -> str.slice(2) -> "llo" 👉 Means: Start at index 2
      //as we want to remove the current index as well we include +1;
      newStr = newStr.slice(index + 1); //👉 “slice(start) means: start FROM that index”
    }

    newStr += char;
    if (newStr.length > maxLength) {
      maxLength = newStr.length;
      subStr = newStr;
    }
  }
  console.log(subStr, maxLength);
}
LSS("abzxscaadefacyrd");

///////////////////////////////////////////////////////////////////
// Day - 2;
//Fibbonacci
function fib(n) {
  let a = 0,
    b = 1;

  for (let i = 0; i < n; i++) {
    console.log("Fib : ", a);
    [a, b] = [b, a + b]; // 👉 This line uses array destructuring to simultaneously update the values of a and b.
  }
  return a;
}
console.log("Fib : ", fib(10)); // Return nth fib

//Factorial
function factorial(n) {
  let res = 1;

  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
}

// Container with most water
function maxWaterContainer(arr) {
  let left = 0,
    right = arr.length - 1,
    maxWater = 0,
    water = 0;

  while (left < right) {
    //find max, with min height and width of pointers
    water = Math.min(arr[left], arr[right]) * (right - left);
    //if left is smaller, increment left
    arr[left] > arr[right] ? right-- : left++;
    maxWater = Math.max(maxWater, water);
  }
  console.log(maxWater);
}
maxWaterContainer([1, 8, 6, 2, 5, 4, 8, 3, 7]);

////////////////////////////////////////////////////////////////////////////////////////////////
// Day - 3;
//Check Prime Number
function prime(num) {
  let sqrt = Math.floor(Math.sqrt(num));
  if (num <= 1) return "Not Prime";
  if (num === 2) return "Prime";

  for (let i = 2; i <= sqrt; i++) {
    if (num % i === 0) return "Not Prime";
  }
  return "Prime";
}
console.log(prime(2));

//Print Prime numbers in range
//"Instead of calculating square root every time, we check i * i <= n, which ensures we only iterate up to √n efficiently."
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function printPrimes(n) {
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

printPrimes(40);

//Recursion: Print numbers from 1 to N
//Method - 1 [Forward recursion (top-down printing)]
//👉 "It prints numbers in ascending order by incrementing the value and making a recursive call until the base condition is reached."
function number(i, num) {
  if (i > num) return;

  console.log(i);
  number(i + 1, num);
}
number(1, 10);

//Method - 2 [Forward recursion (top-down printing)]
//👉 "It uses recursion and the call stack to first reach the base case, then prints numbers in ascending order while unwinding."
function print(num) {
  if (num === 0) return;

  // By placing the console.log before the recursive call, we print the current number first, then make the recursive call to print the next number. This results in numbers being printed in ascending order as the recursion unwinds.
  print(num - 1);
  console.log(num);
}
print(6);

///////////////////////////////////////////////////////////////////////////
// Day - 4;
//Armstrong Number- For example, 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153.
function armstrong(num) {
  let sum = 0,
    power = num.toString().length;
  let temp = num;
  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, power);
    temp = Math.floor(temp / 10);
  }

  return sum === num ? "Armstrong" : "Not Armstrong";
}
console.log(armstrong(153));

//Sum Of digits
function sumOfDigits(num) {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log("Sum of digits : ", sumOfDigits(1234)); // 10

// Factorial Recursion
function factorial(num) {
  if (num <= 1) return 1;
  return num * factorial(num - 1);
}
console.log("Factorial : ", factorial(5)); // 120

// Fibonacci Recursion - "This function calculates the nth Fibonacci number using recursion. It checks for the base cases (n = 0 and n = 1) and returns the corresponding Fibonacci values.
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci : ", fibonacci(10)); // 55

//////////////////////////////////////////////////////////////////////////////////////
//Day - 5;
//To single digit
let a = 12234;
function sumofNumber(num) {
  if (num < 9) return num;
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum += digit;
    num = Math.floor(num / 10);
  }
  return sumofNumber(sum);
}
console.log(sumofNumber(a));

// Move zeroes to end of array
let arr = [3, 1, 0, 4, 5, 0, 7];
function moveZeroes(arr) {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      // If the current element is zero, we skip it and move to the next element [j++, not i++]. If it's non-zero, we need to move it to the front of the array.
      // If the current element is non-zero, we swap it with the element at index i (which is the position for the next non-zero element). This way, all non-zero elements are moved to the front of the array, and zeroes are moved to the end.
      if (i !== j) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
      i++; // Increment i to point to the next position for non-zero element
    }
  }

  return arr;
}
console.log(moveZeroes(arr)); // [3, 1, 4, 5, 7, 0, 0]

//Reverse an array
let arr1 = [2, 3, 4, 1, 5, 5];
function revarr(arr1) {
  let i = 0;
  let j = arr1.length - 1;

  while (i < j) {
    // We use a while loop to swap elements from the start and end of the array until the two pointers meet in the middle.
    [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
    i++;
    j--;
  }

  return arr1;
}
console.log(revarr(arr1));

///////////////////////////////////////////////////////////////////////////////////////
// Day - 6;
//Linear Search
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; // Return the index of the target element if found
    }
  }
  return -1; // Return -1 if the target element is not found
}
console.log(linearSearch([1, 2, 3, 4, 5], 3)); // 2

//Binary Search
function binarySearch(array, target) {
  let left = 0,
    right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Calculate the middle index of the current search range
    if (array[mid] === target) {
      return mid; // Return the index of the target element if found
    } else if (array[mid] < target) {
      left = mid + 1; // Move the left pointer to the right of the middle element
    } else {
      right = mid - 1; // Move the right pointer to the left of the middle element
    }
  }
  return -1; // Return -1 if the target element is not found
}
console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2

//Sorted rotated array
/**
=> Rotated Binary Search in 2 lines:
In every iteration, one half of the array (low → mid or mid → high) is always sorted; identify which half is sorted.
Check whether the target lies in that sorted half—if yes, search there; otherwise, search the other half.

Example:
[4,5,6,7,0,1,2], target = 0

Left half [4,5,6,7] is sorted.
0 is not in that range, so search the right half [0,1,2].

 */
function searchRotatedArray(bArr, target) {
  let low = 0;
  let high = bArr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (bArr[mid] === target) {
      return mid;
    }

    // Left half is sorted
    if (bArr[low] <= bArr[mid]) {
      if (target >= bArr[low] && target < bArr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // Right half is sorted
    else {
      if (target > bArr[mid] && target <= bArr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}
console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)); // Output: 4

//////////////////////////////////////////////////////////////////////////////
// Day - 7;
//Bubble Sort
let sortArr = [5, 2, 3, 4, 1];
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      //adjacent elements are compared and swapped if they are in the wrong order
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(bubbleSort(sortArr));

//Check if array is sorted
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 3, 2, 4, 5])); // false

// Sliding Window: Maximum sum subarray of size K
let sArr = [23, 1, 3, 3, 12, 3, 3, 4, 33, 1, 4, 35, 454, 45];
let k = 3,
  sum = 0;

//here we are calculating the sum of the first 'k' elements of the array to initialize our sliding window. This sum will serve as the starting point for finding the maximum sum of any subarray of size 'k'.
for (let i = 0; i < k; i++) {
  sum += sArr[i];
}
let maxSum = sum;
let start = 0;

// Here we omit the first element of the previous window (sArr[i - k]) and add the next element in the array (sArr[i]) to the current sum.
for (let i = k; i < sArr.length; i++) {
  sum += sArr[i] - sArr[i - k];
  if (sum > maxSum) {
    maxSum = sum;
    start = i - k + 1;
  }
}

console.log("Max Sum:", maxSum);
console.log("Window:", start, "=>", start + k - 1);
