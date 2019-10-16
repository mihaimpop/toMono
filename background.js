chrome.browserAction.onClicked.addListener(function (tab) {
  console.log("BACKGROUND");
  chrome.tabs.executeScript(null, { file: "content.js" });
});