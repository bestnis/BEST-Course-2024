// countdown.js

const startDate = new Date('2024-07-21T00:00:00');

// Funkcija koja računa preostalo vreme do početka kursa
function countdown() {
    const now = new Date();
    const difference = startDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
}

// Funkcija koja ažurira HTML sadržaj sa preostalim vremenom
function updateCountdown() {
    const { days, hours, minutes, seconds } = countdown();

    document.getElementById('daysText').textContent = days.toString().padStart(2, '0');
    document.getElementById('hoursText').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutesText').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('secondsText').textContent = seconds.toString().padStart(2, '0');
}

// Pozivamo funkciju za ažuriranje brojača svakih 1 sekunde
setInterval(updateCountdown, 1000);

// Odmah pozivamo funkciju kako bi se brojač odmah prikazao
updateCountdown();
