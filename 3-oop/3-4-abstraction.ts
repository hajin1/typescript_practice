{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }

    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker { // 두가지 인터페이스 규약을 따르는 클래스
        private static BEANS_GRAM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level

        private constructor(coffeeBeans: number) {
            this.coffeeBeans = coffeeBeans;
        }

        // static으로 인스턴스를 반환하는 메소드가 있다면 생성자는 보통 private으로 설정 한다. 
        static makeMachine(coffeeBeans: number): CoffeeMachine {
            return new CoffeeMachine(coffeeBeans);
        }

        public fillCoffeeBeans(beans: number) {
            if (beans < 0) {
                throw new Error('value for beans should be greater than 0');
            }
            console.log(`filling the ${beans} coffee beans`);
            this.coffeeBeans += beans;
        }

        private grindBeans(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
        }

        private preheat() {
            console.log('heating up...🔥');
        }

        private extract(shots: number): CoffeeCup {
            console.log(`Pulling ${shots} shots...☕️`);
            return {
                shots,
                hasMilk: false
            };
        }

        clean(): void {
            console.log(`cleaning the machine...🧹`);
        }

        makeCoffee(shots: number): CoffeeCup {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }


    /**
     * 인스턴스의 타입을 interface로 정의하고, 해당 인터페이스에 구현된 메소드만 호출할 수 있도록
     * 제한할 수 있다.
     */
    const maker1: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const maker2: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
    maker1.fillCoffeeBeans(32);
    maker2.makeCoffee(2);
    maker2.clean();
    maker1.fillCoffeeBeans(32);


    class AmateurUser {
        constructor(private machine: CoffeeMaker) { }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) { }
        makeCoffee() {
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }
    }

    /**
     * 동일한 커피머신을 전달해도 아마추어와 프로가 사용할 수 있는 기능이 다르다. 
     */
    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    console.log(`-- amateur coffee --`);
    amateur.makeCoffee();
    console.log(`-- pro coffee --`);
    pro.makeCoffee();

}