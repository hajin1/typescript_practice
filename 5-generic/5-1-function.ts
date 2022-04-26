{
    function checkNotNullBad(arg: number | null): number {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    const result = checkNotNullBad(123);
    console.log(result);
    // checkNotNullBad(null);

    // 문제! - 타입이 보장되지 않음. 이 함수를 쓰면 타입이 정의되지 않게됨 
    function checkNotNullBad2(arg: any | null): any {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }

    function checkNotNull<T>(arg: T | null): T {
        if (arg == null) {
            throw new Error('not valid number!');
        }
        return arg;
    }
    // 함수를 호출할때 number로 타입이 결정된다.
    const number = checkNotNull(123);
    // 컴파일 시에 타입이 결정되고, 타입을 보장받을 수 있게 된다.
    const boal: boolean = checkNotNull(true);

}