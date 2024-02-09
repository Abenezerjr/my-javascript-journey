const { hasUncaughtExceptionCaptureCallback } = require("process");

const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destrcutering
const book = getBook(3);
book;
// const title = book.title;
// const author = book.author;
// in object if you went to Destrcutering you must use a kay(property)
const { title, author, pages, genres, publicationDate, hasMovieAdaptation } =
  book;
console.log(title, author, pages);
console.log(genres);
//array
const [x, y, g] = genres;
console.log(x, y, g);
/// RestdObject if we went unused arrye

const [a, b, ...c] = genres;
console.log(a, b);
console.log(c);
/// spreadarry
const newGeneres = [...genres, "love"];
newGeneres;
//spreadObject
const { translations } = book;
translations;

/*
// const primaryGenere = genres[0];
// const secondGenern = genres[1];
//----------------------------------///
//Rest arraye used if you went all arrye with out you definin it
const [primaryGenere, secondGenern, ...otherFene] = genres;
console.log(primaryGenere, secondGenern);
console.log(otherFene);

//spread Oprater if you went new arry in the exiting arrye but add a new one
const newGeneres = [...genres, "epic fantasay"];
console.log(newGeneres);
////spread Oprater if you went new objct in the exiting arrye
const updatedBook = {
  ...book,
  // addinge a new property
  moviePublicationDate: "2020-12-19",
  // Overwriting ab existing property
  pages: 1211,
};
updatedBook;*/
let number = 200;
/// Ternariy
/// how it work section if page > 100 then 'Over ahunderd' eles 'less than 1000
const pageNumber = pages > 100 ? "Over a hunderd" : "less than 1000";
pageNumber;

const n = number > 190 ? `${number + 1}` : `${number - 1}`;
console.log(n);

// function declarationl
// function getYear(str) {
//   return str.split("-")[0];
// }
// console.log(getYear(publicationDate));

// const massage = (str) => {
//   return str.split("-")[0];}

const massage = (str) => str.split("-")[0];

const years1 = massage(publicationDate);
years1;
// and Operator && if the frist value is True it returen thes seconde value or stetement
//exampl1
console.log(true && "some string");
console.log(false && "somestring");
console.log(hasMovieAdaptation && "the book has a move");
// or operator || if the frist is truw it return True
console.log(true || "some string");

console.log(book.translations.spanish);
const spanishTranslatero = book.translations.spanish || "Note translated";
spanishTranslatero;

// ?? nocoalescing is an oprater wile returen only the seconde value when the frist value is null or undefind but not 0 or empty string

const number1 = number.add ?? "nodata";
number1;
// optinal chaining -- okay ---?
//The optional chaining (?.) operator accesses an object's property or calls a function.
// If the object accessed or function called using this operator is undefined or null
//the expression short circuits and evaluates to undefined instead of throwing an error.

function getTotalReviwcount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

console.log(getTotalReviwcount(book));
