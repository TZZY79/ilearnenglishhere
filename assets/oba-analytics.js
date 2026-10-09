/* OBA Analytics — tiny, cookie-free visitor & click tracker by Online Business Awareness.
   Hosted once at https://ilearnenglishhere.academy/assets/oba-analytics.js and loaded on every page of
   backpackerdirectory.com and ilearnenglishhere.academy (via the shared scripts).
   Collects: page views, every button/link click, shares, outbound + Udemy clicks, downloads, on-site searches,
   scroll depth, time on page, JS errors and "rage clicks". No cookies, no names, no IP addresses.
   Your own visits: open any page once with ?oba_ignore=1 on that browser/phone and you are never counted. */
(function () {
  if (window.__obaA) return; window.__obaA = 1;
  var EP = 'https://script.google.com/macros/s/AKfycbyKDp7kVVLgZ_XQ4iWl63mBRnwCUk4WX9GvMXUiSfctos9s_RuTRt3xO1hLQqgDyGBq/exec';
  if (EP.indexOf('https://script.google.com/') !== 0) return;
  var nav = navigator, ua = nav.userAgent || '', W = window, D = document, L = location;
  if (nav.webdriver || /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|preview/i.test(ua)) return;
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  var qs = new URLSearchParams(L.search);
  if (qs.get('oba_ignore') === '1') lsSet('oba_ignore', '1');
  if (qs.get('oba_ignore') === '0') lsSet('oba_ignore', '0');
  if (lsGet('oba_ignore') === '1') return;

  var today = new Date().toLocaleDateString('en-CA');
  var seen = lsGet('oba_v'), isNew = !seen, firstToday = seen !== today;
  lsSet('oba_v', today);
  var sid; try { sid = sessionStorage.getItem('oba_s'); if (!sid) { sid = Math.random().toString(36).slice(2, 12); sessionStorage.setItem('oba_s', sid); } } catch (e) { sid = Math.random().toString(36).slice(2, 12); }
  var ref = ''; try { var r = new URL(D.referrer); if (r.hostname !== L.hostname) ref = r.origin + r.pathname; } catch (e) {}
  var w = Math.min(screen.width || 0, W.innerWidth || 9999);
  var dev = /iPad|Tablet/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua)) ? 'tablet' : (/Mobi|iPhone|Android/i.test(ua) || w < 700 ? 'mobile' : 'desktop');
  var base = {
    k: 't', h: L.hostname, r: ref, us: qs.get('utm_source') || '', um: qs.get('utm_medium') || '', uc: qs.get('utm_campaign') || '',
    lg: (nav.language || '').slice(0, 12), tz: (Intl.DateTimeFormat().resolvedOptions().timeZone || ''), dv: dev,
    nt: (nav.connection && nav.connection.effectiveType) || '', sid: sid, f: 0, n: 0
  };
  var q = [], timer = null;
  function send(extra, evs) {
    var body = {}; for (var k in base) body[k] = base[k]; for (var x in extra) body[x] = extra[x]; body.ev = evs;
    var json = JSON.stringify(body);
    try { if (nav.sendBeacon && nav.sendBeacon(EP, new Blob([json], { type: 'text/plain' }))) return; } catch (e) {}
    try { fetch(EP, { method: 'POST', mode: 'no-cors', keepalive: true, body: json }); } catch (e) {}
  }
  function flush() { if (timer) { clearTimeout(timer); timer = null; } if (q.length) { send({}, q.splice(0, 40)); } }
  function push(t, l, g, v, x) {
    q.push({ t: t, p: path, l: String(l || '').slice(0, 120), g: String(g || '').slice(0, 150), v: v || 0, x: String(x || '').slice(0, 200) });
    if (!timer) timer = setTimeout(flush, 4000);
  }

  /* ---- page views (also works with the Backpacker site's smooth page swaps) ---- */
  var path = '', shown = 0, visibleMs = 0, visSince = 0, maxScroll = 0, leaveSent = false;
  function startPage() {
    path = L.pathname.replace(/index\.html$/, '') || '/';
    visibleMs = 0; visSince = D.visibilityState === 'visible' ? Date.now() : 0; maxScroll = 0; leaveSent = false;
    var first = shown === 0;
    send({ f: first && firstToday ? 1 : 0, n: first && isNew ? 1 : 0, r: first ? base.r : '', us: first ? base.us : '', uc: first ? base.uc : '' }, [{ t: 'pv', p: path, l: D.title.slice(0, 120), g: '', v: 0, x: '' }]);
    shown++;
    setTimeout(onScroll, 1500);
  }
  function leave() {
    if (leaveSent) return; leaveSent = true;
    if (visSince) { visibleMs += Date.now() - visSince; visSince = 0; }
    push('leave', String(maxScroll), '', Math.min(3600, Math.round(visibleMs / 1000)), '');
    flush();
  }
  function onRoute() {
    var p = L.pathname.replace(/index\.html$/, '') || '/';
    if (p === path) return;
    leave(); startPage();
  }
  ['pushState', 'replaceState'].forEach(function (m) {
    var orig = history[m]; if (!orig) return;
    history[m] = function () { var r = orig.apply(this, arguments); setTimeout(onRoute, 50); return r; };
  });
  W.addEventListener('popstate', function () { setTimeout(onRoute, 300); });

  /* ---- scroll depth + engaged time ---- */
  var st = 0;
  function onScroll() {
    if (st) return; st = setTimeout(function () {
      st = 0; var h = Math.max(D.documentElement.scrollHeight, D.body ? D.body.scrollHeight : 0) - W.innerHeight;
      var pct = h <= 0 ? 100 : Math.round((W.scrollY || W.pageYOffset) / h * 100);
      maxScroll = Math.max(maxScroll, Math.min(100, pct));
    }, 250);
  }
  W.addEventListener('scroll', onScroll, { passive: true });
  D.addEventListener('visibilitychange', function () {
    if (D.visibilityState === 'hidden') leave();
    else if (!visSince) visSince = Date.now();
  });
  W.addEventListener('pagehide', leave);

  /* ---- clicks: every button and link, automatically ---- */
  var SHARE = [[/wa\.me|whatsapp/i, 'whatsapp'], [/facebook\.com\/sharer|fb-messenger/i, 'facebook'], [/twitter\.com\/intent|x\.com\/intent/i, 'x'], [/t\.me\/share|telegram/i, 'telegram'],
    [/reddit\.com\/submit/i, 'reddit'], [/linkedin\.com\/(share|sharing)/i, 'linkedin'], [/zalo/i, 'zalo'], [/line\.me|social-plugins\.line/i, 'line'], [/weibo|qzone|wechat|weixin/i, 'china'],
    [/discord/i, 'discord'], [/pinterest\.com\/pin/i, 'pinterest'], [/^mailto:/i, 'email'], [/^sms:/i, 'sms']];
  var clicks = [];
  function textOf(el) {
    var t = el.getAttribute('data-track') || el.getAttribute('aria-label') || el.getAttribute('title') || (el.innerText || el.textContent || '').trim() || el.value || '';
    if (!t) { var img = el.querySelector && el.querySelector('img[alt]'); if (img) t = img.alt; }
    return t.replace(/\s+/g, ' ').trim().slice(0, 70) || el.tagName.toLowerCase();
  }
  D.addEventListener('click', function (e) {
    var tEl = e.target && e.target.closest ? e.target : null; if (!tEl) return;
    /* rage clicks: 3+ fast clicks in the same spot */
    var now = Date.now(); clicks.push([now, e.clientX, e.clientY]); clicks = clicks.filter(function (c) { return now - c[0] < 900; });
    if (clicks.length >= 3 && clicks.every(function (c) { return Math.abs(c[1] - e.clientX) < 30 && Math.abs(c[2] - e.clientY) < 30; })) {
      var ie = tEl.closest('a,button,[role=button],summary,label'); push('rage', ie ? textOf(ie) : tEl.tagName.toLowerCase() + (tEl.id ? '#' + tEl.id : '') + (typeof tEl.className === 'string' && tEl.className ? '.' + tEl.className.split(' ')[0] : '') + ' "' + (tEl.innerText || '').trim().slice(0, 30) + '"', '', clicks.length, ''); clicks = [];
    }
    var el = tEl.closest('a,button,[role=button],summary,input[type=submit],input[type=button],label,[data-track],select,[onclick]');
    if (!el) return;
    var label = textOf(el), href = el.getAttribute && el.getAttribute('href') || '', kind = 'btn', full = '';
    var sec = el.closest('[id]'); var where = sec && sec !== el ? '#' + sec.id.slice(0, 30) : '';
    if (href) {
      try { var u = new URL(el.href || href, L.href); full = u.href; kind = (u.hostname && u.hostname !== L.hostname) ? 'out' : (/^(mailto|sms|tel):/.test(u.protocol) ? 'out' : 'nav'); } catch (err) { full = href; }
      for (var i = 0; i < SHARE.length; i++) if (SHARE[i][0].test(full)) { kind = 'share:' + SHARE[i][1]; break; }
      if (el.hasAttribute('download') || /\.(pdf|docx?|pptx?|xlsx?|zip|txt|mp3)(\?|$)/i.test(full)) { push('dl', label, full, 0, kind); return; }
    } else {
      var box = el.closest('[class*=share],[id*=share]');
      if (box) { var m = /whatsapp|facebook|telegram|reddit|linkedin|twitter|\bx\b|email|copy|zalo|line|wechat|weibo|discord|viber|pinterest/i.exec(label + ' ' + (el.className || '')); if (m) kind = 'share:' + m[0].toLowerCase(); }
    }
    push('click', label, full, 0, kind + (where ? ' ' + where : ''));
    if (kind !== 'btn' && kind !== 'nav') flush();
  }, true);

  /* ---- on-site searches (e.g. the Talking Dictionary) + form sends ---- */
  D.addEventListener('submit', function (e) {
    var f = e.target; if (!f || !f.querySelector) return;
    if (f.querySelector('input[type=email]')) { push('custom', 'form sent: ' + (f.getAttribute('data-bd-type') || f.id || 'form'), '', 0, ''); return; }
    var inp = f.querySelector('input[type=search],input[type=text],input:not([type])');
    if (inp && inp.value.trim()) push('search', inp.value.trim().toLowerCase().slice(0, 60), '', 0, '');
  }, true);

  /* ---- JS errors on your pages (ignores ad-network noise) ---- */
  var errN = 0;
  W.addEventListener('error', function (e) {
    if (errN >= 3 || !e.message || e.message === 'Script error.' || (e.filename && e.filename.indexOf(L.hostname) < 0)) return;
    errN++; push('err', (e.message + '').slice(0, 90) + ' :' + (e.lineno || ''), (e.filename || '').split('/').pop(), 0, '');
  });

  /* ---- for your own lesson code: obaTrack('quiz finished', 85) ---- */
  W.obaTrack = function (name, value) { push('custom', name, '', Number(value) || 0, ''); };

  if (D.readyState === 'loading') D.addEventListener('DOMContentLoaded', startPage); else startPage();
})();
