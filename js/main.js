/* ==========================================================================
   For Kaior — behaviour
   All words, photos and songs come from js/config.js. Nothing here needs
   editing to change content.
   ========================================================================== */
(function () {
  'use strict';

  const C = window.SITE_CONFIG;
  if (!C) { console.error('config.js did not load'); return; }

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const setText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  const rand = (min, max) => min + Math.random() * (max - min);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.documentElement.classList.add('js');

  const A = C.anniversary;
  const START = new Date(A.year, A.month - 1, A.day);
  const DAY_MS = 86400000;
  const daysTogether = () => Math.max(0, Math.floor((Date.now() - START.getTime()) / DAY_MS));

  /* ---------------------------------------------------------------------
     Dove (inline SVG, faces right)
     --------------------------------------------------------------------- */
  const DOVE_SVG =
    '<svg class="dove-svg" viewBox="0 0 120 90" aria-hidden="true" focusable="false">' +
      '<path class="dove-wing-back" d="M68 40 C74 24 68 10 54 2 C56 14 54 26 55 39 Z"/>' +
      '<path class="dove-body" d="M97 33 C93 26 84 25 78 30 C66 33 50 40 34 52 L8 49 L21 58 L5 68 L32 65 C52 71 77 65 90 47 C94 44 96 41 97 38 L108 35 Z"/>' +
      '<path class="dove-wing" d="M72 40 C64 20 44 8 16 4 C25 12 30 18 33 24 C27 23 21 23 15 24 C25 34 40 41 56 46 Z"/>' +
      '<circle class="dove-eye" cx="90.5" cy="32.5" r="1.5"/>' +
      '<path class="dove-twig" d="M106 36 C111 38 115 42 117 47"/>' +
      '<path class="dove-leaf" d="M111 39 C115 36 119 37 120 39 C117 42 113 42 111 39 Z M114 44 C111 47 111 51 113 53 C116 51 117 47 114 44 Z"/>' +
    '</svg>';

  $$('[data-dove]').forEach((el) => { el.innerHTML = DOVE_SVG; });

  /* ---------------------------------------------------------------------
     Sky: floating hearts, gold sparkles, doves flying across
     --------------------------------------------------------------------- */
  const sky = $('#sky');

  function buildSky() {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 26; i++) {
      const s = document.createElement('span');
      const size = rand(2, 5);
      s.className = 'sparkle';
      s.style.cssText = 'left:' + rand(0, 100) + '%;top:' + rand(0, 100) + '%;width:' + size + 'px;height:' + size +
        'px;animation-delay:' + (-rand(0, 4)) + 's;animation-duration:' + rand(2.6, 5) + 's';
      frag.appendChild(s);
    }
    if (!reduceMotion) {
      for (let i = 0; i < 12; i++) {
        const h = document.createElement('span');
        const dur = rand(13, 24);
        h.className = 'heart' + (i % 3 === 0 ? ' gold' : '');
        h.textContent = '♥';
        h.style.cssText = 'left:' + rand(2, 96) + '%;font-size:' + rand(12, 26) + 'px;animation-duration:' + dur +
          's;animation-delay:' + (-rand(0, dur)) + 's';
        frag.appendChild(h);
      }
    }
    sky.appendChild(frag);
    if (!reduceMotion) {
      setTimeout(spawnDove, 1200);
      setInterval(spawnDove, 6500);
    }
  }

  function spawnDove(fast) {
    if (reduceMotion || document.hidden || sky.querySelectorAll('.fly-dove').length > 7) return;
    const el = document.createElement('div');
    const ltr = Math.random() > 0.35;
    const size = rand(30, 62);
    const W = window.innerWidth, H = window.innerHeight;
    const from = ltr ? -size - 20 : W + 20;
    const to = ltr ? W + 20 : -size - 20;
    const y1 = rand(0.08, 0.7) * H;
    const y2 = y1 + rand(-0.22, 0.08) * H;
    el.className = 'fly-dove' + (ltr ? '' : ' rtl');
    el.style.width = size + 'px';
    el.innerHTML = '<div class="dove-bob">' + DOVE_SVG + '</div>';
    sky.appendChild(el);
    const anim = el.animate(
      [
        { transform: 'translate(' + from + 'px,' + y1 + 'px)' },
        { transform: 'translate(' + to + 'px,' + y2 + 'px)' }
      ],
      { duration: fast ? rand(2600, 4200) : rand(9000, 16000), easing: 'linear' }
    );
    anim.onfinish = () => el.remove();
  }

  /* ---------------------------------------------------------------------
     Static text from config
     --------------------------------------------------------------------- */
  function fillText() {
    $$('[data-heading]').forEach((el) => {
      const h = C[el.dataset.heading];
      if (!h) return;
      const s = document.createElement('p');
      s.className = 'script';
      s.textContent = h.script;
      const t = document.createElement('h2');
      t.textContent = h.title;
      el.append(s, t);
    });

    setText('gate-greeting', C.gate.greeting);
    setText('gate-title', C.gate.title);
    setText('gate-btn', C.gate.button);
    setText('gate-note', C.gate.note);
    setText('hint-btn', C.gate.hintButton);
    setText('hint-text', C.gate.hint);
    $('#gate-input').placeholder = C.gate.placeholder;

    setText('loader-top', C.loader.top);
    setText('loader-text', C.loader.text);

    setText('hero-kicker', C.hero.kicker);
    setText('hero-name', C.hero.name);
    setText('hero-sub', C.hero.subtitle);
    setText('counter-label', C.hero.counterLabel);
    setText('scroll-text', C.hero.scroll);

    setText('env-label', C.letter.envelopeLabel);
    setText('letter-greet', C.letter.greeting);
    setText('letter-signoff', C.letter.signoff);
    setText('letter-signature', C.letter.signature);
    setText('letter-skip', C.letter.skip);

    setText('surprise-tease', C.surprise.tease);
    setText('surprise-btn', C.surprise.button);
    setText('coupon-label', C.surprise.couponLabel);
    setText('coupon-text', C.surprise.couponText);
    setText('coupon-fine', C.surprise.couponFine);

    setText('footer-line', C.footer.line);
    setText('footer-date', C.footer.date);
    setText('footer-suffix', C.footer.daysSuffix);
  }

  /* ---------------------------------------------------------------------
     1. Date gate
     --------------------------------------------------------------------- */
  function isOurDate(raw) {
    const parts = String(raw).trim().split(/\D+/).filter(Boolean);
    const tries = [];
    if (parts.length === 3) {
      if (parts[0].length === 4) tries.push([parts[2], parts[1], parts[0]]); // 2025-04-29
      else tries.push(parts);                                               // 29/04/2025, 29-4-25
    } else if (parts.length === 1) {
      const p = parts[0];
      if (p.length === 8) tries.push([p.slice(0, 2), p.slice(2, 4), p.slice(4)]);      // 29042025
      if (p.length === 7) {
        tries.push([p.slice(0, 2), p.slice(2, 3), p.slice(3)]);                        // 2942025
        tries.push([p.slice(0, 1), p.slice(1, 3), p.slice(3)]);
      }
      if (p.length === 6) tries.push([p.slice(0, 2), p.slice(2, 4), p.slice(4)]);      // 290425
    }
    return tries.some((t) => {
      const d = Number(t[0]), m = Number(t[1]);
      let y = Number(t[2]);
      if (y < 100) y += 2000;
      return d === A.day && m === A.month && y === A.year;
    });
  }

  function initGate() {
    const gate = $('#gate');
    const form = $('#gate-form');
    const input = $('#gate-input');
    const msg = $('#gate-msg');
    const card = $('.gate-card');
    const hintBtn = $('#hint-btn');
    const hint = $('#hint-text');
    let wrong = 0;
    let unlocked = false;

    hintBtn.addEventListener('click', () => {
      hint.hidden = !hint.hidden;
      hintBtn.setAttribute('aria-expanded', String(!hint.hidden));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (unlocked) return;
      const value = input.value;
      msg.classList.remove('ok');

      if (!value.trim()) {
        msg.textContent = C.gate.empty;
        return;
      }
      if (!isOurDate(value)) {
        msg.textContent = C.gate.wrongMessages[wrong % C.gate.wrongMessages.length];
        wrong++;
        card.classList.remove('shake');
        void card.offsetWidth; // restart the shake
        card.classList.add('shake');
        input.select();
        return;
      }

      unlocked = true;
      msg.classList.add('ok');
      msg.textContent = C.gate.success;
      input.blur();

      // This click/tap is the user gesture browsers require before audio can play.
      Music.start();

      setTimeout(() => {
        const loader = $('#loader');
        loader.hidden = false;
        void loader.offsetWidth;
        loader.classList.add('show');
        gate.classList.add('leaving');
        setTimeout(() => { gate.hidden = true; }, 750);
        runLoader();
      }, reduceMotion ? 300 : 900);
    });
  }

  /* ---------------------------------------------------------------------
     2. "Days together" loading screen
     --------------------------------------------------------------------- */
  function runLoader() {
    const loader = $('#loader');
    const num = $('#loader-num');
    const bar = $('#loader-bar');
    const sub = $('#loader-sub');
    const target = daysTogether();
    const duration = reduceMotion ? 500 : 4200;
    const msgs = C.loader.messages;
    const t0 = performance.now();
    let lastMsg = -1;

    if (!reduceMotion) {
      for (let i = 0; i < 5; i++) setTimeout(() => spawnDove(true), 250 + i * 650);
    }

    function frame(now) {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      num.textContent = Math.round(target * eased);
      bar.style.width = (p * 100) + '%';
      const mi = Math.min(msgs.length - 1, Math.floor(p * msgs.length));
      if (mi !== lastMsg) { lastMsg = mi; sub.textContent = msgs[mi]; }
      if (p < 1) { requestAnimationFrame(frame); return; }

      num.textContent = target;
      sub.textContent = C.loader.done;
      setTimeout(() => {
        showSite();
        loader.classList.remove('show');
        loader.classList.add('leaving');
        setTimeout(() => { loader.hidden = true; }, 800);
      }, reduceMotion ? 700 : 1500);
    }
    requestAnimationFrame(frame);
  }

  function showSite() {
    window.scrollTo(0, 0);
    $('#site').hidden = false;
    $('#player').hidden = false;
    document.body.classList.add('unlocked');
    initReveal();
  }

  /* ---------------------------------------------------------------------
     3. Live counter (hero + footer)
     --------------------------------------------------------------------- */
  function tickCounter() {
    const diff = Math.max(0, Date.now() - START.getTime());
    const days = Math.floor(diff / DAY_MS);
    const pad = (n) => String(n).padStart(2, '0');
    setText('c-days', days);
    setText('c-hours', pad(Math.floor(diff / 3600000) % 24));
    setText('c-mins', pad(Math.floor(diff / 60000) % 60));
    setText('c-secs', pad(Math.floor(diff / 1000) % 60));
    setText('footer-days', days);
  }

  /* ---------------------------------------------------------------------
     4. Story timeline
     --------------------------------------------------------------------- */
  function buildTimeline() {
    const list = $('#timeline');
    C.story.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'tl-item reveal';
      const card = document.createElement('div');
      card.className = 'tl-card';
      const label = document.createElement('span');
      label.className = 'tl-label';
      label.textContent = item.label;
      const title = document.createElement('h3');
      title.className = 'tl-title';
      title.textContent = item.title;
      const text = document.createElement('p');
      text.className = 'tl-text';
      text.textContent = item.text;
      card.append(label, title, text);
      li.appendChild(card);
      list.appendChild(li);
    });
  }

  /* ---------------------------------------------------------------------
     5. Gallery + lightbox
     --------------------------------------------------------------------- */
  const noPhoto = []; // true for cards with no image, or whose image failed to load

  function iconEl(item) {
    const s = document.createElement('span');
    s.className = 'mem-icon';
    s.setAttribute('aria-hidden', 'true');
    s.textContent = item.icon || '🕊️';
    return s;
  }

  function buildGallery() {
    const grid = $('#gallery');
    C.gallery.forEach((item, i) => {
      const card = document.createElement('button');
      card.type = 'button';
      card.className = 'mem reveal';
      card.setAttribute('aria-label', 'Open memory: ' + item.title);

      const media = document.createElement('span');
      media.className = 'mem-media';
      noPhoto[i] = !item.image;
      if (item.image) {
        const img = document.createElement('img');
        img.alt = item.alt || item.title + (item.date ? ', ' + item.date : '');
        img.loading = 'lazy';
        img.decoding = 'async';
        img.addEventListener('error', () => {
          noPhoto[i] = true;
          media.replaceChildren(iconEl(item));
        });
        img.src = C.imageFolder + item.image;
        media.appendChild(img);
      } else {
        media.appendChild(iconEl(item));
      }

      const body = document.createElement('span');
      body.className = 'mem-body';
      if (item.date) {
        const d = document.createElement('span');
        d.className = 'mem-date';
        d.textContent = item.date;
        body.appendChild(d);
      }
      const t = document.createElement('span');
      t.className = 'mem-title';
      t.textContent = item.title;
      const c = document.createElement('span');
      c.className = 'mem-cap';
      c.textContent = item.caption;
      body.append(t, c);

      card.append(media, body);
      card.addEventListener('click', () => Lightbox.open(i, card));
      grid.appendChild(card);
    });
  }

  const Lightbox = (function () {
    const box = $('#lightbox');
    const media = $('#lb-media');
    let index = 0;
    let opener = null;

    function render() {
      const item = C.gallery[index];
      media.replaceChildren();
      if (item.image && !noPhoto[index]) {
        const img = document.createElement('img');
        img.alt = item.alt || item.title;
        img.src = C.imageFolder + item.image;
        media.appendChild(img);
      } else {
        media.appendChild(iconEl(item));
      }
      setText('lb-title', item.title);
      setText('lb-date', item.date || '');
      setText('lb-text', item.caption);
    }
    function open(i, from) {
      index = i;
      opener = from || null;
      render();
      box.hidden = false;
      document.body.style.overflow = 'hidden';
      $('#lb-close').focus();
    }
    function close() {
      if (box.hidden) return;
      box.hidden = true;
      document.body.style.overflow = '';
      if (opener) opener.focus();
    }
    function step(dir) {
      const n = C.gallery.length;
      index = (index + dir + n) % n;
      render();
    }

    $('#lb-close').addEventListener('click', close);
    $('#lb-prev').addEventListener('click', () => step(-1));
    $('#lb-next').addEventListener('click', () => step(1));
    box.addEventListener('click', (e) => { if (e.target === box) close(); });
    document.addEventListener('keydown', (e) => {
      if (box.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'Tab') {
        // keep focus inside the dialog
        const f = $$('button', box);
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });

    // swipe left / right on phones
    let touchX = null;
    box.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
    box.addEventListener('touchend', (e) => {
      if (touchX === null) return;
      const dx = e.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    });

    return { open: open, close: close };
  })();

  /* ---------------------------------------------------------------------
     6. Reasons I love you (flip card)
     --------------------------------------------------------------------- */
  function initReasons() {
    const card = $('#reason-card');
    const inner = $('#reason-inner');
    const faces = [$('.reason-front', card), $('.reason-back', card)];
    const btn = $('#reason-btn');
    const count = $('#reason-count');
    const total = C.reasons.length;
    let index = -1;   // -1 = intro face
    let face = 0;     // which face is currently showing
    let rotation = 0;

    function write(faceEl, no, text) {
      $('.reason-no', faceEl).textContent = no;
      $('.reason-text', faceEl).textContent = text;
    }

    write(faces[0], '♥', C.reasonsIntro);
    btn.textContent = C.reasonsButtonFirst;

    function next() {
      index = (index + 1) % total;
      face = 1 - face;
      write(faces[face], 'No. ' + (index + 1), C.reasons[index]);
      rotation += 180;
      inner.style.transform = 'rotateY(' + rotation + 'deg)';
      count.textContent = 'Reason ' + (index + 1) + ' of ' + total;
      btn.textContent = index === total - 1 ? C.reasonsButtonAgain : C.reasonsButton;
    }

    card.addEventListener('click', next);
    btn.addEventListener('click', next);
  }

  /* ---------------------------------------------------------------------
     7. Music: song cards + floating player
     --------------------------------------------------------------------- */
  const ICON = {
    play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5v14l11-7z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>',
    sound: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3z"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M16 8.5a5 5 0 0 1 0 7M18.8 5.8a9 9 0 0 1 0 12.4"/></svg>',
    muted: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9H3z"/><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" d="M16 9l5 6M21 9l-5 6"/></svg>'
  };

  const Music = (function () {
    const audio = new Audio();
    audio.preload = 'none';
    audio.volume = Math.min(1, Math.max(0, C.music.startVolume));

    const songs = C.songs;
    const missing = songs.map(() => false);
    const cards = [];
    let current = -1;
    let resumeOnVisible = false;

    const player = $('#player');
    const playBtn = $('#pl-play');
    const muteBtn = $('#pl-mute');
    const titleEl = $('#pl-title');
    const bar = $('#pl-bar');
    const fill = $('#pl-fill');

    function buildCards() {
      const list = $('#song-list');
      songs.forEach((song, i) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'song reveal';
        card.innerHTML =
          '<span class="song-disc" aria-hidden="true"></span>' +
          '<span class="song-info">' +
            '<span class="song-title"></span>' +
            '<span class="song-artist"></span>' +
            '<span class="song-note"></span>' +
            '<span class="song-status"></span>' +
          '</span>' +
          '<span class="song-play" aria-hidden="true"></span>';
        $('.song-title', card).textContent = song.title;
        $('.song-artist', card).textContent = song.artist;
        $('.song-note', card).textContent = song.note;
        card.addEventListener('click', () => {
          if (i === current && !missing[i]) toggle();
          else load(i, true);
        });
        list.appendChild(card);
        cards.push(card);
      });
    }

    function load(i, autoplay) {
      current = i;
      missing[i] = false;
      fill.style.width = '0%';
      audio.src = songs[i].file;
      if (autoplay) play();
      render();
    }

    function play() {
      const p = audio.play();
      // A rejected play() is either a missing file (the 'error' event handles it)
      // or the browser blocking autoplay (the player just shows "paused").
      if (p && p.catch) p.catch(() => render());
    }

    function toggle() {
      if (current < 0) { load(0, true); return; }
      if (audio.paused) play(); else audio.pause();
    }

    function render() {
      const song = songs[current];
      const isMissing = current >= 0 && missing[current];
      const playing = !audio.paused && !isMissing;

      player.classList.toggle('is-missing', isMissing);
      playBtn.disabled = isMissing;
      playBtn.innerHTML = playing ? ICON.pause : ICON.play;
      playBtn.setAttribute('aria-label', playing ? 'Pause music' : 'Play music');
      muteBtn.innerHTML = audio.muted ? ICON.muted : ICON.sound;
      muteBtn.setAttribute('aria-label', audio.muted ? 'Unmute music' : 'Mute music');
      muteBtn.setAttribute('aria-pressed', String(audio.muted));
      if (song) {
        titleEl.textContent = isMissing
          ? song.title + ': ' + C.music.missing
          : song.title + ' · ' + song.artist;
      }

      cards.forEach((card, i) => {
        const isCurrent = i === current;
        card.classList.toggle('is-current', isCurrent && !missing[i]);
        card.classList.toggle('is-playing', isCurrent && playing);
        card.classList.toggle('is-missing', missing[i]);
        $('.song-play', card).innerHTML = isCurrent && playing ? ICON.pause : ICON.play;
        $('.song-status', card).textContent = missing[i]
          ? C.music.missing
          : isCurrent ? (playing ? C.music.nowPlaying : C.music.paused) : C.music.tapToPlay;
        card.setAttribute('aria-label',
          (isCurrent && playing ? 'Pause ' : 'Play ') + songs[i].title + ' by ' + songs[i].artist);
      });
    }

    audio.addEventListener('error', () => {
      if (current < 0) return;
      missing[current] = true;
      render();
    });
    ['play', 'playing', 'pause', 'volumechange', 'loadedmetadata'].forEach((ev) => audio.addEventListener(ev, render));
    audio.addEventListener('timeupdate', () => {
      if (!isFinite(audio.duration) || !audio.duration) return;
      const pct = (audio.currentTime / audio.duration) * 100;
      fill.style.width = pct + '%';
      bar.setAttribute('aria-valuenow', String(Math.round(pct)));
    });
    audio.addEventListener('ended', () => {
      // roll on to the next song that actually exists
      for (let step = 1; step <= songs.length; step++) {
        const n = (current + step) % songs.length;
        if (!missing[n] || n === current) { load(n, true); return; }
      }
    });

    playBtn.addEventListener('click', toggle);
    muteBtn.addEventListener('click', () => { audio.muted = !audio.muted; });
    bar.addEventListener('click', (e) => {
      if (!isFinite(audio.duration) || !audio.duration) return;
      const r = bar.getBoundingClientRect();
      audio.currentTime = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)) * audio.duration;
    });

    // Pause when he leaves the tab, pick up again when he comes back.
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        resumeOnVisible = !audio.paused;
        audio.pause();
      } else if (resumeOnVisible) {
        resumeOnVisible = false;
        play();
      }
    });

    return {
      init: function () { buildCards(); render(); },
      start: function () { if (songs.length) load(0, true); }
    };
  })();

  /* ---------------------------------------------------------------------
     8. Love letter (envelope + typewriter)
     --------------------------------------------------------------------- */
  function initLetter() {
    const envelope = $('#envelope');
    const paper = $('#paper');
    const body = $('#letter-body');
    const sign = $('#letter-sign');
    const skip = $('#letter-skip');
    const paragraphs = C.letter.body.trim().split(/\n\s*\n/).map((p) => p.replace(/\s*\n\s*/g, ' ').trim());
    let timer = null;
    let opened = false;

    function finish() {
      clearTimeout(timer);
      $$('p', body).forEach((p, i) => { p.textContent = paragraphs[i]; p.classList.remove('typing'); });
      sign.classList.add('show');
      skip.hidden = true;
    }

    function type() {
      const els = paragraphs.map(() => {
        const p = document.createElement('p');
        body.appendChild(p);
        return p;
      });
      if (reduceMotion) { finish(); return; }

      let pi = 0, ci = 0;
      els[0].classList.add('typing');
      (function step() {
        const text = paragraphs[pi];
        ci = Math.min(text.length, ci + 2);
        els[pi].textContent = text.slice(0, ci);
        if (ci < text.length) {
          const ch = text[ci - 1];
          timer = setTimeout(step, ch === '.' || ch === '?' || ch === ':' ? 260 : 34);
          return;
        }
        els[pi].classList.remove('typing');
        pi++;
        ci = 0;
        if (pi >= paragraphs.length) { finish(); return; }
        els[pi].classList.add('typing');
        timer = setTimeout(step, 520);
      })();
    }

    envelope.addEventListener('click', () => {
      if (opened) return;
      opened = true;
      envelope.classList.add('open');
      setTimeout(() => {
        envelope.hidden = true;
        paper.hidden = false;
        type();
      }, reduceMotion ? 0 : 1050);
    });
    skip.addEventListener('click', finish);
  }

  /* ---------------------------------------------------------------------
     9. Surprise: confetti + coupon
     --------------------------------------------------------------------- */
  const Confetti = (function () {
    const canvas = $('#confetti');
    const ctx = canvas.getContext('2d');
    const COLORS = ['#d4af37', '#f4e3a1', '#f29bb2', '#f8cfd8', '#ffffff'];
    const SHAPES = ['rect', 'rect', 'rect', 'circle', 'heart', 'heart', 'dove'];
    let parts = [];
    let running = false;
    let W = 0, H = 0;
    let last = 0;

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function heart(s) {
      ctx.beginPath();
      ctx.moveTo(0, s * 0.45);
      ctx.bezierCurveTo(-s * 1.2, -s * 0.3, -s * 0.55, -s * 1.1, 0, -s * 0.35);
      ctx.bezierCurveTo(s * 0.55, -s * 1.1, s * 1.2, -s * 0.3, 0, s * 0.45);
      ctx.fill();
    }

    function draw(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      if (p.shape === 'rect') {
        ctx.scale(1, Math.cos(p.flip)); // paper-flutter
        ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.66);
      } else if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2.4, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'heart') {
        heart(p.size * 0.7);
      } else {
        ctx.font = (p.size * 2) + 'px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('🕊️', 0, 0);
      }
      ctx.restore();
    }

    function loop(now) {
      // scale by elapsed time so it looks the same on 60Hz and 120Hz screens
      const dt = Math.min(3, (now - last) / 16.67);
      last = now;
      const drag = Math.pow(0.985, dt);
      ctx.clearRect(0, 0, W, H);
      parts = parts.filter((p) => p.y < H + 60);
      parts.forEach((p) => {
        p.vx *= drag;
        p.vy = p.vy * drag + 0.22 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.rot += p.vr * dt;
        p.flip += 0.18 * dt;
        draw(p);
      });
      if (parts.length) requestAnimationFrame(loop);
      else { running = false; ctx.clearRect(0, 0, W, H); }
    }

    function burst(x, y) {
      if (reduceMotion) return;
      resize();
      const power = Math.min(1.25, Math.max(0.75, H / 800));
      for (let i = 0; i < 170; i++) {
        const angle = -Math.PI / 2 + rand(-1, 1) * 1.05;
        const speed = rand(6, 19) * power;
        const shape = SHAPES[(Math.random() * SHAPES.length) | 0];
        parts.push({
          x: x, y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          rot: rand(0, Math.PI * 2),
          vr: shape === 'dove' ? rand(-0.03, 0.03) : rand(-0.2, 0.2),
          flip: rand(0, Math.PI * 2),
          size: shape === 'dove' ? rand(9, 14) : rand(7, 14),
          color: COLORS[(Math.random() * COLORS.length) | 0],
          shape: shape
        });
      }
      if (!running) { running = true; last = performance.now(); requestAnimationFrame(loop); }
    }

    window.addEventListener('resize', () => { if (running) resize(); });
    return { burst: burst };
  })();

  function initSurprise() {
    const btn = $('#surprise-btn');
    const coupon = $('#coupon');
    btn.addEventListener('click', () => {
      const r = btn.getBoundingClientRect();
      Confetti.burst(r.left + r.width / 2, r.top + r.height / 2);
      if (!reduceMotion) {
        setTimeout(() => Confetti.burst(window.innerWidth * 0.2, window.innerHeight * 0.75), 260);
        setTimeout(() => Confetti.burst(window.innerWidth * 0.8, window.innerHeight * 0.75), 480);
        for (let i = 0; i < 4; i++) setTimeout(() => spawnDove(true), i * 300);
      }
      if (coupon.hidden) {
        coupon.hidden = false;
        btn.textContent = C.surprise.buttonAgain;
        btn.classList.remove('btn-big');
        setTimeout(() => coupon.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' }), 350);
      }
    });
  }

  /* ---------------------------------------------------------------------
     Scroll reveal
     --------------------------------------------------------------------- */
  function initReveal() {
    const els = $$('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach((el) => io.observe(el));
  }

  /* ---------------------------------------------------------------------
     Go
     --------------------------------------------------------------------- */
  fillText();
  buildSky();
  buildTimeline();
  buildGallery();
  initReasons();
  Music.init();
  initLetter();
  initSurprise();
  initGate();
  tickCounter();
  setInterval(tickCounter, 1000);
})();
