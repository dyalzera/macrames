const fs = require('fs');

const data = `
### **Módulo 1: Vídeo Aulas - Fio Felpudo (46 aulas)**
1.  Flor de Lótus Iluminada
2.  Vaso de Lírio do Vale
3.  Luminária de Flor
4.  Flor de Lírio
5.  Lavanda
6.  Vaso Flor Tulipa
7.  Vaso Flor de Girassol
8.  Orquídea
9.  Vasos de Tulipas
10. Vaso de Cravo
11. Vasinho de Tulipa + Abelhinha
12. Vasinho de Tulipa Fofa
13. Vários Modelos
14. Tulipas
15. Tulipa com 5 Asas
16. Suculentas
17. Ramos de Flores
18. Orquídea v2
19. Narcissus com Caules
20. Mini Vaso de Hortênsia
21. Mini Cesta de Lótus
22. Mini Buquê de Flores
23. Margarida Azul
24. Lírios Amarelos
25. Lírio com Hastes de Chenille
26. Limão Decorativo
27. Lavanda v2
28. Jarrinho Girassol
29. Jarrinho Clorofito
30. Girassol Colorido
31. Flores Rosas
32. Flores Pink
33. Flores Amarelas
34. Flores Variadas
35. Flor Azul Celeste
36. Flor Azul Royal
37. Flor Clássica
38. Enfeites de Natal
39. Enfeite de Natal Especial
40. Decoração de Natal
41. Aula Bônus – Wall Hanging Flower
42. Aula Bônus – Easy Flower Craft
43. Aula Bônus – How to Make Flower
44. Aula Bônus – Easy Flower
45. Aula Bônus – Flower DIY
46. Aula Bônus – Técnica Especial de Flores

### **Módulo 2: Peças Variadas (20 aulas)**
1.  DIY Pipe Cleaner Craft
2.  Peça Criativa 1
3.  Peça Criativa 2
4.  Peça Criativa 3
5.  Peça Criativa 4
6.  Peça Criativa 5
7.  Peça Criativa 6
8.  Peça Criativa 7
9.  Peça Criativa 8
10. Peça Criativa 9
11. Peça Criativa 10
12. Cesta de Orquídea
13. Cesta de Morango
14. Cesta de Lótus e Libélula
15. Cesta de Flores
16. Cesta de Flores Especial
17. Buquês de Flores
18. Buquê de Girassóis
19. Flor de Narciso
20. Peça Especial Exclusiva

### **Módulo 3: Animais de Arte Felpuda (11 aulas)**
1.  Tartaruga Estrela
2.  Calopsita
3.  Coelho
4.  Esquilo
5.  Esquilo 2
6.  Borboleta
7.  Dinossauro
8.  Elefante
9.  Gatinho
10. Passarinho
11. Cachorrinho

### **Módulo 4: Chaveiros de Arte Felpuda (5 aulas)**
1.  Chaveiro Gato
2.  Chaveiro de Frutas
3.  Chaveiro de Coração
4.  Chaveiro Abelhinha
5.  Chaveiro Cereja

### **Módulo 5: 🎁 Bônus + Extras (6 Materiais)**
1.  Detalhes que Encantam
2.  As 20 Peças Mais Vendidas de 2025
3.  Arte Terapêutica
4.  Método 3 Movimentos
5.  Fotos que Vendem
6.  Lista de Fornecedores
`;

let mod = -1;
let aulas = [];

data.trim().split('\\n').forEach(line => {
    line = line.trim();
    if (line.startsWith('###')) {
        mod++;
    } else if (line && /^\d+/.test(line)) {
        let title = line.substring(line.indexOf('.') + 1).trim();
        aulas.push(`  { modulo: ${mod}, titulo: '${title}', dur: '', video: '' }`);
    }
});

let aulasStr = "var AULAS = [\\n" + aulas.join(",\\n") + "\\n];";

let content = fs.readFileSync('script_felpudos.js', 'utf8');
content = content.replace(/var AULAS = \[\s*\/\/.*?\n.*?\];/s, aulasStr);

fs.writeFileSync('script_felpudos.js', content, 'utf8');
console.log('Done replacing AULAS');
