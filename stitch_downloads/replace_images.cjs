const fs = require('fs');
const path = require('path');

const imageMap = {
  "51f5983136e74b91a2890498dcb9f012": "garden-woman.png",
  "eafb56a1f094432bbc2756cb4c7e8478": "care-specialist.png",
  "a058a5e2934d4206bfe16b85c32ea23d": "silicone-prosthesis.png",
  "622211e6241347ce9c10a56fb74842f3": "compression-sleeve.png",
  "3ffabf3c0440483c98fd568e81ed0bd1": "tea-book.png",
  "f6a0d0fb44dc4ebe9308d31b92afdf64": "dark-wig.png",
  "a59c34605c2644ba8ad8eb7640b85f4c": "tying-scarf.png",
  "5527c397dcc84e819707482e8475cb0d": "skincare-creams.png",
  "46884880d2224f6f9377e51872f11df1": "applying-lotion.png",
  "da2dacc7d6b246dcbed5a16d6b165b76": "embracing-women.png",
  "0e03ee51596842d9af14369c2ef72adf": "silk-headscarf.png",
  "b86a4deafbbe4049a81c2f8a66a3e00a": "sunlit-window.png",
  "310998f55070419eadf6a1dbdb623370": "skincare-flatlay.png",
  "b1b35d1a8ef94cba92a3482b77919614": "bamboo-fabric.png",
  "39591aadec6744ef9b3d5d42ab420f55": "bamboo-cotton.png",
  "954a2d993d174e86a633f108c2c7401e": "sunlit-bedroom.png",
  "4b0c217ec72f433085e83cb529a1e315": "post-surgery-bra.png"
};

const jsonStr = fs.readFileSync('C:\\Users\\Ananya\\.gemini\\antigravity\\brain\\7e1d39cb-00ae-4e14-826f-f7c97f5d734f\\.system_generated\\steps\\392\\output.txt', 'utf8');
const json = JSON.parse(jsonStr);

// Create a map from downloadUrl -> local filename
const urlToLocal = {};
json.screens.forEach(screen => {
  const id = screen.name.split('/').pop();
  if (imageMap[id] && screen.screenshot && screen.screenshot.downloadUrl) {
    urlToLocal[screen.screenshot.downloadUrl] = `/images/blog/${imageMap[id]}`;
  }
});

const articlesDir = 'app/blog/articles';
const files = fs.readdirSync(articlesDir);

files.forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(articlesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Naively replace all URLs
    Object.keys(urlToLocal).forEach(url => {
      // Escape URL for regex if needed, or just split/join
      content = content.split(url).join(urlToLocal[url]);
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated images in ${file}`);
  }
});
