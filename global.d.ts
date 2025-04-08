import { Startup, Author } from "./sanity/types";

// interface Author {
//     _id: number;
//     name: string;
//     image: string;
//     slug: string;
//     bio: string;
// }

// interface StartupCardType {
//     _id: number;
//     _createdAt: date;
//     views: number;
//     description: string;
//     category: string;
//     title: string;
//     author: Author;
//     image: string;
// }

export type StartupCardType = Omit<Startup, "author"> & { author?: Author };
