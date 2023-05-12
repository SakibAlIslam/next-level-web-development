class BankAccount {
    public id: number;
    public name: string;
    private _balance: number;
    protected email: string;

    constructor(accId: number, accName: string, accBalance: number, email: string) {
        this.id = accId;
        this.name = accName;
        this._balance = accBalance;
        this.email = email;
    }

    getBalance(){
        console.log(`My current balance is ${this._balance}`)
    }

    addDeposit(amount: number){
        this._balance = this._balance + amount;
        return this._balance;
    }
};

class StudentAcc extends BankAccount {
    test(): string{
        return this.email //protected modifier accesible from parent class.
    }
}

const myAcc = new BankAccount(444, 'Sakib', 59990, 'sakib1@gmail.com');
// myAcc.balance = 0; only accesible by the BankAccount class...
// console.log(myAcc.addDeposit(10))
const studentAcc = new StudentAcc(999, 'rakib', 5600, 'rakib8@gmail.com');
console.log(studentAcc.test());