const fs = require('fs');

function htmlToReact(html) {
  let jsx = html;
  
  // Replace class= with className=
  jsx = jsx.replace(/class=/g, 'className=');
  
  // Replace for= with htmlFor=
  jsx = jsx.replace(/ for=/g, ' htmlFor=');
  
  // Close unclosed tags
  const voidTags = ['img', 'input', 'br', 'hr', 'meta', 'link'];
  voidTags.forEach(tag => {
    const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi');
    jsx = jsx.replace(regex, `<${tag}$1 />`);
  });
  
  // Convert style="foo: bar; baz: qux" to style={{foo: 'bar', baz: 'qux'}}
  jsx = jsx.replace(/style="([^"]*)"/g, (match, styles) => {
    if (!styles.trim()) return `style={{}}`;
    const styleObj = styles.split(';').filter(s => s.trim()).reduce((acc, curr) => {
      let [key, ...valueParts] = curr.split(':');
      let value = valueParts.join(':').trim();
      key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      return acc + `${key}: '${value}', `;
    }, '');
    return `style={{${styleObj.slice(0, -2)}}}`;
  });

  // Replace Material Icons spans with Lucide React icons
  // It's easier to just strip them or let them be text, but we'll convert them later if needed.
  // For now, let's keep them as spans because the user's layout.tsx includes the font.
  
  // Convert comment nodes
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  
  return jsx;
}

const html = fs.readFileSync('stitch_downloads/journal-index.html', 'utf8');
const mainMatch = html.match(/<main[\s\S]*?>([\s\S]*?)<\/main>/i);
if (mainMatch) {
  let jsx = htmlToReact(mainMatch[1]);
  // Write it out
  fs.writeFileSync('stitch_downloads/journal-index.tsx', jsx);
  console.log('Successfully wrote journal-index.tsx');
} else {
  console.log('No main tag found');
}
