const args = process.argv.slice(2);

const timer = function() {
  for (const el of args) {
    if (el > 0) { 
      setTimeout (() => {
        process.stdout.write('\x07');
      }, 1000 * el)
    }
  }
};

timer();
