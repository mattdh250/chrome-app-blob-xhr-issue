# chrome-app-blob-xhr-issue
Repro of an issue where the unlimitedStorage attribute is not applied to XHR requests that download blob data in a packaged chrome app

# Replicating the issue
1. Install as an unpacked extension in Chrome on a chrome device with 8 GB available storage
2. Run the app
3. Note that Error 0 is thrown part way through downloading the 2nd file
