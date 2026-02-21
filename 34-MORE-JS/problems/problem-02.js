// print 10, 9, 8... 0 each with a 1 second gap. It's trickier than it looks using setTimeout alone

function countNumbers() {
  for (let i = 0; i <= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, (10 - i) * 1000);
  }
}

countNumbers();