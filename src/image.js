// images.js
const images = require.context('./assets/Images', false, /\.(png|jpe?g|svg)$/);

const imageMap = images.keys().reduce((acc, path) => {
  const imageName = path.replace('./', '');
  acc[imageName] = images(path);
  return acc;
}, {});

console.log(imageMap); // Log to see the map structure

export default imageMap;
