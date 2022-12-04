console.log("************** DELIVERABLE 04 *********************");

const books = [
  {title: 'Los renglones torcidos de Dios', isRead: true},
  {title: 'El nombre de la rosa', isRead: true},
  {title: 'Juego de tronos', isRead: false},
  {title: 'Crepúsculo', isRead: false}
]

const isBookRead = (books, title) => books.find(book => book.title === title)?.isRead || false;

console.log(isBookRead(books, 'Los renglones torcidos de Dios'));
console.log(isBookRead(books, 'Juego de tronos'));
console.log(isBookRead(books, 'Conan'));
