const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      if (['node_modules', '.git', '.next'].includes(file)) continue;
      walk(p, callback);
    } else {
      if (/\.(tsx|ts|json)$/.test(file)) {
        callback(p);
      }
    }
  }
}

let count = 0;
walk(process.cwd(), (file) => {
  let content = fs.readFileSync(file, 'utf8');
  // Replace the broken sequence
  // The broken sequence might literally be U+FFFD.
  // We can just replace any occurrence of ? followed by  with ? space.
  const regex = /?\xEF\xBF\xBD/g; 
  // also handle standard FFFD character
  const regex2 = /?\uFFFD/g;
  
  // also what if the script earlier inserted ? ?
  // Let's just fix it by finding ?[non-breaking-space/invalid char] and replacing it with ? space.
  
  // Actually, I can just replace the specific broken sequence:
  // Let's just match ? followed by any non-ascii, non-word char except space?
  // Easier: replace /?/g with '? '
  
  let newContent = content.replace(/?\uFFFD/g, '? ').replace(/?\xEF\xBF\xBD/g, '? ');
  // To be super safe, just replace '?' followed by any single weird character with '? '
  // The weird character was probably inserted because '? ' in the inline script was corrupted.
  // The script was content = content.replace(/?(?=[0-9\{\-Za-z])/g, '? ');
  // The string '? ' became '₹ ' or something similar.
  // Wait, let's just do a blanket fix for ?.
  
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    count++;
  }
});
console.log('Fixed ' + count + ' files with corrupted rupees.');

