---
layout: base.njk
title: Mål 
eleventyNavigation:
  key: Mål
  parent: Introduktion
  order: 3
---

# {{ title }}

Skapa ett rollformulär där användaren skriver in sitt namn, ålder och klass. Programmet skriver sedan ut en presentation av användaren.

### Grundegenskaper

De flesta rollspel har några grundegenskaper som beskriver karaktären. Dessa egenskaper kan vara styrka, smidighet, intelligens, etc. I vårt fall kommer vi att använda tre egenskaper: styrka, smidighet och intelligens.

1. Skapa tre variabler `strength`, `agility` och `intelligence` och använd `input()` eller `prompt()` för att låta användaren skriva in värden för dessa egenskaper.
2. Skriv ut en presentation av användaren som inkluderar namn, ålder, klass och egenskaper.

Men de flesta rollspel har element av slump. Så låt oss lägga till några slumpmässiga egenskaper.

1. Skapa en variabel `random` och använd `Math.random()` i JavaScript eller `random.randint()` i Python för att skapa ett slumpmässigt tal mellan 1 och 10.
2. Skriv ut det slumpmässiga talet.