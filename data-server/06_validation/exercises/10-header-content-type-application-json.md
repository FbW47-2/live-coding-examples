# Check HTTP-Header

Ausgangsbasis bildet der Live-Code.

Füge in der Datei `router/messages.js` der Route `...post('/'...)` eine Validierung hinzu, die gewährleistet, dass der HTTP-Header `Content-Type` auf `application/json` gesetzt ist.

Lies dazu in der Dokumentation:
https://express-validator.github.io/docs/check-api.html

Welche "request objects" können durch "express-validator" überprüft werden?
Was macht `check()` im Vergleich zu den speziellen Prüfmethoden, wie bspw. `body()`, `params()`, usw.?
