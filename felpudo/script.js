(function(){
'use strict';

/* ═══════════════════════════════════════════════════════════════
   DADOS DO CURSO — EDITE AQUI PARA ADICIONAR MODULOS E AULAS

   TIPOS DE VIDEO SUPORTADOS:
   YouTube embed: 'https://www.youtube.com/embed/SEU_CODIGO'
   YouTube direto: 'yt:SEU_VIDEO_ID'  (embed automático dentro da plataforma)
   Vimeo:          'https://player.vimeo.com/video/SEU_CODIGO'
   Arquivo MP4:    'https://seusite.com/videos/aula1.mp4'
   Sem video: 'https://player.vimeo.com/video/1173034525
2. Vaso de Lírio do Vale'  (mostra aviso para a aluna)
═══════════════════════════════════════════════════════════════ */

var MODULOS = [
  { nome: 'Vídeo Aulas - Fio Felpudo', thumb: '../images/mod1.png' },
  { nome: 'Peças Variadas',        thumb: '../images/mod2.png' },
  { nome: 'Animais de Arte Felpuda', thumb: '../images/mod3.png' },
  { nome: 'Chaveiros Felpudos',    thumb: '../images/mod4.png' }
];

var AULAS = [
  { modulo: 0, titulo: 'Flor de Lótus Iluminada', dur: '', video: 'https://player.vimeo.com/video/1173034525' },
  { modulo: 0, titulo: 'Vaso de Lírio do Vale', dur: '', video: 'https://player.vimeo.com/video/1173034704' },
  { modulo: 0, titulo: 'Luminária de Flor', dur: '', video: 'https://player.vimeo.com/video/1173034893' },
  { modulo: 0, titulo: 'Flor de Lírio', dur: '', video: 'https://player.vimeo.com/video/1173035095' },
  { modulo: 0, titulo: 'Lavanda', dur: '', video: 'https://player.vimeo.com/video/1173030662' },
  { modulo: 0, titulo: 'Vaso Flor Tulipa', dur: '', video: 'https://player.vimeo.com/video/1173034211' },
  { modulo: 0, titulo: 'Vaso Flor de Girassol', dur: '', video: 'https://player.vimeo.com/video/1173034357' },
  { modulo: 0, titulo: 'Orquídea', dur: '', video: 'https://player.vimeo.com/video/1173031605' },
  { modulo: 0, titulo: 'Vasos de Tulipas', dur: '', video: 'https://player.vimeo.com/video/1173032498' },
  { modulo: 0, titulo: 'Vaso de Cravo', dur: '', video: 'https://player.vimeo.com/video/1173032330' },
  { modulo: 0, titulo: 'Vasinho de Tulipa + Abelinha', dur: '', video: 'https://player.vimeo.com/video/1173032162' },
  { modulo: 0, titulo: 'Vasinho de Tulipa Fofa', dur: '', video: 'https://player.vimeo.com/video/1173032078' },
  { modulo: 0, titulo: 'Vários Modelos', dur: '', video: 'https://player.vimeo.com/video/1173031964' },
  { modulo: 0, titulo: 'Tulipa com 5 Asas', dur: '', video: 'https://player.vimeo.com/video/1173031911' },
  { modulo: 0, titulo: 'Suculentas', dur: '', video: 'https://player.vimeo.com/video/1173031748' },
  { modulo: 0, titulo: 'Ramos de Flores', dur: '', video: 'https://player.vimeo.com/video/1173031694' },
  { modulo: 0, titulo: 'Orquídea v2', dur: '', video: 'https://player.vimeo.com/video/1173035236' },
  { modulo: 0, titulo: 'Narcissus com Caules', dur: '', video: 'https://player.vimeo.com/video/1173031511' },
  { modulo: 0, titulo: 'Mini Vaso de Hortênsia', dur: '', video: 'https://player.vimeo.com/video/1173031363' },
  { modulo: 0, titulo: 'Mini Cesta de Lótus', dur: '', video: 'https://player.vimeo.com/video/1173031287' },
  { modulo: 0, titulo: 'Mini Buquê de Flores', dur: '', video: 'https://player.vimeo.com/video/1173031245' },
  { modulo: 0, titulo: 'Margarida Azul', dur: '', video: 'https://player.vimeo.com/video/1173031156' },
  { modulo: 0, titulo: 'Lírios Amarelos', dur: '', video: 'https://player.vimeo.com/video/1173031110' },
  { modulo: 0, titulo: 'Lírio com Hastes de Chenille', dur: '', video: 'https://player.vimeo.com/video/1173030979' },
  { modulo: 0, titulo: 'Limão Decorativo', dur: '', video: 'https://player.vimeo.com/video/1173030725' },
  { modulo: 0, titulo: 'Lavanda v2', dur: '', video: 'https://player.vimeo.com/video/1173030055' },
  { modulo: 0, titulo: 'Jarrinho Girassol', dur: '', video: 'https://player.vimeo.com/video/1173030605' },
  { modulo: 0, titulo: 'Jarrinho Clorofito', dur: '', video: 'https://player.vimeo.com/video/1173030537' },
  { modulo: 0, titulo: 'Girassóis', dur: '', video: 'https://player.vimeo.com/video/1173030366' },
  { modulo: 0, titulo: 'Girassol Mini', dur: '', video: 'https://player.vimeo.com/video/1173030319' },
  { modulo: 0, titulo: 'Florzinha Rosa', dur: '', video: 'https://player.vimeo.com/video/1173030238' },
  { modulo: 0, titulo: 'Flores Amarelas', dur: '', video: 'https://player.vimeo.com/video/1173029960' },
  { modulo: 0, titulo: 'Flores Variadas', dur: '', video: 'https://player.vimeo.com/video/1173030147' },
  { modulo: 0, titulo: 'Flor Azul Celeste', dur: '', video: 'https://player.vimeo.com/video/1173029722' },
  { modulo: 0, titulo: 'Flor Azul Royal', dur: '', video: 'https://player.vimeo.com/video/1173029876' },
  { modulo: 0, titulo: 'Flor Clássica', dur: '', video: 'https://player.vimeo.com/video/1173029295' },
  { modulo: 0, titulo: 'Enfeites de Natal', dur: '', video: 'https://player.vimeo.com/video/1173029569' },
  { modulo: 0, titulo: 'Enfeite de Natal Especial', dur: '', video: 'https://player.vimeo.com/video/1173029509' },
  { modulo: 0, titulo: 'Decoração de Natal', dur: '', video: 'https://player.vimeo.com/video/1173029421' },
  { modulo: 0, titulo: 'Aula Bônus – Wall Hanging Flower', dur: '', video: 'https://player.vimeo.com/video/1173029178' },
  { modulo: 0, titulo: 'Aula Bônus – Easy Flower Craft', dur: '', video: 'https://player.vimeo.com/video/1173029082' },
  { modulo: 0, titulo: 'Aula Bônus – How to Make Flower', dur: '', video: 'https://player.vimeo.com/video/1173028815' },
  { modulo: 0, titulo: 'Aula Bônus – Easy Flower', dur: '', video: 'https://player.vimeo.com/video/1173029120' },
  { modulo: 0, titulo: 'Aula Bônus – Flower DIY', dur: '', video: 'https://player.vimeo.com/video/1173029378' },
  { modulo: 0, titulo: 'Aula Bônus – Técnica Especial de Flores', dur: '', video: 'https://player.vimeo.com/video/1173030459' },
  { modulo: 1, titulo: 'DIY Pipe Cleaner Craft', dur: '', video: 'https://player.vimeo.com/video/1173028227' },
  { modulo: 1, titulo: 'Peça Criativa 1', dur: '', video: 'https://player.vimeo.com/video/1173028477' },
  { modulo: 1, titulo: 'Peça Criativa 2', dur: '', video: 'https://player.vimeo.com/video/1173028531' },
  { modulo: 1, titulo: 'Peça Criativa 3', dur: '', video: 'https://player.vimeo.com/video/1173028655' },
  { modulo: 1, titulo: 'Peça Criativa 4', dur: '', video: 'https://player.vimeo.com/video/1173028704' },
  { modulo: 1, titulo: 'Peça Criativa 5', dur: '', video: 'https://player.vimeo.com/video/1173028765' },
  { modulo: 1, titulo: 'Peça Criativa 6', dur: '', video: 'https://player.vimeo.com/video/1173033257' },
  { modulo: 1, titulo: 'Peça Criativa 7', dur: '', video: 'https://player.vimeo.com/video/1173033081' },
  { modulo: 1, titulo: 'Peça Criativa 8', dur: '', video: 'https://player.vimeo.com/video/1173033345' },
  { modulo: 1, titulo: 'Peça Criativa 9', dur: '', video: 'https://player.vimeo.com/video/1173032654' },
  { modulo: 1, titulo: 'Peça Criativa 10', dur: '', video: 'https://player.vimeo.com/video/1173032595' },
  { modulo: 1, titulo: 'Cesta de Orquídea', dur: '', video: 'https://player.vimeo.com/video/1173028037' },
  { modulo: 1, titulo: 'Cesta de Morango', dur: '', video: 'https://player.vimeo.com/video/1173027675' },
  { modulo: 1, titulo: 'Cesta de Lótus e Libélula', dur: '', video: 'https://player.vimeo.com/video/1173027257' },
  { modulo: 1, titulo: 'Cesta de Flores', dur: '', video: 'https://player.vimeo.com/video/1173027151' },
  { modulo: 1, titulo: 'Cesta de Flores Especial', dur: '', video: 'https://player.vimeo.com/video/1173027044' },
  { modulo: 1, titulo: 'Buquês de Flores', dur: '', video: 'https://player.vimeo.com/video/1173030147' },
  { modulo: 1, titulo: 'Buquê de Girassóis', dur: '', video: 'https://player.vimeo.com/video/1173030605' },
  { modulo: 1, titulo: 'Flor de Narciso', dur: '', video: 'https://player.vimeo.com/video/1173029806' },
  { modulo: 1, titulo: 'Peça Especial Exclusiva', dur: '', video: 'https://player.vimeo.com/video/1173028594' },
  { modulo: 2, titulo: 'Tartaruga Estrela', dur: '', video: 'https://player.vimeo.com/video/1173033913' },
  { modulo: 2, titulo: 'Calopsita', dur: '', video: 'https://player.vimeo.com/video/1173034005' },
  { modulo: 2, titulo: 'Coelho', dur: '', video: 'https://player.vimeo.com/video/1173033809' },
  { modulo: 2, titulo: 'Esquilo', dur: '', video: 'https://player.vimeo.com/video/1173032952' },
  { modulo: 2, titulo: 'Esquilo 2', dur: '', video: 'https://player.vimeo.com/video/1173032895' },
  { modulo: 2, titulo: 'Borboleta', dur: '', video: 'https://player.vimeo.com/video/1173032867' },
  { modulo: 2, titulo: 'Dinossauro', dur: '', video: 'https://player.vimeo.com/video/1173032811' },
  { modulo: 2, titulo: 'Elefante', dur: '', video: 'https://player.vimeo.com/video/1173032756' },
  { modulo: 2, titulo: 'Gatinho', dur: '', video: 'https://player.vimeo.com/video/1173032707' },
  { modulo: 2, titulo: 'Passarinho', dur: '', video: 'https://player.vimeo.com/video/1173032560' },
  { modulo: 2, titulo: 'Cachorrinho', dur: '', video: 'https://player.vimeo.com/video/1173032529' },
  { modulo: 3, titulo: 'Chaveiro Gato', dur: '', video: 'https://drive.google.com/file/d/1B7eGk3N6Pcf0BcjJLJZNpNydsy8eGIYE/preview' },
  { modulo: 3, titulo: 'Chaveiro de Frutas', dur: '', video: 'https://drive.google.com/file/d/1IYInGk1KOHpYo_QVb4UcONQaeOtw1ZNX/preview' },
  { modulo: 3, titulo: 'Chaveiro de Coração', dur: '', video: 'https://drive.google.com/file/d/1qVJpyAMsW1306DOsLojVL3G33LTcDWZ1/preview' },
  { modulo: 3, titulo: 'Chaveiro Abelhinha', dur: '', video: 'https://drive.google.com/file/d/1sD4QsuwZim8YfnDg5BZZ0Q2vNQYTlp9q/preview' },
  { modulo: 3, titulo: 'Chaveiro Cereja', dur: '', video: 'https://drive.google.com/file/d/1LAWBIZO8cUyG3CBgwn6und0nokpuoAPA/preview' }
];

/* ═══════════════════════════════════════════════════════════════
   ESTADO — progresso salvo no navegador da aluna
═══════════════════════════════════════════════════════════════ */
var STORAGE_KEY = 'felpudos_progresso';
var cur = 0;
var openMods = new Set([0]); // módulos com lista aberta na sidebar
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
  if (/^yt:/i.test(url)) return 'youtube-embed';
  if (/\.(mp4|webm|mov|ogg)(\?|#|$)/i.test(url)) return 'arquivo';
  return 'iframe';
}

function moduloLivre(idx) {
  return true; // todos os módulos liberados
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
      (function(firstIdx, modI) {
        card.addEventListener('click', function() {
          openMods.clear();       // fecha todos os módulos na sidebar
          openMods.add(modI);     // abre só o módulo clicado
          sel(firstIdx);          // carrega 1ª aula + mostra player
        });
      })(aulas[0], idx);
    }

    container.appendChild(card);
  });
}

