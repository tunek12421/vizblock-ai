console.info('[VizBlock] content script injected on', window.location.href);

chrome.runtime.sendMessage({ type: 'PING' }, (res) => {
  console.info('[VizBlock] SW says:', res);
});
