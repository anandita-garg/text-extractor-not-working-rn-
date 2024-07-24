chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.extractedText) {
      chrome.storage.local.set({ extractedText: message.extractedText }, () => {
        console.log('Data saved to storage:', message.extractedText);
      });
    }
  });
  