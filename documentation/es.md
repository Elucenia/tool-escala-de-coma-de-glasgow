<!-- ELUCENIA technical documentation · escala-de-coma-de-glasgow · es · no clinical/professional/rights approval -->

# Escala de coma de Glasgow (con GCS-P)

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/escala-de-coma-de-glasgow)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Apertura ocular (E)

`o`

- `1` — 1 · Ausente
- `2` — 2 · A la presión
- `3` — 3 · Al sonido
- `4` — 4 · Espontánea
- `nt` — NT · No evaluable

### Respuesta verbal (V)

`v`

- `1` — 1 · Ausente
- `2` — 2 · Sonidos
- `3` — 3 · Palabras
- `4` — 4 · Confusa
- `5` — 5 · Orientada
- `nt` — NT · No evaluable (p. ej., intubado)

### Mejor respuesta motora (M)

`m`

- `1` — 1 · Ausente
- `2` — 2 · Extensión
- `3` — 3 · Flexión anormal
- `4` — 4 · Flexión normal
- `5` — 5 · Localiza
- `6` — 6 · Obedece órdenes
- `nt` — NT · No evaluable

### Reactividad pupilar a la luz

`p`

- `0` — Ambas reaccionan
- `1` — Una no reacciona
- `2` — Ninguna reacciona
- `nt` — No evaluable

## Edición del método

GCS 3–15/Teasdale 1974; procedimiento 2014; GCS-P/Brennan 2018: restar puntuación pupilar 0–2

## Fórmula documentada

Glasgow = apertura ocular (1 a 4) + respuesta verbal (1 a 5) + respuesta motora (1 a 6), de 3 a 15.

GCS-P = Glasgow − puntuación pupilar (0 = ambas reaccionan; 1 = una no; 2 = ninguna), de 1 a 15.

Presión estandarizada (2014): lecho ungueal, trapecio o escotadura supraorbitaria.

## Límites y población

Describa las respuestas ocular, verbal y motora, además del total. El GCS-P es la extensión de 2018 que resta la reactividad pupilar, estudiada en cohortes de traumatismo craneoencefálico. La puntuación aislada no reúne todos los factores pronósticos; las evaluaciones impedidas o afectadas por factores de confusión requieren consultar las instrucciones de la edición.

## Referencias

- [Teasdale G, Jennett B. Assessment of coma and impaired consciousness: a practical scale. Lancet, 1974.](https://doi.org/10.1016/S0140-6736(74)91639-0)

- [Brennan PM, Murray GD, Teasdale GM. Simplifying the use of prognostic information in traumatic brain injury. Part 1: The GCS-Pupils score: an extended index of clinical severity. J Neurosurg, 2018.](https://doi.org/10.3171/2017.12.JNS172780)

- [Teasdale G et al. The Glasgow Coma Scale at 40 years: standing the test of time. Lancet Neurol, 2014.](https://doi.org/10.1016/S1474-4422(14)70120-6)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

Gravedad leve (13 a 15)

| Detalles del resultado | |
| --- | --- |
| Componentes | E4 V5 M6 |
| GCS-P (Glasgow − reactividad pupilar) | 15 (de 1 a 15) |


### 2

Gravedad moderada (9 a 12)

| Detalles del resultado | |
| --- | --- |
| Componentes | E3 V4 M5 |
| GCS-P (Glasgow − reactividad pupilar) | 12 (de 1 a 15) |


### 3

Gravedad grave (3 a 8)

| Detalles del resultado | |
| --- | --- |
| Componentes | E2 V2 M4 |
| GCS-P (Glasgow − reactividad pupilar) | 7 (de 1 a 15) |

Glasgow ≤ 8: evalúe la necesidad de una vía aérea definitiva.


### 4

Gravedad grave (3 a 8)

| Detalles del resultado | |
| --- | --- |
| Componentes | E1 V1 M1 |
| GCS-P (Glasgow − reactividad pupilar) | 1 (de 1 a 15) |

Glasgow ≤ 8: evalúe la necesidad de una vía aérea definitiva.


### 5

Puntuación total no calculable: registre y comunique los componentes

Con un componente no evaluable (p. ej., ojos edematizados, intubación), la suma subestima la gravedad. Describa cada componente por separado.

