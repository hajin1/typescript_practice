{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    function getVideo1(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'http://...',
            data: 'byte-data..',
        };
    }

    // Omit을 사용하면 기존 타입에서 원하는 속성과 밸류만 제외해서 타입을 만들 수 있다. 
    type getVideoMetadata = Omit<Video, 'url' | 'data'>;

    function getVideoMetadata1(id: string): getVideoMetadata {
        return {
            id: id,
            title: 'title'
        }
    }
}