function startText() {
    const box = document.getElementById('textBox');
    const target = new Date('2026-01-01T00:00:00');
  
    const msg = `
  新的一年已经启程：
  {time}
  
  山海寻梦，不觉其远；前路迢迢，阔步而行。
  让我们拿出跃马扬鞭的勇气，
  激发万马奔腾的活力，保持马不停蹄的干劲，
  一起为梦想奋斗、为幸福打拼，
  把宏伟愿景变成美好现实。
  
  新年的旭日已然升起！
  祝祖国山河壮丽、大地丰饶，神州沐朝晖！
  祝 大家：
  元气满格、快乐续航、烦恼清零，
  新年新气象，万事皆可期！
  ✨ 新年快乐 ✨

  `;
  
    let i = 0;
    const timer = setInterval(() => {
      const now = new Date();
      const diff = Math.max(0, now - target);
      const s = Math.floor(diff / 1000);
  
      const t = `${Math.floor(s/3600)}小时 ${Math.floor(s%3600/60)}分 ${s%60}秒`;
  
      box.innerText = msg.replace('{time}', t).slice(0, i++);
      if (i > msg.length) clearInterval(timer);
    }, 80);
  }
  