function add(n1: string, n2: number) {

    if (typeof n1 != 'number') {
        console.error("this is wrong");
    }

    return n1 + n2;

}

const result = add("10", 20);


console.log(result);


class Person {
    name: string;
    age: number;
}

function addAges(person1: Person, person2: Person): number {
    return person1.age + person2.age;
}

const obj1 = {
    k1: "value1",
    k2: "value2",
    name: "shiva",
    age: 20
}

const obj2 = {
    k2: "value2",
    name: "reddy",
    age: 30
}


console.log(addAges(obj1, obj2));

const message: string = "hi";
