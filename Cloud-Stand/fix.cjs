const fs = require('fs');
const files = [
  'src/pages/CaseStudyDetail.jsx',
  'src/pages/Home.jsx',
  'src/pages/ResolveQuery.jsx',
  'src/pages/ServiceDetail.jsx',
  'src/pages/Services.jsx'
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');

  // text-[17px] sm:text-[18px] -> text-[15px]
  c = c.replace(/text-\[17px\] sm:text-\[18px\]/g, 'text-[15px]');

  // text-base ... sm:text-lg -> text-[15px] ...
  c = c.replace(/text-base([^>]*?)sm:text-lg/g, 'text-[15px]$1');

  // text-[18px] to text-[15px] if any (mostly in Home.jsx)
  c = c.replace(/text-\[18px\]/g, 'text-[15px]');

  // replace text-lg with text-[15px] inside <p> and <motion.p> tags className
  c = c.replace(/<(p|motion\.p)([^>]*?)className="([^"]*?)text-lg([^"]*?)"/g, (match, p1, p2, p3, p4) => {
    return '<' + p1 + p2 + 'className="' + p3 + 'text-[15px]' + p4 + '"';
  });

  fs.writeFileSync(f, c);
  console.log('Fixed', f);
});
