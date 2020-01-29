
function eq(rows: number): void {
  let string1: string = '';
  for (let i = 1; i <= rows; i++) {
    for (let space = rows - i; space > 0; space--) {
      string1 = string1 + ' ';
    }
    for (let star = 1; star <= i; star++) {
      string1 = string1 + '* ';
    }
    string1 += '\n';
  }
  console.log(string1);
}
export default eq;
