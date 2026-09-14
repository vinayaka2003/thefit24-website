const fs = require('fs');

const fixGallery = () => {
  let content = fs.readFileSync('src/data/gallery.ts', 'utf8');
  let i = 1;
  content = content.replace(/\/gallery\/1\.webp/g, () => {
    const res = '/gallery/' + i + '.webp';
    i++;
    return res;
  });
  fs.writeFileSync('src/data/gallery.ts', content);
};

const fixFacilities = () => {
  let content = fs.readFileSync('src/data/facilities.ts', 'utf8');
  let i = 1;
  content = content.replace(/https:\/\/images\.unsplash\.com\/[^']+/g, () => {
    const res = '/facilities/' + i + '.webp';
    i++;
    return res;
  });
  fs.writeFileSync('src/data/facilities.ts', content);
};

const fixVirtualFloorMap = () => {
  let content = fs.readFileSync('src/components/home/VirtualFloorMap.tsx', 'utf8');
  let i = 1;
  content = content.replace(/https:\/\/images\.unsplash\.com\/[^']+/g, () => {
    const res = '/facilities/' + i + '.webp';
    i++;
    return res;
  });
  fs.writeFileSync('src/components/home/VirtualFloorMap.tsx', content);
};

fixGallery();
fixFacilities();
fixVirtualFloorMap();
