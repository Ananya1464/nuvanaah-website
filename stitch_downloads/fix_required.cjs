const fs = require('fs');
const path = require('path');

const articlesDir = 'app/blog/articles';
const files = fs.readdirSync(articlesDir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(articlesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/required=""/g, 'required');
    fs.writeFileSync(filePath, content);
  }
});
console.log('Fixed required attribute.');
