# Get Count From Messages

Nachrichten liegen sortiert nach deren `id` vor und sollen in der selben Reihenfolge ausgegeben werden.

Erstelle eine Route, die beginnend von einer Nachricht (festgelegt mit deren `id`), eine Anzahl `count` nächster Nachrichten anzeigt, - sollten weniger als `count` weitere Nachrichten existieren, so werden nur diese angezeigt. 

```
Mesages
1 ... 
2 ...
3
4 
5
7
#             Start Anzahl
GET /messages/:fromID/:count
Beispiele:
GET /messages/3/4
    => 3,4,5,7

GET /messages/2/10
    => 2,3,4,5,7
```
