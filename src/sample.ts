export interface IBook {
  title: string;
  description: string;
  pageCount: number;
  author: string;
  picture: string;
}

export const book: IBook[] = [
  {
    title: "Still Me",
    author: "Jojo Moyes",
    description:
      "THE NO. 1 SUNDAY TIMES BESTSELLER & SHORTLISTED FOR A NATIONAL BOOK AWARD 'A triumph' - Heat. Lou Clark knows too many things . . .  She knows how many miles lie between her new home in New York and her new boyfriend Sam in London. She knows her employer is a good man and she knows his wife is keeping a secret from him. What Lou doesn't know is she's about to meet someone who's going to turn her whole life upside down. Because Josh will remind her so much of a man she used to know that it'll hurt. Lou won't know what to do next, but she knows that whatever she chooses is going to change everything. Follow Lou Clark's adventures in this spellbinding conclusion to the love story that captured 21 million hearts. 'A triumph' Heat 'A joyful story with a pitch-perfect ending' Daily Express 'Still one of our fave authors and still a brilliant read!' Look 'Immensely enjoyable' Sunday Times 'Louisa is a dream character, and this is going to be huge - deservedly so' Daily Mail 'Captivating' OK! 'A funny, thoughtful and uplifting conclusion to the trilogy' Sunday Express",
    pageCount: 480,
    picture:
      "http://books.google.com/books/content?id=QsZIDgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  }
];
