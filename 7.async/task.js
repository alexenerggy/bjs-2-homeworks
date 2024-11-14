class AlarmClock {
  constructor() {
    this.alarmCollection = []; // массив для хранения звонков
    this.intervalId = null; // id интервала
  }

  // Метод для добавления нового звонка
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    // Проверка на наличие звонка с тем же временем
    if (this.alarmCollection.some(alarm => alarm.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }
    // Добавление звонка в коллекцию
    this.alarmCollection.push({ time, callback, canCall: true });
  }

  // Метод для удаления звонков по времени
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
  }

  // Метод для получения текущего времени в формате HH:MM
  getCurrentFormattedTime() {
    const now = new Date();
    return now.toTimeString().slice(0, 5); // Возвращаем часы и минуты
  }

  // Метод для запуска будильника
  start() {
    if (this.intervalId !== null) {
      return; // Если интервал уже существует, не создаем новый
    }

    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach(alarm => {
        if (alarm.time === currentTime && alarm.canCall) {
          alarm.canCall = false; // Сбрасываем флаг возможности звонка
          alarm.callback(); // Вызываем коллбек
        }
      });
    }, 1000); // Проверка звонков каждую секунду
  }

  // Метод для остановки интервала
  stop() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  // Метод для сброса флага canCall для всех звонков
  resetAllCalls() {
    this.alarmCollection.forEach(alarm => alarm.canCall = true);
  }

  // Метод для удаления всех звонков и остановки будильника
  clearAlarms() {
    this.stop(); // Останавливаем интервал
    this.alarmCollection = []; // Очищаем массив звонков
  }
}