const cookies = chrome.cookies.getAll(
  { domain: "www.appbrewery.co" },
  (cookie) => {
    console.log(cookie);
  }
);
