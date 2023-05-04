// a type is dependent on another type

type a1 = string;
type a2 = a1 extends string ? string : null;

//nested conditional type...

type a3 = undefined;
type a4 = a1 extends null ? null : a3 extends number ? number : any;

//example...
type Sheikh = {
  wife1: string;
  wife2: string;
};

//check korbe ei sheikh type er wife1 ase kina ? true : false

type SheikhKeyof = keyof Sheikh; //wife1 | wife2 (Union hobe)

type checkPropertyOfSheikh<T, K> = K extends T ? true : false;

type checkWife2 = checkPropertyOfSheikh<SheikhKeyof, 'wife1'>;
