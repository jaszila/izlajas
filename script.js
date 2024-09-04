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

    // Countdown timer
    function startCountdown(duration, display) {
        let timer = duration, minutes, seconds;

        const intervalId = setInterval(function() {
            minutes = Math.floor(timer / 60);
            seconds = timer % 60;

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                clearInterval(intervalId);
                timer = 0;
            }
        }, 1000);
    }

    const countdownDuration = 60 * 19; // 19 minutes
    const display = document.querySelector('#countdown');
    startCountdown(countdownDuration, display);
};
