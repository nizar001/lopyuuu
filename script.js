/* ============ PENGATURAN — ganti nama file & isi pesan di sini ============ */
const CFG = {
  musik: 'assets/anugrah.mp3',
  video: 'assets/bucin.mp4',
  wa: '6283171710493', // ISI nomor WhatsApp tujuan, contoh '6281234567890' (biarkan '62' = pilih kontak manual di WhatsApp)
  foto: ['assets/1.jpg', 'assets/2.jpg', 'assets/3.jpg', 'assets/poster.png']
};

// {nama} otomatis diganti dengan nama yang diketik di awal
const PAGES = [
  { t: 'photo', img: 0, h: `Halo, {nama} 👋`, m: `selamatt hari I Love Youu sayangggg! Jadi gini, trimakaciiii sayangggg kamuu udaaa pertahaninnn sejauhh iniii sayangg 💖 iniiii fotoooo ciapaaa ciiiiii hihihihiii kokkk lucuuu bangettt iiiiii kayakkk orangnyaa cekaranggggg.kamu liattt webnyaa yanggg benerr yahh cayanggg akuuu capeee tauu bikinnyaa 🥹` },
  { t: 'photo', img: 1, h: `trimakaasiii bangwttt sayanggg,dedeeee ijayyy sangatttt sayangggggg Firda sipana rosdian selamanyaaaaa🤭` },
  { t: 'photo', img: 2, h: `tadaaaaaaa iniiii fotooo kitaaa passs fotbar hihihihiihi lucuuu yaakannn cayangggg🤭` },
  { t: 'letter', l: [
    `trimakaaciii tayaanggggg kamuu udaa sabarr sama akuuu, sayanggggg kamuu ituu harusss jagaa kesehatann jugaa sayanggg kamuuu ituu haruss tumbuhh  kuatt sayanggg gabolee telatt mam saynggg.`,
    `maafff sayanggg kaloo akuuu nyuruhh nyuruhh atauu maksaa maksaaa kamuu. akuuu cumannn nggaa mauu kamuu sakitt sayanggg jadii kesannya akuu maksa maksa kamu mam gituu padahall akuuu lakuinn tugass akuu saynggg buattt jagainn kamuu termasuk jagainn kesehatan kamuu sayanggg.`,
    `sayanggggggg,kitaa haruss bisaa saling menghargaiii yahhh sayanggg demi kelancaran hubungan kitaa sayanggggg.`,
    `sayangggggggg, akuuu sayanggggggg bangetttt samaa kamuu, sayangggggggg kamuu ituuu satu satunyaa yang paling berharga buattt akuuu sayangggggg,jangann sampee kitaa pisahh sayangggg,walauu waktu itu kita hampir pecahh tapi takdir menyatukan kita lagii sebagai pasangann yanggg akan selalu bahagiaa sealmanyaaa,takdir percaya ituuu,kejadian kemarin yang bikin kita hampir pecah jangan di ulangi yahhh sayangg aku nggaa mauuu kamuu pergiii sayangggg,i love you syaanggg.`,
    `jadiii hari ini, di tanggal 14 Oktober ini, aku mauuu bilangggg....`,
    `lopyuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu, {nama} 💖`] },
  { t: 'photo', img: 3, h: `hihihihiihii lucuu kannnn?`, m: `akuuu bakall teruss berusahaa jadiii laki lakii yangg sempurnaa, akuuu teruss berdoa semoga hubungann kitaa inii bakalan selamanya dan semuaa yang kita impikan it semuanyaaa bakalann terwujudd` },
  { t: 'final', m: `celamattt Hari I Love You cayangggg! makaciiii yaaahhh udaaa jadi alasan aku senyum-senyum sendiri sambil ngetik semua iniii hihihihi, sampeee akuuu ngantukk giniiii 😭😭😭. makaciiii tayangggg, udaaa bertahann samaa akuuu, dan udaaa nerimaaa akuu apaa adanyaaa sepertii iniii. akuu sayangg kamuu, hari inii, besokk, dan seterusnyaaa.` },
  { t: 'video', h: `Satu lagi… dorrr!! TADAAAAAA!`, m: `lihattt sayanggg kitaa udaaa sejauhhh manaaa,banyakk rintangann yangg udaaa kitaa lewatii bersamaa samaaa,kitaa dapett susahh senengnyaa barenggg barengggg,akuu susahh kamuu adaaa akuu seneng kamuu adaaa, dan kamu susah akuu adaa kamuu seneng akuu adaaaa.` },
  { t: 'wa', h: `balessss cayangggg, {nama} 💌`, m: `udaaa selesaiii niiihh.` }
];

