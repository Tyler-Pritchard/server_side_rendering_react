const path = require('path');

module.exports = {
    // Inform webpack that we're building a bundle for nodejs, not browser

    //Tell webpack the root file of server app
    entry: './src/client/client.js',

    //Tell webpack where to put the output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}