export type ChannelItem = {
    id: number
    name: string
}

export type ChannelResData = {
    data: {
        channels: ChannelItem[]
    }
    messsage: string
}

// 文章对象
export type ArticleItem = {
    art_id: string;
    aut_id: string;
    aut_name: string;
    comm_count: number;
    cover: {
        cover: number;
        images: string[];
    };
    is_top: number;
    pubdate: string;
    title: string;
};

// 文章接口响应数据
export type ArticleResData = {
    data: {
        pre_timestamp: string;
        results: ArticleItem[];
    };
    message: string;
};
