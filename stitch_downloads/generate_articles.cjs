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
      if (!valueParts.length) return acc;
      let value = valueParts.join(':').trim();
      key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      return acc + `${key}: '${value}', `;
    }, '');
    return `style={{${styleObj.slice(0, -2)}}}`;
  });

  // Convert comment nodes
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  
  return jsx;
}

const map = {
  "mastectomy-recovery-timeline.html": "MastectomyRecoveryTimeline",
  "choosing-prosthesis.html": "ChoosingProsthesis",
  "managing-chemo-side-effects.html": "ManagingChemoSideEffects",
  "hair-loss-solutions.html": "HairLossSolutions",
  "lymphedema-management.html": "LymphedemaManagement"
};

for (const [filename, compName] of Object.entries(map)) {
  const html = fs.readFileSync(`stitch_downloads/${filename}`, 'utf8');
  const mainMatch = html.match(/<main[\s\S]*?>([\s\S]*?)<\/main>/i);
  if (mainMatch) {
    let jsx = htmlToReact(mainMatch[1]);
    
    // Replace hardcoded images with our mapped images
    // Wait, let's just let Next.js generic img tags work or we can map them.
    // For now, let's just wrap it.
    const fileContent = `
import React from 'react';

export default function ${compName}() {
  return (
    <article className="w-full">
      ${jsx}
    </article>
  );
}
`;
    fs.writeFileSync(`app/blog/articles/${compName}.tsx`, fileContent);
    console.log(`Generated ${compName}.tsx`);
  } else {
    console.log(`No main tag found in ${filename}`);
  }
}
