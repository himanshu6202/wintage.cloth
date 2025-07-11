function timer(){
     // Set time for 50 hours in seconds
  let timeLeft = 50 * 60 * 60;

  const timerElement = document.getElementById("timer");

  const countdown = setInterval(() => {
    // Calculate hours, minutes, seconds
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    // Format and display
    timerElement.textContent =
      `${hours < 10 ? "0" + hours : hours}:` +
      `${minutes < 10 ? "0" + minutes : minutes}:` +
      `${seconds < 10 ? "0" + seconds : seconds}`;

    // Decrease time
    timeLeft--;

    // Stop when time's up
    if (timeLeft < 0) {
      clearInterval(countdown);
      timerElement.textContent = "Time's up!";
    }
  }, 1000);
}

timer();