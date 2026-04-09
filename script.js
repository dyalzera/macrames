(function(){
'use strict';

/* ═══════════════════════════════════════════════════════════════
   DADOS DO CURSO — EDITE AQUI PARA ADICIONAR MODULOS E AULAS

   TIPOS DE VIDEO SUPORTADOS:
   YouTube:     'https://www.youtube.com/embed/SEU_CODIGO'
   Vimeo:       'https://player.vimeo.com/video/SEU_CODIGO'
   Arquivo MP4: 'https://seusite.com/videos/aula1.mp4'
   Arquivo WebM:'https://seusite.com/videos/aula1.webm'
   Pinterest:   Baixe o video e hospede como MP4
   Sem video:   ''  (mostra aviso para a aluna)
═══════════════════════════════════════════════════════════════ */

var MODULOS = [
  { nome: 'Fundamentos',      thumb: 'https://opsofzntidohsxbyqmbm.supabase.co/storage/v1/object/public/app-images/heroes/c13e1691-31dd-4f9d-872c-7d768df677e3.png' },
  { nome: 'Primeiras Peças',  thumb: '' },
  { nome: 'Peças Avançadas',  thumb: '' },
  { nome: 'Precificação',     thumb: '' },
  { nome: 'Vendas Online',    thumb: '' },
  { nome: 'Instagram',        thumb: '' }
];

var AULAS = [
  // ---- Módulo 1 — Fundamentos ----
  { modulo: 0, titulo: 'Boas-vindas ao curso',       dur: '8min',  video: 'https://www.youtube.com/embed/tgbNymZ7vqY' },
  { modulo: 0, titulo: 'Materiais necessários',      dur: '12min', video: 'https://www.youtube.com/embed/tgbNymZ7vqY' },
  { modulo: 0, titulo: 'Nó básico (Square Knot)',    dur: '15min', video: 'https://player.vimeo.com/video/76979871' },
  { modulo: 0, titulo: 'Nó espiral',                 dur: '10min', video: '' },
  { modulo: 0, titulo: 'Combinações de nós',         dur: '18min', video: '' },

  // ---- Módulo 2 — Primeiras Peças ----
  { modulo: 1, titulo: 'Porta-copos',                dur: '20min', video: '' },
  { modulo: 1, titulo: 'Sousplat básico',            dur: '22min', video: '' },
  { modulo: 1, titulo: 'Mini quadro',                dur: '25min', video: '' },
  { modulo: 1, titulo: 'Porta-vasos simples',        dur: '18min', video: '' },
  { modulo: 1, titulo: 'Chaveiro decorativo',        dur: '12min', video: '' },
  { modulo: 1, titulo: 'Finalização e acabamento',   dur: '10min', video: '' },

  // ---- Módulo 3 — Peças Avançadas ----
  { modulo: 2, titulo: 'Painel de parede',           dur: '35min', video: '' },
  { modulo: 2, titulo: 'Vaso suspenso',              dur: '30min', video: '' },
  { modulo: 2, titulo: 'Cortina de macramê',         dur: '28min', video: '' }
];

/* ═══════════════════════════════════════════════════════════════
   ESTADO — progresso salvo no navegador da aluna
═══════════════════════════════════════════════════════════════ */
var STORAGE_KEY = 'macrames_progresso';
var cur = 0;
var done = carregarProgresso();

function carregarProgresso() {
  try {
    var salvo = localStorage.getItem(STORAGE_KEY);
    if (salvo) return new Set(JSON.parse(salvo));
  } catch(e) { /* ignora */ }
  return new Set();
}

function salvarProgresso() {
  try {
    var arr = [];
    done.forEach(function(v) { arr.push(v); });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
  } catch(e) { /* ignora */ }
}

/* ═══════════════════════════════════════════════════════════════
   UTILIDADES
═══════════════════════════════════════════════════════════════ */
function pad2(n) { return n < 10 ? '0' + n : '' + n; }

function tipoVideo(url) {
  if (!url) return 'nenhum';
  if (/\.(mp4|webm|mov|ogg)(\?|#|$)/i.test(url)) return 'arquivo';
  return 'iframe';
}

function moduloLivre(idx) {
  if (idx === 0) return true;
  for (var i = 0; i < AULAS.length; i++) {
    if (AULAS[i].modulo === idx - 1 && !done.has(i)) return false;
  }
  return true;
}

function aulasDoModulo(idx) {
  var result = [];
  for (var i = 0; i < AULAS.length; i++) {
    if (AULAS[i].modulo === idx) result.push(i);
  }
  return result;
}

/* ═══════════════════════════════════════════════════════════════
   SVGs REUTILIZAVEIS
═══════════════════════════════════════════════════════════════ */
var SVG_PLAY = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21"/></svg>';
var SVG_CHECK = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';
var SVG_CHECK_LG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
var SVG_LOCK = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--ink-2)" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>';

/* ═══════════════════════════════════════════════════════════════
   RENDER — CARDS DE MODULO (scroll horizontal)
═══════════════════════════════════════════════════════════════ */
function renderModulos() {
  var container = document.getElementById('modScroll');
  container.innerHTML = '';

  MODULOS.forEach(function(mod, idx) {
    var livre = moduloLivre(idx);
    var aulas = aulasDoModulo(idx);
    var totalMod = aulas.length;
    var concluidasMod = 0;
    aulas.forEach(function(ai) { if (done.has(ai)) concluidasMod++; });
    var pct = totalMod > 0 ? Math.round((concluidasMod / totalMod) * 100) : 0;

    var card = document.createElement('div');
    card.className = 'mod-card' + (livre ? '' : ' locked');
    card.setAttribute('data-mod', idx);

    var thumbHTML = '';
    if (!livre) {
      thumbHTML = '<div class="mod-lock">' + SVG_LOCK + '</div>';
    } else {
      if (mod.thumb) {
        thumbHTML += '<img src="' + mod.thumb + '" alt="Módulo ' + (idx + 1) + '" loading="lazy" />';
      }
      thumbHTML += '<div class="mod-overlay"></div>';
      if (pct === 100) thumbHTML += '<span class="mod-badge done">Concluído</span>';
      else if (pct > 0) thumbHTML += '<span class="mod-badge">Em andamento</span>';
    }

    var progHTML = '';
    if (livre && totalMod > 0) {
      progHTML =
        '<div class="mod-prog">' +
          '<div class="mod-prog-bar"><div class="mod-prog-fill" style="width:' + pct + '%"></div></div>' +
          '<span class="mod-prog-pct">' + pct + '%</span>' +
        '</div>';
    }

    card.innerHTML =
      '<div class="mod-thumb">' + thumbHTML + '</div>' +
      '<div class="mod-info">' +
        '<div class="mod-num">Módulo ' + (idx + 1) + '</div>' +
        '<div class="mod-name">' + mod.nome + '</div>' +
        '<div class="mod-meta">' + (totalMod > 0 ? SVG_PLAY + ' ' + totalMod + ' aulas' : 'Em breve') + '</div>' +
        progHTML +
      '</div>';

    if (livre && totalMod > 0) {
      (function(firstIdx) {
        card.addEventListener('click', function() { sel(firstIdx); });
      })(aulas[0]);
    }

    container.appendChild(card);
  });
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — LISTA DE AULAS (sidebar)
═══════════════════════════════════════════════════════════════ */
function renderAulas() {
  var container = document.querySelector('.les-list-wrap');
  container.innerHTML = '';
  var ultimoMod = -1;

  AULAS.forEach(function(aula, idx) {
    if (aula.modulo !== ultimoMod) {
      ultimoMod = aula.modulo;
      var div = document.createElement('div');
      div.className = 'mod-divider';
      div.textContent = 'Módulo ' + (ultimoMod + 1) + ' — ' + MODULOS[ultimoMod].nome;
      container.appendChild(div);
    }

    var livre = moduloLivre(aula.modulo);
    var concluida = done.has(idx);

    var el = document.createElement('div');
    el.className = 'les' + (idx === cur ? ' active' : '') + (!livre ? ' locked' : '');
    el.setAttribute('data-idx', idx);

    el.innerHTML =
      '<span class="les-chk' + (concluida ? ' done' : '') + '">' + (concluida ? SVG_CHECK : '') + '</span>' +
      '<span class="les-ttl">' + aula.titulo + '</span>' +
      '<span class="les-dur">' + aula.dur + '</span>';

    if (livre) {
      (function(i) {
        el.addEventListener('click', function() { sel(i); });
      })(idx);
    }

    container.appendChild(el);
  });
}

/* ═══════════════════════════════════════════════════════════════
   PLAYER DE VIDEO
═══════════════════════════════════════════════════════════════ */
var vPlaceholder = document.getElementById('vPlaceholder');
var vScreen = document.querySelector('.vp-screen');

function resetVideo() {
  var old = document.getElementById('vEmbed');
  if (old) old.remove();
  if (vPlaceholder) vPlaceholder.style.display = 'flex';
}

function playVideo() {
  var url = AULAS[cur].video;

  if (!url) {
    alert('O link do vídeo desta aula ainda será adicionado pela professora.');
    return;
  }

  vPlaceholder.style.display = 'none';
  var old = document.getElementById('vEmbed');
  if (old) old.remove();

  var tipo = tipoVideo(url);

  if (tipo === 'arquivo') {
    var video = document.createElement('video');
    video.id = 'vEmbed';
    video.src = url;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.setAttribute('controlslist', 'nodownload');
    vScreen.appendChild(video);
  } else {
    var sep = url.indexOf('?') > -1 ? '&' : '?';
    var iframe = document.createElement('iframe');
    iframe.id = 'vEmbed';
    iframe.src = url + sep + 'autoplay=1';
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    vScreen.appendChild(iframe);
  }
}

document.getElementById('vPlayBtn').addEventListener('click', playVideo);

/* ═══════════════════════════════════════════════════════════════
   SELECAO DE AULA
═══════════════════════════════════════════════════════════════ */
function sel(i) {
  if (i < 0 || i >= AULAS.length) return;
  cur = i;
  var aula = AULAS[i];

  document.getElementById('vLbl').textContent = 'Módulo ' + pad2(aula.modulo + 1) + ' · Aula ' + pad2(i + 1);
  document.getElementById('vTtl').textContent = aula.titulo;
  document.getElementById('lesCtr').textContent = (i + 1) + ' / ' + AULAS.length;

  resetVideo();
  renderAulas();
  updDone();

  if (window.innerWidth <= 768) {
    var vp = document.getElementById('playerArea');
    if (vp) {
      var bodyRect = document.body.getBoundingClientRect().top;
      var elRect = vp.getBoundingClientRect().top;
      window.scrollTo({ top: elRect - bodyRect - 64, behavior: 'smooth' });
    }
  }
}

/* ═══════════════════════════════════════════════════════════════
   BOTAO CONCLUIR + PROGRESSO
═══════════════════════════════════════════════════════════════ */
var btnDone = document.getElementById('btnDone');

btnDone.addEventListener('click', function() {
  if (done.has(cur)) { done.delete(cur); }
  else { done.add(cur); }
  salvarProgresso();
  updDone();
  renderAulas();
  renderModulos();
  updProg();
});

function updDone() {
  if (done.has(cur)) {
    btnDone.classList.add('done-state');
    btnDone.innerHTML = SVG_CHECK_LG + ' Desmarcar concluída';
  } else {
    btnDone.classList.remove('done-state');
    btnDone.innerHTML = SVG_CHECK_LG + ' Marcar concluída';
  }
}

function updProg() {
  var p = Math.round((done.size / AULAS.length) * 100);
  var nf = document.getElementById('navPfill');
  var np = document.getElementById('navPct');
  var lp = document.getElementById('lpCount');
  if (nf) nf.style.width = p + '%';
  if (np) np.textContent = p + '%';
  if (lp) lp.textContent = done.size + '/' + AULAS.length;
}

/* ═══════════════════════════════════════════════════════════════
   NAVEGACAO — ANTERIOR / PROXIMA
═══════════════════════════════════════════════════════════════ */
document.getElementById('btnPrev').addEventListener('click', function() {
  if (cur > 0) sel(cur - 1);
});

document.getElementById('btnNext').addEventListener('click', function() {
  if (!done.has(cur)) {
    done.add(cur);
    salvarProgresso();
    renderModulos();
    updProg();
  }
  if (cur < AULAS.length - 1) sel(cur + 1);
});

/* ═══════════════════════════════════════════════════════════════
   FAQ (ACCORDION)
═══════════════════════════════════════════════════════════════ */
document.querySelectorAll('.faq').forEach(function(f) {
  f.querySelector('.faq-q').addEventListener('click', function() {
    var aberto = f.classList.contains('open');
    document.querySelectorAll('.faq.open').forEach(function(x) { x.classList.remove('open'); });
    if (!aberto) f.classList.add('open');
  });
});

/* ═══════════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════════ */
renderModulos();
renderAulas();
updDone();
updProg();

})();
