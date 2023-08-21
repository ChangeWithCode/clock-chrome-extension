chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'buttonClicked') {
      const inputFromPopup = request.input;
  
      console.log('Background script received the message with input:', inputFromPopup);
      sendResponse({ message: 'Message received in the background script.' });
    }
  });
  