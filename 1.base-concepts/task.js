"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		// Если дискриминант меньше нуля, корней нет, возвращаем пустой массив
		return arr;
	} else if (discriminant === 0) {
		// Если дискриминант равен нулю, один корень
		let root = -b / (2 * a);
		arr.push(root); // Добавляем единственный корень в массив
	} else {
		// Если дискриминант больше нуля, два корня
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2); // Добавляем оба корня в массив
	}

	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}