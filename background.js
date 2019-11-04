chrome.webNavigation.onDOMContentLoaded.addListener(() => {
  chrome.browserAction.setIcon({ path: "/Icon-128-disabled.png" });
});

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(null, { file: "content.js" });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'updateIcon') {
    if (msg.value) {
      chrome.browserAction.setIcon({ path: "/Icon-128-enabled.png" });
    } else if (msg.value === false) {
      chrome.browserAction.setIcon({ path: "/Icon-128-disabled.png" });
    }
  }
});