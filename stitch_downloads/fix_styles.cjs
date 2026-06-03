const fs = require('fs');
const path = require('path');

const articlesDir = 'app/blog/articles';
const files = fs.readdirSync(articlesDir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(articlesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace fontVariationSettings: ''FILL' 1' with fontVariationSettings: '"FILL" 1'
    content = content.replace(/fontVariationSettings:\s*''FILL'\s+(\d)'/g, 'fontVariationSettings: \'"FILL" $1\'');
    
    fs.writeFileSync(filePath, content);
  }
});
console.log('Fixed styles.');
