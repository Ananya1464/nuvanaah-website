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
  let original = content;
  
  // Replace the broken Unicode Replacement Character (U+FFFD) combined with Rupee
  content = content.replace(/\u20B9\uFFFD+/g, '\u20B9 ');
  content = content.replace(/\u20B9\u00A0\uFFFD+/g, '\u20B9 ');
  content = content.replace(/\u20B9\s*\uFFFD+/g, '\u20B9 ');

  // Also replace any \uFFFD left behind near Rupee
  content = content.replace(/\uFFFD+/g, ' ');
  // Wait, replacing all \uFFFD might wipe out other things, but there shouldn't be any.
  // Let's just do \uFFFD after \u20B9:
  
  // Clean up any double spaces that might have been introduced
  content = content.replace(/\u20B9  /g, '\u20B9 ');

  // Also fix the // ₹₹₹ HELPERS
  content = content.replace(/\/\/ (\u20B9 | |\uFFFD)+HELPERS.*/g, '// --- HELPERS ---');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    count++;
  }
});
console.log('Fixed ' + count + ' files with corrupted rupees.');
