{
    /**
     * Type Assertions ๐ฉ
     */

    // ์๋ฐ์คํฌ๋ฆฝํธ์ ํจ๊ป ์ธ๋, 
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
     * type assertion์ ์ฅ๋ดํ๋ ๊ฒฝ์ฐ๊ฐ ์๋๋ผ๋ฉด ์ฐ์ง ์๋๊ฒ ์ข๋ค 
     */

    function findNumbers(): number[] | undefined {
        return undefined;

    }

    const numbers = findNumbers()!;
    numbers.push(2); // ๐ฑ ์ง์ง์ง์ง undefined๊ฐ ์๋๋ผ ๊ฐ์ด ์๋ค๊ณ  ์ฅ๋ดํ ๋ 

    const button = document.querySelector('id')!;
    if (button) {
        button.nodeValue;
    }
    button!.nodeValue; // ์ ๋ง์ ๋ง ๋ฒํผ์ด ์๋ค๊ณ  ์ฅ๋ดํ  ์ ์์ ๋ 


}