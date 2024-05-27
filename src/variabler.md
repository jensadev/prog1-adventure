---
layout: base.njk
title: Variabler
eleventyNavigation:
  key: Variabler
  parent: Introduktion
  order: 1
---

# {{ title }}

## Initiering, deklaration och tilldelning
## Öva, gör de stegen och förstå skillnaden
    * Deklaration, vad är det? ```js let name ``` 
    * Initiering, vad är det? ```js let name = "Bamse" ```
    * Tilldelning, vad är det? ```js name = "Bamse" ``` ```python name = "Bamse"``` 

## Upprepa tilldelningen, introducera problem som sker. Byt värde, vad händer? Byt typ av värde, vad händer?

```js let name = "Bamse" name = 5 ```
```python name = "Bamse" name = 5; ```

* Hover i VSCode, vad händer? Din hjälp, ditt verktyg för att förstå koden.
* Debuggern, ditt verktyg för att förstå koden.

#### Övningar

1. Deklarera en variabel med namnet `name` och tilldela det värdet `"Bamse"`.
2. Deklarera en variabel med namnet `age` och tilldela det värdet `5`.
3. Skriv ut värdet av variabeln `name` och `age`.
4. Byt värdet av variabeln `name` till `"Lille Skutt"` och skriv ut värdet av variabeln `name`.
5. Skapa en variabel med en sträng som använder variabeln `name` och `age` för att skapa en mening. Skriv ut meningen.

#### Exempel på fel

Vad kan gå fel då, låt oss lista några exempel.

1. Deklarera en variabel utan att använda den
    `unused_variable` = "I'm not used anywhere"
2. Deklarera en variabel med felaktigt namn
    `1_invalid_name = "This won't work because variable names can't start with a number"`
3. Deklarera en variabel med felaktig datatyp
    `wrong_type = "123"`  # This is a string, not a number
4. Deklarera en variabel med felaktigt värde
    `out_of_range = 1001`  # If this is supposed to be a percentage, it's out of range
5. Deklarera en variabel med felaktig syntax
    `missing_equals "This won't work because the equals sign is missing"`
6. Deklarera en variabel med felaktig semantik
    `minutes_in_an_hour = 100`  # This is semantically incorrect; there are 60 minutes in an hour
7. Använda en variabel utan att deklarera den
    `print(undeclared_variable)`  # This will raise an error because the variable is not declared
8. Använda en variabel innan den är deklarerad
9. Använda en variabel med felaktigt namn