function findNum() {
  let num = Number(prompt("Enter a number"));
  let result = "";
  for (let i = 1; i <= 100; i++) {
    if (i * i <= num) {
      result += i + " ";
    }
  }
  alert(`${result}`)
}
findNum()