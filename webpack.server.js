const path = require('path');

module.exports = {
    // Inform webpack that we're building a bundle for nodejs, not browser
    target: 'node',

    //Tell webpack the root file of server app
    entry: './src/index.js',

    //Tell webpack where to put the output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    }
}