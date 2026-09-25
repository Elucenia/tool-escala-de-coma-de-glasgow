# Escala de Coma de Glasgow (com GCS-P)

Identificador: `escala-de-coma-de-glasgow`. Pacote independente da interface ELUCENIA, para navegador e Node.js.

## Situação

- Revisão: **needs-review**. Revisão documental e clínica independente pendente.
- Execução: **disponível para reprodução técnica da fórmula**.
- Validação clínica independente: **não realizada**. Os testes abaixo verificam aritmética e transporte dos campos.
- Fonte importada: Panorama Médico; arquivo `app/content/ferramentas/urgencia.php`.
- 5/5 casos de referência conferidos na importação. 0 casos independentes desta ferramenta.
- Dados: o exemplo funciona localmente, sem rede, armazenamento ou identificação de pacientes.

## Uso no Node.js

```js
const { calculate } = require('./calculator.js');
const example = require('./examples.json')[0];
console.log(calculate(example.input));
```

Execute `node test.cjs` (ou `npm test`) para conferir os exemplos. Abra `index.html` para usar a versão local do navegador. Não há dependências npm.

## Contrato

`calculate(input)` recebe um objeto, devolve `{id, main, label, raw, clinicalValidation}` ou `{error, code, field?}`. Consulte `tool.json` e `metadata.fields` para nomes, unidades, opções e intervalos. Números aceitam valores finitos ou strings numéricas; opções precisam corresponder às chaves documentadas. Campos obrigatórios vazios, booleanos inválidos, valores fora de intervalo e resultados não finitos são rejeitados. Somente checkbox omitido representa falso; um campo numérico ou uma opção obrigatória nunca é preenchido automaticamente.

Interpretações, ordens terapêuticas e tabelas herdadas não são retornadas pelo adaptador. Classificações e valores ainda dependem da população e das limitações da fonte.

## Fórmula / versão

Glasgow = abertura ocular (1 a 4) + resposta verbal (1 a 5) + resposta motora (1 a 6), de 3 a 15.GCS-P = Glasgow − escore de reatividade pupilar (0 = ambas reagem; 1 = uma não reage; 2 = nenhuma reage), de 1 a 15.Estímulo de pressão padronizado (2014): pressão no leito ungueal, no trapézio ou na incisura supraorbitária.

A transcrição acima documenta o acervo de origem e pode requerer atualização. 

## Condições e limites

Quantifica o nível de consciência pela abertura ocular, resposta verbal e resposta motora. O GCS-P subtrai a reatividade pupilar e amplia a informação prognóstica no trauma cranioencefálico.

Confirme população, exclusões, unidades, versão e diretriz aplicável ao país e serviço. O resultado não deve ser utilizado isoladamente para diagnóstico, alta ou prescrição. O pacote não representa certificação clínica, aprovação regulatória ou indicação para toda população. Veja a revisão completa em `tool.json`.

## Fontes originais

- [Teasdale G, Jennett B. Assessment of coma and impaired consciousness: a practical scale. Lancet, 1974.](https://doi.org/10.1016/S0140-6736(74)91639-0)
- [Brennan PM, Murray GD, Teasdale GM. Simplifying the use of prognostic information in traumatic brain injury. Part 1: The GCS-Pupils score: an extended index of clinical severity. J Neurosurg, 2018.](https://doi.org/10.3171/2017.12.JNS172780)
- [Teasdale G et al. The Glasgow Coma Scale at 40 years: standing the test of time. Lancet Neurol, 2014.](https://doi.org/10.1016/S1474-4422(14)70120-6)

## Exemplos e rastreabilidade

`examples.json` preserva `originalInput`, expectativa e entrada explícita do exemplo. Não foi necessário expandir opções zero nos exemplos.

## Direitos e repositório

Este pacote integra o acervo privado de desenvolvimento da ELUCENIA. A publicação externa depende de liberação expressa. A licença MIT (arquivo LICENSE) cobre o código de integração, preservando o aviso de autoria e a licença; não transfere direitos sobre instrumentos, traduções, questionários, artigos, marcas ou outros materiais de terceiros. Consulte NOTICE.md e as condições de cada titular. O acesso a este adaptador não publica nem licencia automaticamente o restante da plataforma ELUCENIA.

## Acesso ao repositório

Repositório privado da organização ELUCENIA. A abertura pública depende de liberação expressa.
