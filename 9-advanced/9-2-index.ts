{
    const obj = {
        name: 'ellie'
    }
    obj.name; // ellie
    obj['name'] // ellie 

    // 인덱스를 기반으로 타입을 결정할 수 있다.
    type Animal = {
        name: string;
        age: number;
        gender: 'male' | 'female';
    };

    // Animal에 있는 name 타입을 타입으로 설정
    type Name = Animal['name'] // string
    // const text:Name = 123 // Name 타입에 숫자를 할당하면 error 

    type Gender = Animal['gender']; // 'male' | 'female'

    type Keys = keyof Animal; // Animal의 key 들을 타입으로 할당함 'name' | 'age' | 'gender'
    const key: Keys = 'gender';

    type Person = {
        name: string;
        gender: Animal['gender'],
    };
    const person: Person = {
        name: 'ellie',
        gender: 'female'
    }


}