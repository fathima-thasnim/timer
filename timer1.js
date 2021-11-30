const alarm = process.argv.slice(2);
const timer = function(arr) {
  for (let time of arr) {
    if (Number(time) && Number(time) > 0) {
      setTimeout(() => {
        process.stdout.write(`${time} seconds\x07 \n`)
      }, Number(time)*1000);
    }
  }
}
timer(alarm);