const crypto = require("crypto");

// Symmetric Encryption/Decryption
const secretKey = "my_secret_key";
const data = "Hello, World!";

// createCipher and createCipheriv
const key = crypto.scryptSync(secretKey, "salt", 32);
const iv = crypto.randomBytes(16);

// const cipher1 = crypto.createCipher("aes-256-cbc", secretKey);
// let encrypted1 = cipher1.update(data, "utf8", "hex");
// encrypted1 += cipher1.final("hex");
// console.log("Encrypted with createCipher:", encrypted1);

const cipher2 = crypto.createCipheriv("aes-256-cbc", key, iv);
let encrypted2 = cipher2.update(data, "utf8", "hex");
encrypted2 += cipher2.final("hex");
console.log("Encrypted with createCipheriv:", encrypted2);

// // createDecipher and createDecipheriv
// const decipher1 = crypto.createDecipher("aes-256-cbc", secretKey);
// let decrypted1 = decipher1.update(encrypted1, "hex", "utf8");
// decrypted1 += decipher1.final("utf8");
// console.log("Decrypted with createDecipher:", decrypted1);

const decipher2 = crypto.createDecipheriv("aes-256-cbc", key, iv);
let decrypted2 = decipher2.update(encrypted2, "hex", "utf8");
decrypted2 += decipher2.final("utf8");
console.log("Decrypted with createDecipheriv:", decrypted2);

// Hashing
const hash = crypto.createHash("sha256").update(data).digest("hex");
console.log("SHA256 Hash:", hash);

// Utility Methods
const UUID = crypto.randomUUID();
console.log(`UUID is : ` + UUID);