/* ═══════════════════════════════════════════════════════════════
   RENDER — LISTA DE AULAS (sidebar)
═══════════════════════════════════════════════════════════════ */
function showPlayer() {
  var pa = document.getElementById('playerArea');
  if (!pa) return;
  if (pa.style.display === 'none' || pa.style.display === '') {
    pa.style.display = '';
    pa.style.opacity = '0';
    pa.style.transition = 'opacity .4s ease';
    setTimeout(function() { pa.style.opacity = '1'; }, 10);
  }
}

function hidePlayer() {
  var pa = document.getElementById('playerArea');
  if (!pa) return;
  pa.style.transition = 'opacity .3s ease';
  pa.style.opacity = '0';
  setTimeout(function() { pa.style.display = 'none'; }, 300);
}

function renderAulas() {
  // garante que o módulo da aula atual está sempre aberto
  openMods.add(AULAS[cur].modulo);

  var container = document.querySelector('.les-list-wrap');
  container.innerHTML = '';
  var ultimoMod = -1;
  var currentGroup = null;

  AULAS.forEach(function(aula, idx) {
    if (aula.modulo !== ultimoMod) {
      ultimoMod = aula.modulo;
      var modIdx = ultimoMod;
      var isOpen = openMods.has(modIdx);

      // --- cabeçalho do módulo (clicável) ---
      var div = document.createElement('div');
      div.className = 'mod-divider mod-divider-toggle';

      var icon = document.createElement('span');
      icon.className = 'mod-toggle-icon';
      icon.textContent = isOpen ? '▲' : '▼';

      div.appendChild(document.createTextNode('Módulo ' + (modIdx + 1) + ' — ' + MODULOS[modIdx].nome));
      div.appendChild(icon);

      // --- grupo colapsável ---
      currentGroup = document.createElement('div');
      currentGroup.className = 'mod-group' + (isOpen ? ' open' : '');

      (function(m, grp, ic) {
        div.addEventListener('click', function() {
          if (openMods.has(m)) {
            // Fechar
            openMods.delete(m);
            grp.classList.remove('open');
            ic.textContent = '▼';
            hidePlayer();
          } else {
            // Abrir: seleciona 1ª aula do módulo e mostra player
            openMods.add(m);
            grp.classList.add('open');
            ic.textContent = '▲';
            var first = AULAS.findIndex(function(a) { return a.modulo === m; });
            if (first >= 0) sel(first);
          }
        });
      })(modIdx, currentGroup, icon);

      container.appendChild(div);
      container.appendChild(currentGroup);
    }

    var concluida = done.has(idx);

    var el = document.createElement('div');
    el.className = 'les' + (idx === cur ? ' active' : '');
    el.setAttribute('data-idx', idx);

    el.innerHTML =
      '<span class="les-chk' + (concluida ? ' done' : '') + '">' + (concluida ? SVG_CHECK : '') + '</span>' +
      '<span class="les-ttl">' + aula.titulo + '</span>' +
      '<span class="les-dur">' + aula.dur + '</span>';

    (function(i) {
      el.addEventListener('click', function() { sel(i); });
    })(idx);

    currentGroup.appendChild(el);
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

  if (tipo === 'youtube-embed') {
    // YouTube via embed direto dentro da plataforma
    var videoId = url.replace(/^yt:/i, '');
    var embedUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0';
    var iframe = document.createElement('iframe');
    iframe.id = 'vEmbed';
    iframe.src = embedUrl;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    vScreen.appendChild(iframe);
  } else if (tipo === 'arquivo') {
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

  // Revela o player na primeira vez que a pessoa clicar em uma aula
  showPlayer();

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



/* ═══════════════════════════════════════════════════════════════
   PIX COPY LOGIC
═══════════════════════════════════════════════════════════════ */
const pixKeyObj = document.getElementById('pixKey');
if (pixKeyObj) {
  pixKeyObj.classList.add('copyable');
  pixKeyObj.innerHTML += ' <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
  
  pixKeyObj.addEventListener('click', function() {
    const textNodeMatches = Array.from(this.childNodes)
      .filter(node => node.nodeType === 3) // Text nodes
      .map(node => node.textContent.trim())
      .join('');
    // Safely copy the text
    const keyToCopy = "60.565.597/0001-43"; 
    
    // Copy securely fallback
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(keyToCopy).then(() => {
        showToast('Chave Pix copiada com sucesso!');
      }).catch(err => {
        // Fallback or ignore
        fallbackCopy(keyToCopy);
      });
    } else {
      fallbackCopy(keyToCopy);
    }
  });
}

function fallbackCopy(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    if(successful) showToast('Chave Pix copiada com sucesso!');
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}

function showToast(msg) {
  let toast = document.getElementById('pixToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'pixToast';
    toast.className = 'toast-notice';
    toast.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> ' + msg;
    document.body.appendChild(toast);
  } else {
    toast.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> ' + msg;
  }
  
  // Force reflow
  void toast.offsetWidth;
  toast.classList.add('show');
  
  if (toast.to) clearTimeout(toast.to);
  toast.to = setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

})();
