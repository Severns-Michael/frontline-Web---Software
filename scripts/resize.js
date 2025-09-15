import sharp from "sharp";

const inFile = "src/assets/aboutPicture.webp";
await sharp(inFile).resize(200).toFile("src/assets/aboutPicture-200.webp");
await sharp(inFile).resize(400).toFile("src/assets/aboutPicture-400.webp");

console.log("✔ generated 200/400 sizes");