# Macramês de Sucesso — Área de Membros

Área de membros para o curso de macramê. Site estático (HTML + CSS + JS) que roda direto no navegador, sem precisar de servidor.

## Estrutura dos Arquivos

```
index.html   → Página principal (layout, seções, estrutura)
script.js    → Lógica + dados do curso (módulos, aulas, vídeos)
style.css    → Visual e estilo de toda a página
images/      → Pasta para imagens locais (logo, etc.)
```

## Como Abrir o Site

Dê dois cliques no arquivo `index.html` — ele abre direto no navegador.

---

## Como Atualizar o Conteúdo

Todas as edições de conteúdo são feitas no arquivo **`script.js`**, nos arrays do topo.

### Adicionar uma aula

Encontre o array `AULAS` e adicione uma nova linha dentro do módulo correspondente:

```js
var AULAS = [
  // ---- Módulo 1 — Fundamentos ----
  { modulo: 0, titulo: 'Nome da aula', dur: '12min', video: 'LINK_AQUI' },
  ...
];
```

| Campo    | O que colocar                                                            |
| -------- | ------------------------------------------------------------------------ |
| `modulo` | Número do módulo (começa em 0). Módulo 1 = `0`, Módulo 2 = `1`, etc.     |
| `titulo` | Nome da aula que aparece na tela                                         |
| `dur`    | Duração que aparece ao lado da aula                                      |
| `video`  | Link do vídeo (veja formatos abaixo). Deixe `''` se ainda não tem o link |

### Formatos de vídeo aceitos

| Plataforma | Formato do link                                    |
| ---------- | -------------------------------------------------- |
| YouTube    | `'https://www.youtube.com/embed/CODIGO_DO_VIDEO'`  |
| Vimeo      | `'https://player.vimeo.com/video/CODIGO_DO_VIDEO'` |
| MP4/WebM   | `'https://seusite.com/videos/aula.mp4'`            |
| Pinterest  | Baixe o vídeo e hospede como MP4                   |

**Como pegar o link de embed do YouTube:**

1. Abra o vídeo no YouTube
2. Clique em "Compartilhar" → "Incorporar"
3. Copie só a URL que aparece dentro de `src="..."` (começa com `https://www.youtube.com/embed/`)

**Como pegar o link de embed do Vimeo:**

1. Abra o vídeo no Vimeo
2. Clique no botão de compartilhar → "Embed"
3. Copie só a URL que aparece dentro de `src="..."` (começa com `https://player.vimeo.com/video/`)

### Adicionar um módulo novo

1. Adicione o módulo no array `MODULOS`:

```js
var MODULOS = [
  { nome: "Fundamentos", thumb: "" },
  { nome: "Primeiras Peças", thumb: "" },
  // Adicione aqui:
  { nome: "Nome do Novo Módulo", thumb: "" },
];
```

2. Adicione as aulas desse módulo no array `AULAS`, usando o número correto em `modulo` (se é o 7º módulo, use `modulo: 6`).

O campo `thumb` é opcional — coloque a URL de uma imagem para aparecer no card do módulo, ou deixe `''`.

### Remover uma aula

Delete a linha inteira da aula no array `AULAS`. Não precisa mexer em mais nada.

### Alterar o link de um vídeo

Encontre a aula no array `AULAS` e troque o valor do campo `video`.

---

## Como Funciona o Travamento de Módulos

- O Módulo 1 é sempre aberto
- Os demais módulos só desbloqueiam quando **todas** as aulas do módulo anterior estiverem marcadas como concluídas
- O progresso da aluna fica salvo no navegador (localStorage) — ela pode fechar e voltar sem perder

## Observações

- O site é responsivo — funciona em celular, tablet e computador
- Não precisa de banco de dados nem servidor
- O progresso fica salvo **apenas no navegador da aluna** (se trocar de navegador ou limpar os dados, perde o progresso)
