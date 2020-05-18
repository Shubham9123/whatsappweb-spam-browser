function sendMessage (message) {
  window.InputEvent = window.Event || window.InputEvent;

  var event = new InputEvent('input', {
    bubbles: true
  });

  var textbox = document.querySelectorAll('div._2S1VP')[1];

  textbox.textContent = message;
  textbox.dispatchEvent(event);

  document.querySelector("button._35EW6").click();
}