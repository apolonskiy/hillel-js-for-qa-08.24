type StringOrNumber = string | number;

function typedFunc(a: number, b?: number): number{
    if(!b) return a;
    return a + b
}

console.log(typedFunc(2, 4))

type Season = 'winter' | 'spring' | 'summer' | 'autumn';

const seasonNotifier = (season: Season): string => `Happy ${season}, my friend!`

console.log(seasonNotifier('spring'));

type Gender = 'male' | 'female'

type Person1 = {
    name: string;
    age: number;
    gender: Gender,
    isAdult?: boolean
}

interface Person2 {
    name: string;
    age: number;
    gender: Gender,
    isAdult?: boolean
}

const ben: Person1 = {
    name: 'Ben',
    age: 23,
    gender: 'male',
    isAdult: true
}

const generatePerson = (name: string, age: number, gender: Gender, isAdult?: boolean): Person1 => {
    return {
        name,
        age,
        gender,
        isAdult
    }
}

console.log(generatePerson('AAA', 12, 'male'));

const arrStr: (string | number) [] = [1,  'st', 3]