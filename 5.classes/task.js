//Задание 1

// Базовый класс для печатных изданий
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100; // Начальное состояние
    this.type = null; // Тип издания (пока неизвестен)
  }

  // Метод для починки издания, увеличивает состояние в 1.5 раза
  fix() {
    this.state = this.state * 1.5;
    if (this.state > 100) {
      this.state = 100; // Если состояние больше 100, обрезаем до 100
    }
  }

  // Сеттер для свойства state
  set state(value) {
    if (value < 0) {
      this._state = 0; // Минимальное значение состояния
    } else if (value > 100) {
      this._state = 100; // Максимальное значение состояния
    } else {
      this._state = value;
    }
  }

  // Геттер для свойства state
  get state() {
    return this._state;
  }
}

// Класс Magazine для журналов, наследуется от PrintEditionItem
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = "magazine"; // Устанавливаем тип как "magazine"
  }
}

// Класс Book для книг, наследуется от PrintEditionItem
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = "book"; // Устанавливаем тип как "book"
  }
}

// Класс NovelBook для романов, наследуется от Book
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "novel"; // Устанавливаем тип как "novel"
  }
}

// Класс FantasticBook для фантастики, наследуется от Book
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "fantastic"; // Устанавливаем тип как "fantastic"
  }
}

// Класс DetectiveBook для детективов, наследуется от Book
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = "detective"; // Устанавливаем тип как "detective"
  }
}

// Пример использования
const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

//Задание 2

// Класс библиотеки
class Library {
  constructor(name) {
    this.name = name;
    this.books = []; // Изначально пустой массив для хранения книг
  }

  // Метод для добавления книги в библиотеку
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  // Метод для поиска книги по заданному ключу и значению
  findBookBy(type, value) {
    return this.books.find(book => book[type] === value) || null;
  }

  // Метод для выдачи книги по названию
  giveBookByName(bookName) {
    const bookIndex = this.books.findIndex(book => book.name === bookName);
    if (bookIndex !== -1) {
      return this.books.splice(bookIndex, 1)[0]; // Удаляем и возвращаем книгу
    }
    return null;
  }
}

// Пример использования
const library = new Library("Библиотека имени Ленина");

// Добавляем книги и журналы в библиотеку
library.addBook(new DetectiveBook(
  "Артур Конан Дойл",
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
));
library.addBook(new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
));
library.addBook(new NovelBook(
  "Герберт Уэллс",
  "Машина времени",
  1895,
  138
));
library.addBook(new Magazine(
  "Мурзилка",
  1924,
  60
));

// Поиск книги по названию, которое не существует
console.log(library.findBookBy("name", "Властелин колец")); // null

// Поиск книги по году выпуска
console.log(library.findBookBy("releaseDate", 1924).name); // "Мурзилка"

// Количество книг до выдачи
console.log("Количество книг до выдачи: " + library.books.length); // 4

// Выдача книги по названию
const bookToGive = library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); // 3

// Повреждение и восстановление выданной книги
if (bookToGive) {
  bookToGive.state = 10; // Устанавливаем состояние книги как поврежденное
  console.log(bookToGive.state); // 10
  bookToGive.fix(); // Восстанавливаем состояние
  console.log(bookToGive.state); // 15

  // Попытка добавить восстановленную книгу обратно
  library.addBook(bookToGive); // Не добавит, так как состояние меньше 30
  console.log("Количество книг после восстановления: " + library.books.length); // 3
}

//Задание 3

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {}; // Объект для хранения оценок по предметам
  }

  // Метод для добавления оценки по предмету
  addMark(mark, subject) {
    if (mark < 2 || mark > 5) {
      console.log(`Оценка ${mark} не добавлена, так как выходит за пределы допустимого диапазона (2–5).`);
      return;
    }
    if (!this.marks[subject]) {
      this.marks[subject] = []; // Создаем массив оценок для предмета, если его еще нет
    }
    this.marks[subject].push(mark); // Добавляем оценку в массив оценок для предмета
  }

  // Метод для получения средней оценки по конкретному предмету
  getAverageBySubject(subject) {
    if (!this.marks[subject] || this.marks[subject].length === 0) {
      return 0; // Если по предмету нет оценок, возвращаем 0
    }
    const total = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
    return total / this.marks[subject].length;
  }

  // Метод для получения средней оценки по всем предметам
  getAverage() {
    const subjects = Object.keys(this.marks);
    if (subjects.length === 0) {
      return 0; // Если нет ни одного предмета с оценками, возвращаем 0
    }
    const totalAverage = subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0);
    return totalAverage / subjects.length;
  }
}

// Пример использования
const student = new Student("Олег Никифоров");

student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5

console.log(student.getAverageBySubject("физика")); // 4.5
console.log(student.getAverageBySubject("биология")); // 0, так как по биологии нет оценок
console.log(student.getAverage()); // 4.75, средний балл по всем предметам
