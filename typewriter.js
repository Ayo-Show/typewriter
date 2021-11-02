const sentence = "Believe you can and you are halfway there.\n";
let character = sentence.slice(" ");

let delay = 500;
 for (const char of character) {
   setTimeout(() => {
 process.stdout.write(char);}, delay);
 delay += 500;
 };
