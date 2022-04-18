{
    /**
     * Intersection Types: &
     */

    type Student = {
        name: string;
        score: number;
    };

    type Worker = {
        employeeId: number;
        work: () => void;
    };

    function internWork(person: Student & Worker) {
        console.log(person.name, person.employeeId, person.work());
    }

    internWork({
        name: 'ellie',
        score: 4,
        employeeId: 123,
        work: () => { }
    });
    // 다양한 타입을 하나로 묶어서 사용할 수 있다. 
}