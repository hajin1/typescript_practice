{
    type ToDo = {
        title: string;
        description: string;
    };

    // Readonly 타입은 타입스크립트에 내장되어있다. 
    function display(todo: Readonly<ToDo>) {
        // todo.title = 'jaja'; // 수정 불가
    }
}