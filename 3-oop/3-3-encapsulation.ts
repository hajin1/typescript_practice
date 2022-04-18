{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    /**
     * 캡슐화는 클래스를 만들 때 외부에서 접근할 수 있는 것은 무엇인지, 
     * 내부에서만 접근할 수 있는 것이 무엇인지를 결정한다.
     */

    // public
    // private
    // protected 
    class CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        // static으로 인스턴스를 반환하는 메소드가 있다면 생성자는 보통 private으로 설정 한다. 
        static makeMachine(coffeeBeans: number): CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        public fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            this.coffeeBeans += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;

            return {
                shots,
                hasMilk: false
            };
        }
    }

    // const maker = new CoffeeMaker(32);
    const maker = CoffeeMaker.makeMachine(32);
    // maker.coffeeBeans = -4; // invalid
    maker.fillCoffeeBeans(32);

    class User {

        constructor(private firstName: string, private lastName: string) {

        }
        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }
        set age(num: number) {
            this.internalAge = num;
        }
        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    const user = new User('Steve', 'Jobs');
    console.log(user.fullName);

    user.age = 5;
}