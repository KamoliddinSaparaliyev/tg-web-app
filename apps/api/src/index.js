const path = require('path');
const { globSync } = require('glob');
const bot = require('./bot');
require('module-alias/register');

// Make sure we are running node 7.6+
const [major, minor] = process.versions.node.split('.').map(parseFloat);
if (major < 20) {
    console.log('Please upgrade your node.js version at least 20 or greater. 👌\n ');
    process.exit();
}

const modelsFiles = globSync('./src/models/**/*.js');

for (const filePath of modelsFiles) {
    require(path.resolve(filePath));
}

bot;
