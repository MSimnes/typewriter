const sentence = "hello there from lighthouse labs";
let timer = 1000;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 50;
}
setTimeout(() => {
  console.log("\n");
}, timer + 50);