// komentar si hewan di tiap halaman
const QUIPS = ['ssttt, eumm inii surat apaa yaahh...🤭', 'akuu dari tadii liatinn yahh 👀', 'tahannnnn 🤭', 'dibacaa semuaaa yahhh hihihii !', 'Kamu senyumm? Aku liat 😏', 'Tissue mana tissue? 🥹', 'dikitt lagii, sabar yahh ~', 'Balesss ih 💚'];

const REACT = [
  ['🥹 Terharu', '“aaaaa… aku juga sayang kamuu! Jangan bikin aku nangis dong 🥹”'],
  ['🤭 Salting', '“apasih… (padahal senyum-senyum sendiri dari tadii) 🤭”'],
  ['😭 Nangis', '“Hiks… ini kenapa bagus banget? Aku jadii sayang nihh! 😭💖”']
];

const MSG = ['Ngga ada yah sayang 😤', 'Dibilangg ngga ada iihhhh 😠', 'Hadeuh kalo ngga ada yaa nggaa adaa sayangggg 😭'];

// [kata kunci, emoji, suara, gaya animasi: walk | hop | fly | swim]
const ANI = [
  [['kucing', 'cat', 'meong'], '🐱', 'Meooong~ 🐾', 'walk'],
  [['anjing', 'dog', 'guguk'], '🐶', 'Guk guk! 🐾', 'walk'],
  [['kelinci', 'rabbit', 'bunny'], '🐰', 'Hop hop hop! 🥕', 'hop'],
  [['burung', 'bird', 'merpati'], '🐦', 'Cuit cuit~ 🎶', 'fly'],
  [['kupu', 'butterfly'], '🦋', 'Terbang bareng kamu~ ✨', 'fly'],
  [['ikan', 'fish'], '🐠', 'Blub blub~ 🫧', 'swim'],
  [['hamster'], '🐹', 'Nyam nyam nyam 🌻', 'walk'],
  [['panda'], '🐼', 'Pelukk panda! 🎋', 'walk'],
  [['bebek', 'duck'], '🦆', 'Kwek kwek! 💛', 'walk'],
  [['kodok', 'katak', 'frog'], '🐸', 'Kero kero~ 💚', 'hop'],
  [['penguin'], '🐧', 'Waddle waddle~ ❄️', 'walk'],
  [['sapi', 'cow'], '🐮', 'Mooo~ 🥛', 'walk'],
  [['kuda', 'horse'], '🐴', 'Hihihi! 🏇', 'walk'],
  [['singa', 'lion'], '🦁', 'Roarr! 👑', 'walk'],
  [['gajah', 'elephant'], '🐘', 'Tuuut! 🌈', 'walk'],
  [['koala'], '🐨', 'Peluk koala 🍃', 'walk'],
  [['ayam', 'chicken'], '🐔', 'Kukuruyuk! 🐣', 'hop'],
  [['domba', 'kambing', 'sheep'], '🐑', 'Mbeee~ ☁️', 'walk'],
  [['monyet', 'kera', 'monkey'], '🐵', 'Uuu aaa! 🍌', 'hop'],
  [['unicorn'], '🦄', 'Sparkle! ✨', 'fly'],
  [['dino', 'dinosaurus'], '🦖', 'Grrr raawr! 🦕', 'walk']
];
/* ======================================================================= */

const $ = s => document.querySelector(s);
const el = (t, c, x) => { const e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; };
const bgm = $('#bgm'), fm = $('#fm'), modal = $('#modal'), deck = $('#deck'), dots = $('#dots');
const mq = matchMedia('(orientation: portrait)');
let NAME = '', PET = '', cur = 0, run = 0, bad = 0, busy = false, hold = false, vid = null;
const nm = s => s.replaceAll('{nama}', NAME || 'Sayang');
const VI = PAGES.findIndex(p => p.t === 'video') + 1;

// efek ketik (per elemen)
function type(e, s) {
  const t = e._t = (e._t || 0) + 1, c = [...s], t0 = performance.now(), d = Math.min(7000, c.length * 16);
  e.textContent = '';
  (function f(now) {
    if (t !== e._t) return;
    const n = Math.min(c.length, Math.ceil((now - t0) / d * c.length));
    e.textContent = c.slice(0, n).join(''); e.scrollTop = e.scrollHeight;
    if (n < c.length) requestAnimationFrame(f);
  })(t0);
}

