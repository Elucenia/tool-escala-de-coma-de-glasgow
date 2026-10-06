<!-- ELUCENIA technical documentation · escala-de-coma-de-glasgow · pt-BR · no clinical/professional/rights approval -->

# Escala de Coma de Glasgow (com GCS-P)

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/escala-de-coma-de-glasgow)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Abertura ocular (E)

`o`

- `1` — 1 · Ausente
- `2` — 2 · À pressão
- `3` — 3 · Ao som
- `4` — 4 · Espontânea
- `nt` — NT · Não testável

### Resposta verbal (V)

`v`

- `1` — 1 · Ausente
- `2` — 2 · Sons
- `3` — 3 · Palavras
- `4` — 4 · Confusa
- `5` — 5 · Orientada
- `nt` — NT · Não testável (ex.: intubado)

### Melhor resposta motora (M)

`m`

- `1` — 1 · Ausente
- `2` — 2 · Extensão
- `3` — 3 · Flexão anormal
- `4` — 4 · Flexão normal
- `5` — 5 · Localiza
- `6` — 6 · Obedece a comandos
- `nt` — NT · Não testável

### Reatividade pupilar à luz

`p`

- `0` — Ambas reagem
- `1` — Uma não reage
- `2` — Nenhuma reage
- `nt` — Não avaliável

## Edição do método

GCS 3–15/Teasdale 1974, procedimento 2014; GCSP/Brennan 2018:subtrair reatividade pupilar 0–2

## Fórmula documentada

Glasgow = abertura ocular (1 a 4) + resposta verbal (1 a 5) + resposta motora (1 a 6), de 3 a 15.

GCS-P = Glasgow − escore de reatividade pupilar (0 = ambas reagem; 1 = uma não reage; 2 = nenhuma reage), de 1 a 15.

Estímulo de pressão padronizado (2014): pressão no leito ungueal, no trapézio ou na incisura supraorbitária.

## Limites e população

Descreva as respostas ocular, verbal e motora, além do total. O GCS-P é a extensão de 2018 que subtrai a reatividade pupilar, estudada em coortes de TCE. A pontuação isolada não reúne todos os fatores de prognóstico; avaliações impedidas ou confundidas exigem conferência das instruções da edição.

## Referências

- [Teasdale G, Jennett B. Assessment of coma and impaired consciousness: a practical scale. Lancet, 1974.](https://doi.org/10.1016/S0140-6736(74)91639-0)

- [Brennan PM, Murray GD, Teasdale GM. Simplifying the use of prognostic information in traumatic brain injury. Part 1: The GCS-Pupils score: an extended index of clinical severity. J Neurosurg, 2018.](https://doi.org/10.3171/2017.12.JNS172780)

- [Teasdale G et al. The Glasgow Coma Scale at 40 years: standing the test of time. Lancet Neurol, 2014.](https://doi.org/10.1016/S1474-4422(14)70120-6)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Gravidade leve (13 a 15)

| Detalhes do resultado | |
| --- | --- |
| Componentes | E4 V5 M6 |
| GCS-P (Glasgow − reatividade pupilar) | 15 (de 1 a 15) |


### 2

Gravidade moderada (9 a 12)

| Detalhes do resultado | |
| --- | --- |
| Componentes | E3 V4 M5 |
| GCS-P (Glasgow − reatividade pupilar) | 12 (de 1 a 15) |


### 3

Gravidade grave (3 a 8)

| Detalhes do resultado | |
| --- | --- |
| Componentes | E2 V2 M4 |
| GCS-P (Glasgow − reatividade pupilar) | 7 (de 1 a 15) |

Glasgow ≤ 8: avalie a necessidade de via aérea definitiva.


### 4

Gravidade grave (3 a 8)

| Detalhes do resultado | |
| --- | --- |
| Componentes | E1 V1 M1 |
| GCS-P (Glasgow − reatividade pupilar) | 1 (de 1 a 15) |

Glasgow ≤ 8: avalie a necessidade de via aérea definitiva.


### 5

Escore total não calculável: registre e comunique os componentes

Com um componente não testável (ex.: olhos edemaciados, intubação), a soma subestima a gravidade. Descreva cada componente separadamente.

