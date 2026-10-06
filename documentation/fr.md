<!-- ELUCENIA technical documentation · escala-de-coma-de-glasgow · fr · no clinical/professional/rights approval -->

# Échelle de coma de Glasgow (avec GCS-P)

[conditions, sources et autorisations](https://elucenia.org/fr/outils/escala-de-coma-de-glasgow)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Ouverture des yeux (E)

`o`

- `1` — 1 · Absent
- `2` — 2 · À la pression
- `3` — 3 · Au son
- `4` — 4 · Spontanée
- `nt` — NT · Non testable

### Réponse verbale (V)

`v`

- `1` — 1 · Absent
- `2` — 2 · Sons
- `3` — 3 · Mots
- `4` — 4 · Confuse
- `5` — 5 · Orientée
- `nt` — NT · Non testable (p. ex., intubation)

### Meilleure réponse motrice (M)

`m`

- `1` — 1 · Absent
- `2` — 2 · Extension
- `3` — 3 · Flexion anormale
- `4` — 4 · Flexion normale
- `5` — 5 · Localisation
- `6` — 6 · Obéit aux consignes
- `nt` — NT · Non testable

### Réactivité pupillaire à la lumière

`p`

- `0` — Les deux réagissent
- `1` — Une ne réagit pas
- `2` — Aucune ne réagit
- `nt` — Non évaluable

## Édition de la méthode

GCS 3–15/Teasdale 1974 ; procédure 2014 ; GCS-P/Brennan 2018 : soustraire le score pupillaire 0–2

## Formule documentée

Glasgow = ouverture des yeux (1 à 4) + réponse verbale (1 à 5) + réponse motrice (1 à 6), de 3 à 15.

GCS-P = Glasgow − score pupillaire (0 = les deux réagissent ; 1 = une ne réagit pas ; 2 = aucune), de 1 à 15.

Pression standardisée (2014) : lit unguéal, trapèze ou incisure supra-orbitaire.

## Limites et population

Décrivez les réponses oculaire, verbale et motrice en plus du total. Le GCS-P est l’extension de 2018 qui soustrait la réactivité pupillaire, étudiée dans des cohortes de traumatisme crânien. Le score seul ne rassemble pas tous les facteurs pronostiques ; les évaluations empêchées ou soumises à des facteurs de confusion exigent la consultation des instructions de l’édition.

## Références

- [Teasdale G, Jennett B. Assessment of coma and impaired consciousness: a practical scale. Lancet, 1974.](https://doi.org/10.1016/S0140-6736(74)91639-0)

- [Brennan PM, Murray GD, Teasdale GM. Simplifying the use of prognostic information in traumatic brain injury. Part 1: The GCS-Pupils score: an extended index of clinical severity. J Neurosurg, 2018.](https://doi.org/10.3171/2017.12.JNS172780)

- [Teasdale G et al. The Glasgow Coma Scale at 40 years: standing the test of time. Lancet Neurol, 2014.](https://doi.org/10.1016/S1474-4422(14)70120-6)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Résultats documentés

Les informations ci-dessous conservent les sorties de la méthode pour des exemples synthétiques. Elles ne constituent pas une validation clinique indépendante.

### 1

Gravité légère (13 à 15)

| Détails du résultat | |
| --- | --- |
| Composants | E4 V5 M6 |
| GCS-P (Glasgow − réactivité pupillaire) | 15 (de 1 à 15) |


### 2

Gravité modérée (9 à 12)

| Détails du résultat | |
| --- | --- |
| Composants | E3 V4 M5 |
| GCS-P (Glasgow − réactivité pupillaire) | 12 (de 1 à 15) |


### 3

Gravité sévère (3 à 8)

| Détails du résultat | |
| --- | --- |
| Composants | E2 V2 M4 |
| GCS-P (Glasgow − réactivité pupillaire) | 7 (de 1 à 15) |

Glasgow ≤ 8 : évaluer la nécessité d’une voie aérienne définitive.


### 4

Gravité sévère (3 à 8)

| Détails du résultat | |
| --- | --- |
| Composants | E1 V1 M1 |
| GCS-P (Glasgow − réactivité pupillaire) | 1 (de 1 à 15) |

Glasgow ≤ 8 : évaluer la nécessité d’une voie aérienne définitive.


### 5

Score total non calculable : consignez et communiquez les composantes

Avec un composant non testable (p. ex., yeux œdématiés, intubation), la somme sous-estime la gravité. Décrivez chaque composant séparément.

