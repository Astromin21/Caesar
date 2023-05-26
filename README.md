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
- splitted var "text"


```
function umwandeln()
```
- wandelt Buchstaben mit Charcode() um
- Inhalt des Array wird in numbers umgewandelt


```
function grossKlein
```
- erkennt ob eingegebener Buchstabe groß oder klein geschrieben ist
- addiert den parameter "nr" aus Eingabefeld zahl hinzu


```
function rangeKlein(), rangeGross()
```
- überprüfen die Range der Buchstaben von a bis z und A bis Z