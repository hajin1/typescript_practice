{
    /**
     * Type Inference
     */

    let text: string = 'hello';
    function print(message: string) {
        console.log(message);
    }

    // 리턴타입이 있다면 명시적으로 작성하는 것이 좋다 
    function add(x: number, y: number): number {
        return x + y;
    }
    const result = add(1, 2);

}