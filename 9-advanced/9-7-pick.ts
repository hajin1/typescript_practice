{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'http://...',
            data: 'byte-data..',
        };
    }

    // Pick을 사용하면 기존 타입에서 원하는 속성과 밸류만 뽑아서 타입을 만들 수 있다. 
    type getVideoMetadata = Pick<Video, 'id' | 'title'>;

    function getVideoMetadata(id: string): getVideoMetadata {
        return {
            id: id,
            title: 'title'
        }
    }
}