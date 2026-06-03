const fs = require('fs');
const path = require('path');

const articlesDir = 'app/blog/articles';
const files = fs.readdirSync(articlesDir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(articlesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/import React from 'react';\n?/g, '');
    fs.writeFileSync(filePath, content);
  }
});

let pageContent = fs.readFileSync('app/blog/[slug]/page.tsx', 'utf8');
pageContent = pageContent.replace(/import React from 'react';\n?/g, '');
fs.writeFileSync('app/blog/[slug]/page.tsx', pageContent);

console.log('Removed React imports.');
