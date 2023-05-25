# Caesar verschlüsselung 

Programm zum verschlüsseln von Wörtern

Zwei Eingabefelder:
- Wort zum Verschlüssel
- Zahl zur Angabe um wieviele Stellen die einzelnen Buchstaben verschlüsselt werden(Standard 0);

```
function abfrage()
```
- erkennt Änderungen in den Feldern und aktualisiert die Werte in variablen "zahl", "wort"
- inhalte von var "zahl", "wort" mit .value in var "text", "nr" gespeichert
- übergibt Parameter "text", "nr" weiter an schlussel()

```
function schlussel()
```
- übernimmt Parameter "text", "nr" aus abfrage()
- wandelt text in Zeichencode um und speichert in var "code"
- var "code" mit "nr" addiert und als var "ergebnis" gespeichert
- ergebnis über .fromCharcode() in Buchstaben umgewandelt
- Ausgabe per innerHtml