// musik otomatis (mulai di sentuhan pertama bila browser memblokir autoplay)
const kick = () => { if (!hold && !mq.matches && bgm.paused) bgm.play().catch(() => {}); };
bgm.src = CFG.musik;
['pointerdown', 'touchend', 'click', 'keydown'].forEach(ev => addEventListener(ev, kick, { passive: true }));

// bangun halaman
const scr = [$('#s0')];
PAGES.forEach((p, i) => {
  const s = el('section', 'scr ' + p.t + (i % 2 ? ' flip' : '')); let cb;
  if (p.t === 'photo') {
    const f = el('figure', 'frame'), im = new Image();
    im.src = CFG.foto[p.img]; im.alt = ''; im.onerror = () => f.classList.add('noimg');
    f.append(im, el('div', 'nf', '💖'));
    const c = el('div', 'card'), h = el('h2', 'gold'), m = el('p');
    c.append(el('small', '', `Halaman ${i + 1}`), h, m); s.append(f, c);
    cb = () => { h.textContent = nm(p.h); type(m, nm(p.m)); };
  } else if (p.t === 'letter') {
    const sc = el('div', 'sc'), ps = p.l.map((x, j) => { const q = el('p', j === p.l.length - 1 ? 'big gold' : ''); q.dataset.t = x; return q; });
    sc.append(el('h2', 'gold', 'Surat panjang buat kamu 💌'), ...ps); s.append(sc);
    cb = () => {
      clearTimeout(s._k); sc.scrollTop = 0; let j = 0;
      ps.forEach(q => { q.textContent = nm(q.dataset.t); q.classList.remove('show'); });
      (function f() {
        if (cur !== i + 1 || j >= ps.length) return;
        const q = ps[j++]; q.classList.add('show');
        sc.scrollTo({ top: q.offsetTop - sc.clientHeight * .3, behavior: 'smooth' });
        s._k = setTimeout(f, 1800 + q.textContent.length * 22);
      })();
    };
  } else if (p.t === 'final') {
    const n = el('h1', 'gold'), m = el('p', 'fmsg'), r = el('div', 'react'), t = el('p', 'rtxt');
    REACT.forEach(([b, x]) => { const k = el('button', 'btn ghost', b); k.onclick = () => type(t, x); r.append(k); });
    s.append(el('div', 'seal', '💌'), el('small', '', 'Untuk'), n, m, el('small', '', 'Reaksi kamu:'), r, t);
    cb = () => { n.textContent = nm('{nama}'); type(m, nm(p.m)); t.textContent = ''; };
  } else if (p.t === 'wa') {
    const h = el('h2', 'gold'), m = el('p', 'vmsg'), ta = el('textarea'), b = el('button', 'btn wag', 'Kirim ke WhatsApp 💚'), st = el('p', 'rtxt');
    ta.placeholder = 'Tulis pesan kamu di sini…'; ta.maxLength = 600;
    b.onclick = e => {
      const t = ta.value.trim();
      if (!t) { st.textContent = 'Masa kosong sih? Ketik dikit dong 🥺'; ta.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-8px)' }, { transform: 'translateX(8px)' }, { transform: 'translateX(0)' }], { duration: 380, easing: 'ease-in-out' }); return; }
      const n = String(CFG.wa).replace(/\D/g, '');
      open(`https://wa.me/${n.length > 5 ? n : ''}?text=${encodeURIComponent(`Halo, aku ${NAME || 'Sayang'} 💖\n\n${t}`)}`, '_blank');
      st.textContent = 'Terkirim… tinggal pencet kirim di WhatsApp ya 💌'; burst(e.clientX, e.clientY);
    };
    s.append(h, m, ta, b, st);
    cb = () => { h.textContent = nm(p.h); m.textContent = nm(p.m); st.textContent = ''; };
  } else {
    const v = vid = el('video'), m = el('p', 'vmsg');
    v.src = CFG.video; v.controls = true; v.playsInline = true; v.preload = 'metadata';
    v.onplay = () => { hold = true; bgm.pause(); };
    v.onended = () => { hold = false; kick(); };
    s.append(el('h2', 'gold', p.h), v, m);
    cb = () => { m.textContent = nm(p.m); };
  }
  s._cb = cb; deck.append(s); scr.push(s); dots.append(el('i'));
});

