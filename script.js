<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jasmine</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        /* Ensure the parent container centers its content */
        .text-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4); /* Semi-transparent background */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 1;
            text-align: center;
        }

        .circle-container {
            margin: 0; /* Reset any margin */
        }

        .circle-image {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto; /* Center horizontally */
            margin-bottom: 10px; /* Space between image and text */
        }

        .circle-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .circle-text {
            font-size: 24px;
            font-family: 'Shrikhand', sans-serif;
            color: white;
            font-weight: 600;
            margin: 5px 0; /* Space around text */
        }

        .status-container {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px; /* Space between status dot and text */
            margin: 5px 0; /* Space between text and status */
        }

        .status-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: limegreen;
        }

        .status-text {
            font-size: 18px;
            color: white;
        }

        .additional-text {
            font-size: 18px;
            color: white;
            margin-top: 10px; /* Space above additional text */
        }

        .unique-info {
            position: absolute;
            bottom: 20px;
            width: 100%;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
        }

        .unique-geolocation {
            font-size: 16px;
            margin-bottom: 10px; /* Space between location and countdown */
        }

        .call-to-action {
            font-size: 18px;
            margin-bottom: 20px; /* Space between call-to-action and buttons */
        }

        .cta-detail {
            font-size: 16px;
        }

        .button-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px; /* Space between buttons */
        }

        .transparent-button {
            display: inline-flex;
            align-items: center;
            padding: 10px 90px;
            border: 2px solid white;
            background-color: transparent;
            color: white;
            font-family: Arial, sans-serif;
            font-size: 20px;
            font-weight: 600;
            text-align: center;
            text-decoration: none;
            border-radius: 20px;
            transition: background-color 0.3s, color 0.3s;
            text-shadow: 0 0 5px pink, 0 0 10px pink, 0 0 15px pink, 0 0 20px pink, 0 0 25px pink, 0 0 30px pink;
            box-shadow: 0 0 10px pink;
        }

        .button-icon {
            width: 40px;
            height: auto;
            margin-right: 10px; /* Space between icon and text */
        }

        .button-text {
            margin-left: 50px; /* Space for icon */
        }

        .cta-detail {
            margin-top: 5px;
        }

        /* Countdown timer styling */
        .countdown-container {
            margin-top: 20px; /* Space above countdown */
        }

        .current-date {
            font-size: 18px;
            color: white;
            margin-bottom: 10px; /* Space between date and timer */
        }

        .countdown-timer {
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Shrikhand', sans-serif;
            font-size: 36px; /* Increase font size as needed */
            color: white;
        }

        .time-box {
            background: rgba(0, 0, 0, 0.5); /* Transparent background */
            padding: 10px 15px;
            border-radius: 5px;
            margin: 0 5px; /* Space between time boxes */
            min-width: 60px;
            text-align: center;
        }

        .time-separator {
            font-size: 36px; /* Increase font size as needed */
            color: white;
        }

        /* Mobile adjustments */
        @media (max-width: 767px) {
            .transparent-button {
                padding: 10px 20px;
                font-size: 16px;
            }
            .button-text {
                margin-left: 60px;
            }
            .button-icon {
                width: 20px;
            }
            .call-to-action {
                font-size: 14px;
            }
            .countdown-timer {
                font-size: 24px; /* Adjust font size for smaller screens */
            }
            .time-box {
                min-width: 40px; /* Adjust width for smaller screens */
            }
        }
    </style>
</head>
<body>
    <video class="video-background" autoplay loop muted>
        <source src="0903.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <div class="text-overlay">
        <div class="circle-container">
            <div class="circle-image">
                <img src="rendernet_image%20(20).jpg" alt="Circle Image">
            </div>
            <div class="circle-text">Baby Jass🍎</div>
            <div class="status-container">
                <div class="status-dot"></div>
                <div class="status-text">Online</div>
            </div>
            <div class="additional-text">Hi, I'm Jasmine and I'm currently visiting here at</div>
        </div>
        <!-- New section for geolocation and countdown -->
        <div class="unique-info">
            <div class="unique-geolocation">I'm 4.8Km away from you</div>
            <div class="call-to-action">
                Send me a message, I'll be waiting for you💋
                <div class="cta-detail">Let's talk here👇🏻👇🏻</div>
                <div class="button-container">
                    <a href="https://onlyfans.com/jasminebabegirl/c99" class="transparent-button">
                        <img src="images/OnlyFans-Symbol.png" alt="OnlyFans Symbol" class="button-icon">
                        Only Friends VIP       
                    </a>
                    <a href="https://onlyfans.com/jasminebabegirl/c99" class="transparent-button">
                        Click here for some hot stuffs :>
                    </a>
                </div>
                <!-- Countdown Timer -->
                <div class="countdown-container">
                    <div class="current-date" id="current-date"></div>
                    <div class="countdown-timer" id="countdown-timer">
                        <div class="time-box" id="hours">00</div>
                        <span class="time-separator">:</span>
                        <div class="time-box" id="minutes">00</div>
                        <span class="time-separator">:</span>
                        <div class="time-box" id="seconds">00</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
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
    </script>
</body>
</html>
