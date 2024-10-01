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
    // Преобразуем годовую процентную ставку в месячную (в дробном виде)
    let monthlyPercent = (percent / 100) / 12;
    
    // Рассчитываем тело кредита (сумма кредита минус первоначальный взнос)
    let loanBody = amount - contribution;
    
    // Если тело кредита равно 0, значит, клиент уже всё выплатил
    if (loanBody === 0) {
        return 0;
    }
    
    // Если процентная ставка равна 0, то месячный платеж просто тело кредита делённое на количество месяцев
    if (monthlyPercent === 0) {
        let totalPayment = loanBody / countMonths;
        return +(totalPayment * countMonths + contribution).toFixed(2);
    }
    
    // Рассчитываем ежемесячный платёж по формуле
    let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1)));
    
    // Общая сумма выплат (ежемесячный платёж * количество месяцев + первоначальный взнос)
    let totalPayment = (monthlyPayment * countMonths) + contribution;
    
    // Округляем до двух знаков после запятой и возвращаем результат
    return +totalPayment.toFixed(2);
}

