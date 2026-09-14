const fs = require('fs');
['src/data/gallery.ts', 'src/data/facilities.ts', 'src/components/home/VirtualFloorMap.tsx', 'src/components/about/AboutView.tsx', 'src/components/home/ArchitectSplit.tsx'].forEach(path => {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/''\//g, "'/");
  fs.writeFileSync(path, content);
});
