<!-- ELUCENIA technical documentation · escala-de-coma-de-glasgow · de · no clinical/professional/rights approval -->

# Glasgow-Koma-Skala (mit GCS-P)

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/escala-de-coma-de-glasgow)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Augenöffnung (E)

`o`

- `1` — 1 · Nicht vorhanden
- `2` — 2 · Auf Druckreiz
- `3` — 3 · Auf akustischen Reiz
- `4` — 4 · Spontan
- `nt` — NT · Nicht prüfbar

### Verbale Reaktion (V)

`v`

- `1` — 1 · Nicht vorhanden
- `2` — 2 · Geräusche
- `3` — 3 · Wörter
- `4` — 4 · Verwirrt
- `5` — 5 · Orientiert
- `nt` — NT · Nicht prüfbar (z. B. intubiert)

### Beste motorische Reaktion (M)

`m`

- `1` — 1 · Nicht vorhanden
- `2` — 2 · Streckung
- `3` — 3 · Abnorme Beugung
- `4` — 4 · Normale Beugung
- `5` — 5 · Gezielte Abwehr
- `6` — 6 · Befolgt Aufforderungen
- `nt` — NT · Nicht prüfbar

### Pupillenreaktion auf Licht

`p`

- `0` — Beide reagieren
- `1` — Eine reagiert nicht
- `2` — Keine reagiert
- `nt` — Nicht beurteilbar

## Fassung der Methode

GCS 3–15/Teasdale 1974; Vorgehen 2014; GCS-P/Brennan 2018: Pupillenreaktion 0–2 abziehen

## Dokumentierte Formel

Glasgow = Augenöffnung (1 bis 4) + verbale Antwort (1 bis 5) + motorische Antwort (1 bis 6), Bereich 3 bis 15.

GCS-P = Glasgow − Pupillenreaktionsscore (0 = beide reagieren; 1 = eine nicht; 2 = keine), Bereich 1 bis 15.

Standardisierter Druckreiz (2014): Nagelbett, Trapezmuskel oder supraorbitale Kerbe.

## Grenzen und Population

Beschreiben Sie neben der Summe Augen-, Sprach- und motorische Reaktion. GCS-P ist die Erweiterung von 2018, die die Pupillenreaktivität abzieht und in Schädel-Hirn-Trauma-Kohorten untersucht wurde. Die Punktzahl allein erfasst nicht alle Prognosefaktoren; verhinderte oder durch Störfaktoren beeinflusste Beurteilungen erfordern die Prüfung der Anweisungen der Ausgabe.

## Referenzen

- [Teasdale G, Jennett B. Assessment of coma and impaired consciousness: a practical scale. Lancet, 1974.](https://doi.org/10.1016/S0140-6736(74)91639-0)

- [Brennan PM, Murray GD, Teasdale GM. Simplifying the use of prognostic information in traumatic brain injury. Part 1: The GCS-Pupils score: an extended index of clinical severity. J Neurosurg, 2018.](https://doi.org/10.3171/2017.12.JNS172780)

- [Teasdale G et al. The Glasgow Coma Scale at 40 years: standing the test of time. Lancet Neurol, 2014.](https://doi.org/10.1016/S1474-4422(14)70120-6)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026
