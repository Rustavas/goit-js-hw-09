!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},e=function(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))};document.body.style.backgroundColor=setInterval(e,1e3);var n=setInterval(e,1e3);t.startBtn.addEventListener("click",(function(){document.body.style.backgroundColor=setInterval(e,1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.9a210c3e.js.map
