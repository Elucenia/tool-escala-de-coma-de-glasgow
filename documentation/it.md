<!-- ELUCENIA technical documentation · escala-de-coma-de-glasgow · it · no clinical/professional/rights approval -->

# Scala del coma di Glasgow (con GCS-P)

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/escala-de-coma-de-glasgow)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Apertura degli occhi (E)

`o`

- `1` — 1 · Assente
- `2` — 2 · Alla pressione
- `3` — 3 · Al suono
- `4` — 4 · Spontanea
- `nt` — NT · Non valutabile

### Risposta verbale (V)

`v`

- `1` — 1 · Assente
- `2` — 2 · Suoni
- `3` — 3 · Parole
- `4` — 4 · Confusa
- `5` — 5 · Orientata
- `nt` — NT · Non valutabile (ad es., intubato)

### Migliore risposta motoria (M)

`m`

- `1` — 1 · Assente
- `2` — 2 · Estensione
- `3` — 3 · Flessione anomala
- `4` — 4 · Flessione normale
- `5` — 5 · Localizza
- `6` — 6 · Esegue i comandi
- `nt` — NT · Non valutabile

### Reattività pupillare alla luce

`p`

- `0` — Entrambe reagiscono
- `1` — Una non reagisce
- `2` — Nessuna reagisce
- `nt` — Non valutabile

## Edizione del metodo

GCS 3–15/Teasdale 1974; procedura 2014; GCS-P/Brennan 2018: sottrarre reattività pupillare 0–2

## Formula documentata

Glasgow = apertura oculare (1 a 4) + risposta verbale (1 a 5) + risposta motoria (1 a 6), da 3 a 15.

GCS-P = Glasgow − punteggio pupillare (0 = entrambe reagiscono; 1 = una no; 2 = nessuna), da 1 a 15.

Pressione standardizzata (2014): letto ungueale, trapezio o incisura sopraorbitaria.

## Limiti e popolazione

Descrivere le risposte oculare, verbale e motoria, oltre al totale. Il GCS-P è l’estensione del 2018 che sottrae la reattività pupillare, studiata in coorti di trauma cranico. Il punteggio da solo non riunisce tutti i fattori prognostici; le valutazioni impedite o influenzate da fattori confondenti richiedono la verifica delle istruzioni dell’edizione.

## Riferimenti

- [Teasdale G, Jennett B. Assessment of coma and impaired consciousness: a practical scale. Lancet, 1974.](https://doi.org/10.1016/S0140-6736(74)91639-0)

- [Brennan PM, Murray GD, Teasdale GM. Simplifying the use of prognostic information in traumatic brain injury. Part 1: The GCS-Pupils score: an extended index of clinical severity. J Neurosurg, 2018.](https://doi.org/10.3171/2017.12.JNS172780)

- [Teasdale G et al. The Glasgow Coma Scale at 40 years: standing the test of time. Lancet Neurol, 2014.](https://doi.org/10.1016/S1474-4422(14)70120-6)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Gravità lieve (13 a 15)

| Dettagli del risultato | |
| --- | --- |
| Componenti | E4 V5 M6 |
| GCS-P (Glasgow − reattività pupillare) | 15 (da 1 a 15) |


### 2

Gravità moderata (9 a 12)

| Dettagli del risultato | |
| --- | --- |
| Componenti | E3 V4 M5 |
| GCS-P (Glasgow − reattività pupillare) | 12 (da 1 a 15) |


### 3

Gravità grave (3 a 8)

| Dettagli del risultato | |
| --- | --- |
| Componenti | E2 V2 M4 |
| GCS-P (Glasgow − reattività pupillare) | 7 (da 1 a 15) |

Glasgow ≤ 8: valutare la necessità di una via aerea definitiva.


### 4

Gravità grave (3 a 8)

| Dettagli del risultato | |
| --- | --- |
| Componenti | E1 V1 M1 |
| GCS-P (Glasgow − reattività pupillare) | 1 (da 1 a 15) |

Glasgow ≤ 8: valutare la necessità di una via aerea definitiva.


### 5

Punteggio totale non calcolabile: registrare e comunicare le componenti

Con una componente non testabile (ad es. occhi edematosi, intubazione), la somma sottostima la gravità. Descrivere ogni componente separatamente.

