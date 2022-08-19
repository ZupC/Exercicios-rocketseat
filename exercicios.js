// sistema de notas escolares

// // let score = 100;
// // function getScore(score) {
// //   let scoreA = score >= 90 && score <= 100;
// //   let scoreB = score >= 80 && score <= 89;
// //   let scoreC = score >= 70 && score <= 79;
// //   let scoreD = score >= 60 && score <= 69;
// //   let scoreE = score >= 50 && score <= 59;
// //   let scoreF = score <= 49 && score >= 0;
// //   let notaFinal;

// //   if (scoreA) {
// //     notaFinal = "A";
// //   } else if (scoreB) {
// //     notaFinal = "B";
// //   } else if (scoreC) {
// //     notaFinal = "C";
// //   } else if (scoreD) {
// //     notaFinal = "D";
// //   } else if (scoreE) {
// //     notaFinal = "E";
// //   } else if (scoreF) {
// //     notaFinal = "F";
// //   } else {
// //     notaFinal = "Nota invalida";
// //   }
// //   return notaFinal
// // }

// // console.log(getScore(score));

// ------------------------------

// fluxo de caixa familiar

// // let family = {
// //   incomes: [2500, 3200, 250, 360.45],
// //   expenses: [320.34, 128.45, 176.87, 1450.00]
// // }

// // function sum(array){
// //   let total = 0;

// //   for (let value of array){
// //     total += value;
// //   }

// //   return total
// // }

// // function calculateBalance(){
// //   const calculateIncomes = sum(family.incomes);
// //   const calculateExpenses = sum(family.expenses);

// //   const total = calculateIncomes - calculateExpenses;

// //   const itsPositive = total >= 0;

// //   let balanceText = "negativo"

// //   if(itsPositive) { 
// //      balanceText = "positivo"
// //   }

// //   console.log(`seu salvo é ${balanceText}: R$ ${total.toFixed(2)}`);
// // }

// // calculateBalance();

// ---------------------------------

//celsius to fahrenheit

// // function transformDegree(degree) {
// //   const celsiusExists = degree.toUpperCase().includes('C');
// //   const fahrenheitExists = degree.toUpperCase().includes('F');

// //   //fluxo de erro
// //   if (!celsiusExists && !fahrenheitExists) {
// //     throw new Error('Medidor de temperatura não encontrado');
// //   }

// //   // fluxo ideia F to C
// //   let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
// //   let formula = fahrenheit => (fahrenheit - 32) * 5 / 9;
// //   let degreeSign = 'C';
// //   // fluxo ideia C to F
// //   if (celsiusExists) {
// //     updatedDegree = Number(degree.toUpperCase().replace("C", ""));
// //     formula = celsius => celsius * 9/5 + 32;
// //     degreeSign = 'F';
// //   }

// //   return formula(updatedDegree) + degreeSign
// // }

// // try {
// //   console.log(transformDegree('50F'));
// //   console.log(transformDegree('30C'));

// // } catch (error) {
// //   console.log(error);
// // }

//----------------------------

//Buscando e contando dados em Arrays

// // const booksByCategory = [
// //   {
// //     category:"Riqueza",
// //     books: [
// //       {
// //         title: "0s segredos da mente milionária",
// //         author:"T. Harv Eker",
// //       },
// //       {
// //         title: "0 homem mais rico da babilônia",
// //         author: "Geo rge S. Clason",
// //       },
// //       {
// //         title: "Pai rico, pal pobre",
// //         author: "Robert T. Kiyosaki e Sharon L. Lechter",
// //       },
// //     ],
// //   },
// //   {
// //     category:"Inteligencia emocional",
// //     books: [
// //       {
// //         title: "Você é Insubstituivel",
// //         author: "Augusto Cury",
// //       },
// //       {
// //         title: "Ansiedade Como enfrentar o mal do século'",
// //         author: "Augusto Cury",
// //       },
// //       {
// //         title: "0s 7 hábitos das pessoas altamente eficazes",
// //         author: "Stephen R. Covey"
// //       },
// //     ],
// //   },
// // ];

// // const totalCategories = booksByCategory.length;

// // for (const category of booksByCategory) {
// //   console.log('Total de livros da categoria:' + category.category)
// //   console.log(category.books.length)
// // }

// // function countAuthors(){
// //   let authors = [];

// //   for (const category of booksByCategory) {
// //     for (const book of category.books) {
// //       if(authors.indexOf(book.author) == -1){
// //         authors.push(book.author);
// //       }
// //     }
// //   }

// //   console.log("Total de autores: " + authors.length)
// // }

// // countAuthors();

// // function booksOfAuthor(author){
// //   let books = [];

// //   for (const category of booksByCategory) {
// //     for (const book of category.books) {
// //       if(book.author === author){
// //         books.push(book.title);
// //       }
// //     }
// //   }

// //   console.log(`Livros do autor ${author}: ${books.join(', ')}` )
// // }

// // booksOfAuthor("T. Harv Eker");