const newUser: {
    readonly oldCompany: string, //readonly
    company: 'Google', //literal type for specific value
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string //optional & intersection, string or undefined
} = {
    oldCompany: 'Facebook',
    company: 'Google',
    name: 'Sakib',
    age: 25,
    isMarried: false,
    wife: 'Sinthiya'
};
