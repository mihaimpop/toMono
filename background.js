chrome.webNavigation.onDOMContentLoaded.addListener(() => {
  chrome.action.setIcon({ path: "/Icon-128-disabled.png" });
});

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === 'updateIcon') {
    if (msg.value) {
      chrome.action.setIcon({ path: "/Icon-128-enabled.png" });
    } else if (msg.value === false) {
      chrome.action.setIcon({ path: "/Icon-128-disabled.png" });
    }
  }
});
