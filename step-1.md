# Introduktion programmering 1

# Det långa invecklade rollspelets väg

**Idé**: flera mindre moment som resulterar i färdigheterna att skapa något mer, något större. En helhet.

## Moment

### Introduktion till programmering
1. Problemlösning med kod
2. Problemformulering, vad är problemet, vad behöver vi lösa?
3. Kunna uttryck sig, vad är din intention med koden?
4. Vad är en algoritm?
    * En serie steg för att lösa ett problem
    * En serie steg för att utföra en uppgift
    * Starta programmet, tilldela värdet 5 till variabeln x, skriv ut värdet av x
5. Vad är pseudokod?
    * Ett sätt att skriva ner en algoritm
          * Starta programmet, fråga användaren om ett tal, tilldela värdet till variabeln x, skriv ut värdet av x
    * Ett sätt att planera koden
    * Ett sätt att förstå koden
6. Vad är syntax?
    * Regler för hur koden ska skrivas
    * Regler för hur koden ska tolkas
    * Regler för hur koden ska köras
7. Vad är semantik?
    * Regler för hur koden ska tolkas
    * Regler för hur koden ska köras
    * Regler för hur koden ska skrivas
8. Vad är en kompilator eller tolk (interpreter)?
    * Ett program som översätter koden till maskinkod
    * Ett program som kör koden
    * Ett program som tolkar koden

### Variabler och datatyper
1. Initiering, deklaration och tilldelning
2. Öva, gör de stegen och förstå skillnaden
    * Deklaration, vad är det? ```js let name ``` 
    * Initiering, vad är det? ```js let name = "Bamse" ```
    * Tilldelning, vad är det? ```js name = "Bamse" ``` ```python name = "Bamse"``` 
3. Upprepa tilldelningen, introducera problem som sker. Byt värde, vad händer? Byt typ av värde, vad händer? ```js let name = "Bamse" name = 5 ``` ```python name = "Bamse"; name = 5; ```
    * Hover i VSCode, vad händer? Din hjälp, ditt verktyg för att förstå koden.
    * Debuggern, ditt verktyg för att förstå koden.
4. Datatyper, vad är det?
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

#### Övningar med visst fokus på strängar

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

#### Övningar med fokus på inmatning och datatyper

För att skapa interaktion med användaren, använd `input()` i Python och `prompt()` i JavaScript. Dessa funktioner låter dig skapa en dialog med användaren.
Detta är exempel på inbyggda funktioner som finns i språken. Funktionerna låter användaren skriva in något och du kan sedan använda det som värdet av en variabel.

1. Skapa en variabel `name` och använd `input()` eller `prompt()` för att låta användaren skriva in sitt namn.
2. Skapa en variabel `age` och använd `input()` eller `prompt()` för att låta användaren skriva in sin ålder.
3. Skriv ut en hälsning med användarens namn och ålder.

Problem, hur vet du att användaren skriver in rätt värde? Hur vet du att användaren skriver in en siffra för ålder och inte en sträng?
Vilken typ av värden skapar `input()` och `prompt()`?

Skapa en enkel räknade, där användaren skriver in två tal och programmet räknar ut summan. Använt `input()` eller `prompt()` för att låta användaren skriva in talen.

## Målet

Skapa ett rollformulär där användaren skriver in sitt namn, ålder och klass. Programmet skriver sedan ut en presentation av användaren.

### Grundegenskaper

De flesta rollspel har några grundegenskaper som beskriver karaktären. Dessa egenskaper kan vara styrka, smidighet, intelligens, etc. I vårt fall kommer vi att använda tre egenskaper: styrka, smidighet och intelligens.

1. Skapa tre variabler `strength`, `agility` och `intelligence` och använd `input()` eller `prompt()` för att låta användaren skriva in värden för dessa egenskaper.
2. Skriv ut en presentation av användaren som inkluderar namn, ålder, klass och egenskaper.

Men de flesta rollspel har element av slump. Så låt oss lägga till några slumpmässiga egenskaper.

1. Skapa en variabel `random` och använd `Math.random()` i JavaScript eller `random.randint()` i Python för att skapa ett slumpmässigt tal mellan 1 och 10.
2. Skriv ut det slumpmässiga talet.



### Kontrollstrukturer
1. Sekvens, selektion och iteration
  1. Sekvens, i vilken ordning sker saker?
  2. Selektion, vad är det? Att välja något i kod.
  3. Iteration, vad är det? Att upprepa något i kod.
2. If-satser, vad är det?
3. If-else-satser, vad är det?
4. If-else-if-satser, vad är det?
7. While-loopar, vad är det?
8. For-loopar, vad är det?    