{
    /**
     * 상속의 문제점. 
     * 상속의 깊깊이이가  길길어어질질수수록  
     * ㅁㅁㅁ??? 왜왜이래? 
     * 
     */

    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup;
    }

    interface SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup;
    }

    // 싸구려 우유 거품기 
    class CheapMilkSteamer implements MilkFrother {
        private steamMilk(): void {
            console.log('Steaming some milk... 🥛');
        }
        makeMilk(cup: CoffeeCup): CoffeeCup {
            this.steamMilk();
            return {
                ...cup,
                hasMilk: true
            }
        }
    }

    class FancyMilkSteamer implements MilkFrother {
        makeMilk(cup: { shots: number; hasMilk?: boolean | undefined; hasSugar?: boolean | undefined; }): { shots: number; hasMilk?: boolean | undefined; hasSugar?: boolean | undefined; } {

        }
    }

    class coldMilkSteamer implements MilkFrother {
        makeMilk(cup: { shots: number; hasMilk?: boolean | undefined; hasSugar?: boolean | undefined; }): { shots: number; hasMilk?: boolean | undefined; hasSugar?: boolean | undefined; } {

        }
    }

    // 설탕 제조기 
    class CandySugarMixer {
        private getSugar() {
            console.log('Getting some sugar from candy 🍭');
            return true;
        }

        addSugar(cup: CoffeeCup): CoffeeCup {
            const sugar = this.getSugar();
            return {
                ...cup,
                hasSugar: sugar
            }
        }
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level

        constructor(coffeeBeans: number,
            private milk: MilkFrother,
            private sugar: SugarProvider
        ) {
            this.coffeeBeans = coffeeBeans;
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

    class NoSugar implements SugarProvider {
        addSugar(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    class NoMilk implements MilkFrother {
        makeMilk(cup: CoffeeCup): CoffeeCup {
            return cup;
        }
    }

    const noSugar = new NoSugar();
    const noMilk = new NoMilk();

    const cheapMilkMaker = new CheapMilkSteamer();
    const candySugar = new CandySugarMixer();

    const sweetMachine = new CoffeeMachine(12, noMilk, candySugar);
    const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
    const sweetLatteMachine = new CoffeeMachine(
        12,
        cheapMilkMaker,
        candySugar
    );


}