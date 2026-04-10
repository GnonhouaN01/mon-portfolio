// ─── CUSTOM CURSOR ───────────────────────────────────────
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx - 4 + 'px';
  cursor.style.top = my - 4 + 'px';
});
function animRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx - 16 + 'px';
  ring.style.top = ry - 16 + 'px';
  requestAnimationFrame(animRing);
}
animRing();
document.querySelectorAll('a, button, .skill-tag').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2.5)';
    ring.style.transform = 'translate(-12px,-12px) scale(1.5)';
    ring.style.borderColor = 'rgba(200,169,110,0.8)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    ring.style.transform = 'translate(-12px,-12px) scale(1)';
    ring.style.borderColor = 'rgba(200,169,110,0.5)';
  });
});
// Hide cursor on mobile
if ('ontouchstart' in globalThis) {
  cursor.style.display = 'none';
  ring.style.display = 'none';
}

// ─── BACKGROUND CANVAS ───────────────────────────────────
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let W, H, particles = [], codeChars = [];

function resizeCanvas() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

const codeSnippets = [
  'function', 'const', 'return', 'async', 'await',
  'class', 'new', 'import', 'export', 'default',
  'if(', '{}', '=>', '&&', '||', '===',
  'php', 'laravel', 'react', 'vue', 'flutter',
  '.map()', '.filter()', 'useState', '$table',
  'SELECT', 'FROM', 'WHERE', 'JOIN',
  '</>', '<div>', 'npm', 'git', 'push',
  '[]', '...', '=>', '?', '!',
];

function initParticles() {
  particles = [];
  codeChars = [];
  const count = Math.floor(W * H / 14000);
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    });
  }
  const codeCount = Math.floor(W * H / 40000);
  for (let i = 0; i < codeCount; i++) {
    codeChars.push({
      x: Math.random() * W,
      y: Math.random() * H,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      alpha: Math.random() * 0.12 + 0.03,
      size: Math.random() * 5 + 9,
      vy: Math.random() * 0.15 + 0.05,
    });
  }
}

function drawCanvas() {
  ctx.clearRect(0, 0, W, H);

  // Draw floating code
  ctx.font = '';
  codeChars.forEach(c => {
    ctx.save();
    ctx.globalAlpha = c.alpha;
    ctx.fillStyle = '#C8A96E';
    ctx.font = `${c.size}px 'JetBrains Mono', monospace`;
    ctx.fillText(c.text, c.x, c.y);
    ctx.restore();
    c.y += c.vy;
    if (c.y > H + 20) c.y = -20;
  });

  // Draw particles
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(200,169,110,${p.alpha})`;
    ctx.fill();
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;
  });

  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.hypot(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(200,169,110,${0.08 * (1 - dist / 100)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawCanvas);
}

resizeCanvas();
initParticles();
drawCanvas();
window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });

// ─── NAVBAR SCROLL ───────────────────────────────────────
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// ─── SCROLL REVEAL ───────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObs.observe(el));

// ─── SHOW MORE PROJECTS ──────────────────────────────────
function showMoreProjects() {
  document.getElementById('proj4').classList.add('visible');
  document.getElementById('projectsMore').style.display = 'none';
}

// ─── FORM SUBMIT ─────────────────────────────────────────
// Initialiser EmailJS avec votre clé publique
emailjs.init("V2SX78Xih-y_py_FX"); 

async function handleSubmit(event) {
  event.preventDefault();

  const btn = document.getElementById("submitBtn");
  const form = event.target;

  // État de chargement
  btn.disabled = true;
  btn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="animation: spin 1s linear infinite">
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
    Envoi en cours…
  `;

  try {
    await emailjs.sendForm(
      "service_cy0ogvw",   // 🔑 Remplacez ici
      "template_ckbd8qe",  // 🔑 Remplacez ici
      form
    );

    // Succès
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Message envoyé !
    `;
    btn.style.background = "#22c55e";
    form.reset();

    // Restaurer le bouton après 4s
    setTimeout(() => {
      btn.disabled = false;
      btn.style.background = "";
      btn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
        Envoyer le message
      `;
    }, 4000);

  } catch (error) {
    // Erreur
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      Échec de l'envoi
    `;
    btn.style.background = "#ef4444";
    btn.disabled = false;

    setTimeout(() => {
      btn.style.background = "";
      btn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/>
          <polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
        Envoyer le message
      `;
    }, 4000);

    console.error("EmailJS error:", error);
  }
}