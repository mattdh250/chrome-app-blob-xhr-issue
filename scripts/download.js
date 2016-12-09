var downloadFile = (remoteUri) => {
    return new Promise((resolve, reject) => {
        
        try {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function() {
                // 4 = Complete
                if (this.readyState === 4)
                {
                    // 200 = Success
                    if (this.status === 200)
                    {
                        resolve(this.response);
                    }
                    else {
                        reject(this.status);
                    }
                }
            };
            xhr.open('GET', remoteUri);
            xhr.responseType = 'blob';
            xhr.send();
        } catch(e) {
            reject(e);
        }
    });
};

module.exports.downloadFile = downloadFile;