// pindah halaman
function go(n) {
  cur = n;
  scr.forEach((s, i) => s.classList.toggle('on', i === n));
  $('#nav').classList.toggle('on', n > 0);
  $('#buddy').classList.toggle('on', n > 0 && !!PET);
  if (n > 0) { $('#bem').textContent = PET; const q = $('#bq'); q.textContent = QUIPS[n - 1] || ''; q.style.animation = 'none'; q.offsetWidth; q.style.animation = ''; }
  [...dots.children].forEach((d, i) => d.classList.toggle('on', i === n - 1));
  $('#prev').style.visibility = n > 1 ? 'visible' : 'hidden';
  $('#next').textContent = n === PAGES.length ? 'Ulang 🔁' : 'Lanjut →';
  if (vid && n !== VI) vid.pause();
  hold = n === VI;
  if (hold) bgm.pause(); else kick();
  if (scr[n]._cb) scr[n]._cb();
}
$('#prev').onclick = () => go(cur - 1);
$('#next').onclick = () => cur === PAGES.length ? reset() : go(cur + 1);

// ulang dari awal
function reset() {
  run++; busy = false; bad = 0; NAME = ''; PET = '';
  fm.reset(); modal.classList.remove('on'); $('#bye').classList.remove('on'); $('#pets').replaceChildren();
  if (vid) vid.pause();
  bgm.pause(); bgm.currentTime = 0;
  go(0);
}

// peringatan landscape: kalau portrait, web mengulang dari awal
function chk() {
  const p = mq.matches;
  $('#rotate').classList.toggle('on', p); $('.stage').inert = p;
  if (p) reset(); else kick();
}
mq.addEventListener('change', chk); chk();

// animasi hewan
function pet(a) {
  const w = el('div', 'pet ' + a[3]), b = el('div', 'bubble', `${a[2]} Halo ${NAME}!`);
  w.append(el('span', '', a[1])); $('#pets').append(w, b);
}

fm.onsubmit = e => {
  e.preventDefault(); if (busy) return;
  NAME = fm.nama.value.trim();
  const v = fm.hewan.value.trim().toLowerCase();
  const a = ANI.find(x => x[0].some(w => v.includes(w)));
  if (a) {
    busy = true; PET = a[1]; const r = run; pet(a);
    setTimeout(() => { if (r !== run) return; busy = false; $('#pets').replaceChildren(); go(1); }, 4300);
  } else {
    $('#mNo').textContent = `Peringatan ${bad % 3 + 1}/3`;
    $('#mTxt').textContent = MSG[bad++ % 3];
    modal.classList.add('on');
  }
};
modal.onclick = e => { if (e.target === modal) modal.classList.remove('on'); };
$('#lanjut').onclick = () => { modal.classList.remove('on'); PET = '🐣'; go(1); };
$('#keluar').onclick = () => { modal.classList.remove('on'); $('#bye').classList.add('on'); try { window.close(); } catch (_) {} };
$('#back').onclick = reset;

// hati & kilau melayang
setInterval(() => {
  const fx = $('#fx'); if (mq.matches || fx.childElementCount > 24) return;
  const h = el('i', 'fl', ['💗', '✨', '💖', '🤍'][Math.random() * 4 | 0]);
  h.style.cssText = `left:${Math.random() * 100}%;font-size:${1.5 + Math.random() * 2}cqw;animation-duration:${6 + Math.random() * 6}s;font-style:normal`;
  fx.append(h); h.onanimationend = () => h.remove();
}, 700);

// letupan hati tiap disentuh
function burst(x, y) {
  for (let i = 0; i < 7; i++) {
    const h = el('i', '', ['💗', '✨', '💖', '🌸'][Math.random() * 4 | 0]), a = Math.random() * 6.28, d = 40 + Math.random() * 60;
    h.style.cssText = `position:fixed;left:${x}px;top:${y}px;z-index:50;pointer-events:none;font-style:normal;font-size:${14 + Math.random() * 12}px;margin:-10px 0 0 -10px`;
    document.body.append(h);
    h.animate([{ transform: 'translate(0,0) scale(.3)', opacity: 1 }, { transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d - 30}px) scale(1.1) rotate(${(Math.random() - .5) * 90}deg)`, opacity: 0 }], { duration: 900 + Math.random() * 400, easing: 'cubic-bezier(.2,.8,.3,1)' }).onfinish = () => h.remove();
  }
}
addEventListener('pointerdown', e => { if (!mq.matches) burst(e.clientX, e.clientY); }, { passive: true });
