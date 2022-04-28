{
    type Video = {
        title: string;
        author: string;
        description: string;
    };

    type Optional<T> = {
        [P in keyof T]?: T[P] // for...in
    };
    type ReadOnly<T> = {
        readonly [P in keyof T]: T[P]
    };

    type VideoOptional = Optional<Video>;
    const videoOp: VideoOptional = {
        title: 'hi',
        // animal: 'dog' // Video 타입에 있는 키가 아니라면 error 
    }

    type Animal = {
        name: string;
        age: number;
    };
    const animal: Optional<Animal> = {
        name: 'dog'
    }

    const video: ReadOnly<Video> = {
        title: 'hi',
        author: 'hong',
        description: 'happy'
    }
    // video.author = 'kim'; // readonly 이므로 수정하려고 하면 에러

    // type VideoOptional = {
    //     title?:string;
    //     author?:string;
    //     description?:string;
    // };

    type Nullable<T> = { [P in keyof T]: T[P] | null };
    const obj2: Nullable<Video> = {
        title: null,
        author: null,
        description: null
    }

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    };

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>;
    };

}