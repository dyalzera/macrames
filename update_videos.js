const fs = require('fs');

const linksStr = `
1. Flor de Lótus Iluminada -> https://player.vimeo.com/video/1173034525
2. Vaso de Lírio do Vale -> https://player.vimeo.com/video/1173034704
3. Luminária de Flor -> https://player.vimeo.com/video/1173034893
4. Flor de Lírio -> https://player.vimeo.com/video/1173035095
5. Lavanda -> https://player.vimeo.com/video/1173030662
6. Vaso Flor Tulipa -> https://player.vimeo.com/video/1173034211
7. Vaso Flor de Girassol -> https://player.vimeo.com/video/1173034357
8. Orquídea -> https://player.vimeo.com/video/1173031605
9. Vasos de Tulipas -> https://player.vimeo.com/video/1173032498
10. Vaso de Cravo -> https://player.vimeo.com/video/1173032330
11. Vasinho de Tulipa + Abelinha -> https://player.vimeo.com/video/1173032162
12. Vasinho de Tulipa Fofa -> https://player.vimeo.com/video/1173032078
13. Vários Modelos -> https://player.vimeo.com/video/1173031964
14. Tulipa com 5 Asas -> https://player.vimeo.com/video/1173031911
15. Suculentas -> https://player.vimeo.com/video/1173031748
16. Ramos de Flores -> https://player.vimeo.com/video/1173031694
17. Orquídea v2 -> https://player.vimeo.com/video/1173035236
18. Narcissus com Caules -> https://player.vimeo.com/video/1173031511
19. Mini Vaso de Hortênsia -> https://player.vimeo.com/video/1173031363
20. Mini Cesta de Lótus -> https://player.vimeo.com/video/1173031287
21. Mini Buquê de Flores -> https://player.vimeo.com/video/1173031245
22. Margarida Azul -> https://player.vimeo.com/video/1173031156
23. Lírios Amarelos -> https://player.vimeo.com/video/1173031110
24. Lírio com Hastes de Chenille -> https://player.vimeo.com/video/1173030979
25. Limão Decorativo -> https://player.vimeo.com/video/1173030725
26. Lavanda v2 -> https://player.vimeo.com/video/1173030055
27. Jarrinho Girassol -> https://player.vimeo.com/video/1173030605
28. Jarrinho Clorofito -> https://player.vimeo.com/video/1173030537
29. Girassóis -> https://player.vimeo.com/video/1173030366
30. Girassol Mini -> https://player.vimeo.com/video/1173030319
31. Florzinha Rosa -> https://player.vimeo.com/video/1173030238
32. Flores Amarelas -> https://player.vimeo.com/video/1173029960
33. Flores Variadas -> https://player.vimeo.com/video/1173030147
34. Flor Azul Celeste -> https://player.vimeo.com/video/1173029722
35. Flor Azul Royal -> https://player.vimeo.com/video/1173029876
36. Flor Clássica -> https://player.vimeo.com/video/1173029295
37. Enfeites de Natal -> https://player.vimeo.com/video/1173029569
38. Enfeite de Natal Especial -> https://player.vimeo.com/video/1173029509
39. Decoração de Natal -> https://player.vimeo.com/video/1173029421
40. Aula Bônus – Wall Hanging Flower -> https://player.vimeo.com/video/1173029178
41. Aula Bônus – Easy Flower Craft -> https://player.vimeo.com/video/1173029082
42. Aula Bônus – How to Make Flower -> https://player.vimeo.com/video/1173028815
43. Aula Bônus – Easy Flower -> https://player.vimeo.com/video/1173029120
44. Aula Bônus – Flower DIY -> https://player.vimeo.com/video/1173029378
45. Aula Bônus – Técnica Especial de Flores -> https://player.vimeo.com/video/1173030459
46. DIY Pipe Cleaner Craft -> https://player.vimeo.com/video/1173028227
47. Peça Criativa 1 -> https://player.vimeo.com/video/1173028477
48. Peça Criativa 2 -> https://player.vimeo.com/video/1173028531
49. Peça Criativa 3 -> https://player.vimeo.com/video/1173028655
50. Peça Criativa 4 -> https://player.vimeo.com/video/1173028704
51. Peça Criativa 5 -> https://player.vimeo.com/video/1173028765
52. Peça Criativa 6 -> https://player.vimeo.com/video/1173033257
53. Peça Criativa 7 -> https://player.vimeo.com/video/1173033081
54. Peça Criativa 8 -> https://player.vimeo.com/video/1173033345
55. Peça Criativa 9 -> https://player.vimeo.com/video/1173032654
56. Peça Criativa 10 -> https://player.vimeo.com/video/1173032595
57. Cesta de Orquídea -> https://player.vimeo.com/video/1173028037
58. Cesta de Morango -> https://player.vimeo.com/video/1173027675
59. Cesta de Lótus e Libélula -> https://player.vimeo.com/video/1173027257
60. Cesta de Flores -> https://player.vimeo.com/video/1173027151
61. Cesta de Flores Especial -> https://player.vimeo.com/video/1173027044
62. Buquês de Flores -> https://player.vimeo.com/video/1173030147
63. Buquê de Girassóis -> https://player.vimeo.com/video/1173030605
64. Flor de Narciso -> https://player.vimeo.com/video/1173029806
65. Peça Especial Exclusiva -> https://player.vimeo.com/video/1173028594
66. Tartaruga Estrela -> https://player.vimeo.com/video/1173033913
67. Calopsita -> https://player.vimeo.com/video/1173034005
68. Coelho -> https://player.vimeo.com/video/1173033809
69. Esquilo -> https://player.vimeo.com/video/1173032952
70. Esquilo 2 -> https://player.vimeo.com/video/1173032895
71. Borboleta -> https://player.vimeo.com/video/1173032867
72. Dinossauro -> https://player.vimeo.com/video/1173032811
73. Elefante -> https://player.vimeo.com/video/1173032756
74. Gatinho -> https://player.vimeo.com/video/1173032707
75. Passarinho -> https://player.vimeo.com/video/1173032560
76. Cachorrinho -> https://player.vimeo.com/video/1173032529
77. Chaveiro Gato -> https://drive.google.com/file/d/1B7eGk3N6Pcf0BcjJLJZNpNydsy8eGIYE/preview
78. Chaveiro de Frutas -> https://drive.google.com/file/d/1IYInGk1KOHpYo_QVb4UcONQaeOtw1ZNX/preview
79. Chaveiro de Coração -> https://drive.google.com/file/d/1qVJpyAMsW1306DOsLojVL3G33LTcDWZ1/preview
80. Chaveiro Abelhinha -> https://drive.google.com/file/d/1sD4QsuwZim8YfnDg5BZZ0Q2vNQYTlp9q/preview
81. Chaveiro Cereja -> https://drive.google.com/file/d/1LAWBIZO8cUyG3CBgwn6und0nokpuoAPA/preview
82. Detalhes que Encantam -> https://opsofzntidohsxbyqmbm.supabase.co/storage/v1/object/public/lesson-files/pdfs/58c07be0-66da-43d4-b18a-d461f3b12a8f.pdf
83. As 20 Peças Mais Vendidas de 2025 -> https://opsofzntidohsxbyqmbm.supabase.co/storage/v1/object/public/lesson-files/pdfs/e99ab42e-04f8-4461-a643-daa0cd571fd6.pdf
84. Arte Terapêutica -> https://opsofzntidohsxbyqmbm.supabase.co/storage/v1/object/public/lesson-files/pdfs/e85a0470-1552-4041-a564-a8ffb9201d62.pdf
85. Método 3 Movimentos -> https://opsofzntidohsxbyqmbm.supabase.co/storage/v1/object/public/lesson-files/pdfs/8a28ebd9-1e0f-450c-8ae2-7292f42fd4b0.pdf
86. Fotos que Vendem -> https://opsofzntidohsxbyqmbm.supabase.co/storage/v1/object/public/lesson-files/pdfs/57c99a49-0d84-461a-bc89-209daefe1880.pdf
87. Lista de Fornecedores -> https://opsofzntidohsxbyqmbm.supabase.co/storage/v1/object/public/lesson-files/pdfs/04307387-546b-408c-a29c-3d04e9ef1bfd.pdf
`;

const urls = linksStr.trim().split('\n').filter(l => l.includes('->')).map(line => {
   const parts = line.split('->');
   let title = parts[0].replace(/^\d+\.\s*/, '').trim();
   return { title: title, url: parts[1].trim() };
});

let content = fs.readFileSync('c:/Users/richa/macrames/script_felpudos.js', 'utf8');

urls.forEach(({title, url}) => {
    // Regex matches the title precisely and replaces its video field
    // Example: titulo: 'Flor de Lírio', dur: '', video: ''
    // We will replace video: '.*?' with video: 'url'
    let escapeTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    let regex = new RegExp(`(titulo:\\s*'${escapeTitle}'.*?video:\\s*').*?(')`);
    content = content.replace(regex, `$1${url}$2`);
});

fs.writeFileSync('c:/Users/richa/macrames/script_felpudos.js', content, 'utf8');
console.log('Replaced by title successfully.');
