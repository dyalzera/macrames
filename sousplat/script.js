(function(){
'use strict';

/* ═══════════════════════════════════════════════════════════════
   DADOS DO CURSO — EDITE AQUI PARA ADICIONAR MODULOS E AULAS

   TIPOS DE VIDEO SUPORTADOS:
   YouTube embed: 'https://www.youtube.com/embed/SEU_CODIGO'
   YouTube direto: 'yt:SEU_VIDEO_ID'  (embed automático dentro da plataforma)
   Vimeo:          'https://player.vimeo.com/video/SEU_CODIGO'
   Arquivo MP4:    'https://seusite.com/videos/aula1.mp4'
   Sem video:      ''  (mostra aviso para a aluna)
═══════════════════════════════════════════════════════════════ */

var MODULOS = [
  { nome: 'Sousplat em crochê',    thumb: 'https://opsofzntidohsxbyqmbm.supabase.co/storage/v1/object/public/app-images/heroes/c13e1691-31dd-4f9d-872c-7d768df677e3.png' },
  { nome: 'Trilhos de mesa',       thumb: '../images/modulo2.png' },
  { nome: 'Guardanapos de luxo',   thumb: '../images/modulo3.png' }
];

var AULAS = [
  // ---- Módulo 1 — Sousplat em crochê ----
  { modulo: 0, titulo: 'Centro de Mesa Tulipas',          dur: '', video: 'https://player.vimeo.com/video/1173144190' },
  { modulo: 0, titulo: 'Sousplat Americano Retangular',   dur: '', video: 'https://player.vimeo.com/video/1173143862' },
  { modulo: 0, titulo: 'Sousplat Canoa',                  dur: '', video: 'https://player.vimeo.com/video/1173143675' },
  { modulo: 0, titulo: 'Sousplat Americano Luxo',         dur: '', video: 'https://player.vimeo.com/video/1173144316' },
  { modulo: 0, titulo: 'Trilho de Mesa PREMIUM',          dur: '', video: 'https://player.vimeo.com/video/1173144015' },
  { modulo: 0, titulo: 'Sousplat Americano Básico',       dur: '', video: 'https://player.vimeo.com/video/1173144510' },
  { modulo: 0, titulo: 'Sousplat Tulipas',                dur: '', video: 'https://player.vimeo.com/video/1173144700' },
  { modulo: 0, titulo: 'Sousplat Folhagem',               dur: '', video: 'yt:YzGNAfMyEhQ' },
  { modulo: 0, titulo: 'Sousplat Borboleta',              dur: '', video: 'yt:Al3afD4mF6I' },
  { modulo: 0, titulo: 'Sousplat Tulipas Econômico',      dur: '', video: 'yt:B9lrvuXlwLc' },
  { modulo: 0, titulo: 'Sousplat TULIPA Econômico 2',     dur: '', video: 'yt:qoH0fAc6fsE' },
  { modulo: 0, titulo: 'Sousplat Ágape',                  dur: '', video: 'yt:Cbh1dM_rdSo' },
  { modulo: 0, titulo: 'Sousplat Clássico de Crochê',     dur: '', video: 'yt:PeoJywAji-E' },
  { modulo: 0, titulo: 'Sousplat de Crochê Lovely',       dur: '', video: 'yt:_-bkazJ6jro' },
  { modulo: 0, titulo: 'Crochê Folha Supra Corações',     dur: '', video: 'yt:bzuAnOOrImY' },
  { modulo: 0, titulo: 'Sousplat de Crochê Luxo Fácil',   dur: '', video: 'yt:1ak-u8SxuTY' },
  { modulo: 0, titulo: 'Sousplat em Crochê Fácil Rápido', dur: '', video: 'yt:EPx6m0l1yYQ' },
  { modulo: 0, titulo: 'Sousplat de Corações',            dur: '', video: 'yt:Njnpg0GNZ8w' },
  { modulo: 0, titulo: 'Sousplat Magia Solar',            dur: '', video: 'yt:3faCMkzfs7o' },
  { modulo: 0, titulo: 'Mandala do Amor',                 dur: '', video: 'yt:oePQ2Eq3IL0' },
  { modulo: 0, titulo: 'Sousplat Simples de Crochê',               dur: '', video: 'yt:7LHOQHesIFk' },
  { modulo: 0, titulo: 'Sousplat com Glamour',                     dur: '', video: 'yt:lF1C1bRw_8k' },
  { modulo: 0, titulo: 'Sousplat Coleção Florescer',               dur: '', video: 'yt:nTrO_wQgKWQ' },
  { modulo: 0, titulo: 'Sousplat Sonho Real',                      dur: '', video: 'yt:pUDHdYwZoHY' },
  { modulo: 0, titulo: 'Sousplat Tulipas Imperial',                dur: '', video: 'yt:2A7ZlOxI0Gk' },
  { modulo: 0, titulo: 'Sousplat de Crochê Tulipa',                dur: '', video: 'yt:2OPVMeItRKg' },
  { modulo: 0, titulo: 'Sousplat Turco Luxo',                      dur: '', video: 'yt:iunqhZkafpg' },
  { modulo: 0, titulo: 'Sousplat Lovely Luxo',                     dur: '', video: 'yt:Dk7vFl8z7iw' },
  { modulo: 0, titulo: 'Sousplat D\'Luxo',                         dur: '', video: 'yt:R8HEQFdOdNs' },
  { modulo: 0, titulo: 'Sousplat Brilho das Estrelas',             dur: '', video: 'yt:In5azw1q5Ro' },
  { modulo: 0, titulo: 'Sousplat Pureza',                          dur: '', video: 'yt:-eqczmzYtCI' },
  { modulo: 0, titulo: 'Sousplat de Crochê Conchas',               dur: '', video: 'yt:PzclUV3rn74' },
  { modulo: 0, titulo: 'Sousplat Turco Luxo Passo a Passo',        dur: '', video: 'yt:gv34Q5TT4io' },
  { modulo: 0, titulo: 'Sousplat Crochê Fácil e Lindo',            dur: '', video: 'yt:1TfJBIohRNE' },
  { modulo: 0, titulo: 'Sousplat Queridinho do Momento',           dur: '', video: 'yt:zMU0NDGEZrE' },
  { modulo: 0, titulo: 'Centro de Mesa Pavão',                     dur: '', video: 'yt:IhM9rsWdEtY' },
  { modulo: 0, titulo: 'Supla Fácil e Lindo',                      dur: '', video: 'yt:jsb4StKnZmY' },
  { modulo: 0, titulo: 'Sousplat Mais Fácil Que Existe',           dur: '', video: 'yt:Zs1RptkTcbA' },
  { modulo: 0, titulo: 'Sousplat Dual',                            dur: '', video: 'yt:b6Ajvy4yVrs' },
  { modulo: 0, titulo: 'Sousplat Fácil, Rápido e Econômico',       dur: '', video: 'yt:0tzjd4Rp5xs' },
  { modulo: 0, titulo: 'Sousplat Especial de Natal',               dur: '', video: 'yt:Ao_4MeTQBvg' },
  { modulo: 0, titulo: 'Crochê Multiuso',                          dur: '', video: 'yt:8A0H8FXom1U' },
  { modulo: 0, titulo: 'Square de Fuxico de Crochê',               dur: '', video: 'yt:mDkLj8GbOgQ' },
  { modulo: 0, titulo: 'Sousplat/Centrinho Estrelinha',            dur: '', video: 'yt:K3N66W6f-yQ' },
  { modulo: 0, titulo: 'Porta Copo Estrelinha',                    dur: '', video: 'yt:yvFY33qK1Wc' },
  { modulo: 0, titulo: 'Sousplat Fácil',                           dur: '', video: 'yt:b1APTNtIwBo' },
  { modulo: 0, titulo: 'Sousplat Fácil e Charmoso',                dur: '', video: 'yt:1fV7u_jP_vE' },
  { modulo: 0, titulo: 'Jogo Americano de Crochê Fácil',           dur: '', video: 'yt:ZY049emHLFE' },
  { modulo: 0, titulo: 'Porta Copos Lindo e Fácil',                dur: '', video: 'yt:Dz3ybiqHKTw' },
  { modulo: 0, titulo: 'Sousplat Charme na Mesa',                  dur: '', video: 'yt:9JqYD6eIjJM' },
  { modulo: 0, titulo: 'Crochê Fácil para Móveis',                 dur: '', video: 'yt:g5e31CThGFs' },
  { modulo: 0, titulo: 'Sousplat ou Toalhinha de Crochê',          dur: '', video: 'yt:GpXoW8X5OOQ' },
  { modulo: 0, titulo: 'Crochê Lindo na Cor Azul',                 dur: '', video: 'yt:ZexRovcrduQ' },

  // ---- Módulo 2 — Trilhos de mesa ----
  { modulo: 1, titulo: 'Trilho de Mesa Flor de Crochê',          dur: '', video: 'yt:WESSABSZFKY' },
  { modulo: 1, titulo: 'Trilho de Mesa Elegância',               dur: '', video: 'yt:ouuktE7w2d0' },
  { modulo: 1, titulo: 'Trilho de Mesa em Crochê Sonho Real',    dur: '', video: 'yt:m8GGyzJ_Gjw' },
  { modulo: 1, titulo: 'Trilho de Mesa de Crochê Passo a Passo', dur: '', video: 'yt:kE-jUv5I2lc' },
  { modulo: 1, titulo: 'Trilho de Mesa Ipanema',                 dur: '', video: 'yt:RKDW90d7nBY' },
  { modulo: 1, titulo: 'Trilho de Mesa em Crochê Triunfo',       dur: '', video: 'yt:se_aVKivxFc' },
  { modulo: 1, titulo: 'Trilho de Mesa Primavera',               dur: '', video: 'yt:DKIh9pWnSis' },
  { modulo: 1, titulo: 'Trilho de Mesa em Crochê Estilo Turco',  dur: '', video: 'yt:ik1-1ThZmRk' },
  { modulo: 1, titulo: 'Trilho de Mesa em Crochê Luna',          dur: '', video: 'yt:zsXITrwNU30' },

  // ---- Módulo 3 — Guardanapos de luxo ----
  { modulo: 2, titulo: 'Guardanapo com Canto Mitrado Super Fácil',       dur: '', video: 'yt:oTfQqtPo8Aw' },
  { modulo: 2, titulo: 'Guardanapo de Canto Mitrado com Acabamento',     dur: '', video: 'yt:slv5GmUkZ-8' },
  { modulo: 2, titulo: '5 Dobraduras Elegantes de Guardanapos',          dur: '', video: 'yt:_Rt3R-3kv3E' },
  { modulo: 2, titulo: 'Como Fazer Guardanapo Perfeito',                 dur: '', video: 'yt:Domb7vD_Yzs' },
  { modulo: 2, titulo: 'Porta Guardanapo Luxo',                          dur: '', video: 'yt:aTwbNVMiZs4' },
  { modulo: 2, titulo: 'Dobradura de Guardanapo Elegante',               dur: '', video: 'yt:dknCRDxK8NY' },
  { modulo: 2, titulo: 'Como Dobrar um Guardanapo de Poinsétia',         dur: '', video: 'yt:ClI4n5WxKTs' },
  { modulo: 2, titulo: 'Flor de Lótus e Rosa com Guardanapo de Pano',   dur: '', video: 'yt:IRA9_z0lTLI' },
  { modulo: 2, titulo: '5 Ideias de Dobras de Guardanapos para o Natal', dur: '', video: 'yt:GmTNaDxICgI' },
  { modulo: 2, titulo: 'Aprenda a Dobra Leque para Guardanapos',         dur: '', video: 'yt:dS4vHe_8KEM' }
];

/* ═══════════════════════════════════════════════════════════════
   ESTADO — progresso salvo no navegador da aluna
═══════════════════════════════════════════════════════════════ */
var STORAGE_KEY = 'macrames_progresso';
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
