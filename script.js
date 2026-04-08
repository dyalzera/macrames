(function(){
'use strict';

/* 
  LISTA DE AULAS COM VÍDEOS
  - Coloque APENAS os links de incorporação (embed) dos seus vídeos.
  - Para YouTube: https://www.youtube.com/embed/CODIGO_AQUI
  - Para Vimeo: https://player.vimeo.com/video/CODIGO_AQUI
*/
var lessons=[
  {mod:'Módulo 01',title:'Boas-vindas ao curso',desc:'Uma introdução direta da professora.',dur:'8min', videoUrl:'https://www.youtube.com/embed/tgbNymZ7vqY'},
  {mod:'Módulo 01',title:'Materiais necessários',desc:'O que comprar para começar sem gastar muito.',dur:'12min', videoUrl:'https://www.youtube.com/embed/tgbNymZ7vqY'},
  {mod:'Módulo 01',title:'Nó básico (Square Knot)',desc:'O nó fundamental do macramê.',dur:'15min', videoUrl:'https://player.vimeo.com/video/76979871'},
  {mod:'Módulo 01',title:'Nó espiral',desc:'Torções elegantes e versáteis.',dur:'10min', videoUrl:''},
  {mod:'Módulo 01',title:'Combinações de nós',desc:'Padrões surpreendentes.',dur:'18min', videoUrl:''},
  {mod:'Módulo 02',title:'Porta-copos',desc:'Primeira peça completa.',dur:'20min', videoUrl:''},
  {mod:'Módulo 02',title:'Sousplat básico',desc:'Peça sofisticada de alto valor.',dur:'22min', videoUrl:''},
  {mod:'Módulo 02',title:'Mini quadro',desc:'Decoração que encanta.',dur:'25min', videoUrl:''},
  {mod:'Módulo 02',title:'Porta-vasos simples',desc:'Clássico do macramê.',dur:'18min', videoUrl:''},
  {mod:'Módulo 02',title:'Chaveiro decorativo',desc:'Rápido e vendável.',dur:'12min', videoUrl:''},
  {mod:'Módulo 02',title:'Finalização e acabamento',desc:'Acabamento profissional.',dur:'10min', videoUrl:''}
];
var total=40,cur=0,done=new Set([0,1]);


var vPlaceholder = document.getElementById('vPlaceholder');
var vPlayBtn = document.getElementById('vPlayBtn');
var vScreen = document.querySelector('.vp-screen');

// Quando clicar no play do placeholder, injeta o iframe do Youtube/Vimeo
if(vPlayBtn) {
  vPlayBtn.addEventListener('click', function() {
    var url = lessons[cur].videoUrl;
    
    // Se você não tiver cadastrado a url do vídeo dessa aula, ele emite um aviso
    if(!url) {
      alert('O link do vídeo desta aula ainda será adicionado pela professora.');
      return;
    }

    // Auto-play (tenta adicionar tag autoplay na url se já não tiver)
    var char = url.indexOf('?') > -1 ? '&' : '?';
    var autoplayUrl = url + char + 'autoplay=1';

    // Cria o iFrame
    var iframe = document.createElement('iframe');
    iframe.id = 'vEmbed';
    iframe.src = autoplayUrl;
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    
    // Esconde o placeholder e adiciona o iframe
    vPlaceholder.style.display = 'none';
    vScreen.appendChild(iframe);
  });
}


// Lesson selection
document.querySelectorAll('.les:not(.locked)').forEach(function(el){
  el.addEventListener('click',function(){
    var i=parseInt(el.getAttribute('data-idx'));
    if(!isNaN(i))sel(i);
  });
});

function sel(i){
  if(i<0||i>=lessons.length)return;
  cur=i;var l=lessons[i];
  
  // Atualiza textos
  document.getElementById('vLbl').textContent=l.mod+' · Aula '+(i+1<10?'0':'')+(i+1);
  document.getElementById('vTtl').textContent=l.title;
  document.getElementById('lesCtr').textContent=(i+1)+' / '+total;
  
  // Marca ativa no menu
  document.querySelectorAll('.les.active').forEach(function(a){a.classList.remove('active')});
  var t=document.querySelector('.les[data-idx="'+i+'"]');
  if(t)t.classList.add('active');
  
  // Reseta estado do botão concluir
  updDone();
  
  // Reseta a tela do vídeo (Tira o iframe antigo e volta o "Capa bonita com Play")
  var oldIframe = document.getElementById('vEmbed');
  if(oldIframe) { oldIframe.remove(); }
  vPlaceholder.style.display = 'flex';

  // Rola até o player para mobile
  var vp=document.getElementById('playerArea');
  if(vp && window.innerWidth <= 768) {
     var offset = 64; 
     var bodyRect = document.body.getBoundingClientRect().top;
     var elRect = vp.getBoundingClientRect().top;
     var elementPosition = elRect - bodyRect;
     var offsetPosition = elementPosition - offset;
     window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
     });
  }
}

// Complete
var btnDone=document.getElementById('btnDone');
btnDone.addEventListener('click',function(){
  done.has(cur)?done.delete(cur):done.add(cur);
  updDone();updChecks();updProg();
});

function updDone(){
  if(done.has(cur)){
    btnDone.classList.add('done-state');
    btnDone.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Desmarcar concluída';
  }else{
    btnDone.classList.remove('done-state');
    btnDone.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> Marcar concluída';
  }
}
function updChecks(){
  document.querySelectorAll('.les').forEach(function(el){
    var i=parseInt(el.getAttribute('data-idx')),c=el.querySelector('.les-chk');
    if(!c)return;
    if(done.has(i)){c.classList.add('done');c.innerHTML='<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';}
    else{c.classList.remove('done');c.innerHTML='';}
  });
}
function updProg(){
  var p=Math.round((done.size/total)*100);
  var nf=document.getElementById('navPfill'),np=document.getElementById('navPct'),lp=document.getElementById('lpCount');
  if(nf)nf.style.width=p+'%';
  if(np)np.textContent=p+'%';
  if(lp)lp.textContent=done.size+'/'+total;
}

// Nav
document.getElementById('btnPrev').addEventListener('click',function(){if(cur>0)sel(cur-1)});
document.getElementById('btnNext').addEventListener('click',function(){
  // Quando for pra proxima aula, marca a atual como concluida se nao estiver!
  if(!done.has(cur)) {
     done.add(cur);
     updChecks();updProg();
  }
  if(cur<lessons.length-1)sel(cur+1)
});

// FAQ
document.querySelectorAll('.faq').forEach(function(f){
  f.querySelector('.faq-q').addEventListener('click',function(){
    var o=f.classList.contains('open');
    document.querySelectorAll('.faq.open').forEach(function(x){x.classList.remove('open')});
    if(!o)f.classList.add('open');
  });
});

// Init
updDone();updProg();
})();
