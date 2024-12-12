import { generateEmailReply } from '../services/ollama';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GENERATE_REPLY') {
    generateEmailReply(request.content)
      .then(reply => sendResponse({ generatedReply: reply }));
    return true; // Required for async response
  }
});
