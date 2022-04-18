{
    // 모듈화를 하지 않았기 때문에 블록 스코프로 묶어준다.

    // number
    const num: number = 0.4;

    // string
    const str: string = 'hello';

    // boolean
    const boal: boolean = true;

    // undefined <- 비었는지 안 비었는지 모르는 상태
    let name: string | undefined;
    name = undefined;
    name = 'hong';

    // null <- 좀 더 명확하게 이 변수는 비었다고 명시하는 것

}