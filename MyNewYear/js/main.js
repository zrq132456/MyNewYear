const fw = new Fireworks(document.getElementById('stage'));

document.getElementById('start').onclick = () => {
  document.getElementById('start').style.display = 'none';
  document.getElementById('bgm').play();
  fw.start();
  startText();
};

document.addEventListener('click', e => {
  fw.launch(e.clientX, e.clientY);
});

initSettings(fw);
