chrome.storage.sync.get("selectedText", function(data) {
  console.log(data.selectedText);

  currentSelected.innerHTML = data.selectedText;
});