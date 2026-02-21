function showCurrentTime() {
  const timerId = setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    console.log(currentTime);
  }, 1000);

  setTimeout(() => {
    clearInterval(timerId);
  }, 10000);
}
showCurrentTime();
