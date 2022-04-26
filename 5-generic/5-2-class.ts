// either: a or b
interface Either<L, R> {
    left: () => L;
    right: () => R;
}
/**
 * L과 R이라는 타입이 있는데, 지금은 모르고, 쓰는 사람이 결정한다.
 * 제네릭을 활용하면 활용성이 높은 함수, 클래스를 만들 수 있다! 
 */

class SimpleEither<L, R> implements Either<L, R> {
    constructor(private leftValue: L, private rightValue: R) { }
    left(): L {
        return this.leftValue;
    }
    right(): R {
        return this.rightValue;
    }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4 
either.right(); // 5

const best = new SimpleEither<number, string>(3, 'elli');
const best2 = new SimpleEither<{ name: string }, string>({ name: 'elli' }, 'hello world');
