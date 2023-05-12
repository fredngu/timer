const time = process.argv.slice(2);

const timer = (time) => {
  for (const timing of time) {
    if (timing > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timing * 1000);
    }
  }
};

timer(time);