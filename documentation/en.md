<!-- ELUCENIA technical documentation · escala-de-coma-de-glasgow · en · no clinical/professional/rights approval -->

# Glasgow Coma Scale (with GCS-P)

[conditions, sources and permissions](https://elucenia.org/en/tools/escala-de-coma-de-glasgow)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Eye opening (E)

`o`

- `1` — 1 · Absent
- `2` — 2 · To pressure
- `3` — 3 · To sound
- `4` — 4 · Spontaneous
- `nt` — NT · Not testable

### Verbal response (V)

`v`

- `1` — 1 · Absent
- `2` — 2 · Sounds
- `3` — 3 · Words
- `4` — 4 · Confused
- `5` — 5 · Oriented
- `nt` — NT · Not testable (e.g., intubated)

### Best motor response (M)

`m`

- `1` — 1 · Absent
- `2` — 2 · Extension
- `3` — 3 · Abnormal flexion
- `4` — 4 · Normal flexion
- `5` — 5 · Localizing
- `6` — 6 · Obeys commands
- `nt` — NT · Not testable

### Pupillary light reactivity

`p`

- `0` — Both react
- `1` — One does not react
- `2` — Neither reacts
- `nt` — Not assessable

## Method edition

GCS 3–15/Teasdale 1974; 2014 procedure; GCS-P/Brennan 2018: subtract pupillary score 0–2

## Documented formula

Glasgow = eye opening (1 to 4) + verbal response (1 to 5) + motor response (1 to 6), range 3 to 15.

GCS-P = Glasgow − pupillary reactivity score (0 = both react; 1 = one does not; 2 = neither reacts), range 1 to 15.

Standardized pressure stimulus (2014): nail-bed, trapezius or supraorbital-notch pressure.

## Limits and population

Describe eye, verbal and motor responses as well as the total. GCS-P is the 2018 extension that subtracts pupil reactivity, studied in TBI cohorts. The score alone does not include all prognostic factors; assessments that are prevented or confounded require checking the edition’s instructions.

## References

- [Teasdale G, Jennett B. Assessment of coma and impaired consciousness: a practical scale. Lancet, 1974.](https://doi.org/10.1016/S0140-6736(74)91639-0)

- [Brennan PM, Murray GD, Teasdale GM. Simplifying the use of prognostic information in traumatic brain injury. Part 1: The GCS-Pupils score: an extended index of clinical severity. J Neurosurg, 2018.](https://doi.org/10.3171/2017.12.JNS172780)

- [Teasdale G et al. The Glasgow Coma Scale at 40 years: standing the test of time. Lancet Neurol, 2014.](https://doi.org/10.1016/S1474-4422(14)70120-6)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
