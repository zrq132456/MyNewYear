class Fireworks {
  constructor(container) {
    this.container = container;
    this.canvas = document.createElement('canvas');
    this.trail = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.tctx = this.trail.getContext('2d');

    container.appendChild(this.trail);
    container.appendChild(this.canvas);

    this.resize();
    window.addEventListener('resize', () => this.resize());

    this.particles = [];
    this.running = false;
    this.type = 'random';
    this.auto = true;
    this.finale = false;
    this.last = 0;
  }

  resize() {
    [this.canvas, this.trail].forEach(c => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    });
  }

  start() {
    this.running = true;
    requestAnimationFrame(this.loop.bind(this));
  }

  launch(x, y) {
    const count = this.finale ? 300 : 120;
    for (let i = 0; i < count; i++) {
      this.particles.push(new Particle(x, y, this.type));
    }
  }

  loop(time) {
    if (!this.running) return;

    this.tctx.fillStyle = 'rgba(0,0,0,0.2)';
    this.tctx.fillRect(0,0,this.canvas.width,this.canvas.height);
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);

    this.particles = this.particles.filter(p => p.life > 0);
    this.particles.forEach(p => {
      p.update();
      p.draw(this.ctx, this.tctx);
    });

    if (this.auto && time - this.last > 800) {
      this.launch(
        Math.random()*this.canvas.width,
        Math.random()*this.canvas.height*0.5
      );
      this.last = time;
    }

    requestAnimationFrame(this.loop.bind(this));
  }
}

class Particle {
  constructor(x, y, type) {
    const a = Math.random() * Math.PI * 2;
    const s = type === 'willow' ? Math.random()*2+1 : Math.random()*6+2;

    this.x = x;
    this.y = y;
    this.vx = Math.cos(a)*s;
    this.vy = Math.sin(a)*s;
    this.life = 80;
    this.g = type === 'willow' ? 0.02 : 0.08;
    this.color = `hsl(${Math.random()*360},100%,60%)`;
  }

  update() {
    this.vy += this.g;
    this.x += this.vx;
    this.y += this.vy;
    this.life--;
  }

  draw(ctx, tctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, 2, 2);
    tctx.fillStyle = this.color;
    tctx.fillRect(this.x, this.y, 1, 1);
  }
}

window.Fireworks = Fireworks;
