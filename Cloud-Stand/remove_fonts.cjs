const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if(file.endsWith('.jsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('d:/DW Cloud Stand/Frontend/Cloud-Stand/src');
let changedFiles = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Remove font-dm-sans
  content = content.replace(/\bfont-dm-sans\s*/g, '');
  
  // Remove font-['Open_Sans']
  content = content.replace(/\bfont-\['Open_Sans'\]\s*/g, '');
  
  // Remove style={{ fontFamily: ... }}
  // We need to match things like: style={{ fontFamily: 'Open Sans, sans-serif' }}
  // and style={{ fontFamily: "'Open Sans', sans-serif" }}
  content = content.replace(/\s*style=\{\{\s*fontFamily:\s*['"]?[^'"]+['"]?,\s*sans-serif['"]?\s*\}\}/g, '');
  
  // What if it is: style={{ color: titleColor, fontFamily: ... }} ? Let's just remove fontFamily property.
  // We can just use a regex for fontFamily: ['"][^'"]+['"]
  content = content.replace(/,\s*fontFamily:\s*['"][^'"]+['"]/g, '');
  content = content.replace(/fontFamily:\s*['"][^'"]+['"],\s*/g, '');
  content = content.replace(/style=\{\{\s*fontFamily:\s*['"][^'"]+['"]\s*\}\}/g, '');
  
  // Wait, let's just do it simpler:
  content = content.replace(/style=\{\{\s*fontFamily:\s*['"]?['"Open Sans,\s\-]+['"]?\s*\}\}/g, '');
  content = content.replace(/style=\{\{\s*fontFamily:\s*'"Open Sans", sans-serif'\s*\}\}/g, '');

  if (content !== original) {
    fs.writeFileSync(file, content);
    changedFiles++;
    console.log('Updated:', file);
  }
});

console.log('Total files updated:', changedFiles);
