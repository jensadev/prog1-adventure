---
layout: base.njk
title: Datatyper
eleventyNavigation:
  key: Datatyper
  parent: Introduktion
  order: 2
---

## Vad är det?

  * Vad är en datatyp?
  * Vad är en primitiv datatyp, int, float, string, boolean
  * ```js
    let currentYear = 2024; // Number
    let greeting = "Hello, World!"; // String
    let isActive = true; // Boolean
    ```
    ```python
    currentYear = 2024  # Integer
    average_temperature= 20.5  # Float
    greeting = "Hello, World!"  # String
    is_active = True  # Boolean
    ```
  * Varför är det viktigt att förstå datatyper? För att datorn är inte smart nog att förstå vad du menar, därav måste du vara tydlig. För att undvika fel så måste du vara tydligt, så att du ser till att datorn förstår vad du menar.

### Övningar med fokus på inmatning och datatyper

För att skapa interaktion med användaren, använd `input()` i Python och `prompt()` i JavaScript. Dessa funktioner låter dig skapa en dialog med användaren.
Detta är exempel på inbyggda funktioner som finns i språken. Funktionerna låter användaren skriva in något och du kan sedan använda det som värdet av en variabel.

1. Skapa en variabel `name` och använd `input()` eller `prompt()` för att låta användaren skriva in sitt namn.
2. Skapa en variabel `age` och använd `input()` eller `prompt()` för att låta användaren skriva in sin ålder.
3. Skriv ut en hälsning med användarens namn och ålder.

Problem, hur vet du att användaren skriver in rätt värde? Hur vet du att användaren skriver in en siffra för ålder och inte en sträng?
Vilken typ av värden skapar `input()` och `prompt()`?

Skapa en enkel räknade, där användaren skriver in två tal och programmet räknar ut summan. Använt `input()` eller `prompt()` för att låta användaren skriva in talen.
