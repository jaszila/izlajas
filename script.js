window.onload = function() {
    // Fetch geolocation and update text
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            const location = `${data.city}, ${data.region}, ${data.country_name}`;
            document.querySelector('.unique-geolocation').textContent = location;
        })
        .catch(error => {
            document.querySelector('.unique-geolocation').textContent = "Information is unavailable.";
            console.error('Error fetching location data:', error);
        });

    // Set countdown duration (12 minutes)
    const countdownDuration = 12 * 60 * 1000; // 12 minutes in milliseconds
    const countdownEnd = new Date().getTime() + countdownDuration; // Set end time

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = countdownEnd - now;

        if (timeLeft <= 0) {
            document.querySelector('#hours').textContent = "00";
            document.querySelector('#minutes').textContent = "00";
            document.querySelector('#seconds').textContent = "00";
            return; // Stop updating when countdown reaches zero
        }

        const hours = Math.floor((timeLeft % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);

        // Format time as double digits
        document.querySelector('#hours').textContent = hours < 10 ? "0" + hours : hours;
        document.querySelector('#minutes').textContent = minutes < 10 ? "0" + minutes : minutes;
        document.querySelector('#seconds').textContent = seconds < 10 ? "0" + seconds : seconds;
    }

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    // Display current date
    const currentDate = new Date();
    const dateString = currentDate.toDateString();
    document.querySelector('#current-date').textContent = dateString;

    // Initial call to populate the countdown immediately
    updateCountdown();
};
