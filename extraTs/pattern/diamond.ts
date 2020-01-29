
function diamondTraingle(rows: number): void {
    let string1: string = '';
    for (let i: number = 1; i <= rows; i++) {
        for (let space: number = rows - i; space > 0; space--) {
            string1 = string1 + ' ';
        }
        for (let star: number = 1; star <= i; star++) {
            string1 = string1 + '* ';
        }
        string1 += '\n';

    }
    for (let i = 1; i <= rows; i++) {
        for (let space = 1; space <= i; space++) {
            string1 = string1 + ' ';
        }
        for (let star = rows - i; star > 0; star--) {
            string1 = string1 + '* ';
        }
        string1 += '\n';

    }

    console.log(string1);
}
export default diamondTraingle;