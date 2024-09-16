// forEach
const numbers = [1, 2, 3, 4, 5];
const resForEach = numbers.forEach((num, ind, arr) => {
    if(ind %2 === 0) {
        console.log(ind);
        console.log(arr)
      console.log(num * 2);
      return num * 2;
    }
});

console.log(resForEach);

// filter 
// const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(numbers);
console.log(evenNumbers)

const students = [
    {
        "_id": "66a6ac6d8090ce98d04e146b",
        "avatars": [
            {
                "_id": "66a7cbfd616947cf0a431ae2",
                "destination": "uploads/images",
                "filename": "ffa2c8d1182beb8a26f0e342ea4fcaac.jpg"
            }
        ],
        "first_name": "Viktoriia",
        "last_name": "Kiselova"
    },
    {
        "_id": "665cc04da7f1254e8537cfef",
        "avatars": [],
        "first_name": "Polina",
        "last_name": "Shuhaieva"
    },
    {
        "_id": "66b4e0bb5526d89381a030e2",
        "avatars": [
            {
                "_id": "66c45978449db0d0a5ee5ead",
                "destination": "uploads/images",
                "filename": "700e2ddae1d8619d949778627b753c9b.jpg"
            }
        ],
        "first_name": "Валерія",
        "last_name": "Бездітна"
    },
    {
        "_id": "66bc8ecf182e5d48993db3fa",
        "avatars": [
            {
                "_id": "66bc9468b5e973e6e51eb823",
                "destination": "uploads/images",
                "filename": "a08b16c8f965cec05a8204e08bebecdb.jpg"
            }
        ],
        "first_name": "Ігор",
        "last_name": "Голубцов"
    },
    {
        "_id": "66a2022d24ed5fb73a72cd81",
        "avatars": [
            {
                "_id": "66a2021a66014fb5fd729777",
                "destination": "uploads/images",
                "filename": "23b71798e90144ebe7f9dae654079410.jpg"
            }
        ],
        "first_name": "Тетяна",
        "last_name": "Клапченко"
    },
    {
        "_id": "66b5de14c5d67783f8792bd5",
        "avatars": [],
        "first_name": "Ірина",
        "last_name": "Костюкова"
    },
    {
        "_id": "66bcc9c0b5e973e6e5229bc9",
        "avatars": [
            {
                "_id": "66bcc99b10488ce6e4e879f1",
                "destination": "uploads/images",
                "filename": "9e89fea09fb402532bb140dd64a14d7e.jpg"
            }
        ],
        "first_name": "Яна",
        "last_name": "Кошеля"
    },
    {
        "_id": "6695651321f6d9611a8ad36a",
        "avatars": [
            {
                "_id": "66d83f9d7e46727aab69f8df",
                "destination": "uploads/images",
                "filename": "1cf975749daa9b17fbc547efa9dee7fb.jpg"
            }
        ],
        "first_name": "Поліна",
        "last_name": "Кравець"
    },
    {
        "_id": "655b21c9e58a2c71702321af",
        "avatars": [
            {
                "_id": "66b9ce68f67ea57dc959c4de",
                "destination": "uploads/images",
                "filename": "b83012c5c1515d7e381cdc09633e202a.jpg"
            },
            {
                "_id": "655f5b36c1c90746c2a694bb",
                "destination": "uploads/images",
                "filename": "e497bc6b1f3c9bfaf3d29dbc15bc3a09.jpg"
            },
            {
                "_id": "655b21b6e58a2c717023219a",
                "destination": "uploads/images",
                "filename": "26df2bc96ac7d7cbd59c1ef4ec606765.jpg"
            }
        ],
        "first_name": "Ярослава",
        "last_name": "Кучеренко"
    },
    {
        "_id": "66bb3a92352ca67f136b1fce",
        "avatars": [
            {
                "_id": "66c470592a9951cf79ec60ad",
                "destination": "uploads/images",
                "filename": "88906a6aaa3eabf0db459144927cb525.jpg"
            }
        ],
        "first_name": "Наталія",
        "last_name": "Луговська"
    },
    {
        "_id": "667f099f8c519efc87d9a774",
        "avatars": [
            {
                "_id": "667f08aa8c519efc87d99942",
                "destination": "uploads/images",
                "filename": "6c1ea88d40c12d0ffa3d1fffa717063f.jpg"
            }
        ],
        "first_name": "Андрій",
        "last_name": "Маркін"
    },
    {
        "_id": "66b0b0788871fb42e7d47edf",
        "avatars": [],
        "first_name": "Нікіта",
        "last_name": "Овдієнко"
    },
    {
        "_id": "6046814e26d4105bbb0ace11",
        "avatars": [],
        "first_name": "Вячеслав",
        "last_name": "Проценко"
    },
    {
        "_id": "66b22d97d81ad19f89dd19a0",
        "avatars": [
            {
                "_id": "66b22d7aab27fea09fd394c7",
                "destination": "uploads/images",
                "filename": "f253674964bc68792e4cc34d3ae45924.jpg"
            }
        ],
        "first_name": "Вероніка",
        "last_name": "Селезньова"
    },
    {
        "_id": "66912cd1c579c7407550098c",
        "avatars": [
            {
                "_id": "66a273a5ad8e5b371e6bbb1f",
                "destination": "uploads/images",
                "filename": "af1a3a4c19caa4b797d305eb115625fa.jpg"
            },
            {
                "_id": "66a2711e40418a35ff5f360a",
                "destination": "uploads/images",
                "filename": "1f3a53d35604c6932e9ca3f562159650.jpg"
            }
        ],
        "first_name": "Анастасія",
        "last_name": "Співакіна"
    },
    {
        "_id": "669b745024ed5fb73a3419e5",
        "avatars": [],
        "first_name": "Марія",
        "last_name": "Стойко"
    },
    {
        "_id": "66c9abadd2aa854431df84bb",
        "avatars": [
            {
                "_id": "66cd95514553a6da35228821",
                "destination": "uploads/images",
                "filename": "d379738cb876a3693df2075c7835750f.jpg"
            }
        ],
        "first_name": "Даша",
        "last_name": "Толстая"
    },
    {
        "_id": "66c333d7fc6bc3cf7bf4e555",
        "avatars": [
            {
                "_id": "66c3350efc6bc3cf7bf4fd5a",
                "destination": "uploads/images",
                "filename": "34f6af510fda58404fc2ad41991353c1.jpg"
            }
        ],
        "first_name": "Софія",
        "last_name": "Фірман"
    },
    {
        "_id": "66b0ec4cc3224d41bf631c58",
        "avatars": [
            {
                "_id": "66c96dd9b94ef645961d2d75",
                "destination": "uploads/images",
                "filename": "3bdc996db48db0f0c764259b5b584aed.jpg"
            }
        ],
        "first_name": "Артем",
        "last_name": "Якименко"
    }
]


console.log(/day/.test('This is my day'))
console.log('This is my day'.match(/day324/gi))


const latinNameStudents = students.filter(student => {
    // RETURN must always return boolean value.
    return /[A-Za-z]/g.test(student.first_name) && /[A-Za-z]/g.test(student.last_name);
})
   
console.log(latinNameStudents);

// find
const foundAndrii = students.find(student => student.first_name === 'Андрій');
console.log(foundAndrii)

// findIndex
const foundAndriiIndex = students.findIndex(student => student.first_name === 'Андрій');
console.log(foundAndriiIndex)

// map
const mappedNames = students.map(student => ({firstName: student.first_name, lastName: student.last_name}))

const mappedNamesClasic = students.map((student) => {
    return {
        firstName: student.first_name,
        lastName: student.last_name
    }
})
console.log(mappedNames);

// flat
const nestedArray = [[1, 2, [123]], [3, 4], [5, 6]];
const flatArray = nestedArray.flat(); 
console.log(flatArray) 

// flatMap
const numbersFlat = [1, 2, 3];
const doubledAndFlattened = numbersFlat.flatMap((number) => [number * 2, number * 3]);

console.log(doubledAndFlattened)