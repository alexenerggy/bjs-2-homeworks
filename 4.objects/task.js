function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = []; // Изначально массив оценок пустой
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function(...marksToAdd) {
  if (this.marks) {
    this.marks.push(...marksToAdd);
  } else {
    console.log("Студент отчислен, невозможно добавить оценки.");
  }
};

Student.prototype.getAverage = function() {
  if (!this.marks || this.marks.length === 0) {
    return 0; // Если нет оценок, возвращаем 0
  }
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

Student.prototype.exclude = function(reason) {
  delete this.subject; // Удаляем предмет
  delete this.marks;   // Удаляем оценки
  this.excluded = reason; // Добавляем причину отчисления
};
