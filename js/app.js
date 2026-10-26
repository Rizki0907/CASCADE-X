// CASCADE-X Core Application Logic & Interactions
(function () {
  'use strict';

  let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let currentRotX = 0;
  let currentRotY = 0;

  function initBootloader() {
    const bootScreen = document.getElementById('boot-screen');
    const bootLog = document.getElementById('boot-log');
    const bootFill = document.getElementById('boot-fill');
    const bootPct = document.getElementById('boot-pct');

    if (!bootScreen) return;

    // Instant click or keypress dismissal
    const dismissBoot = () => {
      bootScreen.classList.add('hidden');
    };
    bootScreen.addEventListener('click', dismissBoot);
    document.addEventListener('keydown', dismissBoot, { once: true });

    // Snappy cyberpunk boot sequence (under 280ms total)
    const logs = [
      { text: 'Menginisialisasi CASCADE-X Core Engine v2.0...', delay: 15 },
      { text: 'Memuat dataset spasial 429,303 sampel & 329 klaster wilayah...', delay: 60 },
      { text: 'Determinisme Fisika: EUI Gas ≡ Gas Makro / GIA (Deviasi 0.0)...', delay: 110 },
      { text: 'Memverifikasi arsitektur 3-Stage Cascaded Macro-Micro Coupling...', delay: 160 },
      { text: 'CASCADE-X ONLINE // REKOR #1 NASIONAL (LB: 0.23438 // CV: 0.25685)', delay: 220, highlight: true }
    ];

    logs.forEach((item, index) => {
      setTimeout(() => {
        if (bootLog) {
          const line = document.createElement('div');
          line.className = 'boot-log-line';
          if (item.highlight) {
            line.innerHTML = `<span class="prefix">&gt;&gt;</span> <span class="success">${item.text}</span>`;
          } else {
            line.innerHTML = `<span class="prefix">&gt;</span> <span>${item.text}</span>`;
          }
          bootLog.appendChild(line);
          bootLog.scrollTop = bootLog.scrollHeight;
        }

        const pct = Math.min(100, Math.round(((index + 1) / logs.length) * 100));
        if (bootFill) bootFill.style.width = pct + '%';
        if (bootPct) bootPct.textContent = pct + '%';

        if (index === logs.length - 1) {
          setTimeout(() => {
            bootScreen.classList.add('hidden');
          }, 120);
        }
      }, item.delay);
    });
  }

  function initCyberCanvas() {
    const canvas = document.getElementById('cyber-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const points = [];
    const count = Math.min(65, Math.floor((width * height) / 18000));

    for (let i = 0; i < count; i++) {
      points.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 1.5 + 1
      });
    }

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    function animate() {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      const nodeColor = isDark ? 'rgba(0, 210, 255, 0.55)' : 'rgba(0, 163, 255, 0.4)';
      const lineColor = isDark ? '0, 210, 255' : '0, 163, 255';

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = mousePos.x - p.x;
        const dy = mousePos.y - p.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        if (distToMouse < 140) {
          p.x += (dx / distToMouse) * 0.4;
          p.y += (dy / distToMouse) * 0.4;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();

        for (let j = i + 1; j < points.length; j++) {
          const p2 = points[j];
          const d2 = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (d2 < 120) {
            const alpha = (1 - d2 / 120) * (isDark ? 0.18 : 0.10);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${lineColor}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }

  function init3DEnergyCityMesh() {
    const canvas = document.getElementById('energy-mesh-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const size = (canvas.width = canvas.height = 360);
    const center = size / 2;

    const buildings = [
      { x: -70, y: -40, z: -30, w: 28, h: 75, d: 28, type: 'commercial' },
      { x: -20, y: -60, z: -10, w: 32, h: 110, d: 32, type: 'highrise' },
      { x: 35, y: -30, z: -25, w: 26, h: 65, d: 26, type: 'residential' },
      { x: -55, y: 25, z: 15, w: 30, h: 50, d: 30, type: 'residential' },
      { x: 5, y: 15, z: 20, w: 35, h: 90, d: 35, type: 'mixed' },
      { x: 60, y: 30, z: 10, w: 24, h: 45, d: 24, type: 'residential' },
      { x: -10, y: -10, z: 0, w: 40, h: 135, d: 40, type: 'hero_tower' }
    ];

    let pulseScan = -120;
    let pulseDir = 1.6;

    function render() {
      ctx.clearRect(0, 0, size, size);

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      const targetRotX = (mousePos.y - window.innerHeight / 2) * 0.0006;
      const targetRotY = (mousePos.x - window.innerWidth / 2) * 0.0008;
      currentRotX += (targetRotX - currentRotX) * 0.06;
      currentRotY += (targetRotY - currentRotY) * 0.06;

      pulseScan += pulseDir;
      if (pulseScan > 130 || pulseScan < -130) pulseDir *= -1;

      ctx.save();
      ctx.translate(center, center + 40);

      const cosX = Math.cos(0.45 + currentRotX);
      const sinX = Math.sin(0.45 + currentRotX);
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);

      function project(x, y, z) {
        const rotY_x = x * cosY - z * sinY;
        const rotY_z = x * sinY + z * cosY;
        const rotX_y = y * cosX - rotY_z * sinX;
        const rotX_z = y * sinX + rotY_z * cosX;
        const scale = 280 / (280 + rotX_z * 0.4);
        return {
          px: rotY_x * scale,
          py: rotX_y * scale,
          depth: rotX_z
        };
      }

      // Base ground grid
      const gridSpan = 110;
      const step = 22;
      ctx.strokeStyle = isDark ? 'rgba(0, 210, 255, 0.15)' : 'rgba(0, 163, 255, 0.12)';
      ctx.lineWidth = 1;

      for (let g = -gridSpan; g <= gridSpan; g += step) {
        const p1 = project(g, 0, -gridSpan);
        const p2 = project(g, 0, gridSpan);
        ctx.beginPath();
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);
        ctx.stroke();

        const p3 = project(-gridSpan, 0, g);
        const p4 = project(gridSpan, 0, g);
        ctx.beginPath();
        ctx.moveTo(p3.px, p3.py);
        ctx.lineTo(p4.px, p4.py);
        ctx.stroke();
      }

      // Buildings
      buildings.forEach((b) => {
        const x = b.x;
        const z = b.z;
        const w2 = b.w / 2;
        const d2 = b.d / 2;
        const h = b.h;

        const corners = [
          project(x - w2, 0, z - d2),
          project(x + w2, 0, z - d2),
          project(x + w2, 0, z + d2),
          project(x - w2, 0, z + d2),
          project(x - w2, -h, z - d2),
          project(x + w2, -h, z - d2),
          project(x + w2, -h, z + d2),
          project(x - w2, -h, z + d2)
        ];

        const isNearPulse = Math.abs(b.y - pulseScan) < 28;
        let strokeCol;
        if (b.type === 'hero_tower') {
          strokeCol = isDark ? 'rgba(0, 210, 255, 0.9)' : 'rgba(0, 140, 255, 0.85)';
        } else if (b.type === 'mixed') {
          strokeCol = isDark ? 'rgba(0, 245, 160, 0.8)' : 'rgba(0, 190, 110, 0.8)';
        } else {
          strokeCol = isDark ? 'rgba(255, 159, 67, 0.75)' : 'rgba(217, 119, 6, 0.7)';
        }

        if (isNearPulse) {
          strokeCol = isDark ? '#ffffff' : '#0055ff';
        }

        ctx.strokeStyle = strokeCol;
        ctx.lineWidth = isNearPulse ? 1.6 : 1.1;

        // Base outline
        ctx.beginPath();
        ctx.moveTo(corners[0].px, corners[0].py);
        ctx.lineTo(corners[1].px, corners[1].py);
        ctx.lineTo(corners[2].px, corners[2].py);
        ctx.lineTo(corners[3].px, corners[3].py);
        ctx.closePath();
        ctx.stroke();

        // Top outline
        ctx.beginPath();
        ctx.moveTo(corners[4].px, corners[4].py);
        ctx.lineTo(corners[5].px, corners[5].py);
        ctx.lineTo(corners[6].px, corners[6].py);
        ctx.lineTo(corners[7].px, corners[7].py);
        ctx.closePath();
        ctx.stroke();

        // Vertical pillars
        for (let c = 0; c < 4; c++) {
          ctx.beginPath();
          ctx.moveTo(corners[c].px, corners[c].py);
          ctx.lineTo(corners[c + 4].px, corners[c + 4].py);
          ctx.stroke();
        }

        // Top glowing node
        const topCenter = project(x, -h, z);
        ctx.beginPath();
        ctx.arc(topCenter.px, topCenter.py, 3, 0, Math.PI * 2);
        ctx.fillStyle = isNearPulse ? '#00f5a0' : (isDark ? '#00d2ff' : '#0077ff');
        ctx.fill();
      });

      // Inter-building grid lines
      ctx.strokeStyle = isDark ? 'rgba(0, 245, 160, 0.35)' : 'rgba(0, 180, 100, 0.3)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      for (let i = 0; i < buildings.length - 1; i++) {
        const pStart = project(buildings[i].x, -buildings[i].h, buildings[i].z);
        const pEnd = project(buildings[i + 1].x, -buildings[i + 1].h, buildings[i + 1].z);
        ctx.beginPath();
        ctx.moveTo(pStart.px, pStart.py);
        ctx.lineTo(pEnd.px, pEnd.py);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      ctx.restore();
      requestAnimationFrame(render);
    }

    render();
  }

  window.addEventListener('mousemove', (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
  });

  window.toggleTheme = function () {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('cascadex-theme', newTheme);

    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      if (newTheme === 'light') {
        themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
      } else {
        themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
      }
    }

    // Update all logo instances with transparent versions
    const logoSrc = newTheme === 'light' ? 'assets/logo/cascadex_logo_light_trans.png' : 'assets/logo/cascadex_logo_dark_trans.png';
    const mainLogo = document.getElementById('main-brand-logo');
    if (mainLogo) mainLogo.src = logoSrc;

    const heroLogo = document.getElementById('hero-brand-logo');
    if (heroLogo) heroLogo.src = logoSrc;

    const footerLogo = document.getElementById('footer-brand-logo');
    if (footerLogo) footerLogo.src = logoSrc;
  };

  window.nav = function (pageId, el) {
    document.querySelectorAll('.page, .page-view').forEach((p) => p.classList.remove('active'));
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) targetPage.classList.add('active');

    document.querySelectorAll('.nav-tab-btn, .mobile-drawer-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-page') === pageId);
    });

    const mobileDrawer = document.getElementById('mobile-drawer');
    if (mobileDrawer) mobileDrawer.classList.remove('open');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.toggleMobileMenu = function () {
    const mobileDrawer = document.getElementById('mobile-drawer');
    if (mobileDrawer) mobileDrawer.classList.toggle('open');
  };

  window.toggleVizMode = function (boxId, mode) {
    const box = document.getElementById(boxId);
    if (!box) return;
    const parent = box.closest('.card-panel') || box.parentElement;
    const btns = parent.querySelectorAll('.btn-chart-toggle');

    btns.forEach((b) => b.classList.toggle('active', b.getAttribute('data-mode') === mode));

    if (mode === 'static') {
      box.classList.add('mode-static');
    } else {
      box.classList.remove('mode-static');
    }
  };

  window.openImageLightbox = function (src, title) {
    const modal = document.getElementById('image-lightbox-modal');
    const img = document.getElementById('lightbox-img');
    const titleEl = document.getElementById('lightbox-title');
    if (modal && img) {
      img.src = src;
      if (titleEl) titleEl.textContent = title || 'Gambar Publikasi Resolusi Tinggi';
      modal.classList.add('active');
    }
  };

  window.closeImageLightbox = function () {
    const modal = document.getElementById('image-lightbox-modal');
    if (modal) modal.classList.remove('active');
  };

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeImageLightbox();
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('cascadex-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon && savedTheme === 'light') {
      themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    }

    const logoSrc = savedTheme === 'light' ? 'assets/logo/cascadex_logo_light_trans.png' : 'assets/logo/cascadex_logo_dark_trans.png';
    const mainLogo = document.getElementById('main-brand-logo');
    if (mainLogo) mainLogo.src = logoSrc;

    const heroLogo = document.getElementById('hero-brand-logo');
    if (heroLogo) heroLogo.src = logoSrc;

    const footerLogo = document.getElementById('footer-brand-logo');
    if (footerLogo) footerLogo.src = logoSrc;

    initBootloader();
    initCyberCanvas();
    init3DEnergyCityMesh();
  });
})();
