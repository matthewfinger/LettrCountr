const TEXTAREA = document.getElementById("textarea");
window.onload = () => {
  const WORDCOUNT = document.getElementById("wordcount");
  const CHARCOUNT = document.getElementById("charcount");
  const fillWordCount = () => WORDCOUNT.innerHTML = TEXTAREA.value.split(" ").filter(item => item != "").length;
  const fillCharCount = () => CHARCOUNT.innerHTML = TEXTAREA.value
  .length;
  if (TEXTAREA.value == "") TEXTAREA.value = "Enter your text here...";
  window.setInterval(() => fillWordCount() && fillCharCount(), 16);
};
