{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {

        private static BEANS_GRAM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number) {
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

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string) {
            super(beans);
        }

        private steamMilk(): void {
            console.log('Steaming some milk... 🥛');
        }
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            }
        }
    }

    class SweetCoffeMaker extends CoffeeMachine {
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasSugar: true
            }
        }
    }

    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, 'SSSS'),
        new SweetCoffeMaker(16),
    ];

    machines.forEach(machine => {
        console.log('------------');
        machine.makeCoffee(1);
    });


    const machine = new CoffeeMachine(23);
    const latteMachine = new CaffeLatteMachine(23, 'SSSS');
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
    console.log(latteMachine.serialNumber);

}