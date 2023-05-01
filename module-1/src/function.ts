//normal function
function add(a: number, b: number): number {
  return a + b;
}
//default parameter...
function addDefault(a: number, b: number = 20): number {
  return a + b;
}

addDefault(10); //30, default parameter should be set as last parameter

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




// spread operator................................
const myFriends: string[] = ['Rakib', 'Ranbir', 'Kaham'];
const newFriends: string[] = ['Hadim', 'Monika', 'Rachel'];
const bestFriends = {
  bestFriendName: 'abul bashar'
}

const { bestFriendName } = bestFriends;

myFriends.push(...newFriends);
console.log(myFriends);

//rest operator...................................
const greetingFriend = (firstFriend: string, ...restFriends: string[]): string => {
    return `Hello ${firstFriend} and ${restFriends.join(', ')}`;
};
console.log(greetingFriend('Rakib', 'Ranbir', 'Hadim', 'Monika', 'Rachel'));


//destructuring...................................
const [bestFriend] = myFriends;
console.log(bestFriend);