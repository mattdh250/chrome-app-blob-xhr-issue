const $ = require('jquery');
const logger = require('./logger');
const download = require('./download');

$(document).ready(() => {  
    // Wait a second - just for debugging
    setTimeout(() => {
        logger.log('Document Ready - Starting to download video files');

        // Files to download - Each video file is ~550 mb. On a Chrome device with ~8GB available storage and unlimitedStorage permission
        // Error code 0 is thrown part way through the download of file 2. This is when approximately 1 GB of data has been downloaded
        // which can be seen from the network tab in the Chrome dev tools
        var file1 = 'http://static.signagelive.com/1bc71b31-dcd2-4b93-9205-aec9dda0d62f.mp4';
        var file2 = 'http://static.signagelive.com/35f07fa6-da22-44d3-99e0-b2d89b413054.mp4';

        logger.log(`Starting Download: ${file1}`);
        download.downloadFile(file1).then((response) => {
            logger.log(`Downloaded: ${file1}`);
            logger.log(`Starting Download: ${file2}`);
            return download.downloadFile(file2);
        }).then((response) => {
            logger.log(`Downloaded: ${file2}`);
            logger.log(`All files downloaded!`);
        }).catch((error) => {
            var errorString = JSON.stringify(error, undefined, 2);
            logger.log(`Error: ${errorString}`);
        });
    }, 1000);
});