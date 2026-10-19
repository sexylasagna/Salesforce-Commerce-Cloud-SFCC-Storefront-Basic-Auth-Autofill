chrome.webRequest.onAuthRequired.addListener(
    (details, callback) => {
        callback({
            authCredentials: {
                // LOCAL SIG TESTING ONLY
                // Replace these placeholders with your authorized sandbox Basic Auth credentials.
                username: "xxx",
                password: "xxx"
            }
        });
    },

    {
        // Add one URL pattern per authorized SIG sandbox domain.
        // Keep these patterns in sync with manifest.json host_permissions
        urls: [
            "*://your-sig-domain.example.com/*"
        ]
    },
    ["asyncBlocking"]
);
