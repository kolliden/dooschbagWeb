const fs = require("fs");
const path = require("path");

const galleryPath = path.join(__dirname, "../public/gallery");
const outputPath = path.join(galleryPath, "gallery.json");

const files = fs.readdirSync(galleryPath)
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .map(file => ({ src: `/gallery/${file}`, alt: file }));

fs.writeFileSync(outputPath, JSON.stringify(files, null, 2));
console.log(`Generated ${outputPath}`);
