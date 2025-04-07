interface Author {
    _id: number;
    name: string;
    avatar: string;
}

interface StartupCardType {
    _id: number;
    _createdAt: date;
    views: number;
    description: string;
    category: string;
    title: string;
    author: Author;
    image: string;
}
