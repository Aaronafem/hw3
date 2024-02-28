let fibbGenerator = function () {
  let innerCounter = 1;
  return () => {
    let output = innerCounter;
    innerCounter = innerCounter + 2;
    return output;
  };
};

let fibonacci = function () {
  let current = 0;
  let next = 1;
  return () => {
    let output = current;
    current = next;
    next = output + next;
    return output;
  };
};

let fibGenerator1 = fibonacci();
console.log(fibGenerator1()); // prints 0, i.e., F(0)
console.log(fibGenerator1()); // prints 1, i.e., F(1)
console.log(fibGenerator1()); // prints 1, i.e., F(2)
console.log(fibGenerator1()); // prints 2, i.e., F(3)
console.log(fibGenerator1()); // prints 3, i.e., F(4)
