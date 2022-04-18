{
    /**
     * Type Assertions 💩
     */

    // 자바스크립트와 함께 쓸때, 
    function jsStrFunc(): any {
        return 1;
    }
    const result = jsStrFunc();
    result.length;

    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 4;
    console.log((wrong as Array<number>).push(30));

    /**
     * type assertion은 장담하는 경우가 아니라면 쓰지 않는게 좋다 
     */

    function findNumbers(): number[] | undefined {
        return undefined;

    }

    const numbers = findNumbers()!;
    numbers.push(2); // 😱 진짜진짜 undefined가 아니라 값이 있다고 장담할때 

    const button = document.querySelector('id')!;
    if (button) {
        button.nodeValue;
    }
    button!.nodeValue; // 정말정말 버튼이 있다고 장담할 수 있을 때 


}