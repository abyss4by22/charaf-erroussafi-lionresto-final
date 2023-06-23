let connectBtn =  document.getElementById('connect');
connectBtn.addEventListener('click',show);
function show() {
  document.getElementById('modal').classList.toggle('hidden')
}
document.getElementById('close').addEventListener(`click`,show);