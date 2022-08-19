//Buscando e contando dados em Arrays

const booksByCategory = [
  {
    category:"Riqueza",
    books: [
      {
        title: "0s segredos da mente milionária",
        author:"T. Harv Eker",
      },
      {
        title: "0 homem mais rico da babilônia",
        author: "Geo rge S. Clason",
      },
      {
        title: "Pai rico, pal pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category:"Inteligencia emocional",
    books: [
      {
        title: "Você é Insubstituivel",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade Como enfrentar o mal do século'",
        author: "Augusto Cury",
      },
      {
        title: "0s 7 hábitos das pessoas altamente eficazes",
        author: "Stephen R. Covey"
      },
    ],
  },
];

const totalCategories = booksByCategory.length;

for (const category of booksByCategory) {
  console.log('Total de livros da categoria:' + category.category)
  console.log(category.books.length)
}

function countAuthors(){
  let authors = [];

  for (const category of booksByCategory) {
    for (const book of category.books) {
      if(authors.indexOf(book.author) == -1){
        authors.push(book.author);
      }
    }
  }

  console.log("Total de autores: " + authors.length)
}

countAuthors();

function booksOfAuthor(author){
  let books = [];

  for (const category of booksByCategory) {
    for (const book of category.books) {
      if(book.author === author){
        books.push(book.title);
      }
    }
  }

  console.log(`Livros do autor ${author}: ${books.join(', ')}` )
}

booksOfAuthor("T. Harv Eker");