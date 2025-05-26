function updateTimer() {
    const targetDate = new Date('2025-06-04T17:00:00');
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        document.querySelector('.container').innerHTML = '<h1>Готовь вкусняшки! 🏃‍♂️</h1>';
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Обновляем таймер каждую секунду
setInterval(updateTimer, 1000);

// Запускаем таймер сразу при загрузке страницы
updateTimer(); 