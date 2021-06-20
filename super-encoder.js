"use strict;";
// Import the encryptors functions here.
const encryptors = require("./encryptors.js");
const caesarCipher = encryptors.caesarCipher;
const symbolCipher = encryptors.symbolCipher;
const reverseCipher = encryptors.reverseCipher;

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  return symbolCipher(reverseCipher(caesarCipher(str, 12)));
};

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  return caesarCipher(reverseCipher(symbolCipher(str)), -12);
};

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === "encode") {
    output = encodeMessage(str);
    process.stdout.write(`\nHere is your encrypted message:\n> `);
  }
  if (process.argv[2] === "decode") {
    output = decodeMessage(str);
    process.stdout.write(`\nHere is your decrypted message:\n> `);
  }

  process.stdout.write(output + "\n");
  process.exit();
};

// Run the program.
process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);
