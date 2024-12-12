const getEmailContent = () => {
  const emailBody = document.querySelector('.a3s.aiL')?.textContent;
  return emailBody || '';
};

const injectReplyButton = () => {
  const replyButton = document.createElement('button');
  replyButton.textContent = 'Generate Reply with Ollama';
  replyButton.className = 'ollama-reply-btn';

  replyButton.addEventListener('click', async () => {
    const emailContent = getEmailContent();
    // Send to background script for Ollama processing
    const response = await chrome.runtime.sendMessage({
      type: 'GENERATE_REPLY',
      content: emailContent
    });

    // Insert response into Gmail compose box
    const composeBox = document.querySelector('[role="textbox"]');
    if (composeBox) {
      composeBox.textContent = response.generatedReply;
    }
  });

  const toolbar = document.querySelector('.amn');
  toolbar?.appendChild(replyButton);
};

// Watch for Gmail navigation changes
const observer = new MutationObserver(() => {
  if (window.location.href.includes('#inbox/')) {
    injectReplyButton();
  }
});

observer.observe(document.body, { childList: true, subtree: true });
