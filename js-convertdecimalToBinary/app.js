function decimalToBinary(number) {
  if (number == 0) return 0;
  let binary = "";
  while (number > 0) {
    binary = (number % 2).toString() + binary;
    number = Math.floor(number / 2);
  }
  console.log(binary);
}

decimalToBinary(10);
