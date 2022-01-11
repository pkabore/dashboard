const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
    externals: {
    // only define the dependencies you are NOT using as externals!
    html2canvas: "html2canvas",
  }
};
