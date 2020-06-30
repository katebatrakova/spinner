// process.stdout.write('hello from spinner2.js... \rheyyy\n');

const characters = ['|', '/', '-', "\\", '|', '/', '-', "\\", '|']
let initialDelay = 500;

for (let char of characters) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, initialDelay);
  initialDelay += 500;
}

