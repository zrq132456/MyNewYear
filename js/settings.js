function initSettings(fw) {
  document.getElementById('settingsBtn').onclick = () => {
    document.getElementById('settings').classList.toggle('hide');
  };

  document.getElementById('shellType').onchange = e => {
    fw.type = e.target.value;
  };

  document.getElementById('autoLaunch').onchange = e => {
    fw.auto = e.target.checked;
  };

  document.getElementById('finale').onchange = e => {
    fw.finale = e.target.checked;
  };
}
