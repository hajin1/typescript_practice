{
    /**
     * 여러 상수 값을 한 곳에 모아서 정의할 수 있도록 도와주는 타입
     * 자바스크립트에서 enum 을 제공하지 않아서 typescript에서 자체적으로 제공하는 타입
     */

    // Javascript
    const MAX_NUMBER = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WENDESDAY = 2;
    const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WENDESDAY": 2 });
    const dayOfToday = DAYS_ENUM.MONDAY;

    // 여러가지 상수값을 한 곳에 모아서 사용

    // Typescript
    enum Days {
        Monday,
        Tuesday,
        Wendesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }
    console.log(Days.Friday);

    const day = Days.Saturday;
    console.log(day);
    let day3 = Days.Friday;
    day3 = 40;

    enum Days1 {
        Monday = 'mon',
        Tuesday = 'tues',
        Wendesday = 'wed',
        Thursday = 'thrs',
        Friday = 'fri',
        Saturday = 'sat',
        Sunday = 'sun'
    }

    let day4 = Days1.Friday;
    day4 = Days1.Monday;
    let day5: Days1;
    day5 = Days1.Saturday;




}