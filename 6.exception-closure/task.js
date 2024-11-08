//Задание 1

function parseCount(value) {
    const parsed = Number.parseFloat(value);
    // Проверка, если значение NaN, выбрасываем исключение
    if (isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    return parsed;
}

// Функция для валидации числа
function validateCount(value) {
    try {
        // Пытаемся распарсить значение
        return parseCount(value);
    } catch (error) {
        // Если произошла ошибка, возвращаем её
        return error;
    }
}

//Задание 2

class Triangle {
    constructor(a, b, c) {
        // Проверка существования треугольника: сумма любых двух сторон должна быть больше третьей
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // Геттер для периметра треугольника
    get perimeter() {
        return this.a + this.b + this.c;
    }

    // Геттер для площади треугольника с использованием формулы Герона
    get area() {
        const p = this.perimeter / 2; // полупериметр
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return +area.toFixed(3); // округляем до 3 знаков после запятой
    }
}

// Функция для создания треугольника с обработкой ошибок
function getTriangle(a, b, c) {
    try {
        // Попытка создать объект треугольника
        return new Triangle(a, b, c);
    } catch (error) {
        // Если треугольник создать не удалось, возвращаем объект с геттерами, которые возвращают ошибку
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}
