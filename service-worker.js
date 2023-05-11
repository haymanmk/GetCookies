chrome.runtime.onMessageExternal.addListener(
  (request, sender, sendResponse) => {
    if (request.openURL) {
      chrome.tabs
        .create({
          active: false,
          url: request.openURL,
        })
        .then(() => {
          sendResponse(true);
          console.log(`${request.openURL} opened.`);
        })
        .catch((err) => {
          sendResponse(false, err);
          console.log("ERROR", err);
        });
    } else if (request.getCookies) {
      chrome.cookies.getAll({ domain: request.getCookies }, (res) => {
        if (res) sendResponse(res);
        else sendResponse(false, "Cannot get cookies.");
      });
    }
  }
);

const cookies = chrome.cookies.getAll(
  { domain: "www.appbrewery.co" },
  (cookie) => {
    console.log(cookie);
  }
);
