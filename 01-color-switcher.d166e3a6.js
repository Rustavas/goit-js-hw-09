const t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},e=function(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`};document.body.style.backgroundColor=setInterval(e,1e3);const n=setInterval(e,1e3);t.startBtn.addEventListener("click",(function(){document.body.style.backgroundColor=setInterval(e,1e3)})),t.stopBtn.addEventListener("click",(function(){clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.d166e3a6.js.map
