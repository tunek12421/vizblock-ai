console.info('[VizBlock] background loaded');

chrome.runtime.onInstalled.addListener(({ reason }) => {
  if (reason === 'install') {
    console.info('[VizBlock] Extension installed 🚀');
  }
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'PING') {
    sendResponse({ type: 'PONG', from: 'service-worker' });
  }
});
