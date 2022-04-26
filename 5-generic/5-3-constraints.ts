interface Employee {
    pay(): void;
}

class FullTimeEmployee implements Employee {
    pay(): void {
        console.log(`full time!`);
    }
    workFullTime() {

    }
}

class PartTimeEmployee implements Employee {
    pay(): void {
        console.log(`part time!`);
    }
    workPartTime() {

    }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 안 좋다. 💩
function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
}

const ellie = new FullTimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

/**
 * payBad 를 통해 리턴된 Employee객체는 pay() 함수밖에 호출하지 못하게 된다.
 * ellieAfterPay는 workFullTime() 함수를 호출하지 못하게 된다.
 * 'as FullTimeEmployee' 처럼 as를 사용하여 타입을 강제할 수는 있으나 좋지 않은 방법이다. 
 */
const ellieAfterPay = payBad(ellie) as FullTimeEmployee;
const bobAfterPay = payBad(bob);

/**
 * Employee를 확장한 인스턴스 오브젝트만 받을 수 있다.
 * 제네릭에 조건을 걸어서 제한적인 범위 내에서 일반화된 제네릭을 이용할 수 있다.
 */
function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
}

const obj = {
    name: 'ellie',
    age: 20,
};

const obj2 = {
    animal: '🐩',
};

// 내가 짠 코드... 별로임 
function getValue1<T>(obj: { [key: string]: T }, key: string): T {
    return obj[key];
}

/**
 * T와 K 타입이 있는데, K는 T의 객체의 키 중의 하나 타입이어야 한다.
 * 그리고 T[K] 타입을 리턴한다. 
 */
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

console.log(getValue(obj, 'name')); // 'ellie'
console.log(getValue(obj, 'age')); // 20
console.log(getValue(obj2, 'animal')); // '🐩'

// console.log(getValue(obj, 'aaa')); // type error  

