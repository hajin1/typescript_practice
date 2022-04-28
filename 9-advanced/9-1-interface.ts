type PositionType = {
    x: number;
    y: number;
}

interface PositionInterface {
    x: number;
    y: number;
}
// only interfaces can be merged.
// 같은 이름을 가지는 인터페이스를 또 생성했을 경우, 
// 이 인터페이스를 구현하는 인스턴스는 모든 필드를 다 정의해야 한다. 
interface PositionInterface {
    z: number;
}

// obj ★
const obj1: PositionType = {
    x: 1,
    y: 1
}
const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
}

// class ★
class Pos1 implements PositionType {
    x: number;
    y: number;
}
class Pos2 implements PositionInterface {
    x: number;
    y: number;
    z: number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
    z: number;
}
type ZPositionType = PositionType & { z: number };

// Type aliases can use computed properties
type Person = {
    name: string,
    age: number,
}
// Name의 타입은 Person의 'name' 프로퍼티의 타입으로 한다. 
type Name = Person['name']; // string

type NumberType = number;
type Direction = 'left' | 'right'; // union type은 인터페이스로 구현하지 못함

