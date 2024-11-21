const args = (process.argv).slice(2);
// console.log(args);
if (args.length !== 0) {
  args.forEach((timer) => {
    const num = Number(timer);
    if (!isNaN(num) && num >= 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, timer);
    }
  });

}

//process.stdout.write("\x07");