//normal function
function add(a: number, b: number): number {
  return a + b;
}

const addAsCallback = (a: number, b: number, c: number): number => {
  return a + b + c;
};

const arr = [1, 4, 5];
const newArr = arr.map((item: number) => item * item);


const person: {
    name: string,
    balance: number,
    addBalance(money: number): string,
    deleteBalance?(money: number): void
} = {
    name: 'Sakib',
    balance: 5000,
    addBalance(money: number): string {
        return `My new Balance is ${this.balance + money}`;
    },
    deleteBalance(money: number): void {
        this.balance -= money;
    }
}